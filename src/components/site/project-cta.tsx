"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * "Have Any Projects In Your Mind?" CTA banner.
 *
 * Background: solid bright orange (--e-global-color-primary = #FB8D2E),
 * matches original Elementor section `08a1ef0`.
 *
 * Sits BETWEEN the Consultation section and the Footer as its own orange band.
 * Uses the original `call-to-action.png` as a decorative graphic on the right.
 */
export function ProjectCTA() {
  return (
    <section className="relative overflow-hidden bg-brand">
      {/* Decorative call-to-action.png (original graphic) */}
      <Image
        src="/images/wp/2024-10/call-to-action.png"
        alt=""
        width={420}
        height={420}
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 opacity-20 lg:block"
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(11,22,94,0.3) 0, transparent 40%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-[1310px] flex-col items-start gap-6 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[40px] lg:leading-[50px]">
            Have Any Projects In Your Mind ?
          </h2>
          <p className="mt-3 text-sm text-white/85 sm:text-base">
            AI, automation, and emerging technologies are converging to
            transform how organizations operate, compete, and scale.
          </p>
        </div>
        <Link
          href="#consultation"
          className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[5px] bg-ink px-7 text-sm font-medium text-white shadow-lg shadow-ink/30 transition-all hover:bg-ink-deep"
        >
          Let&apos;s Discuss Your Project
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
