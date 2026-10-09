import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Sparkles, Bot, Activity } from "lucide-react";
import { Reveal } from "@/components/site/primitives";

/* ============================================================
 * AISection — home page AI showcase section.
 *
 * Per user spec (qwertyu.pdf):
 *  • Top: title "AI Technologies for Business Transformation" +
 *    headline "AI That Drives Business Impact" + intro paragraph +
 *    AI image on the right.
 *  • Middle: "Welcome to AI That Creates Business Value" section
 *    with 4 description paragraphs.
 *  • Bottom: closing tagline band "From AI Potential to Business
 *    Impact."
 *
 * Design pattern matches the HCL-tech style: dark navy bg with
 * grid pattern + flame orb, split hero with offset-cream framed
 * photo, then a max-w-3xl long-form prose block, then a closing
 * quote band.
 * ============================================================ */

const INTRO_PARA =
  "Accelerate your AI and Generative AI journey—from strategy and ideation to enterprise-scale deployment. We help organizations turn intelligent technologies into practical solutions that improve productivity, optimize operations, enhance customer experiences, and create measurable business value.";

const DESCRIPTION_PARAS = [
  "The true potential of AI lies not simply in adopting new technologies, but in turning intelligence into measurable business outcomes.",
  "We help enterprises move from AI experimentation to scalable, production-ready solutions. By combining advanced AI capabilities, engineering expertise, industry knowledge, and modern data foundations, we enable organizations to improve productivity, accelerate innovation, optimize operations, and create new opportunities for growth.",
  "From Generative AI and Agentic AI to AI-powered automation, intelligent analytics, AI engineering, data modernization, and industry-specific solutions, our comprehensive capabilities help organizations integrate AI across their business.",
  "Our focus is simple: turn AI from an emerging technology into a practical engine for sustainable business transformation.",
];

const CAPABILITY_CHIPS = [
  { icon: Sparkles, label: "Generative AI" },
  { icon: Bot, label: "Agentic AI" },
  { icon: BrainCircuit, label: "AI-Powered Automation" },
  { icon: Activity, label: "Intelligent Analytics" },
];

export function AISection() {
  return (
    <>
    <section
      id="ai"
      className="relative overflow-hidden bg-white py-section-md text-ink"
    >
      {/* Decorative grid + flame orbs (signature dark-bg treatment) */}
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-flame/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand/30 blur-[130px]"
      />

      <div className="container-site relative">
        {/* === Top: title + headline + intro + image (2-col split) === */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          {/* Left — text */}
          <div>
            <Reveal>
              <span className="section-label">
                [ AI Technologies for Business Transformation ]
              </span>
              <div aria-hidden className="rule-flame mt-3 mb-6" />
              <h2 className="text-display-lg font-bold leading-[1.08] text-ink sm:text-display-xl">
                AI That Drives{" "}
                <span className="text-flame">Business Impact.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-body sm:text-[17px]">
                {INTRO_PARA}
              </p>

              {/* Capability chips */}
              <div className="mt-8 flex flex-wrap gap-3">
                {CAPABILITY_CHIPS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <span
                      key={c.label}
                      className="inline-flex items-center gap-2 px-1 py-1 text-xs font-semibold text-ink/70"
                    >
                      <Icon aria-hidden className="size-4 text-flame" />
                      {c.label}
                    </span>
                  );
                })}
              </div>

              {/* Primary CTA */}
              <Link
                href="/services/ai-automation"
                className="btn-lift mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-flame px-7 text-sm font-semibold text-white shadow-glow-flame transition-colors hover:bg-flame-soft"
              >
                Explore AI & Automation
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Reveal>
          </div>

          {/* Right — AI image in offset cream frame */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -right-5 -top-5 hidden h-full w-full rounded-3xl bg-cream lg:block"
              />
              <div className="relative overflow-hidden rounded-3xl bg-shade shadow-lift">
                <Image
                  src="/images/ai/ai-hero.png"
                  alt="AI-driven neural network visualization representing business transformation"
                  width={720}
                  height={900}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[560px]"
                  priority={false}
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-24"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,3,61,0.85) 0%, rgba(0,3,61,0) 100%)",
                  }}
                />
                {/* Floating stat chip */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl bg-white/90 px-5 py-3 backdrop-blur shadow-float">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-flame/15 text-flame">
                      <BrainCircuit aria-hidden className="size-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">
                        Outcome
                      </p>
                      <p className="text-sm font-bold text-white">
                        Measurable business value
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-flame">
                    AI → Impact
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* === Bottom section: "Welcome to AI That Creates Business Value" ===
     *     FULL blue background section with heading + 4 paragraphs + closing tagline */}
    <section className="relative overflow-hidden bg-ink py-section-md text-white">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-flame/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-ink/20 blur-[130px]"
      />
      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label text-white !mx-auto !block">
              [ Welcome to AI That Creates Business Value ]
            </span>
            <div
              aria-hidden
              className="mx-auto mt-3 mb-6 h-[2px] w-12 rounded-full bg-gradient-to-r from-flame to-flame-soft"
            />
            <h3 className="text-display-md font-bold leading-snug text-white">
              Welcome to AI That Creates{" "}
              <span className="text-flame">Business Value.</span>
            </h3>
            <div className="mt-7 space-y-4 text-left">
              {DESCRIPTION_PARAS.map((p, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-relaxed text-white/80 sm:text-[17px]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Closing tagline — same blue section */}
        <Reveal>
          <div className="mt-16 lg:mt-20 border-t border-white/15 pt-12 text-center">
            <p className="text-display-sm font-bold leading-tight text-white sm:text-display-md">
              From AI Potential to{" "}
              <span className="text-flame">Business Impact.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
    </>
  );
}
