import nodemailer from "nodemailer";

interface SendInquiryEmailParams {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export async function sendInquiryNotification({
  name,
  email,
  projectType,
  message,
}: SendInquiryEmailParams) {
  const recipient = process.env.NOTIFICATION_EMAIL || "affanraza8081@gmail.com";
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);

  if (!emailUser || !emailPass) {
    console.warn(
      "[Notification Notice]: EMAIL_USER or EMAIL_PASS environment variables are not set. Skipping live email dispatch (inquiry is securely stored in MongoDB)."
    );
    return { success: false, reason: "Missing SMTP credentials" };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"Portfolio Inquiry" <${emailUser}>`,
    to: recipient,
    replyTo: email,
    subject: `🚀 New Project Inquiry: ${name} (${projectType})`,
    text: `
You have received a new inquiry from your portfolio website!

Name: ${name}
Email: ${email}
Project / Role: ${projectType}
Date: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} (IST)

Message:
----------------------------------------
${message}
----------------------------------------
    `.trim(),
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #09090b; color: #f8fafc; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; overflow: hidden;">
        <div style="background-color: #111115; padding: 24px 32px; border-bottom: 1px solid rgba(255,255,255,0.08);">
          <div style="display: inline-block; padding: 4px 12px; background-color: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 999px; color: #fbbf24; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
            New Client Inquiry
          </div>
          <h2 style="margin: 12px 0 4px 0; color: #ffffff; font-size: 20px; font-weight: 700;">
            ${name} reached out via Portfolio
          </h2>
          <p style="margin: 0; color: #94a3b8; font-size: 13px;">
            Project Scope: <strong style="color: #f8fafc;">${projectType}</strong>
          </p>
        </div>
        
        <div style="padding: 28px 32px;">
          <div style="margin-bottom: 24px;">
            <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #94a3b8; margin-bottom: 6px;">
              Sender Contact
            </div>
            <div style="font-size: 14px; color: #f8fafc; font-weight: 600;">
              ${name} &bull; <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
            </div>
          </div>

          <div style="margin-bottom: 24px;">
            <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #94a3b8; margin-bottom: 8px;">
              Message Content
            </div>
            <div style="background-color: #141419; border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">
${message}
            </div>
          </div>

          <div style="padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
            <a href="mailto:${email}?subject=Re: Project Inquiry (${projectType})" style="display: inline-block; background-color: #ffffff; color: #09090b; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 13px; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px;">
              Reply Directly to ${name} &rarr;
            </a>
          </div>
        </div>

        <div style="background-color: #070709; padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; font-size: 11px; color: #64748b; font-family: monospace;">
          Saved automatically to MongoDB &bull; Received at ${new Date().toISOString()}
        </div>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}
