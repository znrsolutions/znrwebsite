import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, website, message } = body;

    // ✅ SMTP CONFIG (CHANGE THIS BASED ON YOUR PROVIDER)
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // 🔥 change if different provider
      port: 465,
      secure: true,
      auth: {
        user: "tech@znrsolutions.com",
        pass: process.env.EMAIL_PASS, // 🔐 use env variable
      },
    });

    // ✅ VERIFY CONNECTION (IMPORTANT)
    await transporter.verify();

    // ✅ SEND MAIL
    await transporter.sendMail({
      from: `"ZNR Website" <tech@znrsolutions.com>`,
      to: "tech@znrsolutions.com",
      replyTo: email, // 👈 user email for reply
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

    return Response.json({ success: true });

  } catch (error) {
  console.error("EMAIL ERROR:", error); // 👈 ADD THIS

  return Response.json(
    { error: "Failed to send email" },
    { status: 500 }
  );
}
}