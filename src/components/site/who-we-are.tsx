"use client";

import Image from "next/image";
import { CheckCircle2, Target, Eye, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/site/primitives";
import { aboutTabs, aboutPills } from "@/lib/site-data";

const tabIcons: Record<string, typeof Target> = {
  mission: Target,
  vision: Eye,
  history: History,
};

export function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-section-md"
    >
      <div className="container-site relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: original images (hm2_about.jpg + hm2_abou2t.jpg) — offset editorial composition */}
          <Reveal className="relative">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Flame offset frame — editorial depth behind the leading image */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-3 top-11 hidden h-2/3 w-[46%] rounded-2xl border-2 border-flame/25 sm:block"
              />
              <div className="relative mt-8 overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/wp/2025-02/hm2_about.jpg"
                  alt="Globantis Labs team collaboration"
                  width={400}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/wp/2025-02/hm2_abou2t.jpg"
                  alt="Globantis Labs office workspace"
                  width={400}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Original decorative SVG accent (Vector-8.svg) */}
            <Image
              src="/images/wp/2025-02/Vector-8.svg"
              alt=""
              width={120}
              height={120}
              className="pointer-events-none absolute -left-6 -top-6 -z-0 hidden opacity-70 lg:block"
              aria-hidden
            />

            {/* Stat overlay — sharp editorial tile with flame rule */}
            <div className="absolute -bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-none border border-line bg-white px-2 pb-5 pt-6 shadow-float">
              <span
                aria-hidden
                className="rule-flame absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
              />
              <div className="grid grid-cols-3 divide-x divide-line">
                {[
                  { v: "15+", l: "Years" },
                  { v: "40+", l: "Clients" },
                  { v: "12+", l: "Countries" },
                ].map((s) => (
                  <div key={s.l} className="px-3 text-center">
                    <p className="text-2xl font-bold text-ink lg:text-3xl">
                      {s.v}
                    </p>
                    <p className="mt-1 text-xs text-body">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: content (orange label, navy heading with flame highlighted span) */}
          <Reveal delay={0.08} className="lg:pl-4">
            <span className="section-label">[ Who We are ]</span>
            <h2 className="text-display-lg font-bold text-ink">
              Develop Industry-Leading Solutions{" "}
              <span className="text-flame">With Our Expert</span>
            </h2>

            <Tabs defaultValue="mission" className="mt-8">
              <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 rounded-full bg-shade p-1.5">
                {aboutTabs.map((t) => {
                  const Icon = tabIcons[t.key];
                  return (
                    <TabsTrigger
                      key={t.key}
                      value={t.key}
                      className="min-h-11 flex-1 rounded-full px-4 py-2.5 text-sm font-semibold text-ink/70 transition-colors duration-200 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-soft"
                    >
                      <Icon className="size-4" />
                      <span className="hidden sm:inline">{t.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {aboutTabs.map((t) => (
                <TabsContent
                  key={t.key}
                  value={t.key}
                  className="mt-5 rounded-2xl border border-line bg-white p-6 text-[15px] leading-relaxed text-body shadow-soft"
                >
                  {t.body}
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {aboutPills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink/70 transition-colors duration-200 hover:border-brand/40 hover:text-brand"
                >
                  <CheckCircle2 className="size-3.5 text-brand" />
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
