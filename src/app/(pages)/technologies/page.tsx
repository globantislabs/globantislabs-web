"use client";

import * as React from "react";
import { PageShell } from "@/components/site/page-shell";
import { PageBanner, CTAStrip } from "@/components/site/page-banner";
import { Container, Section, SectionHeading } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { technologiesGrid } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function TechnologiesPage() {
  // Categories derived from the data — used as filter chips
  const categories = React.useMemo(
    () => ["All", ...Array.from(new Set(technologiesGrid.map((t) => t.category)))],
    []
  );
  const [active, setActive] = React.useState("All");
  const filtered = active === "All"
    ? technologiesGrid
    : technologiesGrid.filter((t) => t.category === active);

  return (
    <PageShell>
      <PageBanner
        eyebrow="Technologies"
        title="Our engineering stack, in the open."
        description="The tools, languages and platforms our engineers use every day. We pick boring, proven technology for production and adopt frontier tools only when they earn their keep."
        crumbs={[{ label: "Home", href: "/" }, { label: "Technologies" }]}
      />

      <Section className="border-b border-hairline">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Toolchain"
              title="Thirty technologies, four disciplines."
              description="Filter by category to see what we'd reach for on day one of a new engagement. Every entry below has shipped production code for at least one of our clients."
            />
          </Reveal>

          {/* Category filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  active === c
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-hairline bg-paper text-foreground hover:border-brand"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Tech grid — typographic, not card-based */}
          <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {filtered.map((t, i) => (
              <Reveal key={t.name} delay={Math.min(i * 0.02, 0.15)}>
                <li className="flex aspect-[4/3] flex-col items-start justify-between gap-1 bg-background p-4">
                  <span className="font-display text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {t.category}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <CTAStrip
        heading="Want engineers who know your stack?"
        body="Tell us what you're running today. We'll match you with senior engineers who have shipped production code on the same technology."
        buttonLabel="Start a project"
        href="/contact"
      />
    </PageShell>
  );
}
