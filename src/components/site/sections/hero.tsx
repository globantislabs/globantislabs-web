"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { heroStats, heroHighlights, company } from "@/lib/site-data";
import { Container } from "../primitives";

/**
 * Hero — opens with a strong editorial statement (the work we do),
 * flanked by a KPI column (engineering credibility).
 * One orchestrated motion moment on load; no per-card hover fade.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-background">
      {/* Subtle blueprint grid — extremely low contrast */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          color: "var(--ink)",
        }}
      />

      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — editorial headline */}
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="micro-label mb-6"
            >
              {company.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="display max-w-4xl text-4xl text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              We engineer software,
              <br />
              AI &amp; digital systems
              <br />
              <span className="text-brand">that compound value.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Globantis Labs is a global software engineering firm. We design,
              build and operate secure, scalable systems — from web and mobile
              products to AI, cloud and DevOps platforms — for clients across
              the United States, Canada and India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="/contact" className="btn-brand">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore services
                <ArrowDownRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-4"
            >
              {heroStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.05 }}
                  className="bg-background px-4 py-5"
                >
                  <div className="font-mono text-2xl text-foreground md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — focus areas + brand mark */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-md border border-hairline bg-brand text-brand-foreground"
            >
              {/* Large stylised Z mark — visual anchor for the right column */}
              <svg
                aria-hidden
                viewBox="0 0 30 30"
                className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 opacity-15"
              >
                <rect
                  x="1.49"
                  y="1.49"
                  width="27.02"
                  height="27.02"
                  rx="4"
                  ry="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <polygon
                  points="24.3,7.1 13.14,22.91 5.7,22.91 16.86,7.1"
                  fill="currentColor"
                />
              </svg>
              <div className="relative p-6">
                <p
                  className="micro-label is-centered mb-4"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  What we do
                </p>
                <ul className="divide-y divide-white/15">
                  {heroHighlights.map((h) => (
                    <li key={h.title} className="py-4 first:pt-0 last:pb-0">
                      <p className="font-display text-sm font-semibold">
                        {h.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed opacity-85">
                        {h.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 rounded-md border border-hairline bg-paper p-6"
            >
              <p className="micro-label mb-4">Where we are</p>
              <ul className="space-y-3 text-sm">
                {company.offices.map((o) => (
                  <li
                    key={o.city}
                    className="flex items-baseline justify-between gap-2"
                  >
                    <span className="font-medium text-foreground">
                      {o.city}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {o.country}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
