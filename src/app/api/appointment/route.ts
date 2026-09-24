import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, date, time, topic, notes } = body ?? {};

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      const { db } = await import("@/lib/db");
      await db.appointment.create({
        data: {
          name: String(name).slice(0, 120),
          email: String(email).slice(0, 160),
          company: company ? String(company).slice(0, 160) : null,
          date: String(date).slice(0, 20),
          time: String(time).slice(0, 10),
          topic: topic ? String(topic).slice(0, 120) : null,
          notes: notes ? String(notes).slice(0, 2000) : null,
          source: "appointment-form",
        },
      });
    } catch {
      // DB unavailable in dev — fine
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
