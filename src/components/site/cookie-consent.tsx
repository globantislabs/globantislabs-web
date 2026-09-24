"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";

const STORAGE_KEY = "gl-cookie-consent";
const STORAGE_VERSION = "v1";

type Consent = {
  version: string;
  essential: true; // always true
  analytics: boolean;
  functional: boolean;
  timestamp: string;
};

/**
 * Cookie consent banner — GDPR/CCPA compliant.
 */
export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);
  const [customizing, setCustomizing] = React.useState(false);
  const [prefs, setPrefs] = React.useState<Consent>({
    version: STORAGE_VERSION,
    essential: true,
    analytics: false,
    functional: false,
    timestamp: "",
  });

  // Save consent to localStorage, hide banner, reload if needed
  const save = React.useCallback((consent: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // ignore
    }
    setVisible(false);
    setCustomizing(false);
    if (consent.analytics || consent.functional) {
      window.location.reload();
    }
  }, []);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const dnt =
          navigator.doNotTrack === "1" ||
          (window as unknown as { doNotTrack?: string }).doNotTrack === "1";
        if (dnt) {
          save({
            version: STORAGE_VERSION,
            essential: true,
            analytics: false,
            functional: false,
            timestamp: new Date().toISOString(),
          });
        } else {
          setVisible(true);
        }
      } else {
        const parsed = JSON.parse(stored) as Consent;
        if (parsed.version !== STORAGE_VERSION) {
          setVisible(true);
          setPrefs({
            version: STORAGE_VERSION,
            essential: true,
            analytics: false,
            functional: false,
            timestamp: "",
          });
        }
      }
    } catch {
      // localStorage unavailable — don't show banner
    }
  }, [save]);

  function acceptAll() {
    save({
      version: STORAGE_VERSION,
      essential: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
    });
  }

  function rejectAll() {
    save({
      version: STORAGE_VERSION,
      essential: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
    });
  }

  function saveCustom() {
    save({ ...prefs, timestamp: new Date().toISOString() });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-3xl"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="rounded-2xl border border-line bg-white p-6 shadow-float">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                <Cookie className="size-5" aria-hidden />
              </span>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-ink">
                    We use cookies
                  </h3>
                  <button
                    type="button"
                    onClick={rejectAll}
                    aria-label="Dismiss"
                    className="rounded-md p-1 text-body hover:bg-shade hover:text-ink"
                  >
                    <X className="size-4" aria-hidden />
                  </button>
                </div>

                {!customizing ? (
                  <>
                    <p className="mt-1.5 text-sm leading-relaxed text-body">
                      We use essential cookies to run the site, plus optional
                      analytics and live-chat cookies. You can accept all, reject
                      non-essential, or customize. Read our{" "}
                      <Link
                        href="/privacy"
                        className="font-semibold text-brand hover:underline"
                      >
                        privacy policy
                      </Link>
                      .
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={acceptAll}
                        className="btn-lift inline-flex h-10 items-center gap-1.5 rounded-full bg-brand px-5 text-xs font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                      >
                        Accept all
                        <Check className="size-3.5" aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={rejectAll}
                        className="inline-flex h-10 items-center rounded-full border border-line px-5 text-xs font-semibold text-ink hover:border-brand hover:text-brand"
                      >
                        Reject non-essential
                      </button>
                      <button
                        type="button"
                        onClick={() => setCustomizing(true)}
                        className="inline-flex h-10 items-center rounded-full border border-line px-5 text-xs font-semibold text-ink hover:border-brand hover:text-brand"
                      >
                        Customize
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-3 space-y-3">
                      <ToggleRow
                        label="Essential"
                        desc="Required for the site to function. Always on."
                        checked={true}
                        disabled={true}
                      />
                      <ToggleRow
                        label="Analytics"
                        desc="Google Analytics 4 — anonymised traffic data."
                        checked={prefs.analytics}
                        onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                      />
                      <ToggleRow
                        label="Functional"
                        desc="Crisp live chat + newsletter form state."
                        checked={prefs.functional}
                        onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={saveCustom}
                        className="btn-lift inline-flex h-10 items-center gap-1.5 rounded-full bg-brand px-5 text-xs font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                      >
                        Save preferences
                        <Check className="size-3.5" aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCustomizing(false)}
                        className="inline-flex h-10 items-center rounded-full border border-line px-5 text-xs font-semibold text-ink hover:border-brand hover:text-brand"
                      >
                        Back
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ToggleRow({
  label,
  desc,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label
      className={`flex items-start gap-3 rounded-lg border border-line p-3 ${
        disabled ? "bg-shade" : "hover:bg-shade"
      } cursor-${disabled ? "not-allowed" : "pointer"}`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 size-4 accent-brand"
      />
      <div>
        <p className="text-sm font-semibold text-ink">{label}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-body">{desc}</p>
      </div>
    </label>
  );
}

/** Read consent state from anywhere — used by GA4 and Crisp loaders. */
export function hasConsent(category: "analytics" | "functional"): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;
    const parsed = JSON.parse(stored) as Consent;
    return parsed[category] === true;
  } catch {
    return false;
  }
}
