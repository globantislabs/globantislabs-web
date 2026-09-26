import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Quote,
  ShieldCheck,
  Users,
  Cpu,
  Globe2,
  Rocket,
  Scale,
  Sparkles,
  Settings2,
  Target,
  Zap,
  Workflow,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import {
  whyChooseTop,
  whyChooseGrid,
  whyChooseComparison,
  whyChooseFAQ,
  whyFeatures,
  stats,
  valueTags,
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Why Choose Us | Globantis Labs",
  description:
    "We combine technology, innovation, and industry expertise to build digital solutions that help businesses scale, adapt, and lead — engineering excellence, business impact, and global delivery.",
  path: "/why-choose-us",
  keywords: [
    "why choose Globantis Labs",
    "trusted IT partner",
    "global software engineering",
    "secure software development",
    "engineering excellence",
    "tailored software solutions",
    "agile delivery",
  ],
});

/* ------------------------------------------------------------
   10-card feature grid — whyChooseTop (3) + whyChooseGrid (7).
   Each desc field has a tagline as its first sentence(s), e.g.
   "International Standards, Local Understanding. Delivering technology..."
   We split that out so it can render as a brand-orange subtitle.
   ------------------------------------------------------------ */
const topIcons: LucideIcon[] = [Globe2, Sparkles, Settings2];
const gridIcons: LucideIcon[] = [
  Rocket,
  ShieldCheck,
  Target,
  Users,
  Zap,
  Workflow,
  TrendingUp,
];

type FeatureCard = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const featureCards: FeatureCard[] = [
  ...whyChooseTop.map((item, i) => ({ ...item, icon: topIcons[i] })),
  ...whyChooseGrid.map((item, i) => ({ ...item, icon: gridIcons[i] })),
];

/**
 * Split a card's combined desc into:
 *   - subtitle  (the first tagline sentence — short phrases like "One Partner." are merged with the next)
 *   - description (the remaining explanatory paragraph)
 */
