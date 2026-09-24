import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/**
 * Globantis Labs logo — a stylised "Z" mark inside a rounded square,
 * with the original "breathing" opacity animation preserved (reduced-motion
 * aware). The mark recolours automatically with the active theme.
 */
export function Logo({ className, showWordmark = true, size = 28 }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label="Globantis Labs home"
    >
      <LogoMark size={size} />
      {showWordmark && <LogoWordmark />}
    </Link>
  );
}

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      role="img"
      aria-label="Globantis Labs mark"
      className="shrink-0"
    >
      <defs>
        <style>{`
          .gl-square { fill: var(--brand); }
          .gl-z { fill: var(--brand-foreground); }
          .gl-z-breathe { animation: gl-breathe 2.6s ease-in-out infinite; }
          @keyframes gl-breathe { 0%, 100% { opacity: 0.78; } 50% { opacity: 1; } }
          @media (prefers-reduced-motion: reduce) {
            .gl-z-breathe { animation: none; opacity: 1; }
          }
        `}</style>
      </defs>
      <rect
        className="gl-square"
        x="1.49"
        y="1.49"
        width="27.02"
        height="27.02"
        rx="4"
        ry="4"
      />
      <g className="gl-z-breathe">
        <path
          className="gl-z"
          d="M15.47,7.1l-1.3,1.85c-0.2,0.29-0.54,0.47-0.9,0.47h-7.1V7.09C6.16,7.1,15.47,7.1,15.47,7.1z"
        />
        <polygon className="gl-z" points="24.3,7.1 13.14,22.91 5.7,22.91 16.86,7.1" />
        <path
          className="gl-z"
          d="M14.53,22.91l1.31-1.86c0.2-0.29,0.54-0.47,0.9-0.47h7.09v2.33H14.53z"
        />
      </g>
    </svg>
  );
}

function LogoWordmark() {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-display text-base font-semibold tracking-tight text-foreground">
        Globantis Labs
      </span>
      <span className="font-mono text-[10px] tracking-wide text-muted-foreground">
        Software · AI · Systems
      </span>
    </span>
  );
}

export { LogoMark, LogoWordmark };
