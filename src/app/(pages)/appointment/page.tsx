"use client";

import * as React from "react";
import { ArrowRight, Check, Calendar } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { PageBanner } from "@/components/site/page-banner";
import { Container, Section, SectionHeading } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { appointmentSlots, consultationTopics, company } from "@/lib/site-data";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function AppointmentPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);
  const [selectedSlot, setSelectedSlot] = React.useState<string>("");

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
    <PageShell>
      <PageBanner
        eyebrow="Free consultation"
        title="Book a 30-minute call."
        description="A senior engineer — not a salesperson — will review your situation, share recommendations and answer your technical questions. No deck, no script."
        crumbs={[{ label: "Home", href: "/" }, { label: "Appointment" }]}
      />

      <Section className="border-b border-hairline">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left — what to expect */}
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="What to expect"
                  title="A useful 30 minutes, every time."
                  description="We've designed this call to be valuable even if you never become a client. Here's how it runs."
                />
              </Reveal>

              <ul className="mt-8 space-y-3">
                {[
                  "You share what you're building and what's blocking you",
                  "We ask the questions we'd ask on day one of an engagement",
                  "We give you a written recommendation within 24 hours",
                  "If we're a fit, we propose a small first milestone",
                ].map((t, i) => (
                  <Reveal key={t} delay={i * 0.05}>
                    <li className="flex items-start gap-3 rounded-md border border-hairline bg-paper p-4">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand font-mono text-[10px] text-brand-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {t}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.2}>
                <div className="mt-8 rounded-md border border-hairline bg-paper p-4">
                  <p className="micro-label mb-2">Time zones</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Our team operates across US Eastern, Eastern Time and India
                    Standard Time. Slots below are shown in your local time —
                    we'll confirm the equivalent in your zone.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <form
                  onSubmit={onSubmit}
                  className="rounded-md border border-hairline bg-paper p-6 md:p-8"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" required placeholder="Your name" />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                    />
                    <Field
                      label="Company"
                      name="company"
                      placeholder="Company name"
                    />
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="topic" className="text-xs font-medium text-foreground">
                        Topic
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        defaultValue=""
                        className="h-11 rounded-md border border-hairline bg-background px-3 text-sm text-foreground focus:border-brand focus:outline-none"
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
                  </div>

                  <div className="mt-5 flex flex-col gap-1.5">
                    <label htmlFor="date" className="text-xs font-medium text-foreground">
                      Preferred date <span className="text-brand">*</span>
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      min={minDate}
                      className="h-11 rounded-md border border-hairline bg-background px-3 text-sm text-foreground focus:border-brand focus:outline-none"
                    />
                  </div>

                  {/* Time slots */}
                  <div className="mt-5">
                    <p className="text-xs font-medium text-foreground">
                      Available time slots <span className="text-brand">*</span>
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
                      {appointmentSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={cn(
                            "rounded-md border px-2 py-2 font-mono text-xs transition-colors",
                            selectedSlot === slot
                              ? "border-brand bg-brand text-brand-foreground"
                              : "border-hairline bg-background text-foreground hover:border-brand"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-1.5">
                    <label htmlFor="notes" className="text-xs font-medium text-foreground">
                      Anything we should read before the call?
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      placeholder="Links, current architecture, deadlines, team size — whatever's useful."
                      className="w-full rounded-md border border-hairline bg-background p-3 text-sm text-foreground focus:border-brand focus:outline-none"
                    />
                  </div>

                  <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      We'll confirm by email within one business day.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-brand disabled:opacity-60"
                    >
                      {submitting ? "Requesting..." : "Request appointment"}
                      {!submitting && <Calendar className="h-4 w-4" />}
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
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
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-md border border-hairline bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none"
      />
    </div>
  );
}
