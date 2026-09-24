import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Bell } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";

import { Reveal } from "@/components/site/primitives";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products | Globantis Labs",
  description:
    "Three in-house products from Globantis Labs are in private beta. Be the first to know when we ship.",
  path: "/products",
  keywords: ["Globantis Labs products", "Photolabs", "TranscriptHQ", "Try Before"],
});

export default function ProductsPage() {
  return (
    <PageShell>
    <>
      <PageHero
        title="Products"
        label="Coming soon"
        image="/images/wp/2025-02/vrhm2.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      {/* Coming soon — main message */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                <Sparkles className="size-3.5" aria-hidden />
                In private beta
              </span>
              <h2 className="mt-6 text-display-lg font-bold text-ink">
                Three products in the lab.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-body md:text-lg">
                We&apos;re building three products on the same engineering culture
                that ships our client work. They&apos;re in private beta now — be
                the first to know when we ship, or request early access.
              </p>
            </div>
          </Reveal>

          {/* Product placeholders — Coming Soon cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Photolabs",
                tagline: "AI-powered photo editing studio",
                desc: "A web-based photo editor with AI background removal, generative fill, and batch processing built for high-volume e-commerce teams.",
                icon: Sparkles,
                image: "/images/wp/2025-02/vr-girl.jpg",
              },
              {
                name: "TranscriptHQ",
                tagline: "Enterprise transcription & QA",
                desc: "Speaker-aware transcription, sentiment analysis, and a QA dashboard for call centres and qualitative research teams.",
                icon: Bell,
                image: "/images/wp/2025-02/technology1.png",
              },
              {
                name: "Try Before",
                tagline: "Pre-purchase product experience",
                desc: "AR-powered product try-on for e-commerce. Reduce returns by letting customers see it on themselves before they buy.",
                icon: Sparkles,
                image: "/images/wp/2025-02/start-up.png",
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={Math.min(i * 0.08, 0.32)} className="h-full">
                <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-shade p-6 hover:border-flame/40 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-white text-brand">
                      <p.icon className="size-6" aria-hidden />
                    </span>
                    <span className="rounded-full bg-ink/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink/50">
                      Coming soon
                    </span>
                  </div>
                  <h3 className="mt-5 text-display-sm font-bold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand">
                    {p.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {p.desc}
                  </p>
                  <div className="mt-6 border-t border-line pt-4">
                    <p className="text-xs text-body">
                      Want early access?{" "}
                      <Link
                        href="/contact"
                        className="font-semibold text-brand hover:underline"
                      >
                        Reach out
                      </Link>{" "}
                      — we&apos;re onboarding design partners.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup — be notified when we ship */}
      <section className="relative overflow-hidden bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -right-32 top-0 size-80 rounded-full bg-flame/15 blur-[120px]"
        />
        <div className="container-site relative">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="text-center">
                <span className="section-label !text-brand-light">[ Get notified ]</span>
                <h2 className="mt-3 text-display-md font-bold text-white">
                  Be first to know when we ship.
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                  One email when each product goes live. No spam, unsubscribe anytime.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <NewsletterSignup variant="inline" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-white p-8 md:flex-row md:items-center md:p-10">
              <div className="max-w-xl">
                <span className="section-label">[ Design partner ]</span>
                <h2 className="mt-3 text-display-md font-bold text-ink">
                  Want to shape the roadmap?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-body md:text-base">
                  We onboard 3–5 design partners per product. You get free access
                  during the beta, and we get your feedback. Reach out if your team
                  would benefit from any of the three.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-lift inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
              >
                Become a design partner
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
    </PageShell>
  );
}
