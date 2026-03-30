import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, website, message } = body;

    // 📩 MAIL CONFIG
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "tech@znrsolutions.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    // 🎨 COMMON STYLES
    const container = `
      font-family: Arial, sans-serif;
      background:#f4f6f9;
      padding:20px;
    `;

    const card = `
      max-width:600px;
      margin:auto;
      background:#ffffff;
      border-radius:12px;
      overflow:hidden;
      box-shadow:0 8px 30px rgba(0,0,0,0.08);
    `;

    const header = `
      background:#1710D8;
      color:#ffffff;
      padding:25px;
      text-align:center;
    `;

    const bodyStyle = `
      padding:30px;
      color:#333;
    `;

    const box = `
      background:#f8fafc;
      padding:15px;
      border-radius:8px;
      border:1px solid #e5e7eb;
      margin-top:15px;
    `;

    // ✅ 1. EMAIL TO COMPANY (LEAD NOTIFICATION)
    await transporter.sendMail({
      from: `"ZNR Website" <tech@znrsolutions.com>`,
      to: "tech@znrsolutions.com",
      replyTo: email,
      subject: `🚀 New Contact Form - ${name}`,
      html: `
        <div style="${container}">
          <div style="${card}">
            
            <div style="${header}">
              <h2 style="margin:0;">New Lead Received</h2>
            </div>

            <div style="${bodyStyle}">
              <p>You have received a new contact request:</p>

              <div style="${box}">
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone || "N/A"}</p>
                <p><b>Website:</b> ${website || "N/A"}</p>
                <p><b>Message:</b><br/>${message}</p>
              </div>
            </div>

          </div>
        </div>
      `,
    });

    // ✅ 2. AUTO-REPLY TO USER (PREMIUM DESIGN)
    await transporter.sendMail({
      from: `"ZNR Solutions" <tech@znrsolutions.com>`,
      to: email,
      subject: "We received your message ✅",
      html: `
        <div style="${container}">
          <div style="${card}">

            <!-- HEADER -->
            <div style="${header}">
              <img 
    src="https://znrsolutions.com/logo.png"
    alt="ZNR Solutions"
    style="width:120px; margin-bottom:10px;"
  />
              <h1 style="margin:0;">ZNR Solutions</h1>
              <p style="margin:5px 0 0; font-size:13px;">Fintech & Retail Redefined</p>
            </div>

            <!-- BODY -->
            <div style="${bodyStyle}">

              <h2 style="margin-top:0;">Thank you, ${name}! 👋</h2>

              <p style="font-size:14px; line-height:1.6;">
                We have received your message and our team will get back to you shortly.
              </p>

              <div style="${box}">
                <p style="margin:0;"><b>Your message:</b></p>
                <p style="margin-top:10px;">${message}</p>
              </div>

              <!-- CTA BUTTON -->
              <div style="text-align:center; margin-top:25px;">
                <a href="https://znrsolutions.com"
                   style="background:#1710D8;color:#fff;padding:12px 20px;border-radius:6px;text-decoration:none;font-size:14px;">
                  Visit Our Website
                </a>
              </div>

              <p style="margin-top:30px;">
                Best regards,<br/>
                <b>ZNR Solutions Team</b>
              </p>

            </div>

            <!-- FOOTER -->
            <div style="background:#f9fafb;padding:15px;text-align:center;font-size:12px;color:#777;">
              © ${new Date().getFullYear()} ZNR Solutions. All rights reserved.
            </div>

          </div>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}