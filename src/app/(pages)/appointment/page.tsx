"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  Check,
  ShieldCheck,
  Mail,
  Users,
  Sparkles,
  Phone,
  MapPin,
} from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { appointmentSlots, consultationTopics, company, appointmentFAQ } from "@/lib/site-data";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function AppointmentPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);
  const [selectedSlot, setSelectedSlot] = React.useState<string>("");
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const today = new Date();
  const minDate = new Date(today.getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedSlot) {
      toast({
        title: "Pick a time slot.",
        description: "Choose one of the available time slots below.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.time = selectedSlot;
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      toast({
        title: "Appointment requested.",
        description: `We'll confirm ${data.date} at ${selectedSlot} via ${data.email} within one business day.`,
      });
      form.reset();
      setSelectedSlot("");
    } catch {
      toast({
        title: "Something went wrong.",
        description: `Email us at ${company.email} while we resolve this.`,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageBanner
        title="Book a 30-minute call."
        label="[ Free consultation ]"
        crumbs={[{ label: "Appointment" }]}
      />

      {/* ============ 1. What to expect — narrative + steps ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                label="[ What to expect ]"
                title={
                  <>
                    A useful 30 minutes,{" "}
                    <span className="text-flame">every time.</span>
                  </>
                }
                lead="We've designed this call to be valuable even if you never become a client. A senior engineer — not a salesperson — reviews your situation and gives you a written recommendation."
              />
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                No deck. No script. Bring your hardest engineering question and
                we'll talk through it the way we would on day one of an
                engagement.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { label: "Duration", value: "30 min" },
                  { label: "Cost", value: "Free" },
                  { label: "Reply SLA", value: "24 hrs" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-line bg-shade p-3 text-center"
                  >
                    <p className="font-mono text-base font-bold text-ink">
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink/45">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="space-y-4">
              {[
                {
                  step: "01",
                  title: "You share what you're building",
                  desc: "A short paragraph on the problem, the team and any timing constraints.",
                  icon: Users,
                },
                {
                  step: "02",
                  title: "We ask the questions we'd ask on day one",
                  desc: "Architecture, scale, security, compliance — the trade-offs you're trying to balance.",
                  icon: ShieldCheck,
                },
                {
                  step: "03",
                  title: "We give you a written recommendation",
                  desc: "Within 24 hours, you'll get a short summary of what we'd do — whether or not we work together.",
                  icon: Mail,
                },
                {
                  step: "04",
                  title: "If we're a fit, we propose a small first milestone",
                  desc: "A 4–6 week scope that earns its keep — not a multi-month commitment.",
                  icon: Sparkles,
                },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.step} delay={Math.min(i * 0.05, 0.2)}>
                    <div className="group flex items-start gap-4 rounded-2xl border border-line bg-shade p-5 transition-colors duration-300 hover:border-flame/40">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-white text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-xs text-brand">
                            {s.step}
                          </span>
                          <h3 className="text-base font-bold text-ink">
                            {s.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-body">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 2. The form — premium booking UI ============ */}
      <section className="relative overflow-hidden bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-flame/15 blur-[120px]"
        />
        <div className="container-site relative">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Left — copy + contact */}
            <Reveal>
              <SectionHeading
                label="[ Pick a slot ]"
                title="What works for you?"
                lead="Choose a date and a 30-minute slot. We'll confirm by email within one business day — usually faster."
                tone="dark"
              />

              <div className="mt-8 space-y-3">
                <a
                  href={company.emailHref}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-colors duration-200 hover:border-flame/40 hover:bg-white/[0.07]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Mail className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                      Prefer email?
                    </p>
                    <p className="truncate text-sm font-semibold text-white">
                      {company.email}
                    </p>
                  </div>
                </a>
                <a
                  href={company.phoneHref}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-colors duration-200 hover:border-flame/40 hover:bg-white/[0.07]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Phone className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                      Prefer phone?
                    </p>
                    <p className="text-sm font-semibold text-white">{company.phone}</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Clock className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                      Hours
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Mon–Fri, 9:00–18:00 (ET)
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right — booking form */}
            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="rounded-2xl bg-white p-6 shadow-float md:p-8"
              >
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand text-white">
                    <Calendar className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-display-sm font-bold text-ink">
                      Request a callback
                    </h2>
                    <p className="text-xs text-body">
                      No obligation · 100% confidential
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" required placeholder="Jane Doe" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    placeholder="+1 (000) 000-0000"
                  />
                  <Field
                    label="Company"
                    name="company"
                    placeholder="Acme Inc."
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="topic" className="mb-1.5 block text-xs font-semibold text-ink/70">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    defaultValue=""
                    className="h-12 w-full rounded-xl border border-line bg-shade px-3.5 text-sm text-ink outline-none transition-colors duration-200 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    {consultationTopics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="date" className="mb-1.5 block text-xs font-semibold text-ink/70">
                    Preferred date <span className="text-brand">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    min={minDate}
                    className="h-12 w-full rounded-xl border border-line bg-shade px-3.5 text-sm text-ink outline-none transition-colors duration-200 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                  />
                </div>

                {/* Time slots */}
                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold text-ink/70">
                    Available time slots <span className="text-brand">*</span>
                  </p>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
                    {appointmentSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={cn(
                          "rounded-lg border px-2 py-2 font-mono text-xs transition-colors",
                          selectedSlot === slot
                            ? "border-brand bg-brand text-white"
                            : "border-line bg-shade text-ink hover:border-brand hover:text-brand"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="notes" className="mb-1.5 block text-xs font-semibold text-ink/70">
                    Anything we should read before the call?
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Links, current architecture, deadlines, team size — whatever's useful."
                    className="w-full resize-none rounded-xl border border-line bg-shade px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-body/60 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-lift mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark disabled:opacity-70"
                >
                  {submitting ? "Requesting..." : "Request appointment"}
                  {!submitting && <Calendar className="size-4" />}
                </button>

                <p className="mt-4 text-center text-[11px] text-body">
                  We'll confirm by email within one business day. No follow-up spam.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 3. FAQ ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ FAQ ]"
              title="Questions about the consultation."
              lead="If your question isn't here, ask us on the call — we'll answer it straight."
              align="center"
            />
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {appointmentFAQ.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={item.q} delay={Math.min(i * 0.04, 0.2)}>
                  <div
                    className={cn(
                      "card-lift rounded-2xl border bg-shade transition-colors",
                      isOpen ? "border-flame/40 bg-white shadow-lift" : "border-line"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="text-base font-bold text-ink">{item.q}</span>
                      <ArrowRight
                        aria-hidden
                        className={cn(
                          "size-4 shrink-0 text-brand transition-transform duration-300",
                          isOpen && "rotate-45"
                        )}
                      />
                    </button>
                    {isOpen && (
                      <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-body">
                        {item.a}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold text-ink/70">
        {label}{required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-line bg-shade px-3.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-body/60 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
