"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/testimonials-data";
import { cn } from "@/lib/utils";

/**
 * Testimonials carousel — auto-advance (6s) with manual controls.
 * Reduced-motion safe — respects prefers-reduced-motion.
 */
export function TestimonialsCarousel() {
  const [active, setActive] = React.useState(0);
  const reduce = useReducedMotion();

  // Auto-advance every 6 seconds (desktop only, disabled on reduce-motion)
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [reduce]);

  const current = testimonials[active];

  function next() {
    setActive((a) => (a + 1) % testimonials.length);
  }
  function prev() {
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-8 shadow-soft md:p-12">
        {/* Decorative flame orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-12 -top-12 size-32 rounded-full bg-flame/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-12 -right-12 size-32 rounded-full bg-flame/10 blur-3xl"
        />

        <Quote
          aria-hidden
          className="mx-auto size-12 text-flame"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-6 text-center"
          >
            <p className="mx-auto max-w-3xl text-display-md font-bold leading-snug text-ink">
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <span className="flex size-12 items-center justify-center rounded-full bg-brand-gradient text-base font-bold text-white shadow-lg shadow-brand/30">
                {current.initials}
              </span>
              <p className="font-bold text-ink">{current.author}</p>
              <p className="text-sm text-body">
                {current.role} · {current.company}
              </p>
              <span className="mt-1 inline-flex items-center rounded-full border border-brand/20 bg-cream px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                {current.industry}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <ArrowLeft className="size-4" aria-hidden />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === active
                  ? "w-6 bg-brand"
                  : "w-1.5 bg-ink/20 hover:bg-ink/40"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}

function useReducedMotion() {
  const [reduce, setReduce] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const handler = () => setReduce(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduce;
}
