import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { TrustStrip } from "@/components/site/trust-strip";
import { AISection } from "@/components/site/ai-section";
import { WhyGlobantis } from "@/components/site/why-globantis";
import { Consultation } from "@/components/site/consultation";
import { Footer } from "@/components/site/footer";

/* 3-card grid: Services, Industries, Products */
const CARDS = [
  {
    title: "Services",
    desc: "Custom software, AI & automation, web solutions, mobile apps, cloud, DevOps, data, cybersecurity, and managed services.",
    href: "/services",
    image: "/images/hero-bg.jpg",
  },
  {
    title: "Industries",
    desc: "Financial services, healthcare, logistics & hospitality, cybersecurity, e-commerce & retail, and automation.",
    href: "/industries",
    image: "/images/industries/healthcare.png",
  },
  {
    title: "Products",
    desc: "In-house products in private beta — built on the same engineering culture that ships our client work.",
    href: "/products",
    image: "/images/hero-bg-2.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AISection />
        {/* 3-card grid */}
        <section className="bg-shade py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label="[ Explore ]"
                title={
                  <>
                    Services, Industries{" "}
                    <span className="text-flame">& Products.</span>
                  </>
                }
                lead="Three ways to engage with Globantis Labs — explore our service capabilities, industry expertise, and in-house products."
                align="left"
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {CARDS.map((card, i) => (
                <Reveal key={card.title} delay={Math.min(i * 0.08, 0.3)}>
                  <Link href={card.href} className="group block">
                    <article className="relative overflow-hidden bg-shade">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={720}
                        height={405}
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-1/2"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,3,61,0.92) 0%, rgba(0,3,61,0.78) 38%, rgba(0,3,61,0.35) 75%, rgba(0,3,61,0) 100%)",
                        }}
                      />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <span aria-hidden className="mb-2 block h-[2px] w-8 rounded-full bg-gradient-to-r from-flame to-flame-soft" />
                        <h3 className="text-[22px] font-semibold leading-snug text-white sm:text-[24px]">
                          {card.title}
                        </h3>
                        <div className="grid max-h-0 grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:max-h-40 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                          <div className="overflow-hidden">
                            <p className="mt-2 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
                              {card.desc}
                            </p>
                            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-flame">
                              Explore
                              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <WhyGlobantis />
        <TrustStrip />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
