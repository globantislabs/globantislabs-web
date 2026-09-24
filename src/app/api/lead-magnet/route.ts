import { NextResponse } from "next/server";

/**
 * Lead magnet (eBook) download endpoint.
 *
 * POST /api/lead-magnet
 * { email, slug }
 *
 * - Stores the download in Prisma (LeadMagnetDownload)
 * - Sends the eBook PDF via Resend (if RESEND_API_KEY is set)
 * - Returns { ok: true }
 */
export async function POST(req: Request) {
  try {
    const { email, slug } = (await req.json()) ?? {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Valid email required" },
        { status: 400 }
      );
    }
    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { ok: false, error: "slug required" },
        { status: 400 }
      );
    }

    try {
      const { db } = await import("@/lib/db");
      await db.leadMagnetDownload.create({
        data: {
          email: String(email).toLowerCase(),
          slug: String(slug).slice(0, 80),
          source: "lead-magnet",
        },
      });
    } catch {
      // DB unavailable — still send email if possible
    }

    // Send eBook PDF via Resend
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://globantislabs.com";
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Globantis Labs <insights@globantislabs.com>",
            to: [email],
            subject: "Your eBook: The 2026 State of AI in Enterprise",
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px;">
                <h1 style="color:#0b165e; font-size: 22px; margin: 0 0 16px;">Here's your eBook</h1>
                <p style="color:#47506d; font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
                  Thanks for requesting <strong>The 2026 State of AI in Enterprise</strong>.
                  Click the link below to download the PDF.
                </p>
                <p style="margin: 24px 0;">
                  <a href="${siteUrl}/downloads/state-of-ai-2026.pdf" style="background:#d9742b; color:#ffffff; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; display: inline-block;">
                    Download the PDF
                  </a>
                </p>
                <p style="color:#47506d; font-size: 13px; line-height: 1.6; margin: 0;">
                  We'll also send you our monthly insights newsletter. You can unsubscribe anytime.
                  <br/><br/>
                  — The Globantis Labs team
                </p>
              </div>
            `,
          }),
        });
      }
    } catch {
      // Email send failed — still return success
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
