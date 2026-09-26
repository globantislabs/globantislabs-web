import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  Sparkles,
  Settings2,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  Zap,
  Workflow,
  TrendingUp,
  Compass,
  Map,
  PenTool,
  Code2,
  ClipboardCheck,
  UploadCloud,
  Activity,
  RefreshCw,
  ArrowRight,
  Quote,
  CheckCircle2,
  Cpu,
  Lock,
  Scale,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us | Globantis Labs",
  description:
    "Engineering Excellence. Business Impact. Global Delivery. Globantis Labs combines technology, innovation, and industry expertise to build digital solutions that help businesses scale, adapt, and lead.",
  path: "/about",
  keywords: [
    "about Globantis Labs",
    "engineering excellence",
    "global IT solutions",
    "digital transformation",
    "technology partner",
  ],
});

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "250+", label: "Projects Delivered" },
  { value: "40+", label: "Global Clients" },
  { value: "30+", label: "Tech Experts" },
];

const whyFeatures = [
  {
    icon: Cpu,
    title: "Expertise & Specialization",
    desc: "We bring deep technical expertise and industry-focused specialization to deliver innovative digital solutions at a global scale.",
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    desc: "We leverage cutting-edge technologies to build intelligent, scalable, and future-ready digital solutions.",
  },
  {
    icon: Lock,
    title: "Security & Risk Management",
    desc: "Security and risk management are integral to everything we build. We adopt a proactive, security-first approach to protect digital assets, ensure data privacy, and mitigate risks across the entire technology lifecycle.",
  },
  {
    icon: Scale,
    title: "Scalability & Flexibility",
    desc: "We design software solutions that grow with your business. Our scalable and flexible architectures ensure that applications adapt seamlessly to changing demands, enabling organizations to expand, innovate, and respond quickly in dynamic global markets.",
  },
];

const features = [
  { icon: Globe2, title: "Global Expertise", subtitle: "International Standards, Local Understanding", desc: "Delivering technology solutions aligned with global standards, best practices, and evolving industry requirements." },
  { icon: Sparkles, title: "Innovation First", subtitle: "Turning Ideas Into Digital Advantage", desc: "We leverage emerging technologies and innovative thinking to transform complex business challenges into intelligent solutions." },
  { icon: Settings2, title: "Tailored Solutions", subtitle: "Built Around Your Business", desc: "Every solution is strategically designed around your business goals, processes, customers, and long-term vision." },
  { icon: Rocket, title: "Scalable Technology", subtitle: "Built to Grow With You", desc: "Our applications and platforms are engineered for flexibility, scalability, and sustainable business growth." },
  { icon: ShieldCheck, title: "Security by Design", subtitle: "Protecting What Matters Most", desc: "We integrate security, reliability, and best practices throughout the technology lifecycle to safeguard your digital ecosystem." },
  { icon: Target, title: "Quality Driven", subtitle: "Precision at Every Stage", desc: "From architecture and development to testing and deployment, we maintain a strong focus on performance, quality, and reliability." },
  { icon: Users, title: "Client-Centric Partnership", subtitle: "Collaboration Beyond Delivery", desc: "We work as an extension of your team, ensuring transparency, communication, and collaboration throughout every stage of the engagement." },
  { icon: Zap, title: "Agile Delivery", subtitle: "Faster From Concept to Reality", desc: "Our agile approach enables faster development, continuous improvements, and efficient delivery without compromising quality." },
  { icon: Workflow, title: "End-to-End Capabilities", subtitle: "One Partner. Complete Technology Solutions.", desc: "From strategy and design to development, cloud, deployment, and support, we provide comprehensive digital capabilities under one roof." },
  { icon: TrendingUp, title: "Long-Term Value", subtitle: "Technology That Delivers Business Impact", desc: "We focus beyond project completion—building solutions that improve efficiency, enhance customer experiences, and create lasting business value." },
];

