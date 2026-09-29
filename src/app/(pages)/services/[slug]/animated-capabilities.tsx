"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/site/primitives";

export function AnimatedCapabilities({ shortTitle, capabilities }: { shortTitle: string; capabilities: string[] }) {
  const caps = capabilities;
  return (
    <section className="relative overflow-hidden bg-ink py-section-md text-white">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 size-96 rounded-full bg-flame/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 size-80 rounded-full bg-flame/10 blur-[100px]"
      />
      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label !text-brand-light">[ What we deliver ]</span>
            <h2 className="mt-3 text-display-lg font-bold text-white">
              {shortTitle}{" "}
              <span className="text-flame">capabilities.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Production-ready building blocks — each one scoped, engineered
              and delivered as part of the engagement. {caps.length} capabilities
              that ship from day one.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caps.map((cap, i) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: Math.min(i * 0.06, 0.4),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors duration-300 hover:border-flame/40 hover:bg-white/[0.07]"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-flame/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-light transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <span className="font-mono text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold leading-tight text-white">
                    {cap}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <Check
                      className="size-3.5 text-flame opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1"
                      aria-hidden
                    />
                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:text-brand-light">
                      Production-ready
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-8 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/60">
            <Zap className="size-3.5 text-brand-light" aria-hidden />
            {caps.length} capabilities · scoped and shipped
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/60">
            <Sparkles className="size-3.5 text-brand-light" aria-hidden />
            Engineering-led · not outsourced
          </span>
        </motion.div>
      </div>
    </section>
  );
}
