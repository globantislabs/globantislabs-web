import type { Metadata } from "next";
import { company } from "./site-data";

/**
 * Central SEO configuration for globantislabs.com.
 *
 * Usage in any page:
 *   export const metadata = buildMetadata({ title, description, path, keywords });
 *
 * `metadataBase` is set in src/app/layout.tsx, so all relative URLs below
 * (canonical, og:url, images) resolve against https://globantislabs.com.
 */
export const SITE_URL = "https://globantislabs.com";
export const SITE_NAME = company.name;
export const SITE_TAGLINE = company.tagline;
export const OG_IMAGE = "/images/og-image.jpg";

const OG_SIZE = { width: 1200, height: 630 };

type SeoInput = {
  /** Page title, e.g. "About Us | Globantis Labs" */
  title: string;
  /** Meta description (155-165 chars recommended) */
  description: string;
  /** Canonical path starting with "/", e.g. "/about" (use "" for home) */
  path: string;
  /** Additional page-specific keywords */
  keywords?: string[];
};

/** Build a complete, production-grade Metadata object for a static page. */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: SeoInput): Metadata {
  return {
    title,
    description,
    keywords: [
      "Globantis Labs",
      "IT solutions",
      "software development company",
      ...keywords,
    ],
    alternates: { canonical: path || "/" },
    openGraph: {
      title,
      description,
      url: path || "/",
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: OG_IMAGE,
          ...OG_SIZE,
          alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

type JsonLdOrgInput = {
  /** Social / profile URLs to list as sameAs */
  sameAs?: string[];
};

/** Organization JSON-LD (site-wide, injected in the root layout). */
export function organizationJsonLd({ sameAs = [] }: JsonLdOrgInput = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "Globantis Labs delivers world-class software, web, AI, DevOps and IT support solutions that fuel digital transformation for smarter businesses worldwide.",
    email: company.email,
    foundingDate: company.founded,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "3992 Rue de la Seine",
        addressLocality: "Laval",
        addressRegion: "Québec",
        postalCode: "H7W 2S3",
        addressCountry: "CA",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "RMZ Millenia Business Park, Perungudi",
        addressLocality: "Chennai",
        addressCountry: "IN",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: company.email,
        availableLanguage: ["English"],
      },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

/** WebSite JSON-LD with sitelinks search box disabled (no site search yet). */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}