const phases = [
  { num: "01", icon: Compass, title: "Discover", subtitle: "Understand. Analyze. Define.", desc: "We begin by understanding your business, objectives, challenges, target users, and technical requirements to establish a clear project direction." },
  { num: "02", icon: Map, title: "Strategize", subtitle: "Plan With Purpose.", desc: "Our experts define the technology strategy, project roadmap, architecture, timelines, priorities, and engagement model required to achieve your goals." },
  { num: "03", icon: PenTool, title: "Design", subtitle: "Create Experiences That Matter.", desc: "We transform requirements into intuitive user experiences and modern interfaces that balance business objectives, usability, and visual excellence." },
  { num: "04", icon: Code2, title: "Develop", subtitle: "Engineer With Precision.", desc: "Our development teams build robust, scalable, and secure solutions using modern technologies, agile methodologies, and industry best practices." },
  { num: "05", icon: ClipboardCheck, title: "Test", subtitle: "Quality at Every Layer.", desc: "We conduct comprehensive functional, performance, security, usability, and compatibility testing to ensure the solution meets defined quality standards." },
  { num: "06", icon: UploadCloud, title: "Deploy", subtitle: "From Development to Production.", desc: "Once approved, we manage deployment, configuration, integration, and production readiness to ensure a smooth transition into the live environment." },
  { num: "07", icon: Activity, title: "Monitor", subtitle: "Measure. Optimize. Improve.", desc: "After deployment, we monitor system performance and identify opportunities for optimization, enhancement, and continuous improvement." },
  { num: "08", icon: RefreshCw, title: "Evolve", subtitle: "Technology That Grows With You.", desc: "As your business evolves, we continuously enhance your solution with new features, technologies, integrations, and capabilities." },
];

const techStack = [
  { category: "Frontend", items: ["React.js", "Next.js", "Angular", "Vue.js", "HTML5", "CSS3"] },
  { category: "Backend", items: ["Node.js", "Python", "Java", ".NET", "PHP"] },
  { category: "Mobile", items: ["Flutter", "React Native", "Android", "iOS"] },
  { category: "AI & Data", items: ["Python", "TensorFlow", "Machine Learning", "Data Analytics", "Generative AI"] },
  { category: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "Git", "Cloud Automation"] },
];

