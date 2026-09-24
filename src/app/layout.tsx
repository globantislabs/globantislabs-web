import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/site/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globantislabs.com"),
  title: {
    default: "Globantis Labs — Engineering Software, AI & Digital Systems",
    template: "%s · Globantis Labs",
  },
  description:
    "Globantis Labs is a global software engineering firm. We build secure, scalable web, mobile, AI, cloud and DevOps systems for clients across the USA, Canada and India.",
  keywords: [
    "Globantis Labs",
    "software development",
    "web development",
    "AI services",
    "DevOps",
    "UI/UX design",
    "CMS development",
    "IT support",
    "digital transformation",
  ],
  authors: [{ name: "Globantis Labs" }],
  creator: "Globantis Labs",
  publisher: "Globantis Labs",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Globantis Labs — Engineering Software, AI & Digital Systems",
    description:
      "Transforming ideas into IT solutions. We build secure, scalable software for global clients across financial services, healthcare, education, logistics and more.",
    url: "https://globantislabs.com",
    siteName: "Globantis Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Globantis Labs",
    description:
      "Transforming ideas into IT solutions — secure, scalable software engineering for global clients.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
