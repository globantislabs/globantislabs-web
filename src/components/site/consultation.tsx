"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";

export function Consultation() {
  return (
    <section
      id="consultation"
      className="relative scroll-mt-24 overflow-hidden py-20 lg:py-24"
    >
      {/* Brand orange gradient backdrop (matches original CTA section) */}
      <div className="absolute inset-0 brand-gradient" aria-hidden />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.45) 0, transparent 35%), radial-gradient(circle at 85% 80%, rgba(11,22,94,0.35) 0, transparent 40%)",
        }}
        aria-hidden
      />

      {/* Original decorative call-to-action.png (CTA graphic on the right) */}
      <Image
        src="/images/wp/2024-10/call-to-action.png"
        alt=""
        width={420}
        height={420}
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 opacity-30 lg:block"
      />

      <div className="relative mx-auto max-w-[1310px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              [ Free Consultation ]
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px] lg:leading-[50px]">
              Book A Free IT Consultation
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/85">
              Be our family and grow your business along with us. Tell us about
              your project and our experts will get back to you within 24 hours.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ContactItem
                icon={<Mail className="size-5" />}
                label="Email us"
                value={company.email}
                href={company.emailHref}
              />
              <ContactItem
                icon={<Phone className="size-5" />}
                label="Call us"
                value={company.phone}
                href={company.phoneHref}
              />
              <ContactItem
                icon={<MapPin className="size-5" />}
                label="USA office"
                value={company.usaAddress}
              />
              <ContactItem
                icon={<MapPin className="size-5" />}
                label="Canada office"
                value={company.canadaAddress}
              />
            </div>
          </motion.div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white p-6 shadow-2xl shadow-ink/30 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand text-white">
                <CalendarCheck className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink">
                  Request a callback
                </h3>
                <p className="text-xs text-body">
                  No obligation · 100% confidential
                </p>
              </div>
            </div>

            <form
              className="mt-6 space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Full name" placeholder="Jane Doe" />
                <Field
                  label="Email"
                  type="email"
                  placeholder="[email protected]"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Phone" placeholder="+1 (000) 000-0000" />
                <Field label="Company" placeholder="Acme Inc." />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  How can we help?
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us briefly about your project..."
                  className="w-full resize-none rounded-xl border border-line bg-shade px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-body/60 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <Button
                type="submit"
                className="h-12 w-full rounded-xl bg-brand text-sm font-medium text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark"
              >
                Book Free Consultation
                <ArrowRight className="size-4" />
              </Button>
              <p className="text-center text-[11px] text-body">
                By submitting, you agree to our privacy policy.
              </p>
            </form>
          </motion.div>
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
    <div className="flex items-start gap-3 rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur transition-colors hover:bg-white/20">
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
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-ink/70">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-line bg-shade px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-body/60 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
