"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const slides = [
  {
    bg: "/images/hero-bg.jpg",
    label: "[ Smart IT solutions ]",
    title: "Transforming Ideas Into IT Solutions",
    desc: "Provide world wide survival strategies to ensure proactive domination at the end of the day fueling digital transformation with expert solutions.",
  },
  {
    bg: "/images/hero-bg-2.jpg",
    label: "[ Smart IT solutions ]",
    title: "Smart IT Solutions For Smarter Businesses",
    desc: "Provide world wide survival strategies to ensure proactive domination at the end of the day fueling digital transformation with expert solutions.",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[active];

  return (
    <section
      id="home"
      className="relative min-h-[640px] overflow-hidden bg-ink lg:min-h-[820px]"
    >
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={s.bg}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Dark gradient overlay for legibility (matches original slider look) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(10,22,94,0.92) 0%, rgba(10,22,94,0.78) 42%, rgba(10,22,94,0.35) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-6 pt-28 lg:min-h-[820px] lg:pt-36">
        <div className="max-w-3xl">
          <motion.div
            key={`label-${active}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-base font-medium text-white"
          >
            <span className="text-brand-light">{slide.label}</span>
          </motion.div>

          <motion.h1
            key={`title-${active}`}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[80px] lg:leading-[94px] lg:tracking-[-1px]"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            key={`desc-${active}`}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg"
          >
            {slide.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="#consultation"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-[5px] bg-brand px-7 text-base font-medium text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark"
            >
              Free Consultation
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#services"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-[5px] border border-white/25 bg-white/5 px-7 text-base font-medium text-white backdrop-blur transition-all hover:bg-white/15"
            >
              <Sparkles className="size-4 text-brand-light" />
              Our Services
            </Link>
          </motion.div>

          {/* Slide controls */}
          <div className="mt-12 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group flex items-center gap-2"
              >
                <span
                  className={
                    "block h-[3px] rounded-full transition-all duration-500 " +
                    (i === active
                      ? "w-12 bg-brand-light"
                      : "w-6 bg-white/40 group-hover:bg-white/70")
                  }
                />
                <span
                  className={
                    "text-xs font-medium transition-colors " +
                    (i === active ? "text-white" : "text-white/40")
                  }
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave/transition */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
    </section>
  );
}
