"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TRUST_PILLS } from "@/lib/content";

export function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="trust" id="trust" ref={ref}>
      <div className="section-inner">
        <motion.p
          className="eyebrow trust__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Waarom Gleric
        </motion.p>

        <div className="trust__pills">
          {TRUST_PILLS.map((pill, i) => (
            <motion.div
              key={pill.text}
              className="trust__pill"
              style={{ "--pill-accent": pill.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.06 + i * 0.055,
              }}
            >
              <span className="trust__pill-dot" aria-hidden />
              {pill.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
