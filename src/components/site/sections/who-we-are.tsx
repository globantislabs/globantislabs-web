"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutTabs, aboutValues } from "@/lib/site-data";
import { Container, Section, SectionHeading } from "../primitives";
import { Reveal } from "../reveal";
import { WhoWeAreTabs } from "./who-we-are-tabs";

export function WhoWeAre() {
  return (
    <Section className="border-b border-hairline">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Who we are"
                title="A global software firm built on engineering rigor."
                description="Globantis Labs is a global technology partner combining deep engineering expertise, advanced architecture and a customer-centric approach. We transform ideas into secure, scalable digital solutions for enterprise clients worldwide."
              />
              <div className="mt-8">
                <Link href="/about" className="btn-ghost">
                  Read our story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — mission / vision / history tabs */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <WhoWeAreTabs tabs={aboutTabs} />
            </Reveal>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-2 bg-background p-6">
                <span className="step-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-base font-semibold text-foreground">
                  {v.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
