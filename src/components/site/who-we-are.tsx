"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { aboutTabs, aboutPills } from "@/lib/site-data";

const tabIcons: Record<string, typeof Target> = {
  mission: Target,
  vision: Eye,
  history: History,
};

export function WhoWeAre() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-[1310px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: images */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="mt-10 overflow-hidden rounded-2xl shadow-xl shadow-ink/10">
                <Image
                  src="/images/hm2-about.jpg"
                  alt="Globantis Labs team collaboration"
                  width={400}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-ink/10">
                <Image
                  src="/images/hm2-about-2.jpg"
                  alt="Globantis Labs office workspace"
                  width={400}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Stat overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-line bg-white p-5 shadow-2xl shadow-ink/10"
            >
              <div className="grid grid-cols-3 divide-x divide-line">
                {[
                  { v: "15+", l: "Years" },
                  { v: "40+", l: "Clients" },
                  { v: "12+", l: "Countries" },
                ].map((s) => (
                  <div key={s.l} className="px-2 text-center">
                    <p className="text-2xl font-bold text-brand">{s.v}</p>
                    <p className="text-xs text-body">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">[ Who We are ]</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[40px]">
              Develop Industry-Leading Solutions{" "}
              <span className="text-brand">With Our Expert</span>
            </h2>

            <Tabs defaultValue="mission" className="mt-8">
              <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 rounded-2xl bg-shade p-1.5">
                {aboutTabs.map((t) => {
                  const Icon = tabIcons[t.key];
                  return (
                    <TabsTrigger
                      key={t.key}
                      value={t.key}
                      className="flex-1 rounded-xl px-4 py-2.5 text-sm font-medium text-ink/70 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm"
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
                  className="mt-5 rounded-2xl border border-line bg-white p-6 text-[15px] leading-relaxed text-body"
                >
                  {t.body}
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {aboutPills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink/70"
                >
                  <CheckCircle2 className="size-3.5 text-brand" />
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
