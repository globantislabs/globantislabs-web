"use client";

import * as React from "react";
import Script from "next/script";
import { hasConsent } from "./cookie-consent";

/**
 * Analytics + chat scripts — only loaded AFTER the user has given consent.
 *
 * - GA4: requires `analytics` consent
 * - Crisp: requires `functional` consent
 *
 * Returns null on the server (so no scripts are injected during SSR).
 * On the client, checks localStorage consent state and conditionally
 * renders the script tags.
 *
 * Note: Crisp needs CRISP_WEBSITE_ID env var.
 * GA4 needs NEXT_PUBLIC_GA4_MEASUREMENT_ID env var.
 */
export function AnalyticsScripts() {
  const [mounted, setMounted] = React.useState(false);
  const [analyticsOk, setAnalyticsOk] = React.useState(false);
  const [chatOk, setChatOk] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setAnalyticsOk(hasConsent("analytics"));
    setChatOk(hasConsent("functional"));

    // Re-check on storage event (in case the user just gave consent)
    const onStorage = () => {
      setAnalyticsOk(hasConsent("analytics"));
      setChatOk(hasConsent("functional"));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!mounted) return null;

  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const crispId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

  return (
    <>
      {analyticsOk && ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}', {
                anonymize_ip: true,
                allow_google_signals: false
              });
            `}
          </Script>
        </>
      )}

      {chatOk && crispId && (
        <Script id="crisp-init" strategy="afterInteractive">
          {`
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = '${crispId}';
            (function(){
              var d = document;
              var s = d.createElement('script');
              s.src = 'https://client.crisp.chat/l.js';
              s.async = 1;
              d.getElementsByTagName('head')[0].appendChild(s);
            })();
          `}
        </Script>
      )}
    </>
  );
}
