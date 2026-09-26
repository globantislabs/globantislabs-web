"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Clock,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  Sparkles,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import {
  company,
  contactResponseSLA,
  contactFAQ,
} from "@/lib/site-data";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
      toast({
        title: "Message sent",
        description: "Thanks for reaching out. We'll reply within one business day.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: `Please email us directly at ${company.email}.`,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        title="Tell us what you're building."
        label="Contact"
        image="/images/wp/2025-02/contact-zman.png"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* ============ 2. Direct channels + form ============ */}
      <section className="relative overflow-hidden bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-flame/15 blur-[120px]"
        />
        <div className="container-site relative">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Left — channels + offices */}
            <Reveal>
              <SectionHeading
                label="[ Direct channels ]"
                title="Reach us where it works."
                lead="A senior engineer reads every inbound message. Use whatever channel works for you — every one routes to the same team."
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
                      Email
                    </p>
                    <p className="truncate text-sm font-semibold text-white">
                      {company.email}
                    </p>
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

              {/* Offices */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Our offices
                </p>
                <ul className="mt-3 space-y-3">
                  {company.offices.map((o) => (
                    <li
                      key={o.city}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                    >
                      <MapPin className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-white">
                          {o.city} · {o.country}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-white/65">
                          {o.address}
                        </p>
                        <p className="mt-1 text-[10px] text-white/40">{o.tz}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={0.1}>
              {done ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-4 rounded-2xl bg-white p-10 text-center shadow-float">
                  <span className="flex size-16 items-center justify-center rounded-full border border-brand/20 bg-cream">
                    <CheckCircle2 className="size-8 text-brand" aria-hidden />
                  </span>
                  <h3 className="text-display-sm font-bold text-ink">
                    Thank you!
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-body">
                    Your message is on its way to our engineering team. A senior
                    engineer will reply within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setDone(false)}
                    className="btn-lift mt-3 inline-flex h-11 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink shadow-soft hover:border-brand hover:text-brand"
                  >
                    Send another
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="rounded-2xl bg-white p-6 shadow-float md:p-8"
                >
                  <div className="flex items-center gap-3 border-b border-line pb-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand text-white">
                      <Send className="size-5" />
                    </span>
                    <div>
                      <h2 className="text-display-sm font-bold text-ink">
                        Send us a message
                      </h2>
                      <p className="text-xs text-body">
                        Senior engineer replies within 1 business day
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
                    <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-ink/70">
                      How can we help? <span className="text-brand">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us briefly about your project, the team you have, and any timing or compliance requirements."
                      className="w-full resize-none rounded-xl border border-line bg-shade px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-body/60 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-lift mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="size-4" />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-[11px] text-body">
                    By submitting, you agree to be contacted about your enquiry.
                    No follow-up spam.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 3. Trust strip — stats ============ */}
      <section className="bg-shade py-section-sm">
        <div className="container-site">
          <Reveal>
            <div className="grid gap-4 rounded-2xl border border-line bg-white p-6 sm:grid-cols-3 md:p-8">
              {[
                {
                  icon: Globe2,
                  label: "12+ countries served",
                  desc: "Active engagements on three continents.",
                },
                {
                  icon: ShieldCheck,
                  label: "SOC 2 Type II compliant",
                  desc: "Audited annually across all delivery centres.",
                },
                {
                  icon: Sparkles,
                  label: "99.99% platform uptime",
                  desc: "Measured on every client engagement.",
                },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                    <s.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{s.label}</p>
                    <p className="mt-0.5 text-xs text-body">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>    </>
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
