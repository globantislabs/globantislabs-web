"use client";

import Image from "next/image";
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
        {/* Heading — orange sub-text label + navy title with orange highlighted span */}
        <div className="max-w-3xl">
          <span className="section-label">[ Services ]</span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[40px] lg:leading-[50px]">
            Years of Delivering{" "}
            <span className="text-brand">Custom IT Solutions</span> Services.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-body">
            From custom software to AI, cloud and DevOps — we engineer scalable,
            secure solutions that move global businesses forward.
          </p>
        </div>

        {/* Grid — 3 columns, matches original rs-addon-services style13 layout */}
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
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#2b4dff1a] bg-white pt-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-xl hover:shadow-ink/10"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative px-7">
                  <div className="flex items-start justify-between">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-5xl font-bold leading-none text-ink/[0.06] transition-colors group-hover:text-brand/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-xl font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-body">
                    {s.desc}
                  </p>
                </div>

                {/* Footer part — matches original .grid_footer_part (shade bg, tech logos) */}
                <div className="relative mt-6 flex-1 border-t border-line bg-shade px-7 pb-6 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/40">
                    The technologies we work with
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    {s.techs.map((t) => (
                      <Image
                        key={t.name}
                        src={t.img}
                        alt={t.name}
                        width={32}
                        height={32}
                        className="size-8 object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                        title={t.name}
                      />
                    ))}
                  </div>
                </div>

                <Link
                  href="#consultation"
                  className="relative mx-7 mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand opacity-0 transition-all duration-300 group-hover:opacity-100"
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
