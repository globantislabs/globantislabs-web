"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * Newsletter signup — calls /api/newsletter which uses Resend to send a
 * double-opt-in confirmation email.
 *
 * Conservative layout: small card, single email input, submit button,
 * loading + success states.
 */
export function NewsletterSignup({
  variant = "card",
}: {
  variant?: "card" | "inline";
}) {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setDone(true);
      toast({
        title: "Almost there — check your inbox.",
        description: "We sent a confirmation link. Click it to start receiving our insights.",
      });
      setEmail("");
    } catch {
      toast({
        title: "Subscription failed",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  if (variant === "inline") {
    return (
      <form onSubmit={onSubmit} className="flex w-full max-w-md items-center gap-2">
        <input
          type="email"
          required
          placeholder="you@company.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading || done}
          className="h-11 flex-1 rounded-full border border-line bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-body/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
        <button
          type="submit"
          disabled={loading || done}
          className="btn-lift inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark disabled:opacity-60"
          aria-label="Subscribe"
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : done ? (
            <CheckCircle2 className="size-4" />
          ) : (
            <ArrowRight className="size-4" />
          )}
        </button>
      </form>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-line bg-shade p-6 md:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
          <Mail className="size-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-display-sm font-bold text-ink">
            Engineering insights, monthly.
          </h3>
          <p className="text-xs text-body">
            No spam. Unsubscribe in one click.
          </p>
        </div>
      </div>

      {done ? (
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-brand/20 bg-cream px-4 py-3">
          <CheckCircle2 className="size-5 shrink-0 text-brand" aria-hidden />
          <p className="text-sm text-ink">
            You&apos;re subscribed. Check your inbox to confirm.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 flex w-full items-center gap-2">
          <input
            type="email"
            required
            placeholder="you@company.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="h-12 flex-1 rounded-full border border-line bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-body/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-lift inline-flex h-12 shrink-0 items-center gap-1.5 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </form>
      )}

      <p className="mt-4 text-xs leading-relaxed text-body">
        We&apos;ll send you one email per month with our latest articles, case
        studies and engineering notes. You can unsubscribe at any time.
      </p>
    </motion.div>
  );
}
