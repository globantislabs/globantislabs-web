"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { Container, Section, SectionHeading } from "../primitives";
import { Reveal } from "../reveal";

export function Services() {
  return (
    <Section className="border-b border-hairline bg-paper">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we deliver"
            title="Seven services. One engineering culture."
            description="Each capability is staffed by senior engineers and shipped with the same rigor — code review, automated testing, security review and observability built in from day one."
          />
          <Link href="/services" className="btn-ghost shrink-0">
            All services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.2)}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col gap-3 bg-background p-6 transition-colors hover:bg-paper-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                  <p className="font-display text-base font-semibold text-foreground">
                    {s.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                    {s.techs.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded border border-hairline px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            );
          })}

          {/* Final CTA cell */}
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="group flex h-full flex-col justify-between gap-4 bg-brand p-6 text-brand-foreground"
            >
              <div>
                <p className="font-mono text-xs opacity-80">
                  Not sure where to start?
                </p>
                <p className="mt-3 font-display text-lg font-semibold">
                  Book a free 30-minute consultation.
                </p>
                <p className="mt-2 text-sm leading-relaxed opacity-85">
                  We'll review your current stack, identify the highest-leverage
                  next move, and give you a written recommendation — whether or
                  not you decide to work with us.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-medium">
                Book a call
                <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-0.5" />
              </div>
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
