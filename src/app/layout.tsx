import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/site/theme-provider";
import { CookieConsent } from "@/components/site/cookie-consent";
import { AnalyticsScripts } from "@/components/site/analytics-scripts";
import {
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Globantis Labs | Transforming Ideas Into IT Solutions",
  description:
    "Globantis Labs delivers world-class software, web, AI, DevOps and IT support solutions that fuel digital transformation for smarter businesses worldwide.",
  keywords: [
    "Globantis Labs",
    "IT Solutions",
    "Software Development",
    "Web Development",
    "Artificial Intelligence",
    "DevOps Services",
    "UI/UX Design",
    "Digital Transformation",
  ],
  authors: [{ name: "Globantis Labs" }],
  icons: {
    icon: "/images/favicon.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Globantis Labs | Transforming Ideas Into IT Solutions",
    description:
      "Smart IT solutions for smarter businesses. Fueling digital transformation with expert solutions worldwide.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — Transforming Ideas Into IT Solutions` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Globantis Labs | Transforming Ideas Into IT Solutions",
    description:
      "Smart IT solutions for smarter businesses. Fueling digital transformation with expert solutions worldwide.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash — set class before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <CookieConsent />
          <AnalyticsScripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
