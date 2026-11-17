import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, message) are required." },
        { status: 400 }
      );
    }

    // Gmail SMTP credentials from environment variables
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASS;

    if (!user || !pass) {
      console.error("Missing GMAIL_USER or GMAIL_PASS environment variables.");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact directly at kmahad902@gmail.com." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const receivedTime = new Date().toLocaleString("en-PK", {
      timeZone: "Asia/Karachi",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // 100% Email-Client Compatible, Inline-Styled, Mobile-Responsive HTML Template
    const htmlEmail = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>New Portfolio Transmission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  
  <!-- Outer Full Width Background Table -->
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 20px 10px 40px 10px;">
    <tr>
      <td align="center">
        
        <!-- Main Card Container (Responsive 600px Max Width) -->
        <table class="email-container" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0b1120; background: linear-gradient(135deg, #090d16 0%, #0f172a 100%); padding: 30px 24px 26px 24px; border-bottom: 3px solid #06b6d4; text-align: left;">
              <div style="display: inline-block; background-color: rgba(6, 182, 212, 0.15); border: 1px solid rgba(6, 182, 212, 0.4); border-radius: 9999px; padding: 3px 12px; color: #38bdf8; font-size: 11px; font-weight: 700; font-family: monospace; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">
                ⚡ New Portfolio Transmission
              </div>
              <h1 style="margin: 0 0 6px 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.3px; line-height: 1.3;">
                Incoming Lead from ${name}
              </h1>
              <p style="margin: 0; color: #94a3b8; font-size: 13px; line-height: 1.4;">
                A new inquiry has been submitted via your portfolio contact form.
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 24px 20px 28px 20px;">
              
              <!-- Contact Details Card Table (Fully Responsive) -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 22px;">
                <tr>
                  <td style="padding: 16px;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                      
                      <tr>
                        <td style="padding: 6px 0; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; width: 110px; vertical-align: top;">
                          Sender Name
                        </td>
                        <td style="padding: 6px 0; font-size: 13.5px; font-weight: 700; color: #0f172a; vertical-align: top; word-break: break-word;">
                          ${name}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 6px 0; border-top: 1px solid #edf2f7; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                          Sender Email
                        </td>
                        <td style="padding: 6px 0; border-top: 1px solid #edf2f7; font-size: 13.5px; font-weight: 600; color: #2563eb; vertical-align: top; word-break: break-all;">
                          <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 6px 0; border-top: 1px solid #edf2f7; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                          Project Scope
                        </td>
                        <td style="padding: 6px 0; border-top: 1px solid #edf2f7; font-size: 13.5px; font-weight: 600; color: #0f172a; vertical-align: top; word-break: break-word;">
                          ${subject}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 6px 0; border-top: 1px solid #edf2f7; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                          Timestamp
                        </td>
                        <td style="padding: 6px 0; border-top: 1px solid #edf2f7; font-size: 12.5px; font-weight: 500; color: #475569; vertical-align: top;">
                          ${receivedTime} (PST)
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Title -->
              <div style="font-size: 12px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 8px;">
                Client Message Payload:
              </div>

              <!-- Message Details Box -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="background-color: #f8fafc; border-left: 4px solid #2563eb; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; border-radius: 0 8px 8px 0; padding: 16px 18px; font-size: 14px; line-height: 1.6; color: #1e293b; word-break: break-word; white-space: pre-wrap;">${message}</td>
                </tr>
              </table>

              <!-- Quick Reply Action Button (Touch & Mobile Friendly) -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-top: 8px; padding-bottom: 6px;">
                    <a href="mailto:${email}?subject=${encodeURIComponent("Re: " + subject)}" style="display: inline-block; width: auto; min-width: 200px; max-width: 90%; background-color: #2563eb; background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%); color: #ffffff !important; text-decoration: none; padding: 13px 28px; border-radius: 8px; font-weight: 700; font-size: 13.5px; text-align: center; box-shadow: 0 4px 10px rgba(37,99,235,0.25);">
                      Reply Directly to ${name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 20px; text-align: center; font-size: 11px; color: #94a3b8; line-height: 1.5;">
              Mahad Khan Portfolio Engine &bull; Full Stack Developer & AI Architect<br />
              Secure SMTP Transmission via Node.js
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
    `;

    // Mail options
    const mailOptions = {
      from: `"Portfolio Contact System" <${user}>`,
      to: user, // Sends directly to Mahad Khan's Gmail
      replyTo: email, // Direct reply points to sender's email
      subject: `⚡ Portfolio Lead: ${subject} (${name})`,
      text: `New message from ${name} (${email}):\n\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: htmlEmail,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Transmission successfully delivered." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Nodemailer transmission error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email transmission." },
      { status: 500 }
    );
  }
}
