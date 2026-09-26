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
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "About Us | Globantis Labs",
  description:
    "Engineering excellence. Business impact. Global delivery. Globantis Labs combines technology, innovation, and industry expertise to build digital solutions that help businesses scale, adapt, and lead.",
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

const features = [
  {
    icon: Globe2,
    title: "Global Expertise",
    subtitle: "International Standards, Local Understanding",
    desc: "Delivering technology solutions aligned with global standards, best practices, and evolving industry requirements.",
  },
  {
    icon: Sparkles,
    title: "Innovation First",
    subtitle: "Turning Ideas Into Digital Advantage",
    desc: "We leverage emerging technologies and innovative thinking to transform complex business challenges into intelligent solutions.",
  },
  {
    icon: Settings2,
    title: "Tailored Solutions",
    subtitle: "Built Around Your Business",
    desc: "Every solution is strategically designed around your business goals, processes, customers, and long-term vision.",
  },
  {
    icon: Rocket,
    title: "Scalable Technology",
    subtitle: "Built to Grow With You",
    desc: "Our applications and platforms are engineered for flexibility, scalability, and sustainable business growth.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    subtitle: "Protecting What Matters Most",
    desc: "We integrate security, reliability, and best practices throughout the technology lifecycle to safeguard your digital ecosystem.",
  },
  {
    icon: Target,
    title: "Quality Driven",
    subtitle: "Precision at Every Stage",
    desc: "From architecture and development to testing and deployment, we maintain a strong focus on performance, quality, and reliability.",
  },
  {
    icon: Users,
    title: "Client-Centric Partnership",
    subtitle: "Collaboration Beyond Delivery",
    desc: "We work as an extension of your team, ensuring transparency, communication, and collaboration throughout every stage of the engagement.",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    subtitle: "Faster From Concept to Reality",
    desc: "Our agile approach enables faster development, continuous improvements, and efficient delivery without compromising quality.",
  },
  {
    icon: Workflow,
    title: "End-to-End Capabilities",
    subtitle: "One Partner. Complete Technology Solutions.",
    desc: "From strategy and design to development, cloud, deployment, and support, we provide comprehensive digital capabilities under one roof.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Value",
    subtitle: "Technology That Delivers Business Impact",
    desc: "We focus beyond project completion—building solutions that improve efficiency, enhance customer experiences, and create lasting business value.",
  },
];

const phases = [
  {
    num: "01",
    icon: Compass,
    title: "Discover",
    subtitle: "Understand. Analyze. Define.",
    desc: "We begin by understanding your business, objectives, challenges, target users, and technical requirements to establish a clear project direction.",
  },
  {
    num: "02",
    icon: Map,
    title: "Strategize",
    subtitle: "Plan With Purpose.",
    desc: "Our experts define the technology strategy, project roadmap, architecture, timelines, priorities, and engagement model required to achieve your goals.",
  },
  {
    num: "03",
    icon: PenTool,
    title: "Design",
    subtitle: "Create Experiences That Matter.",
    desc: "We transform requirements into intuitive user experiences and modern interfaces that balance business objectives, usability, and visual excellence.",
  },
  {
    num: "04",
    icon: Code2,
    title: "Develop",
    subtitle: "Engineer With Precision.",
    desc: "Our development teams build robust, scalable, and secure solutions using modern technologies, agile methodologies, and industry best practices.",
  },
  {
    num: "05",
    icon: ClipboardCheck,
    title: "Test",
    subtitle: "Quality at Every Layer.",
    desc: "We conduct comprehensive functional, performance, security, usability, and compatibility testing to ensure the solution meets defined quality standards.",
  },
  {
    num: "06",
    icon: UploadCloud,
    title: "Deploy",
    subtitle: "From Development to Production.",
    desc: "Once approved, we manage deployment, configuration, integration, and production readiness to ensure a smooth transition into the live environment.",
  },
  {
    num: "07",
    icon: Activity,
    title: "Monitor",
    subtitle: "Measure. Optimize. Improve.",
    desc: "After deployment, we monitor system performance and identify opportunities for optimization, enhancement, and continuous improvement.",
  },
  {
    num: "08",
    icon: RefreshCw,
    title: "Evolve",
    subtitle: "Technology That Grows With You.",
    desc: "As your business evolves, we continuously enhance your solution with new features, technologies, integrations, and capabilities.",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Angular", "Vue.js", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", ".NET", "PHP"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "Android", "iOS"],
  },
  {
    category: "AI & Data",
    items: ["Python", "TensorFlow", "Machine Learning", "Data Analytics", "Generative AI"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Microsoft Azure", "Google Cloud"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "CI/CD", "Git", "Cloud Automation"],
  },
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

      {/* ============ 1. Intro ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-label">[ Our promise ]</span>
              <h2 className="mt-3 text-display-xl font-bold text-ink">
                Engineering Excellence.
                <br />
                Business Impact.{" "}
                <span className="text-flame">Global Delivery.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-body md:text-lg">
                We combine technology, innovation, and industry expertise to
                build digital solutions that help businesses scale, adapt, and
                lead in a rapidly evolving digital world.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 2. Why Leading Businesses Choose Us ============ */}
      <section className="relative overflow-hidden bg-shade py-section-md">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 size-80 rounded-full bg-flame/10 blur-[120px]"
        />
        <div className="container-site relative">
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
                    {/* Signature flame top-bar */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    {/* Icon tile */}
                    <div className="flex items-center justify-between">
                      <span className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-7" aria-hidden />
                      </span>
                      <span className="font-mono text-3xl font-bold text-ink/10 transition-colors duration-300 group-hover:text-flame/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Title + subtitle + desc */}
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

      {/* ============ 3. Our Work Process ============ */}
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

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.num}
                  delay={Math.min(i * 0.05, 0.25)}
                  className="h-full"
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-shade p-6 hover:border-flame/40 hover:shadow-lift">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-white text-brand transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-6" aria-hidden />
                      </span>
                      <span className="font-mono text-2xl font-bold text-ink/10 transition-colors duration-300 group-hover:text-flame/30">
                        {p.num}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-brand">
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

      {/* ============ 4. Technologies ============ */}
      <section className="relative overflow-hidden bg-shade py-section-md">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/4 size-80 rounded-full bg-flame/10 blur-[120px]"
        />
        <div className="container-site relative">
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

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((cat, i) => (
              <Reveal
                key={cat.category}
                delay={Math.min(i * 0.05, 0.25)}
                className="h-full"
              >
                <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                  />
                  <div aria-hidden className="rule-flame" />
                  <h3 className="mt-4 text-display-sm font-bold text-ink">
                    {cat.category}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1 rounded-full border border-line bg-shade px-3 py-1.5 text-xs font-medium text-ink/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. CTA ============ */}
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
