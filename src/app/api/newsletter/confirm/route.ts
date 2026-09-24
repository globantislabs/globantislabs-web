import { NextResponse } from "next/server";

/**
 * Newsletter confirmation endpoint (double-opt-in).
 * Called when the user clicks the link in the confirmation email.
 *
 * GET /api/newsletter/confirm?email=foo@bar.com
 * → updates the subscriber's status to "confirmed"
 * → redirects to a thank-you page
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.redirect(
      new URL("/?newsletter=invalid", process.env.NEXT_PUBLIC_SITE_URL ?? "https://globantislabs.com")
    );
  }

  try {
    const { db } = await import("@/lib/db");
    await db.newsletterSubscriber.update({
      where: { email: String(email).toLowerCase() },
      data: { status: "confirmed" },
    });
  } catch {
    // DB unavailable — still redirect to thank-you
  }

  return NextResponse.redirect(
    new URL("/?newsletter=confirmed", process.env.NEXT_PUBLIC_SITE_URL ?? "https://globantislabs.com")
  );
}
