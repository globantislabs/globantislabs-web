"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, ChevronRight, ShoppingCart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { industries, type Industry } from "@/lib/site-data";

// =====================================================================
// Shared helpers
// =====================================================================

function ShowcaseHeading({
  kicker,
  title,
  desc,
  light,
}: {
  kicker: string;
  title: ReactNode;
  desc?: string;
  light?: boolean;
}) {
  return (
    <Reveal>
      <SectionHeading
        label={`[ ${kicker} ]`}
        title={title}
        lead={desc}
        tone={light ? "dark" : "light"}
      />
    </Reveal>
  );
}

/** Parse a stat value like "$12T+" or "99.99%" into prefix / numeric / suffix / decimals */
function parseStat(raw: string): {
  prefix: string;
  numeric: number;
  suffix: string;
  decimals: number;
} {
  const m = raw.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { prefix: "", numeric: 0, suffix: raw, decimals: 0 };
  const [, prefix, numStr, suffix] = m;
  return {
    prefix,
    numeric: parseFloat(numStr),
    suffix,
    decimals: numStr.includes(".") ? numStr.split(".")[1].length : 0,
  };
}

/** Count-up number that animates the numeric part of a stat when in view */
function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { prefix, numeric, suffix, decimals } = parseStat(value);
  const [display, setDisplay] = useState(decimals > 0 ? "0.00" : "0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) =>
        setDisplay(
          decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString(),
        ),
    });
    return () => controls.stop();
  }, [inView, numeric, decimals]);
  return (
    <span ref={ref} aria-label={value}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/** Small label kicker used as a sub-section divider */
function KickerLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden className="rule-flame" />
      <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">
        {children}
      </span>
    </div>
  );
}

// =====================================================================
// 1. Financial Services — animated stats + 3-tab areas panel
// =====================================================================

