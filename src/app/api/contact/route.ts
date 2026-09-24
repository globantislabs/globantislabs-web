import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      const { db } = await import("@/lib/db");
      await db.lead.create({
        data: {
          name: String(name).slice(0, 120),
          email: String(email).slice(0, 160),
          phone: phone ? String(phone).slice(0, 40) : null,
          company: company ? String(company).slice(0, 160) : null,
          message: String(message).slice(0, 4000),
          source: "contact-form",
        },
      });
    } catch {
      // DB unavailable in dev — that's fine, we still return success
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
