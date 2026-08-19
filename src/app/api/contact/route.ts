import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, scope, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY environment variable is not set.");
      return NextResponse.json(
        { error: "Contact gateway is not configured with an API key." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey || "re_dummy_key_for_build");
    const toEmail = process.env.CONTACT_TO_EMAIL || "ahlulfirdaus.official@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    // Send notification to Ahlul
    await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio Inquiry] New ${scope} project from ${name}`,
      html: `
        <div style="font-family: monospace; background: #0A0A0A; color: #F7F4EF; padding: 32px; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #C5A880; margin-bottom: 4px;">New Project Inquiry</h2>
          <p style="color: #666; font-size: 12px; margin-top: 0;">Received from ahlulfirdaus.com portfolio</p>
          <hr style="border-color: #1C1C1E; margin: 24px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; width: 120px;">Name</td><td style="color: #F7F4EF; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="color: #C5A880;"><a href="mailto:${email}" style="color: #C5A880;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Scope</td><td style="color: #F7F4EF;">${scope}</td></tr>
          </table>
          <hr style="border-color: #1C1C1E; margin: 24px 0;" />
          <h3 style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">Project Brief</h3>
          <p style="color: #DFD9CE; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          <hr style="border-color: #1C1C1E; margin: 24px 0;" />
          <p style="color: #555; font-size: 11px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    // Send auto-reply to the client
    await resend.emails.send({
      from: `Ahlul Firdaus <${fromEmail}>`,
      to: email,
      subject: `Your inquiry has been received — Ahlul Firdaus Systems`,
      html: `
        <div style="font-family: monospace; background: #0A0A0A; color: #F7F4EF; padding: 32px; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #C5A880; margin-bottom: 4px;">Inquiry Received, ${name}.</h2>
          <p style="color: #888; font-size: 13px; line-height: 1.7;">
            Thank you for reaching out. I've received your project inquiry for <strong style="color: #F7F4EF;">${scope}</strong> and will review your specifications.
          </p>
          <p style="color: #888; font-size: 13px; line-height: 1.7;">
            You can expect a direct response within <strong style="color: #C5A880;">24 operational hours</strong> with a tailored proposal or follow-up questions.
          </p>
          <hr style="border-color: #1C1C1E; margin: 24px 0;" />
          <p style="color: #555; font-size: 11px; line-height: 1.6;">
            — Ahlul Firdaus<br/>
            Digital Systems Architect &amp; Founder<br/>
            Batam (GMT+7) · <a href="https://ahlulfirdaus.com" style="color: #C5A880;">ahlulfirdaus.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
