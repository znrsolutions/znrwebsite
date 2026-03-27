import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, website, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@mr-events.net",
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    // ✅ 1. SEND TO COMPANY
    await transporter.sendMail({
      from: `"ZNR Website" <info@mr-events.net>`,
      to: "tech@znrsolutions.com",
      replyTo: email,
      subject: `New Contact Form - ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Website:</b> ${website || "N/A"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // ✅ 2. AUTO-REPLY TO USER
    await transporter.sendMail({
      from: `"ZNR Solutions" <info@mr-events.net>`,
      to: email, // 👈 send to user
      subject: "We received your message ✅",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We have received your message and our team will get back to you shortly.</p>

        <br/>

        <h3>Your submission:</h3>
        <p><b>Message:</b> ${message}</p>

        <br/>

        <p>Best regards,<br/>ZNR Solutions Team</p>
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