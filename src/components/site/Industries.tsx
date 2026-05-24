"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { INDUSTRIES } from "@/lib/content";

export function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="industries" id="sectoren" ref={ref}>
      <div className="section-inner">
        <SectionHeading
          eyebrow="Sectoren"
          title="Wij werken voor"
          sub="Van lokale ondernemers tot groeiende scale-ups — wij snappen jouw markt."
          centered
        />

        <div className="industries__grid">
          {INDUSTRIES.map((item, i) => (
            <motion.div
              key={item.label}
              className="industry-card"
              style={{ "--ind-color": item.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.04 + i * 0.07,
              }}
            >
              <span className="industry-card__icon" aria-hidden>{item.icon}</span>
              <span className="industry-card__label">{item.label}</span>
              <span className="industry-card__sub">{item.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
