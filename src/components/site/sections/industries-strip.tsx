"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/site-data";
import { Container, Section, SectionHeading } from "../primitives";
import { Reveal } from "../reveal";

export function IndustriesStrip() {
  return (
    <Section className="border-b border-hairline bg-paper">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Industries"
            title="Domain expertise that ships."
            description="We don't write generic software. Our teams invest in the language, regulation and operations of the industries we serve — so the first commit already understands the field."
          />
          <Link href="/industries" className="btn-ghost shrink-0">
            All industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <li key={ind.slug}>
                <Reveal delay={Math.min(i * 0.04, 0.2)}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group flex h-full flex-col gap-3 bg-background p-6 transition-colors hover:bg-paper-soft"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
                    </div>
                    <p className="font-display text-base font-semibold text-foreground">
                      {ind.title}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {ind.tagline}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {ind.focusAreas.map((a) => (
                        <span
                          key={a}
                          className="rounded border border-hairline px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
