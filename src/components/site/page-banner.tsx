import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Logo } from "./logo";

type Crumb = { label: string; href?: string };

export function PageBanner({
  title,
  label,
  image,
  crumbs,
}: {
  title: string;
  label?: string;
  image?: string;
  crumbs?: Crumb[];
}) {
  const trail = crumbs ?? [];
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-20 lg:pb-24 lg:pt-28">
      {/* decorative shapes */}
      <Image
        src="/images/wp/2025-01/page-banner-shape-1.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="pointer-events-none absolute -left-20 top-1/2 hidden -translate-y-1/2 opacity-40 lg:block"
      />
      <Image
        src="/images/wp/2025-01/page-banner-shape-2.png"
        alt=""
        aria-hidden
        width={400}
        height={400}
        className="pointer-events-none absolute -right-24 -top-10 hidden opacity-30 lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern opacity-20"
      />
      {/* Bottom flame accent thread — crisp centered rule */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-[3px] w-44 -translate-x-1/2 rounded-full bg-gradient-to-r from-flame/0 via-flame to-flame/0"
      />

      <div className="container-site relative text-center">
        {/* Breadcrumb */}
        <div className="mb-7 flex items-center justify-center gap-2 text-sm text-white/60">
          <Link href="/" className="inline-flex items-center gap-2 transition-colors hover:text-white">
            <Logo variant="dark" />
          </Link>
          {trail.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-2">
              <ChevronRight className="size-3.5 text-white/30" />
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </div>

        {label && <span className="section-label !text-brand-light">{label}</span>}

        <h1 className="text-display-lg mx-auto max-w-4xl font-bold text-white sm:text-display-xl">
          {title}
        </h1>

        {image && (
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-3xl border border-flame/25"
              />
              <Image
                src={image}
                alt={title}
                width={560}
                height={340}
                className="relative max-h-[340px] w-auto rounded-2xl object-cover shadow-float"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
