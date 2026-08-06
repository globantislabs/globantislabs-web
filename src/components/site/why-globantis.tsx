"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const partners = [
  "Photolabs",
  "TranscriptHQ",
  "TryBefore",
  "FinEdge",
  "MediCloud",
  "EduSync",
  "ShipRight",
  "SecureNet",
];

export function WhyGlobantis() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
      <div
        className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand/25 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1310px] px-6">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className="section-label text-brand-light">[ Why Globantis ]</span>
            <h2 className="mt-1 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[40px]">
              We Make The Most Creative{" "}
              <span className="text-brand-light">Digital Solutions</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
              We are giving IT Solutions Services over the world — combining
              global expertise, advanced engineering, and a customer-centric
              approach.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur lg:items-end">
            <Quote className="size-7 text-brand-light" />
            <p className="text-sm leading-relaxed text-white/70">
              &ldquo;Join our growing list of happy customers today —
              organizations across 12+ countries trust Globantis Labs to power
              their digital transformation.&rdquo;
            </p>
            <Button
              asChild
              className="mt-1 h-11 w-full rounded-[5px] bg-brand px-5 text-sm font-medium text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark lg:w-auto"
            >
              <Link href="#consultation">
                Let&apos;s Talk
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {whyFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:border-brand/40 hover:bg-white/[0.07]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {f.desc}
                    </p>
                  </div>
                </div>
                <span className="pointer-events-none absolute -bottom-8 -right-4 text-[7rem] font-bold leading-none text-white/[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Industries band */}
        <div id="industries" className="mt-16 scroll-mt-28">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Industries we serve
            </span>
            <div className="flex flex-wrap justify-center gap-2.5">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:border-brand/40 hover:text-white"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Partners marquee */}
        <div id="products" className="mt-12 scroll-mt-28">
          <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-white/40">
            [ Partners ] — Happy Customers
          </div>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee gap-4 pr-4">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/55 transition-colors hover:text-brand-light"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
