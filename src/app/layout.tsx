import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
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
  openGraph: {
    title: "Globantis Labs | Transforming Ideas Into IT Solutions",
    description:
      "Smart IT solutions for smarter businesses. Fueling digital transformation with expert solutions worldwide.",
    siteName: "Globantis Labs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
