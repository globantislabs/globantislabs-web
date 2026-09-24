"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, CalendarCheck, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/primitives";
import { company } from "@/lib/site-data";
import { useToast } from "@/hooks/use-toast";

export function Consultation() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

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
      if (!res.ok) throw new Error("Request failed");
      toast({
        title: "Thanks — we'll be in touch.",
        description: `A senior engineer will reply to ${data.email || "you"} within one business day.`,
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong.",
        description: `Email us directly at ${company.email} while we resolve this.`,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="consultation"
      className="relative scroll-mt-24 overflow-hidden py-section-md"
    >
      {/* Brand orange gradient backdrop (matches original CTA section) */}
      <div aria-hidden className="absolute inset-0 brand-gradient" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.45) 0, transparent 35%), radial-gradient(circle at 85% 80%, rgba(11,22,94,0.35) 0, transparent 40%)",
        }}
      />

      {/* Original decorative call-to-action.png (CTA graphic on the right) */}
      <Image
        src="/images/wp/2024-10/call-to-action.png"
        alt=""
        width={420}
        height={420}
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[420px] w-auto -translate-y-1/2 opacity-20 lg:block"
      />

      <div className="container-site relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left copy */}
          <Reveal className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              [ Free Consultation ]
            </span>
            <h2 className="mt-4 text-display-lg font-bold text-white">
              Book A Free IT Consultation
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/85">
              Be our family and grow your business along with us. Tell us about
              your project and our experts will get back to you within 24 hours.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <ContactItem
                icon={<Mail className="size-5" />}
                label="Email us"
                value={company.email}
                href={company.emailHref}
              />
              <ContactItem
                icon={<MapPin className="size-5" />}
                label="Canada office"
                value={company.canadaAddress}
              />
              <ContactItem
                icon={<MapPin className="size-5" />}
                label="India office"
                value={company.indiaAddress}
              />
            </div>
          </Reveal>

          {/* Right: form card — offset cream frame for editorial depth */}
          <Reveal delay={0.08}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-white/25"
              />
              <div className="relative rounded-3xl bg-white p-6 shadow-float sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand text-white">
                    <CalendarCheck className="size-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-display-sm font-bold text-ink">
                      Request a callback
                    </h3>
                    <p className="text-xs text-body">
                      No obligation · 100% confidential
                    </p>
                  </div>
                </div>

                <form
                  className="mt-6 space-y-3"
                  onSubmit={onSubmit}
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field name="name" label="Full name" placeholder="Jane Doe" required />
                    <Field
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field name="phone" label="Phone" placeholder="+1 (000) 000-0000" />
                    <Field name="company" label="Company" placeholder="Acme Inc." />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-ink/70">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      placeholder="Tell us briefly about your project..."
                      className="w-full resize-none rounded-xl border border-line bg-shade px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-body/60 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-lift inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark disabled:opacity-70"
                  >
                    {submitting ? "Sending..." : "Book Free Consultation"}
                    {!submitting && <ArrowRight className="size-4" aria-hidden />}
                  </button>
                  <p className="text-center text-[11px] text-body">
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3 rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur transition-colors duration-200 hover:bg-white/20">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wider text-white/70">
          {label}
        </p>
        <p className="truncate text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block">
        {inner}
      </a>
    );
  }
  return inner;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
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
