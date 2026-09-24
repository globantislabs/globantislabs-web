"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2, Download, Sparkles, BrainCircuit, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";

import { Reveal } from "@/components/site/primitives";
import { useToast } from "@/hooks/use-toast";
import { company } from "@/lib/site-data";

export default function EbookPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [email, setEmail] = React.useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, slug: "state-of-ai-2026" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      toast({
        title: "Check your inbox.",
        description: "We just emailed you the PDF download link.",
      });
    } catch {
      toast({
        title: "Something went wrong.",
        description: `Email us at ${company.email} and we'll send the PDF directly.`,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageShell>
    <>
      <PageHero
        title="The 2026 State of AI in Enterprise"
        label="eBook · Free"
        image="/images/wp/2025-01/blog_new_05.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "eBook" }]}
      />

      {/* eBook hero — split: cover on left, form on right */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left — book cover + what's inside */}
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-cream px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                  <Sparkles className="size-3.5" aria-hidden />
                  42 pages · 9 min read
                </span>
                <h2 className="mt-5 text-display-lg font-bold text-ink">
                  Where AI is actually shipping in 2026.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-body md:text-lg">
                  We surveyed 30 enterprise AI deployments across financial services,
                  healthcare, retail, logistics and SaaS. This eBook is what we
                  learned about what works, what fails, and where the frontier is
                  moving next.
                </p>

                {/* What's inside */}
                <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-ink/45">
                  What&apos;s inside
                </p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "The 5 AI patterns that ship in production (and the 3 that don't)",
                    "Why 70% of POC models never make it past the pilot",
                    "The MLOps stack we built to ship 30+ production models",
                    "Industry breakdowns: fintech, healthcare, retail, logistics",
                    "Real metrics from real deployments — precision, latency, ROI",
                    "A 90-day roadmap for your first production AI deployment",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right — book cover image + form */}
            <Reveal delay={0.1}>
              <div className="relative">
                {/* Decorative offset frame */}
                <div
                  aria-hidden
                  className="absolute -right-4 -top-4 hidden size-full rounded-2xl border border-flame/30 lg:block"
                />
                <div className="relative overflow-hidden rounded-2xl border border-line bg-shade p-6 shadow-float">
                  {/* Book cover */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                    <Image
                      src="/images/wp/2025-01/blog_new_05.jpg"
                      alt="The 2026 State of AI in Enterprise eBook cover"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 via-ink-deep/20 to-transparent"
                    />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-flame">
                        Globantis Labs
                      </span>
                      <p className="mt-1 font-display text-lg font-bold leading-tight">
                        The 2026 State of AI in Enterprise
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  {done ? (
                    <div className="mt-6 rounded-xl border border-brand/20 bg-cream p-5 text-center">
                      <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand text-white">
                        <Check className="size-6" aria-hidden />
                      </span>
                      <h3 className="mt-3 text-base font-bold text-ink">
                        Check your inbox
                      </h3>
                      <p className="mt-1 text-sm text-body">
                        We just emailed the PDF download link to{" "}
                        <span className="font-semibold text-ink">{email}</span>.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="mt-6">
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-semibold text-ink/70"
                      >
                        Work email <span className="text-brand">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="h-12 w-full rounded-xl border border-line bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-body/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
                      />
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-lift mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark disabled:opacity-60"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="size-4 animate-spin" /> Sending...
                          </>
                        ) : (
                          <>
                            <Download className="size-4" aria-hidden />
                            Get the free PDF
                          </>
                        )}
                      </button>
                      <p className="mt-3 text-center text-[11px] text-body">
                        No spam. We&apos;ll send you the PDF and add you to our monthly
                        insights — unsubscribe anytime.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What you'll learn — chapter breakdown */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-label">[ Inside the eBook ]</span>
              <h2 className="mt-3 text-display-lg font-bold text-ink">
                Six chapters, all backed by real deployments.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body">
                Every chapter is grounded in a real production deployment we shipped
                for a client. No theory. No vendor pitches. What actually works.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "AI customer support",
                icon: BrainCircuit,
                desc: "How to ship chatbots that actually resolve tickets — not escalate 90% of them.",
              },
              {
                num: "02",
                title: "Predictive analytics",
                icon: BarChart3,
                desc: "Demand forecasting, churn prediction, risk scoring — with feature stores and retraining.",
              },
              {
                num: "03",
                title: "Computer vision",
                icon: Sparkles,
                desc: "Defect detection, OCR, medical imaging — what works at the edge vs cloud.",
              },
              {
                num: "04",
                title: "NLP & document AI",
                icon: BrainCircuit,
                desc: "Document classification, extraction, RAG pipelines — with audit logs for compliance.",
              },
              {
                num: "05",
                title: "Fraud detection",
                icon: BarChart3,
                desc: "Real-time scoring at 4,500 transactions/second with explainability for compliance.",
              },
              {
                num: "06",
                title: "RPA & automation",
                icon: Sparkles,
                desc: "Bots that handle repetitive workflows across legacy + SaaS systems — and don't break.",
              },
            ].map((c, i) => (
              <Reveal
                key={c.num}
                delay={Math.min(i * 0.05, 0.25)}
                className="h-full"
              >
                <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                      <c.icon className="size-6" aria-hidden />
                    </span>
                    <span className="font-mono text-3xl font-bold text-ink/10">
                      {c.num}
                    </span>
                  </div>
                  <h3 className="mt-4 text-display-sm font-bold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip — final push */}
      <section className="bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-site relative">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="text-display-md font-bold text-white">
                Read it tonight. Use it tomorrow.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                The eBook is 42 pages, 9 min read. You&apos;ll finish it on the
                commute home and have a clear picture of where AI is shipping in
                2026 — and where it isn&apos;t.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="#top"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                >
                  Get the free PDF
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
    </PageShell>
  );
}
