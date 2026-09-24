import { clientLogos } from "@/lib/testimonials-data";

/**
 * Client logos strip — since most of our clients are confidential,
 * we show wordmarks (industry + stage) as text. Replace with actual
 * logo images when clients consent to public attribution.
 *
 * The strip renders as a horizontal row of "logo cards" — each card
 * has the client wordmark in mono + a "Confidential" micro-label.
 */
export function ClientLogosStrip() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4 lg:grid-cols-8">
      {clientLogos.map((c) => (
        <div
          key={c.label}
          className="group flex aspect-[5/2] flex-col items-center justify-center gap-1 bg-shade p-4 text-center transition-colors hover:bg-white"
        >
          <span className="font-display text-[11px] font-bold leading-tight text-ink/80 transition-colors group-hover:text-ink sm:text-xs">
            {c.label}
          </span>
          <span className="font-mono text-[8px] uppercase tracking-wider text-ink/35 sm:text-[9px]">
            {c.note}
          </span>
        </div>
      ))}
    </div>
  );
}
