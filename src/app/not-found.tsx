import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink text-white">
        {/* Subtle grid texture */}
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-flame/15 blur-[130px]"
        />

        <div className="container-site relative text-center">
          {/* 404 mark — oversized, with flame accent */}
          <p className="font-mono text-[10rem] font-bold leading-none text-white/10 sm:text-[14rem]">
            404
          </p>
          <span
            aria-hidden
            className="mx-auto block h-[3px] w-12 rounded-full bg-gradient-to-r from-flame to-flame-soft"
          />
          <h1 className="mt-6 text-display-lg font-bold text-white">
            This page went off-grid.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist — or the link you
            followed is broken. Let&apos;s get you back on track.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
            >
              <Home className="size-4" aria-hidden />
              Back to home
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <Search className="size-4" aria-hidden />
              Browse services
            </Link>
          </div>

          {/* Helpful links strip */}
          <div className="mx-auto mt-12 max-w-2xl border-t border-white/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Popular pages
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <Link
                href="/about"
                className="text-white/75 transition-colors hover:text-white"
              >
                About
              </Link>
              <Link
                href="/case-studies"
                className="text-white/75 transition-colors hover:text-white"
              >
                Case studies
              </Link>
              <Link
                href="/blog"
                className="text-white/75 transition-colors hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-white/75 transition-colors hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/appointment"
                className="text-white/75 transition-colors hover:text-white"
              >
                Book a call
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-1.5 text-xs text-white/50 transition-colors hover:text-white"
          >
            Still stuck? Email us
            <ArrowRight className="size-3" aria-hidden />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
