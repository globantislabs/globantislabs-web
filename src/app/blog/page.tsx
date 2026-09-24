import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/content-data";

export const metadata = buildMetadata({
  title: "Insights | Globantis Labs",
  description:
    "Engineering notes, case studies, and what we're shipping. Articles on AI, DevOps, security, and building production software at scale.",
  path: "/blog",
  keywords: ["engineering blog", "AI", "DevOps", "SOC 2", "case studies"],
});

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  // All categories
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <PageHero
        title="Insights"
        label="Engineering blog"
        image="/images/wp/2025-02/technology1.png"
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />

      {/* Featured post */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 rounded-2xl border border-line bg-shade p-6 hover:border-flame/40 hover:shadow-lift md:grid-cols-2 md:items-center md:p-8"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={featured.heroImage}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Featured
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {featured.category}
                </span>
                <h2 className="mt-2 text-display-md font-bold leading-tight text-ink">
                  {featured.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-3 text-xs text-body">
                  <span className="font-semibold text-ink">{featured.author}</span>
                  <span>·</span>
                  <span>{new Date(featured.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" aria-hidden />
                    {featured.readingTime}
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Read article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Categories filter strip */}
      <section className="bg-shade py-section-sm">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-ink/70 transition-colors hover:border-brand hover:text-brand"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the posts — grid */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ All articles ]"
              title="Latest from the engineering blog."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal
                key={post.slug}
                delay={Math.min(i * 0.05, 0.25)}
                className="h-full"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group card-lift relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white hover:border-flame/40 hover:shadow-lift"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="text-base font-bold leading-tight text-ink">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-body line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-xs text-body">
                      <span className="font-semibold text-ink">{post.author}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3" aria-hidden />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-site relative">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="text-center">
                <span className="section-label !text-brand-light">[ Newsletter ]</span>
                <h2 className="mt-3 text-display-md font-bold text-white">
                  Get the next article in your inbox.
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                  One email per month with our latest engineering notes, case studies,
                  and what we&apos;re shipping. No spam, unsubscribe anytime.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <NewsletterSignup variant="inline" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