const industries = [
  "Financial Services", "Healthcare", "Education", "Automation",
  "Logistics", "Cybersecurity", "E-commerce & Retail", "Automotive",
];

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        title="About Globantis Labs"
        label="About company"
        image="/images/wp/2025-01/about.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* ============ 1. About intro — editorial 2-col with image ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: copy */}
            <Reveal>
              <SectionHeading
                label="[ About company ]"
                title={
                  <>
                    Building The Future With{" "}
                    <span className="text-flame">Cutting-Edge IT Solutions</span>
                  </>
                }
                lead="Globantis Labs is a global software development company focused on delivering high-quality, scalable, and secure digital solutions for clients across the USA, Canada, UAE, and other international markets. Founded with a strong global vision, we help businesses leverage technology to drive growth, efficiency, and innovation in a competitive digital landscape."
              />
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                We specialize in custom software development, web and mobile
                applications, cloud-based systems, AI-driven solutions, and enterprise
                platforms tailored to meet international business standards. Our
                solutions are designed with a deep understanding of global compliance,
                performance expectations, security requirements, and cross-border
                scalability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                >
                  Start a project
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  href="/why-choose-us"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink shadow-soft hover:border-brand hover:text-brand hover:shadow-lift"
                >
                  Why choose us
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </Reveal>

            {/* Right: editorial image with offset frame + secondary image */}
            <Reveal delay={0.1} className="relative">
              <div
                aria-hidden
                className="absolute -right-5 -top-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/wp/2025-01/about.jpg"
                  alt="Globantis Labs team at work"
                  width={720}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden w-44 overflow-hidden rounded-xl border-4 border-white shadow-lift sm:block">
                <Image
                  src="/images/wp/2025-01/about-1.jpg"
                  alt="About Globantis"
                  width={180}
                  height={180}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 2. Stats band — thin navy strip ============ */}
      <section className="bg-ink py-section-sm text-white">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={Math.min(i * 0.08, 0.32)}>
                <div className="text-center">
                  <div className="font-mono text-3xl font-bold text-white sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-white/60 sm:text-sm">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. Why Globantis — navy section with glass cards ============ */}
      <section className="relative overflow-hidden bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
        <div
          aria-hidden
          className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-flame/20 blur-[130px]"
        />
        <div className="container-site relative">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <span className="section-label !text-brand-light">[ Why Globantis ]</span>
                <h2 className="mt-3 text-display-lg font-bold text-white">
                  We Make The Most Creative{" "}
                  <span className="text-brand-light">Digital Solutions</span>
                </h2>
                <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/65">
                  We are giving IT Solutions Services over the world — combining
                  global expertise, advanced engineering, and a customer-centric
                  approach.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur lg:items-end">
                <Quote className="size-8 text-brand-light" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-right">
                  &ldquo;Join our growing list of happy customers today —
                  organizations across 12+ countries trust Globantis Labs to
                  power their digital transformation.&rdquo;
                </p>
                <Link
                  href="/contact"
                  className="btn-lift mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark lg:w-auto"
                >
                  Let&apos;s Talk
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Feature cards — glass on navy, different from white cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30 transition-transform duration-300 ease-out-quart group-hover:scale-105">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 text-display-sm font-bold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
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

          {/* Industries band */}
          <div className="mt-16 scroll-mt-28">
            <Reveal>
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  Industries we serve
                </span>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75 transition-colors duration-200 hover:border-flame/40 hover:bg-white/[0.07] hover:text-white"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 4. Why Leading Businesses Choose Us — white cards ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Why choose us ]"
              title="Why Leading Businesses Choose Us"
              lead="Technology built with expertise. Solutions designed for impact. Partnerships built for the future."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal
                  key={f.title}
                  delay={Math.min(i * 0.05, 0.25)}
                  className="h-full"
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift md:p-7">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex items-center justify-between">
                      <span className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-7" aria-hidden />
                      </span>
                      <span className="font-mono text-3xl font-bold text-ink/10 transition-colors duration-300 group-hover:text-flame/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-display-sm font-bold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-brand">
                      {f.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      {f.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 5. Our Work Process — horizontal connected stepper ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ How we work ]"
              title="Our Work Process"
              lead="From Vision to Value — A Structured Approach to Digital Excellence"
              align="center"
            />
          </Reveal>
          <Reveal delay={0.07}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-body md:text-base">
              We follow a collaborative and transparent process that transforms
              ideas into scalable, reliable, and high-performing digital
              solutions.
            </p>
          </Reveal>

          {/* Horizontal connected stepper — circle icons + arrows between cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {phases.map((p, i) => {
              const Icon = p.icon;
              const isLastInRow = (i + 1) % 4 === 0;
              return (
                <Reveal
                  key={p.num}
                  delay={Math.min(i * 0.05, 0.25)}
                  className="relative"
                >
                  {/* Arrow connector — only on desktop, not on last card of each row */}
                  {!isLastInRow && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-3 top-12 z-10 hidden lg:flex size-6 items-center justify-center rounded-full border border-line bg-white text-brand shadow-sm"
                    >
                      <ArrowRight className="size-3" aria-hidden />
                    </span>
                  )}

                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-5 hover:border-flame/40 hover:shadow-lift sm:p-6">
                    {/* Signature flame top-bar */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />

                    {/* Circle icon — branded gradient, different from square tiles elsewhere */}
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white shadow-lg shadow-brand/30 transition-transform duration-300 ease-out-quart group-hover:scale-110">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="font-mono text-2xl font-bold text-ink/10 transition-colors duration-300 group-hover:text-flame/30">
                        {p.num}
                      </span>
                    </div>

                    {/* Title + subtitle + description */}
                    <h3 className="mt-4 text-base font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold text-brand">
                      {p.subtitle}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 6. Technologies — chips only (no card borders, different from everything else) ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Tech stack ]"
              title="Technologies"
              lead="Technology That Drives Digital Excellence"
              align="center"
            />
          </Reveal>
          <Reveal delay={0.07}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-body md:text-base">
              We combine modern technologies, intelligent engineering, and
              scalable architectures to build secure, high-performance digital
              solutions for businesses worldwide.
            </p>
          </Reveal>

          {/* Chips layout — no cards, just label + chips per row */}
          <div className="mx-auto mt-14 max-w-4xl space-y-6">
            {techStack.map((cat, i) => (
              <Reveal key={cat.category} delay={Math.min(i * 0.04, 0.2)}>
                <div className="flex flex-col gap-2 border-b border-line pb-6 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6">
                  <div className="flex items-center gap-2 sm:w-40 sm:shrink-0">
                    <span aria-hidden className="rule-flame" />
                    <span className="text-sm font-bold text-ink">{cat.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-ink/80 transition-colors hover:bg-brand hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. CTA ============ */}
      <CTABand
        label="[ Let's talk ]"
        title="Let's build the future together."
        desc="Reach out and discover how Globantis Labs can engineer your next big thing."
        ctaHref="/contact"
        ctaLabel="Get in touch"
        tone="ink"
      />
    </PageShell>
  );
}
