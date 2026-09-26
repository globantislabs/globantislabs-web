import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Server,
  Smartphone,
  BrainCircuit,
  Cloud,
  Database,
  Boxes,
  ArrowRight,
  Code2,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { technologiesGrid, technologyCategories } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Technologies | Globantis Labs",
  description:
    "Technology That Drives Digital Excellence. We combine modern technologies, intelligent engineering, and scalable architectures to build secure, high-performance digital solutions.",
  path: "/technologies",
  keywords: ["software technologies", "tech stack", "React", "Python", "AWS", "Kubernetes", "AI ML"],
});

const categoryIcons = [Layers, Server, Smartphone, BrainCircuit, Cloud, Database, Boxes];

const techLogoMap: Record<string, string> = {
  "React": "/images/wp/2024-10/React.png",
  "React.js": "/images/wp/2024-10/React.png",
  "Angular": "/images/wp/2024-10/angular.png",
  "Vue.js": "/images/wp/2024-10/vue.png",
  "Node.js": "/images/wp/2024-09/1.png",
  "Python": "/images/wp/2024-09/9.png",
  "Java": "/images/wp/2024-09/13.png",
  "AWS": "/images/wp/2024-09/5.png",
  "Azure": "/images/wp/2024-10/azure.png",
  "Microsoft Azure": "/images/wp/2024-10/azure.png",
  "Docker": "/images/wp/2024-09/2.png",
  "Kubernetes": "/images/wp/2024-09/3-1.png",
  "GitLab": "/images/wp/2024-09/8.png",
  "TensorFlow": "/images/wp/2024-09/12.png",
  "GraphQL": "/images/wp/2024-09/19.png",
  "PostgreSQL": "/images/wp/2024-09/23.png",
  "MongoDB": "/images/wp/2024-09/22.png",
  "Redis": "/images/wp/2024-09/24.png",
  "Kafka": "/images/wp/2024-09/25.png",
  "Terraform": "/images/wp/2024-09/26.png",
  "Elasticsearch": "/images/wp/2024-09/29.png",
  "Puppet": "/images/wp/2024-09/34.png",
  "HTML5": "/images/wp/2024-10/React.png",
  "CSS3": "/images/wp/2024-10/React.png",
  "Next.js": "/images/wp/2024-10/React.png",
  "PHP": "/images/wp/2024-10/laravel.png",
  ".NET": "/images/wp/2024-10/azure.png",
  "Flutter": "/images/wp/2024-10/React.png",
  "Android": "/images/wp/2024-10/React.png",
  "iOS": "/images/wp/2024-10/React.png",
  "Machine Learning": "/images/wp/2024-09/12.png",
  "Data Analytics": "/images/wp/2024-09/9.png",
  "Generative AI": "/images/wp/2024-09/12.png",
  "Google Cloud": "/images/wp/2024-09/5.png",
  "SQL Server": "/images/wp/2024-09/23.png",
  "MySQL": "/images/wp/2024-09/22.png",
  "CI/CD": "/images/wp/2024-09/8.png",
  "Git": "/images/wp/2024-10/git.png",
  "Cloud Automation": "/images/wp/2024-09/2.png",
  "Hotjar": "/images/wp/2024-10/hotjar.png",
  "Laravel": "/images/wp/2024-10/laravel.png",
  "Webflow": "/images/wp/2024-10/webflow.png",
  "WordPress": "/images/wp/2024-10/wordpress.png",
  "Vue": "/images/wp/2024-10/vue.png",
  "Plotly": "/images/wp/2024-10/plotly.png",
  "Grafana": "/images/wp/2024-10/grafana.png",
  "InfluxDB": "/images/wp/2024-10/influxdb.png",
  "Jenkins": "/images/wp/2024-09/6.png",
  "Jupyter": "/images/wp/2024-10/grafana.png",
};

function getTechLogo(name: string): string | null {
  return techLogoMap[name] ?? null;
}

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        title="Technologies"
        label="Technologies"
        image="/images/wp/2025-01/project_new_05.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Technologies" }]}
      />

      {/* ============ 2. Tech logos marquee — navy ============ */}
      <section className="relative overflow-hidden bg-ink py-section-sm text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-flame/15 blur-[120px]"
        />
        <div className="container-site relative">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="section-label !text-brand-light">[ Stack proof ]</span>
              <h2 className="mt-3 text-display-md font-bold text-white">
                The tools our engineers reach for.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                Real tools, used in real production environments — across 250+
                shipped projects and three offices worldwide.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {technologiesGrid.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur transition-colors duration-200 hover:border-flame/40 hover:bg-white/[0.07]"
                >
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={32}
                    height={32}
                    className="size-8 object-contain"
                    unoptimized
                  />
                  <span className="text-sm font-medium text-white/85">{t.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 3. Technology Stack — 7 categories with logos ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Technology stack ]"
              title="Seven categories. One engineering culture."
              lead="Filter by category to see what we'd reach for on day one of a new engagement. Each category maps to a specific team inside Globantis."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {technologyCategories.map((cat, i) => {
              const Icon = categoryIcons[i] ?? Layers;
              return (
                <Reveal
                  key={cat.name}
                  className="h-full"
                  delay={Math.min(i * 0.07, 0.35)}
                >
                  <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-shade p-7 hover:border-flame/40 hover:shadow-lift lg:p-8">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-white text-brand transition-colors duration-500 ease-out-expo group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-7" aria-hidden />
                    </div>
                    <h3 className="mt-6 text-display-sm font-bold text-ink">{cat.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-body md:text-[15px]">
                      {cat.desc}
                    </p>
                    {/* Tech items with logos */}
                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((item) => {
                          const logo = getTechLogo(item);
                          return (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink/80 transition-colors hover:border-brand/40 hover:text-brand"
                            >
                              {logo && (
                                <Image
                                  src={logo}
                                  alt={item}
                                  width={16}
                                  height={16}
                                  className="size-4 object-contain"
                                  unoptimized
                                />
                              )}
                              {item}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 4. CTA ============ */}
      <section className="bg-shade py-section-sm">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-white p-8 text-center md:flex-row md:text-left">
              <div className="max-w-xl">
                <h2 className="text-display-sm font-bold text-ink">
                  Want engineers who know your stack?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Tell us what you're running today. We'll match you with senior
                  engineers who have shipped production code on the same technology.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-lift inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
              >
                Start a project
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
