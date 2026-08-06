"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-shade py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-[1310px] px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="section-label">[ Services ]</span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[40px]">
            Years of Delivering{" "}
            <span className="text-brand">Custom IT Solutions</span> Services.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-body">
            From custom software to AI, cloud and DevOps — we engineer scalable,
            secure solutions that move global businesses forward.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-ink/10"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <span className="text-5xl font-bold leading-none text-ink/[0.06] transition-colors group-hover:text-brand/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-5 text-lg font-bold text-ink">
                  {s.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-body">
                  {s.desc}
                </p>

                <div className="relative mt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/40">
                    The technologies we work with
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {s.techs.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-shade px-2 py-0.5 text-[11px] font-medium text-body"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="#consultation"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Learn more
                  <ArrowUpRight className="size-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
