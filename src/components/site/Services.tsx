"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "@/lib/content";

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" style={{ position: "relative", paddingBlock: "clamp(80px,10vw,140px)" }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(48px,6vw,80px)" }}
        >
          <span className="eyebrow">Diensten · 002</span>
          <h2 className="section-title">Drie manieren om met Gleric te werken.</h2>
          <p className="section-lead">
            Elk project is op maat — maar de meeste klanten passen in één van deze drie pakketten. Prijzen zijn een startpunt; we bepalen de scope op basis van wat je écht nodig hebt.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
          {SERVICES.map((tier, i) => (
            <motion.div
              key={tier.idx}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            >
              <ServiceCard {...tier} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
