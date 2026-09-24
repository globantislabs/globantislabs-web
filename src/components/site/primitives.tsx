"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ============================================================
   Reveal — purposeful scroll entrance (fade-up, ease-out-expo).
   Progressive enhancement: reduced-motion users see content
   immediately. Wraps ONE logical block; never nest Reveals.
   ============================================================ */
type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds — pass i * 0.07 for grids (max 0.35) */
  delay?: number;
  /** Vertical travel in px (20-32 recommended) */
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-72px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   SectionHeading — the unified section header pattern.
   Copy is passed in verbatim by pages; this only controls
   layout, fluid type, and tone.
   ============================================================ */
type SectionHeadingProps = {
  /** Eyebrow label, e.g. "[ Who We are ]" — rendered as .section-label */
  label?: string;
  /** Section headline (ReactNode so highlight spans pass through) */
  title: ReactNode;
  /** Supporting paragraph (optional) */
  lead?: ReactNode;
  align?: "left" | "center";
  /** "dark" = on navy/orange sections (light text) */
  tone?: "light" | "dark";
  /** Fluid heading size preset: lg (default) | md | xl */
  size?: "md" | "lg" | "xl";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  lead,
  align = "left",
  tone = "light",
  size = "lg",
  className,
}: SectionHeadingProps) {
  const sizeClass =
    size === "xl"
      ? "text-display-xl"
      : size === "md"
        ? "text-display-md"
        : "text-display-lg";

  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "section-label",
            tone === "dark" && "!text-brand-light",
            align === "center" && "!mx-auto !block"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          sizeClass,
          "font-bold",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-[17px] leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
            tone === "dark" ? "text-white/70" : "text-body"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   CTABand — the unified end-of-page call-to-action panel.
   One primary CTA per page. Copy passed verbatim.
   ============================================================ */
type CTABandProps = {
  label?: string;
  title: ReactNode;
  desc?: ReactNode;
  ctaHref: string;
  ctaLabel: ReactNode;
  /** ink = navy gradient panel (default) · brand = orange gradient · cream = light panel */
  tone?: "ink" | "brand" | "cream";
  className?: string;
};

export function CTABand({
  label,
  title,
  desc,
  ctaHref,
  ctaLabel,
  tone = "ink",
  className,
}: CTABandProps) {
  const isDark = tone !== "cream";
  const isBrand = tone === "brand";

  return (
    <section className={cn("relative py-section-sm", className)}>
      <div className="container-site">
        <Reveal>
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 lg:px-20 lg:py-16",
              tone === "ink" && "ink-gradient text-white",
              tone === "brand" && "brand-gradient text-white",
              tone === "cream" && "border border-line bg-cream text-ink"
            )}
          >
            {/* Decorative texture + flame orbs */}
            <div
              aria-hidden
              className={cn(
                "absolute inset-0",
                isDark ? "grid-pattern opacity-25" : "grid-pattern-dark opacity-60"
              )}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-flame/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-28 -right-16 size-72 rounded-full bg-flame/20 blur-3xl"
            />

            <div className="relative">
              {label && (
                <span
                  className={cn(
                    "section-label",
                    isDark ? "!text-brand-light" : undefined
                  )}
                >
                  {label}
                </span>
              )}
              <h2 className="text-display-lg font-bold">{title}</h2>
              {desc && (
                <p
                  className={cn(
                    "mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed",
                    isDark ? "text-white/70" : "text-body"
                  )}
                >
                  {desc}
                </p>
              )}
              <div className="mt-9">
                <Link
                  href={ctaHref}
                  className={cn(
                    "btn-lift inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold",
                    isDark
                      ? "bg-brand text-white shadow-glow-flame hover:bg-brand-dark"
                      : "bg-ink text-white shadow-lift hover:bg-ink-deep"
                  )}
                >
                  {ctaLabel}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