function splitCardCopy(desc: string): { subtitle: string; description: string } {
  const firstBreak = desc.indexOf(". ");
  if (firstBreak === -1) {
    return { subtitle: "", description: desc };
  }

  let subtitle = desc.slice(0, firstBreak + 1); // include trailing period
  let remainder = desc.slice(firstBreak + 2);

  // Very short first sentence (e.g. "One Partner.") → merge with the next sentence
  // so the tagline reads as one phrase ("One Partner. Complete Technology Solutions.").
  if (subtitle.trim().split(/\s+/).length <= 2) {
    const secondBreak = remainder.indexOf(". ");
    if (secondBreak !== -1) {
      subtitle = `${subtitle} ${remainder.slice(0, secondBreak + 1)}`;
      remainder = remainder.slice(secondBreak + 2);
    }
  }

  // Trim the trailing period for a cleaner tagline display.
  subtitle = subtitle.trim().replace(/\.$/, "").trim();

  return { subtitle, description: remainder.trim() };
}

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        title="Why Choose Us"
        label="Why choose us"
        image="/images/wp/2025-02/about_o01.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]}
      />

      {/* ============ 1. Intro promise — centered text on white ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Our promise ]"
              title={
                <>
                  Engineering Excellence. Business Impact.{" "}
                  <span className="text-flame">Global Delivery.</span>
                </>
              }
              lead="We combine technology, innovation, and industry expertise to build digital solutions that help businesses scale, adapt, and lead in a rapidly evolving digital world."
              align="center"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ Editorial image break — full-bleed with navy overlay ============ */}
      <section className="relative h-[320px] overflow-hidden bg-ink sm:h-[420px] lg:h-[480px]">
        <Image
          src="/images/wp/2025-01/blog_new_03.jpg"
          alt="Globantis Labs engineers collaborating on a digital product launch"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Navy gradient overlay — left-heavy for F-pattern legibility */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,3,61,0.94) 0%, rgba(11,22,94,0.72) 45%, rgba(11,22,94,0.5) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(0,3,61,0.85) 0%, rgba(0,3,61,0) 100%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/3 size-72 rounded-full bg-flame/20 blur-[120px]"
        />

        <div className="container-site relative flex h-full items-center">
          <Reveal className="max-w-2xl">
            <span className="section-label !text-brand-light">
              [ Our promise ]
            </span>
            <p className="mt-2 text-display-md font-bold leading-snug text-white sm:text-display-lg">
              Built right. Built to last.{" "}
              <span className="text-flame">Built for impact.</span>
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Every engagement is engineered for outcomes — measurable
              business value that compounds long after launch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 2. Why leading businesses choose us — 10 feature cards ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Why leading businesses choose us ]"
              title={
                <>
                  Technology built with expertise. Solutions designed for
                  impact.{" "}
                  <span className="text-flame">
                    Partnerships built for the future.
                  </span>
                </>
              }
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {featureCards.map((card, i) => {
              const Icon = card.icon;
              const { subtitle, description } = splitCardCopy(card.desc);
              return (
                <Reveal
                  key={card.title}
                  delay={Math.min(i * 0.06, 0.36)}
                  className="h-full"
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-shade p-7 hover:border-flame/40 hover:shadow-lift sm:p-8">
                    {/* Signature flame top-bar on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    {/* Icon tile — square, cream → brand on hover */}
                    <div>
                      <span className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white group-hover:shadow-glow-flame">
                        <Icon className="size-7" />
                      </span>
                    </div>
                    <h3 className="mt-5 text-display-sm font-bold text-ink">
                      {card.title}
                    </h3>
                    {subtitle && (
                      <p className="mt-1 text-sm font-semibold leading-snug text-brand">
                        {subtitle}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      {description || card.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 3. Stats band — engineering outcomes ============ */}
      <section className="relative overflow-hidden bg-ink py-section-sm text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
        <div
          aria-hidden
          className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-flame/15 blur-[120px]"
        />
        <div className="container-site relative">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="section-label !text-brand-light">
                [ By the numbers ]
              </span>
              <h2 className="mt-3 text-display-md font-bold text-white">
                A track record clients can rely on.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={Math.min(i * 0.08, 0.32)}
                className="h-full"
              >
                <div className="flex h-full flex-col gap-2 p-6 sm:p-8">
                  <div aria-hidden className="rule-flame" />
                  <div className="mt-3 font-mono text-4xl font-bold leading-none text-white sm:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs leading-tight text-white/60 sm:text-sm">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. Engineering principles — navy glass cards ============ */}
      <section className="relative overflow-hidden bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-flame/15 blur-[130px]"
        />
        <div className="container-site relative">
          <Reveal>
            <SectionHeading
              label="[ Engineering principles ]"
              title="What every Globantis engineer signs up for."
              lead="Four principles that shape how we hire, how we ship and how we resolve the difficult trade-offs every complex project surfaces."
              tone="dark"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal
                  key={f.title}
                  delay={Math.min(i * 0.07, 0.35)}
                  className="h-full"
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur hover:border-flame/40 hover:bg-white/[0.07]">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex size-14 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 text-display-sm font-bold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/65">
                      {f.desc}
                    </p>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-8 -right-4 font-mono text-[7rem] font-bold leading-none text-white/[0.04]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 6. Value pills + quote ============ */}
      <section className="bg-cream py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote className="mx-auto size-10 text-flame" aria-hidden />
              <p className="mt-6 text-display-md font-bold leading-snug text-ink">
                &ldquo;Join our growing list of happy customers today —
                organizations across 12+ countries trust Globantis Labs to
                power their digital transformation.&rdquo;
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-2.5">
                {valueTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-brand/20 bg-white px-4 py-2 text-sm font-medium text-ink/80 transition-colors duration-200 hover:border-brand hover:text-brand"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 8. CTA ============ */}
      <CTABand
        label="[ Ready to talk? ]"
        title="See the work process behind these promises."
        desc="Every promise above maps to a concrete stage in our delivery process. Read how we operate — then judge us against it."
        ctaHref="/work-process"
        ctaLabel="Read the work process"
        tone="brand"
      />
    </>
  );
}
