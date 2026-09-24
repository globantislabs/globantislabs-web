"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/site/primitives";
import { whyFeatures } from "@/lib/site-data";

const industries = [
  "Financial Services",
  "Healthcare",
  "Education",
  "Automation",
  "Logistics",
  "Cybersecurity",
  "E-commerce & Retail",
  "Automotive",
];

export function WhyGlobantis() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-ink py-section-md text-white"
    >
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
      <div
        aria-hidden
        className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-flame/20 blur-[130px]"
      />
      <div className="container-site relative">
        {/* Heading — orange sub-text + ink bg with brand-light highlighted span */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="section-label !text-brand-light">
                [ Why Globantis ]
              </span>
              <h2 className="text-display-lg font-bold text-white">
                We Make The Most Creative{" "}
                <span className="text-brand-light">Digital Solutions</span>
              </h2>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/65">
                We are giving IT Solutions Services over the world — combining
                global expertise, advanced engineering, and a customer-centric
                approach.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur lg:items-end">
              <Quote className="size-8 text-brand-light" />
              <p className="text-sm leading-relaxed text-white/70 lg:text-right">
                &ldquo;Join our growing list of happy customers today —
                organizations across 12+ countries trust Globantis Labs to power
                their digital transformation.&rdquo;
              </p>
              <Link
                href="#consultation"
                className="btn-lift mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark lg:w-auto"
              >
                Let&apos;s Talk
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Feature cards — brand icon tiles on glass cards, signature flame top-bar hover */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal
                key={f.title}
                delay={Math.min(i * 0.07, 0.35)}
                className="h-full"
              >
                <div className="card-lift group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur hover:border-flame/40 hover:bg-white/[0.07]">
                  {/* top accent bar — slides in on hover (signature) */}
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100" />

                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30 transition-transform duration-300 ease-out-quart group-hover:scale-105">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-display-sm font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {f.desc}
                  </p>
                  {/* Oversized watermark numeral — editorial moment */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-8 -right-4 text-[7rem] font-bold leading-none text-white/[0.04]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Industries band */}
        <div id="industries" className="mt-16 scroll-mt-28">
          <Reveal>
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Industries we serve
              </span>
              <div className="flex flex-wrap justify-center gap-2.5">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75 transition-colors duration-200 hover:border-flame/40 hover:bg-white/[0.07] hover:text-white"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
