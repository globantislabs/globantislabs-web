import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function PageBanner({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-paper">
      {/* Subtle pattern: technical grid lines, very low contrast */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "var(--ink)",
        }}
      />

      {/* Oversized brand Z mark — anchor in the corner */}
      <svg
        aria-hidden
        viewBox="0 0 30 30"
        className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 opacity-[0.06]"
      >
        <rect
          x="1.49"
          y="1.49"
          width="27.02"
          height="27.02"
          rx="4"
          ry="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground"
        />
        <polygon
          points="24.3,7.1 13.14,22.91 5.7,22.91 16.86,7.1"
          fill="currentColor"
          className="text-foreground"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:text-foreground">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="micro-label mb-4">{eyebrow}</p>}
        <h1 className="display max-w-4xl text-4xl text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

/** A simple CTA strip used at the bottom of content pages. */
export function CTAStrip({
  heading,
  body,
  buttonLabel = "Start a project",
  href = "/contact",
  className,
}: {
  heading: string;
  body?: string;
  buttonLabel?: string;
  href?: string;
  className?: string;
}) {
  return (
    <section className={cn("border-t border-hairline bg-paper", className)}>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="micro-label mb-3">Next step</p>
          <h2 className="display text-2xl text-foreground md:text-3xl">
            {heading}
          </h2>
          {body && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {body}
            </p>
          )}
        </div>
        <Link href={href} className="btn-brand">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
