import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Inquiry } from "@/models/Inquiry";
import { sendInquiryNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, projectType, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // IP Address and User Agent
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : req.headers.get("x-real-ip") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    let dbSaved = false;
    let dbErrorMsg: string | null = null;
    let savedInquiryId = null;

    // 1. Attempt MongoDB Save
    try {
      await connectToDatabase();
      const newInquiry = await Inquiry.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        projectType: projectType || "Full-Stack Web App",
        message: message.trim(),
        ipAddress,
        userAgent,
      });
      dbSaved = true;
      savedInquiryId = newInquiry._id;
      console.log(`[MongoDB Success]: Saved inquiry from ${email} to Atlas (ID: ${newInquiry._id})`);
    } catch (dbErr: unknown) {
      dbErrorMsg = dbErr instanceof Error ? dbErr.message : "MongoDB connection/write error";
      console.error("[MongoDB Error]:", dbErrorMsg);
    }

    // 2. Attempt Email Notification
    let emailSent = false;
    let emailErrorMsg: string | null = null;

    try {
      const emailResult = await sendInquiryNotification({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        projectType: projectType || "Full-Stack Web App",
        message: message.trim(),
      });
      emailSent = emailResult.success;
      if (!emailResult.success) {
        emailErrorMsg = emailResult.reason || "Email not dispatched";
      } else {
        console.log(`[Email Success]: Notification sent to ${process.env.NOTIFICATION_EMAIL || "affanraza8081@gmail.com"}`);
      }
    } catch (mailErr: unknown) {
      emailErrorMsg = mailErr instanceof Error ? mailErr.message : "Email transport error";
      console.error("[Email Dispatch Error]:", emailErrorMsg);
    }

    // If both failed, return a 500 error
    if (!dbSaved && !emailSent) {
      return NextResponse.json(
        {
          success: false,
          error: dbErrorMsg || emailErrorMsg || "Failed to process inquiry.",
          dbSaved,
          dbError: dbErrorMsg,
          emailSent,
          emailError: emailErrorMsg,
        },
        { status: 500 }
      );
    }

    // Return successful response
    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully!",
        dbSaved,
        dbError: dbErrorMsg,
        emailSent,
        emailError: emailErrorMsg,
        inquiryId: savedInquiryId,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
