"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShowcaseCard } from "./ShowcaseCard";

const cards = [
  { conceptNum: "Concept · 001", category: "Clothing",      title: "Boetiek-mode",         subtitle: "Editorial lookbook + collectie-drops", mock: "clothing" as const },
  { conceptNum: "Concept · 002", category: "Automotive",    title: "Car detailing",         subtitle: "Service-flow + boeking",               mock: "auto"     as const },
  { conceptNum: "Concept · 003", category: "Local service", title: "Lokale dienstverlening",subtitle: "Conversiegerichte homepage",            mock: "local"    as const },
];

export function Showcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="showcase" style={{ position: "relative", paddingBlock: "clamp(80px,10vw,140px)" }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, flexWrap: "wrap", marginBottom: "clamp(48px,6vw,80px)" }}
        >
          <div>
            <span className="eyebrow">Showcase · 006</span>
            <h2 className="section-title">Het type websites dat we bouwen.</h2>
          </div>
          <p className="section-lead" style={{ marginTop: 0 }}>
            Visual directions from in-house concepts. Real client work coming Q3 2026 — these are how we think.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 18, height: 720 }} className="showcase-grid">
          {cards.map((card, i) => (
            <motion.div
              key={card.conceptNum}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              style={i === 0 ? { gridRow: "span 2" } : undefined}
            >
              <ShowcaseCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .showcase-grid { grid-template-columns: 1fr !important; grid-template-rows: none !important; height: auto !important; }
          .showcase-grid > div:first-child { grid-row: span 1 !important; }
          .showcase-grid > div { min-height: 360px; }
        }
      `}</style>
    </section>
  );
}
