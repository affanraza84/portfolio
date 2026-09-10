import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Inquiry } from "@/models/Inquiry";
import { sendInquiryNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, projectType, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide name, email, and message." },
        { status: 400 }
      );
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // IP Address and User Agent metadata
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : req.headers.get("x-real-ip") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    let dbSaved = false;
    let savedInquiryId = null;

    // Attempt MongoDB save if configured
    if (process.env.MONGODB_URI) {
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
      } catch (dbError) {
        console.error("MongoDB Save Error:", dbError);
        // If DB fails, we still try to send email notification
      }
    } else {
      console.warn(
        "Notice: MONGODB_URI is not configured in .env.local. Skipping database insert."
      );
    }

    // Attempt Email Notification
    let emailSent = false;
    try {
      const emailResult = await sendInquiryNotification({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        projectType: projectType || "Full-Stack Web App",
        message: message.trim(),
      });
      emailSent = emailResult.success;
    } catch (mailError) {
      console.error("Email Dispatch Error:", mailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received! I will get back to you shortly.",
        dbSaved,
        emailSent,
        inquiryId: savedInquiryId,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Contact API Route Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
