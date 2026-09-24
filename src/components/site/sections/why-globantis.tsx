"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whyFeatures, homeStats, valuePills } from "@/lib/site-data";
import { Container, Section, SectionHeading } from "../primitives";
import { Reveal } from "../reveal";

export function WhyGlobantis() {
  return (
    <Section className="border-b border-hairline">
      <Container>
        <SectionHeading
          eyebrow="Why teams choose us"
          title="Engineering rigor, security-first, global delivery."
          description="We treat your software the way serious engineering firms treat their own — with measurable quality, transparent reporting and accountability at every stage."
        />

        {/* Why features — 4 column grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {whyFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={Math.min(i * 0.06, 0.2)}>
                <div className="flex h-full flex-col gap-3 bg-background p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="font-display text-base font-semibold text-foreground">
                    {f.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-hairline py-10 md:grid-cols-4">
          {homeStats.map((s, i) => (
            <Reveal key={s.label} delay={Math.min(i * 0.06, 0.2)}>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-3xl text-foreground md:text-4xl">
                  {s.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Value pills */}
        <div className="mt-12">
          <p className="micro-label mb-4">What clients say about working with us</p>
          <div className="flex flex-wrap gap-2">
            {valuePills.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full border border-hairline bg-paper px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/why-choose-us" className="btn-ghost">
            See the full picture
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/work-process" className="btn-ghost">
            How we work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
