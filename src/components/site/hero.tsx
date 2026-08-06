"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";

/**
 * Hero — recreates the original Revolution Slider "Slider 1" exactly.
 *
 * Two slides (auto-advance 6s) with full-bleed background images and a navy
 * overlay. Text is positioned to the LEFT (matches the original slider layer
 * config: x:39px, y:middle, max-width:753px for the title).
 *
 * Layer colors come from the SR7.JSON config:
 *   - title:        #ffffff, Space Grotesk 700, 80px / line 94px, ls -1px
 *   - description:  #ffffff (75% via overlay), 18px / line 28px
 *   - button bg:    #2b4dff (rgba(43,77,255,1)) — BLUE, kept from slider
 *   - button hover: #0349ef
 *   - small label:  #1b4bf9 — BLUE (matches the slider's "[ Smart IT solutions ]")
 *
 * Background images: original wp-content/uploads/2026/01/ files.
 *
 * Below the hero content, two glassmorphism cards ("AI & Automation" and
 * "Emerging Technologies") overlap the hero's bottom edge — exactly like the
 * original Elementor `d7fd98f` section (margin-top: -159px).
 */
const slides = [
  {
    bg: "/images/wp/2026-01/2149595827.jpg",
    label: "[ Smart IT solutions ]",
    title: "Transforming Ideas Into IT Solutions",
    desc: "Provide world wide survival strategies to ensure proactive domination at the end of the day fueling digital transformation with expert solutions.",
  },
  {
    bg: "/images/wp/2026-01/pexels-sevenstormphotography-443383.jpg",
    label: "[ Smart IT solutions ]",
    title: "Smart IT Solutions For Smarter Businesses",
    desc: "Provide world wide survival strategies to ensure proactive domination at the end of the day fueling digital transformation with expert solutions.",
  },
];

const floatingCards = [
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "AI and automation convert complex, repetitive work into intelligent, scalable workflows.",
  },
  {
    icon: Sparkles,
    title: "Emerging Technologies",
    desc: "Emerging technologies are frontier innovations advancing how businesses operate globally.",
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

      {/* Navy gradient overlay (left-darker for legibility) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(11,22,94,0.94) 0%, rgba(11,22,94,0.78) 42%, rgba(11,22,94,0.30) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-pattern opacity-25" aria-hidden />

      {/* Content — left-aligned, max-width matches slider (753px title) */}
      <div className="relative mx-auto flex min-h-[640px] max-w-[1310px] items-center px-6 pt-28 lg:min-h-[820px] lg:pt-36">
        <div className="max-w-3xl">
          <motion.div
            key={`label-${active}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base font-medium"
            style={{ color: "#1b4bf9" }}
          >
            {slide.label}
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
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 lg:text-[18px] lg:leading-[28px]"
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
              className="inline-flex h-14 items-center justify-center gap-2 rounded-[5px] bg-brand-blue px-7 text-base font-medium text-white shadow-lg shadow-brand-blue/30 transition-all hover:bg-[#0349ef]"
            >
              Free Consultation
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>

          {/* Slide indicators — Revolution Slider "uranus" style bullets */}
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
                      ? "w-12 bg-white"
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

      {/* Floating glassmorphism cards — overlap hero bottom (margin-top: -159px in original) */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden lg:block">
        <div className="mx-auto max-w-[1310px] px-6">
          <div className="grid grid-cols-2 gap-6 translate-y-1/2">
            {floatingCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  className="flex items-start gap-4 rounded-t-[15px] border border-white/20 border-b-0 bg-white/10 p-7 backdrop-blur-[21px]"
                  style={{ backgroundColor: "rgba(255,255,255,0.17)" }}
                >
                  <div className="flex size-[60px] shrink-0 items-center justify-center rounded bg-brand text-white">
                    <Icon className="size-7" />
                  </div>
                  <div>
                    <h4 className="text-[22px] font-semibold leading-[30px] text-white">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: stack cards below hero */}
      <div className="relative z-10 grid gap-4 px-6 py-6 lg:hidden">
        {floatingCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded bg-brand text-white">
                <Icon className="size-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-white/75">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
    </section>
  );
}
