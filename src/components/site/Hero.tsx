"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HERO } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  };
}

export function Hero() {
  return (
    <section className="hero">
      {/* background grain */}
      <div className="hero__grain" aria-hidden />

      {/* radial glow accent */}
      <div className="hero__glow" aria-hidden />

      {/* grid */}
      <div className="hero__grid" aria-hidden />

      <div className="hero__inner">
        <motion.div className="hero__content" {...fadeUp(0)}>

          {/* eyebrow */}
          <motion.p className="eyebrow" {...fadeUp(0.05)}>
            Premium Web Studio · Nederland
          </motion.p>

          {/* headline */}
          <motion.h1 className="hero__headline" {...fadeUp(0.12)}>
            {HERO.headline1}{" "}
            <span className="hero__for">{HERO.headline2}</span>{" "}
            <span className="hero-highlight">{HERO.headlineHighlight}</span>{" "}
            {HERO.headline3}
          </motion.h1>

          {/* subtitle */}
          <motion.p className="hero__sub" {...fadeUp(0.2)}>
            {HERO.sub}
          </motion.p>

          {/* bullets */}
          <motion.ul className="hero__bullets" {...fadeUp(0.28)}>
            {HERO.bullets.map((b) => (
              <li key={b} className="hero__bullet">
                <CheckCircle2 size={15} className="hero__bullet-icon" aria-hidden />
                {b}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div className="hero__ctas" {...fadeUp(0.36)}>
            <a href="#contact" className="btn btn--primary">
              {HERO.cta1}
              <ArrowRight size={16} aria-hidden />
            </a>
            <a href="#process" className="btn btn--ghost">
              {HERO.cta2}
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
