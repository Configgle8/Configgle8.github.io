import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Set this in your .env file
      pass: process.env.EMAIL_PASS, // App Password from Google
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  });

  return NextResponse.json({ success: "Message sent!" }, { status: 200 });
}
