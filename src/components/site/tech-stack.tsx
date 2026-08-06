"use client";

import { Code2, Container, Cloud, Brain, Boxes, PenTool } from "lucide-react";

/**
 * Tech Stack strip — dark navy band that sits between the hero and the
 * Services section. Shows a horizontal marquee of technology names with
 * small icons, matching the original site's "TRUSTED STACK" strip.
 */
const techs = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Code2 },
  { name: "Node.js", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Container },
  { name: "Python", icon: Code2 },
  { name: "TensorFlow", icon: Brain },
  { name: "Figma", icon: PenTool },
  { name: "GitLab", icon: Boxes },
  { name: "Azure", icon: Cloud },
];

export function TechStack() {
  return (
    <section className="relative overflow-hidden bg-ink-deep py-6">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
      <div className="relative mx-auto flex max-w-[1310px] items-center gap-6 px-6">
        <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-widest text-white/50 lg:inline-block">
          Trusted Stack
        </span>
        <div className="relative flex-1 overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-ink-deep to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-ink-deep to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-10">
            {[...techs, ...techs].map((t, i) => {
              const Icon = t.icon;
              return (
                <span
                  key={i}
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-brand-light"
                >
                  <Icon className="size-4 text-brand-light/70" />
                  {t.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
