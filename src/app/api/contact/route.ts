import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  interest?: string;
  message: string;
  company?: string;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, interest, message, company } = body;

  // Honeypot check: silently reject if filled
  if (company) {
    return NextResponse.json({ success: true });
  }

  // Server-side validation
  const errors: string[] = [];

  if (!name || typeof name !== "string" || !name.trim()) {
    errors.push("Name is required.");
  }

  if (!email || typeof email !== "string" || !email.trim()) {
    errors.push("Email is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    errors.push("Message is required.");
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Email configuration is missing." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email.trim(),
      subject: `New confidential inquiry from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        ...(interest ? [`Area of Interest: ${interest}`] : []),
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