function FinancialServicesShowcase({ ind }: { ind: Industry }) {
  const stats = ind.stats ?? [];
  const items = ind.subIndustries?.items ?? [];
  if (!stats.length || !items.length) return null;

  return (
    <section className="bg-shade py-section-md">
      <div className="container-site">
        <ShowcaseHeading
          kicker="By the numbers"
          title={
            <>
              A track record built on{" "}
              <span className="text-flame">trust &amp; scale</span>
            </>
          }
          desc="Decades of partnership with global financial institutions — measured in assets processed, uptime guaranteed, and outcomes delivered."
        />

        {/* Stats band on navy */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-ink p-8 shadow-float lg:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-pattern opacity-20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-flame/20 blur-3xl"
          />
          <div className="relative grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center sm:text-left lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <div className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                  <StatCounter value={s.value} />
                </div>
                <div className="mt-2 text-sm font-medium text-white/60">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3-tab panel */}
        <div className="mt-16">
          <ShowcaseHeading
            kicker={ind.subIndustries?.heading ?? "Areas We Serve"}
            title={
              <>
                Three pillars of{" "}
                <span className="text-flame">financial transformation</span>
              </>
            }
          />
          <Tabs defaultValue={items[0].title} className="mt-8">
            <TabsList
              aria-label="Financial services areas"
              className="h-auto w-full justify-start gap-2 rounded-xl bg-white p-2 shadow-soft ring-1 ring-line sm:w-fit"
            >
              {items.map((item) => (
                <TabsTrigger
                  key={item.title}
                  value={item.title}
                  className="rounded-lg px-5 py-3 text-sm font-semibold text-body data-[state=active]:bg-cream data-[state=active]:text-brand data-[state=active]:shadow-soft"
                >
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {items.map((item) => (
              <TabsContent key={item.title} value={item.title} className="mt-6">
                <div className="grid gap-8 rounded-3xl border border-line bg-white p-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-8">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                        <ChevronRight className="size-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                        Area of impact
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-ink lg:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-body">
                      {item.desc}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                    >
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </div>
                  {item.image && (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-float">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// 2. Healthcare — 4 care pillars (2x2 with cross connector) + journey
// =====================================================================

function HealthcareShowcase({ ind }: { ind: Industry }) {
  const pillars = ind.pillars ?? [];
  const journey = ind.journey ?? [];
  if (!pillars.length) return null;

  return (
    <section className="bg-shade py-section-md">
      <div className="container-site">
        <ShowcaseHeading
          kicker="Care pillars"
          title={
            <>
              Four pillars of{" "}
              <span className="text-flame">modern patient care</span>
            </>
          }
          desc="We weave these capabilities into a connected care fabric — secure, intelligent, and centered on the patient."
        />

        {/* Pillars grid 2x2 with cross connector */}
        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {/* Cross connector — visible only on sm+ */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 sm:block"
          >
            <span className="absolute left-1/2 top-1/2 h-px w-[520px] -translate-x-1/2 -translate-y-1/2 bg-brand/25 lg:w-[620px]" />
            <span className="absolute left-1/2 top-1/2 h-[360px] w-px -translate-x-1/2 -translate-y-1/2 bg-brand/25 lg:h-[420px]" />
          </div>

          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative z-10 flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-flame/40 hover:shadow-lift"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
                <div className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Patient journey mini-strip */}
        {journey.length > 0 && (
          <Reveal className="mt-16">
            <KickerLabel>Patient journey</KickerLabel>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((j, i) => {
                const Icon = j.icon;
                return (
                  <div
                    key={j.title}
                    className="relative rounded-2xl border border-line bg-white p-6"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-xs font-bold text-brand">
                        0{i + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 text-base font-bold text-ink">
                      {j.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-body">
                      {j.desc}
                    </p>
                    {i < journey.length - 1 && (
                      <ChevronRight
                        aria-hidden
                        className="absolute -right-4 top-1/2 hidden size-4 -translate-y-1/2 text-brand/40 lg:block"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

// =====================================================================
// 3. Education — numbered zigzag pathway + platform features
// =====================================================================

function EducationShowcase({ ind }: { ind: Industry }) {
  const pathway = ind.pathway ?? [];
  const features = ind.platformFeatures ?? [];
  if (!pathway.length) return null;

  return (
    <section className="bg-shade py-section-md">
      <div className="container-site">
        <ShowcaseHeading
          kicker="Learning pathway"
          title={
            <>
              A 5-stage <span className="text-flame">learner journey</span>,
              end-to-end
            </>
          }
          desc="From onboarding to career — every step is personalized, measurable, and connected to outcomes."
        />

        {/* Vertical zigzag timeline */}
        <div className="relative mt-14 lg:mt-20">
          {/* Orange spine — left on mobile, center on lg */}
          <div
            aria-hidden
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-flame via-flame-soft to-transparent lg:left-1/2 lg:-translate-x-1/2"
          />
          <div className="space-y-8 lg:space-y-16">
            {pathway.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 ${
                      isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    <div className="card-lift group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft hover:border-flame/40 hover:shadow-lift">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                      />
                      <div
                        className={`flex items-center gap-3 ${
                          isLeft ? "lg:justify-end" : ""
                        }`}
                      >
                        <span className="bg-gradient-to-br from-flame to-flame-soft bg-clip-text text-4xl font-bold leading-none text-transparent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex size-9 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                          <ChevronRight className="size-4" />
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-body">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  {/* Center node dot */}
                  <span
                    aria-hidden
                    className="absolute left-5 top-6 size-3.5 -translate-x-1/2 rounded-full bg-brand ring-4 ring-shade lg:left-1/2"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Platform features 3-col */}
        {features.length > 0 && (
          <Reveal className="mt-16">
            <KickerLabel>Platform features</KickerLabel>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="card-lift group relative overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

// =====================================================================
// 4. Logistics — 5-node supply chain flow + tech enablers strip
// =====================================================================

function LogisticsShowcase({ ind }: { ind: Industry }) {
  const flow = ind.flow ?? [];
  const enablers = ind.techEnablers ?? [];
  if (!flow.length) return null;

  return (
    <section className="bg-shade py-section-md">
      <div className="container-site">
        <ShowcaseHeading
          kicker="Supply chain flow"
          title={
            <>
              From source to{" "}
              <span className="text-flame">optimize</span> — one connected
              chain
            </>
          }
          desc="Five orchestrated stages that turn supply chain complexity into competitive advantage."
        />

        {/* 5-node horizontal flow */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {flow.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative h-full"
              >
                <div className="card-lift group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-bold text-brand">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {node.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-body">
                    {node.desc}
                  </p>
                </div>
                {/* Arrow connector between nodes */}
                {i < flow.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                  >
                    <div className="flex size-6 items-center justify-center rounded-full bg-brand text-white shadow-soft">
                      <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Tech enablers strip */}
        {enablers.length > 0 && (
          <Reveal className="mt-16 rounded-3xl border border-line bg-white p-6 lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:max-w-xs">
                <KickerLabel>Tech enablers</KickerLabel>
                <p className="mt-2 text-sm text-body">
                  The backbone that powers real-time, end-to-end logistics.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:flex lg:gap-3">
                {enablers.map((e) => {
                  const Icon = e.icon;
                  return (
                    <div
                      key={e.name}
                      className="group flex flex-col items-start gap-2 rounded-xl border border-line bg-shade p-4 transition-colors duration-300 hover:border-flame/40 hover:bg-white lg:flex-row lg:items-center lg:gap-3 lg:px-5 lg:py-3"
                    >
                      <span className="flex size-9 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <div className="text-sm font-bold text-ink">
                          {e.name}
                        </div>
                        <div className="text-[11px] text-body">{e.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

// =====================================================================
// 5. Cybersecurity — dark security layers stack with coverage bars
// =====================================================================

function CybersecurityShowcase({ ind }: { ind: Industry }) {
  const layers = ind.layers ?? [];
  if (!layers.length) return null;

  return (
    <section className="relative overflow-hidden bg-ink py-section-md">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern opacity-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-flame/20 blur-3xl"
      />
      <div className="relative container-site">
        <ShowcaseHeading
          light
          kicker="Defense in depth"
          title={
            <>
              Four <span className="text-brand-light">security layers</span>,
              one shield
            </>
          }
          desc="Each layer is engineered to fail safe — so a breach in one is contained by the next."
        />
        <div className="mt-12 space-y-3">
          {layers.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:bg-white/[0.08]"
              >
                <div className="grid gap-5 lg:grid-cols-[auto_1fr_280px] lg:items-center lg:gap-8">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-light">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                      Layer 0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white lg:text-xl">
                      {l.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      {l.desc}
                    </p>
                  </div>
                  {/* Coverage bar */}
                  <div className="lg:text-right">
                    <div className="flex items-center justify-between lg:justify-end lg:gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        Coverage
                      </span>
                      <span className="text-2xl font-bold text-brand-light">
                        {l.coverage}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10 lg:ml-auto lg:w-64">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-flame to-flame-soft"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.coverage}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-white/60">
          The FAQ below breaks down what we secure —{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand-light hover:underline"
          >
            talk to our security team
          </Link>{" "}
          for a tailored assessment.
        </p>
      </div>
    </section>
  );
}

// =====================================================================
// 6. Ecommerce — central product card with radiating channel chips
// =====================================================================

function EcommerceShowcase({ ind }: { ind: Industry }) {
  const channels = ind.channels ?? [];
  const metrics = ind.ecommerceMetrics ?? [];
  if (!channels.length) return null;

  // Pre-compute angle positions for desktop radiating layout
  const radius = 210;
  const angles = channels.map((_, i) => (i * (360 / channels.length)) - 90);

  return (
    <section className="bg-shade py-section-md">
      <div className="container-site">
        <ShowcaseHeading
          kicker="Omnichannel commerce"
          title={
            <>
              One product catalog,{" "}
              <span className="text-flame">every channel</span> —
              synchronized
            </>
          }
          desc="Web, mobile, marketplaces, social, POS and voice — all driven from a single commerce core."
        />

        {/* Mobile: stacked layout (central card + grid of channels) */}
        <div className="mt-12 lg:hidden">
          <div className="rounded-2xl border border-line bg-white p-6 text-center shadow-soft">
            <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-brand text-white shadow-soft">
              <ShoppingCart className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-ink">
              Unified Commerce Core
            </h3>
            <p className="mt-1 text-xs text-body">
              One catalog, one inventory, one customer view.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-line bg-white p-4"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {c.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: radiating layout */}
        <div className="relative mx-auto mt-12 hidden h-[540px] max-w-3xl lg:block">
          {/* Dotted connecting lines */}
          {angles.map((angle, i) => (
            <div
              key={`line-${i}`}
              aria-hidden
              className="absolute left-1/2 top-1/2 h-0 border-t-2 border-dotted border-brand/40"
              style={{
                width: radius,
                transformOrigin: "0 0",
                transform: `rotate(${angle}deg)`,
              }}
            />
          ))}
          {/* Central product card */}
          <div className="absolute left-1/2 top-1/2 z-10 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-line bg-white p-6 text-center shadow-float">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand text-white shadow-soft">
              <ShoppingCart className="size-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-ink">
              Unified Commerce Core
            </h3>
            <p className="mt-1 text-xs text-body">
              One catalog, one inventory, one customer view.
            </p>
          </div>
          {/* Radiating channel chips */}
          {channels.map((c, i) => {
            const Icon = c.icon;
            const angle = angles[i];
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <div
                key={c.label}
                className="absolute left-1/2 top-1/2 z-10"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="group flex w-32 flex-col items-center gap-2 rounded-xl border border-line bg-white px-3 py-4 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-flame/40 hover:shadow-lift">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {c.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-metric strip */}
        {metrics.length > 0 && (
          <Reveal className="mt-16 grid gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-line bg-white p-6 text-center"
              >
                <div className="text-3xl font-bold text-brand lg:text-4xl">
                  {m.value}
                </div>
                <span aria-hidden className="rule-flame mx-auto mt-3 block" />
                <div className="mt-2 text-sm font-semibold text-ink">
                  {m.label}
                </div>
                {m.trend && (
                  <div className="mt-1 text-xs text-body">{m.trend}</div>
                )}
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}

// =====================================================================
// 7. Automation — 5-step workflow with pulse dots + 3 type cards
// =====================================================================

function AutomationShowcase({ ind }: { ind: Industry }) {
  const workflow = ind.workflow ?? [];
  const items = ind.subIndustries?.items ?? [];
  // 3 specific types: Intelligent / Process / RPA = items 1..3
  const types = items.slice(1, 4);
  if (!workflow.length) return null;

  return (
    <section className="bg-shade py-section-md">
      <div className="container-site">
        <ShowcaseHeading
          kicker="Workflow"
          title={
            <>
              Five steps from{" "}
              <span className="text-flame">trigger to optimize</span>
            </>
          }
          desc="An intelligent automation loop that learns from every cycle and gets faster over time."
        />

        {/* 5-step horizontal flow with pulse dots */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {workflow.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative h-full"
              >
                <div className="card-lift group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
                  <div className="flex items-center gap-3">
                    <span className="relative flex size-11 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-5" />
                      {/* Pulse dot */}
                      <span
                        aria-hidden
                        className="absolute -right-0.5 -top-0.5 flex size-3"
                      >
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                        <span className="relative inline-flex size-3 rounded-full bg-brand" />
                      </span>
                    </span>
                    <span className="text-xs font-bold text-brand">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {step.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-body">
                    {step.desc}
                  </p>
                </div>
                {/* Connector arrow */}
                {i < workflow.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                  >
                    <div className="flex size-6 items-center justify-center rounded-full bg-brand text-white shadow-soft">
                      <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* 3 automation-type cards */}
        {types.length > 0 && (
          <Reveal className="mt-16">
            <KickerLabel>Automation types</KickerLabel>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {types.map((t) => (
                <div
                  key={t.title}
                  className="card-lift group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white hover:border-flame/40 hover:shadow-lift"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                  />
                  {t.image && (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-bold leading-snug text-ink">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

// =====================================================================
// Dispatcher
// =====================================================================

export function IndustryShowcase({ slug }: { slug: string }) {
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return null;
  switch (slug) {
    case "financial-services":
      return <FinancialServicesShowcase ind={ind} />;
    case "healthcare":
      return <HealthcareShowcase ind={ind} />;
    case "education":
      return <EducationShowcase ind={ind} />;
    case "logistics":
      return <LogisticsShowcase ind={ind} />;
    case "cybersecurity":
      return <CybersecurityShowcase ind={ind} />;
    case "ecommerce":
      return <EcommerceShowcase ind={ind} />;
    case "automation":
      return <AutomationShowcase ind={ind} />;
    default:
      return null;
  }
}
