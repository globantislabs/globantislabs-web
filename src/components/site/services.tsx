"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/primitives";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-shade py-section-md"
    >
      <div className="container-site relative">
        {/* Heading row — left-aligned header, ghost CTA on the right */}
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-label">[ Services ]</span>
              <h2 className="text-display-lg font-bold text-ink">
                Years of Delivering{" "}
                <span className="text-flame">Custom IT Solutions</span>{" "}
                Services.
              </h2>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-body">
                From custom software to AI, cloud and DevOps — we engineer
                scalable, secure solutions that move global businesses forward.
              </p>
            </div>
            <Link
              href="#consultation"
              className="btn-lift group inline-flex h-12 shrink-0 items-center gap-2 self-start rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink shadow-soft hover:border-brand hover:text-brand hover:shadow-lift lg:self-auto"
            >
              View all services
              <ArrowUpRight className="size-4 transition-transform duration-300 ease-out-quart group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* Grid — premium light cards with signature flame top-bar hover */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.title}
                delay={Math.min(i * 0.07, 0.35)}
                className="h-full"
              >
                <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-soft hover:border-flame/40 hover:shadow-lift">
                  {/* soft cream glow in top-right corner — appears on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-flame/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  {/* top accent bar — slides in on hover (signature) */}
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100" />

                  {/* Header row: icon tile + stylized number */}
                  <div className="relative flex items-start justify-between">
                    <div className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-6" />
                    </div>
                    <span className="bg-gradient-to-br from-ink/15 to-ink/[0.04] bg-clip-text text-5xl font-bold leading-none text-transparent transition-all duration-300 group-hover:from-flame group-hover:to-flame-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title + description */}
                  <h3 className="relative mt-6 text-display-md font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-body">
                    {s.desc}
                  </p>

                  {/* Tech logos — clean row, full color, pop on hover */}
                  <div className="relative mt-6">
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-5 rounded-full bg-flame/70" />
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/45">
                        Technologies
                      </p>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2.5">
                      {s.techs.map((t) => (
                        <Image
                          key={t.name}
                          src={t.img}
                          alt={t.name}
                          width={75}
                          height={50}
                          className="h-7 w-auto object-contain opacity-70 transition-transform duration-300 ease-out-quart hover:scale-110 hover:opacity-100 sm:h-8 lg:h-9"
                          title={t.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Learn more — elegant inline link at bottom */}
                  <Link
                    href="#consultation"
                    className="group/link relative mt-6 inline-flex items-center gap-1.5 border-t border-line pt-5 text-sm font-semibold text-ink transition-colors duration-200 hover:text-flame"
                  >
                    Learn more
                    <ArrowUpRight className="size-4 transition-transform duration-300 ease-out-quart group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
