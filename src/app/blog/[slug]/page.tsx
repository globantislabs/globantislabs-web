import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";

import { Reveal, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/content-data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | Globantis Labs`,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // JSON-LD for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Globantis Labs",
    },
    keywords: post.tags.join(", "),
    image: post.heroImage,
  };

  return (
    <PageShell>
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title={post.title}
        label={post.category}
        image={post.heroImage}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/blog" },
          { label: post.category },
        ]}
      />

      {/* Article body */}
      <article className="bg-white py-section-md">
        <div className="container-site max-w-3xl">
          {/* Meta row */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 border-b border-line pb-6 text-xs text-body">
              <span className="font-semibold text-ink">{post.author}</span>
              <span className="text-ink/45">·</span>
              <span>{post.authorRole}</span>
              <span className="text-ink/45">·</span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-ink/45">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3" aria-hidden />
                {post.readingTime}
              </span>
            </div>
          </Reveal>

          {/* Body blocks */}
          <div className="mt-8 space-y-10">
            {post.body.map((block, i) => (
              <Reveal key={i} delay={Math.min(i * 0.03, 0.15)}>
                <div>
                  {block.heading && (
                    <h2 className="text-display-md font-bold leading-snug text-ink">
                      {block.heading}
                    </h2>
                  )}
                  {block.paragraphs && (
                    <div className={block.heading ? "mt-4" : ""}>
                      {block.paragraphs.map((p, j) => (
                        <p
                          key={j}
                          className="text-[17px] leading-relaxed text-body"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                  {block.bullets && (
                    <ul className={block.heading ? "mt-4 space-y-2" : "space-y-2"}>
                      {block.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-[16px] leading-relaxed text-body"
                        >
                          <span
                            aria-hidden
                            className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-brand"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {block.quote && (
                    <blockquote className="mt-6 border-l-2 border-brand bg-shade px-6 py-5">
                      <p className="text-display-sm font-bold leading-snug text-ink">
                        &ldquo;{block.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-line pt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink/45">
              Tags
            </span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-shade px-3 py-1 text-xs font-medium text-ink/70"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Author card */}
          <div className="mt-10 rounded-2xl border border-line bg-shade p-6">
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-lg font-bold text-white">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Author
                </p>
                <h3 className="mt-1 text-base font-bold text-ink">{post.author}</h3>
                <p className="text-sm text-body">{post.authorRole}</p>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {post.author.split(" ")[0]} writes about engineering at Globantis Labs.
                  Reach out if you&apos;d like to discuss this article or your own
                  project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Other articles */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="text-display-md font-bold text-ink">Keep reading</h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                <ArrowLeft className="size-3.5" aria-hidden />
                All articles
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 0.05, 0.15)} className="h-full">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white hover:border-flame/40 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                      {p.category}
                    </span>
                    <h3 className="text-sm font-bold leading-tight text-ink">
                      {p.title}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-brand">
                      Read
                      <ArrowUpRight className="size-3" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        label="[ Let's talk ]"
        title="Want to talk about this article?"
        desc="If something in here resonated with your project, reach out. A senior engineer will read your note and reply within one business day."
        ctaHref="/contact"
        ctaLabel="Start a project"
        tone="ink"
      />
    </>
    </PageShell>
  );
}
