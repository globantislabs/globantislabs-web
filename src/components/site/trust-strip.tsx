"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Globe2 } from "lucide-react";
import { SectionHeading } from "./primitives";
import { Reveal } from "./reveal";
import { TestimonialsCarousel } from "./testimonials-carousel";
import { ClientLogosStrip } from "./client-logos-strip";

/**
 * TrustStrip — placed right after the Hero on the home page.
 *
 * Includes:
 * - Trust badges strip (12+ countries, SOC 2, 99.99% uptime)
 * - Client logos grid
 * - Testimonials carousel
 *
 * Goal: surface trust signals as soon as the user lands.
 */
export function TrustStrip() {
  return (
    <section className="bg-white py-section-md">
      <div className="container-site">
        {/* Trust badges */}
        <Reveal>
          <div className="grid gap-3 rounded-2xl border border-line bg-shade p-4 sm:grid-cols-3 md:p-6">
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
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                  <b.icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink">{b.label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-body">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Client logos */}
        <Reveal delay={0.07} className="mt-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-ink/45">
              Trusted by teams across 12+ countries
            </span>
          </div>
          <div className="mt-4">
            <ClientLogosStrip />
          </div>
        </Reveal>

        {/* Testimonials carousel */}
        <Reveal delay={0.12} className="mt-16">
          <SectionHeading
            label="[ What clients say ]"
            title="Real work, real outcomes."
            lead="Quotes from real engagements — most clients remain confidential because their industries are sensitive (fintech, healthcare)."
            align="center"
          />
          <div className="mt-10">
            <TestimonialsCarousel />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
