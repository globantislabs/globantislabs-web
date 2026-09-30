"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/site/primitives";

export function AnimatedCapabilities({ shortTitle, capabilities }: { shortTitle: string; capabilities: string[] }) {
  // Group capabilities into paragraphs (3-4 per paragraph)
  const groups: string[][] = [];
  for (let i = 0; i < capabilities.length; i += 4) {
    groups.push(capabilities.slice(i, i + 4));
  }

  return (
    <section className="bg-shade py-section-md">
      <div className="container-site">
        <Reveal>
          <div className="max-w-3xl">
            <div aria-hidden className="rule-flame mb-6" />
            <h2 className="text-display-lg font-bold leading-[1.1] text-ink">
              {shortTitle} <span className="text-flame">capabilities.</span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-body">
              Production-ready building blocks — each one scoped, engineered and
              delivered as part of the engagement. {capabilities.length} capabilities
              that ship from day one.
            </p>
          </div>
        </Reveal>

        {/* Render capabilities as explanatory paragraphs, NOT cards or bullet points */}
        <div className="mt-12 max-w-3xl space-y-8">
          {groups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[16px] leading-relaxed text-body">
                {group.map((cap, ci) => {
                  const isFirst = ci === 0;
                  const isLast = ci === group.length - 1;
                  return (
                    <span key={cap}>
                      {isFirst && gi > 0 && "Our "}
                      <span className="font-semibold text-ink">{cap}</span>
                      {isLast ? "." : ci === group.length - 2 ? " and " : ", "}
                    </span>
                  );
                })}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
