"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BrainCircuit, Rocket } from "lucide-react";
import { heroHighlights } from "@/lib/site-data";

/**
 * Hero — premium full-bleed media hero.
 *
 * Two slides (auto-advance 6s) over cinematic photography, navy scrim tuned
 * for a left-aligned F-pattern read, fluid display type, and the brand's
 * single orange accent (the legacy slider blue has been retired).
 *
 * Copy is preserved verbatim from the original slider config. The trust
 * strip surfaces `heroHighlights` from site-data (existing site copy).
 */

const highlightIcons = [BrainCircuit, Rocket];

const slides = [
  {
    bg: "/images/wp/2026-01/2149595827.jpg",
    label: "[ Smart IT solutions ]",
    title: "Transforming Ideas Into IT Solutions",
    desc: "Provide world wide survival strategies to ensure proactive domination at the end of the day fueling digital transformation with expert solutions.",
  },
  {
    bg: "/images/wp/2026-01/pexels-sevenstormphotography-443383.jpg",
    label: "[ Smart IT solutions ]",
    title: "Smart IT Solutions For Smarter Businesses",
    desc: "Provide world wide survival strategies to ensure proactive domination at the end of the day fueling digital transformation with expert solutions.",
  },
];

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[active];

  return (
    <section
      id="home"
      className="relative flex min-h-[680px] items-center overflow-hidden bg-ink lg:min-h-[88vh]"
    >
      {/* Background slides — Ken Burns on the active layer */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-out-expo"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <Image
            src={s.bg}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === active && !reduce ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}

      {/* Scrim — deep left for type legibility, bottom vignette into ink */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,3,61,0.92) 0%, rgba(11,22,94,0.82) 40%, rgba(11,22,94,0.38) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(0,3,61,0.85) 0%, rgba(0,3,61,0) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />

      {/* Content — left-aligned, F-pattern entry */}
      <div className="relative container-site w-full py-28 lg:py-36">
        <div className="max-w-3xl">
          <motion.div
            key={`label-${active}`}
            initial={reduce ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="flex items-center gap-4"
          >
            <span
              className="h-[3px] w-11 rounded-full bg-gradient-to-r from-flame to-flame-soft"
              aria-hidden
            />
            <span className="text-sm font-semibold tracking-[0.08em] text-flame sm:text-base">
              {slide.label}
            </span>
          </motion.div>

          <motion.h1
            key={`title-${active}`}
            initial={reduce ? false : { opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="mt-5 text-display-xl font-bold text-white"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            key={`desc-${active}`}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: EASE_OUT_EXPO }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {slide.desc}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: EASE_OUT_EXPO }}
            className="mt-10"
          >
            <Link
              href="#consultation"
              className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
            >
              Free Consultation
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </motion.div>

          {/* Trust strip — existing site copy surfaced from heroHighlights */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT_EXPO }}
            className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 sm:gap-10 lg:mt-16"
          >
            {heroHighlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <div key={h.title} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                    <Icon className="size-5 text-flame" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-base font-bold text-white">
                      {h.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Slide indicators */}
          <div className="mt-10 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active}
                className="group flex items-center gap-2 py-2"
              >
                <span
                  className={
                    "block h-[3px] rounded-full transition-all duration-500 ease-out-expo " +
                    (i === active
                      ? "w-12 bg-gradient-to-r from-flame to-flame-soft"
                      : "w-6 bg-white/35 group-hover:bg-white/70")
                  }
                />
                <span
                  className={
                    "text-xs font-semibold tabular-nums transition-colors " +
                    (i === active ? "text-white" : "text-white/40")
                  }
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom edge — shared accent thread */}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />
    </section>
  );
}
