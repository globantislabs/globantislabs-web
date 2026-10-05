import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Loader2, Hammer, Sparkles } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products — Coming Soon | Globantis Labs",
  description:
    "We're working on something new. Our products page is coming soon — be the first to know when we ship.",
  path: "/products",
  keywords: ["Globantis Labs products", "coming soon", "in development"],
});

export const metadata_viewport = { width: "device-width", initialScale: 1 };

export default function ProductsPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[calc(100vh-200px)] items-center justify-center overflow-hidden bg-ink py-20 text-white">
        {/* Decorative grid + brand orbs (signature dark-bg treatment) */}
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-25" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-20 size-96 rounded-full bg-flame/25 blur-[140px] animate-pulse-slow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -bottom-0 size-96 rounded-full bg-brand/35 blur-[140px] animate-pulse-slow-delay"
        />

        <div className="container-site relative mx-auto max-w-3xl text-center">
          {/* Animated loader — spinning gear + pulsing dots */}
          <div className="relative mx-auto mb-10 flex size-24 items-center justify-center">
            <span className="absolute inset-0 animate-ping-slow rounded-full border-2 border-flame/30" />
            <span className="absolute inset-2 animate-ping-slow-delay rounded-full border-2 border-flame/20" />
            <span className="relative flex size-16 items-center justify-center rounded-full border border-flame/30 bg-white/5 backdrop-blur">
              <Hammer aria-hidden className="size-7 text-flame animate-hammer" />
            </span>
          </div>

          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-flame backdrop-blur">
            <Sparkles className="size-3.5" aria-hidden />
            In Development
          </span>

          {/* Main headline — typewriter feel */}
          <h1 className="mt-6 text-display-xl font-bold leading-[1.05] text-white">
            We&apos;re working on it.
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/70 sm:text-[19px]">
            Our products page is coming soon. We&apos;re building something
            meaningful in the lab — come back shortly, or get notified the
            moment we ship.
          </p>

          {/* "Working on it" tagline with spinner */}
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur">
            <Loader2 aria-hidden className="size-4 animate-spin text-flame" />
            Working on it — check back soon
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full bg-flame px-7 text-sm font-semibold text-white shadow-glow-flame transition-colors hover:bg-flame-soft"
            >
              Get notified
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white/90 transition-colors hover:border-flame hover:text-flame"
            >
              Back to home
            </Link>
          </div>

          {/* Footer caption — animated dots */}
          <p className="mt-12 font-mono text-xs tracking-[0.14em] text-white/40">
            shipping soon
            <span className="ml-1 inline-block animate-blink">.</span>
            <span className="ml-0.5 inline-block animate-blink-delay">.</span>
            <span className="ml-0.5 inline-block animate-blink-delay-2">.</span>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
