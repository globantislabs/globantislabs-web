"use client";

import Link from "next/link";
import { ArrowRight, RefreshCw, LifeBuoy } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { company } from "@/lib/site-data";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PageShell>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-flame/15 blur-[130px]"
        />

        <div className="container-site relative text-center">
          <span className="font-mono text-7xl font-bold leading-none text-white/10 sm:text-8xl">
            500
          </span>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-[3px] w-12 rounded-full bg-gradient-to-r from-flame to-flame-soft"
          />
          <h1 className="mt-6 text-display-lg font-bold text-white">
            Something went wrong on our end.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
            The page hit an unexpected error. We&apos;ve been notified —
            refreshing usually fixes it. If it doesn&apos;t, please reach out.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
            >
              <RefreshCw className="size-4" aria-hidden />
              Try again
            </button>
            <a
              href={company.emailHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <LifeBuoy className="size-4" aria-hidden />
              Email support
            </a>
          </div>

          <Link
            href="/"
            className="mt-12 inline-flex items-center gap-1.5 text-xs text-white/50 transition-colors hover:text-white"
          >
            Or go back home
            <ArrowRight className="size-3" aria-hidden />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
