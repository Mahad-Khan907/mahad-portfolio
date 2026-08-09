import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Force the Node.js runtime so nodemailer (SMTP) works in a route handler.
export const runtime = "nodejs";

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const subject = formData.get("subject")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, message: "All fields are required." },
      { status: 400 }
    );
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.CONTACT_EMAIL;

  if (!user || !pass || !to) {
    console.error("Missing EMAIL_USER / EMAIL_PASS / CONTACT_EMAIL in .env.local");
    return NextResponse.json(
      { ok: false, message: "Server email is not configured." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  try {
    await transporter.sendMail({
      from: user,
      to,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 4px;">New message from ${name}</h2>
          <p style="margin: 0 0 16px; color: #666;">Sent from the portfolio contact form</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 480px;">
            <tr>
              <td style="padding: 6px 8px; background: #f4f4f4; font-weight: bold; width: 90px;">Name</td>
              <td style="padding: 6px 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 8px; background: #f4f4f4; font-weight: bold;">Email</td>
              <td style="padding: 6px 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 8px; background: #f4f4f4; font-weight: bold;">Subject</td>
              <td style="padding: 6px 8px;">${subject}</td>
            </tr>
          </table>
          <p style="margin-top: 16px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to send the message. Please try again." },
      { status: 500 }
    );
  }
}
