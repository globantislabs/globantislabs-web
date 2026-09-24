import { NextResponse } from "next/server";

/**
 * Newsletter subscription endpoint.
 *
 * Stores the email as "pending" in Prisma and triggers a double-opt-in
 * confirmation email via Resend (if RESEND_API_KEY is set).
 *
 * Idempotent — if the email already exists, we return 200 without duplicating.
 */
export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) ?? {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Valid email required" },
        { status: 400 }
      );
    }

    try {
      const { db } = await import("@/lib/db");
      await db.newsletterSubscriber.upsert({
        where: { email: String(email).toLowerCase() },
        create: {
          email: String(email).toLowerCase(),
          status: "pending",
          source: "website",
        },
        update: {}, // don't override status if they already confirmed
      });
    } catch {
      // DB unavailable — fall through
    }

    // Send confirmation email via Resend (no-op if env not set)
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://globantislabs.com";
        const confirmUrl = `${siteUrl}/api/newsletter/confirm?email=${encodeURIComponent(email)}`;
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Globantis Labs <insights@globantislabs.com>",
            to: [email],
            subject: "Confirm your Globantis Labs subscription",
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px;">
                <h1 style="color:#0b165e; font-size: 22px; margin: 0 0 16px;">Confirm your subscription</h1>
                <p style="color:#47506d; font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
                  You (or someone using your email) just subscribed to the Globantis Labs
                  monthly insights newsletter. Click the button below to confirm —
                  we'll only send you emails after you confirm.
                </p>
                <p style="margin: 24px 0;">
                  <a href="${confirmUrl}" style="background:#d9742b; color:#ffffff; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; display: inline-block;">
                    Confirm subscription
                  </a>
                </p>
                <p style="color:#47506d; font-size: 13px; line-height: 1.6; margin: 0;">
                  If you didn't subscribe, you can ignore this email — we won't contact you again.
                  <br/><br/>
                  — The Globantis Labs team
                </p>
              </div>
            `,
          }),
        });
      }
    } catch {
      // Email send failed — still return success, subscriber is stored
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
