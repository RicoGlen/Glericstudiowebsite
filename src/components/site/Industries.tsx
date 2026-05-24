"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { INDUSTRIES } from "@/lib/content";

export function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container" style={{ paddingBlock: "clamp(70px,8vw,110px) 0" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(48px,6vw,80px)" }}
        >
          <span className="eyebrow">Branches · 003</span>
          <h2 className="section-title" style={{ maxWidth: "22ch" }}>
            We bouwen voor bedrijven die er online serieus uit moeten zien.
          </h2>
        </motion.div>
      </div>

      <div className="container" style={{ padding: 0 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid var(--line)",
        }}
        className="industries-grid"
        >
          {INDUSTRIES.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              style={{
                borderRight: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
                padding: "30px 26px",
                minHeight: 160,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "background .4s var(--ease)",
              }}
              className={`industry-cell ${(i + 1) % 4 === 0 ? "no-right-border" : ""}`}
            >
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-mute)", letterSpacing: "0.16em" }}>
                /{String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ fontSize: 19, letterSpacing: "-0.02em" }}>
                {it.name}
                <small style={{ display: "block", fontSize: 12, color: "var(--text-mute)", marginTop: 4, letterSpacing: 0 }}>{it.hint}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .industry-cell:hover { background: rgba(255,255,255,0.02) !important; }
        .no-right-border { border-right: 0 !important; }
        @media (max-width: 880px) {
          .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .no-right-border { border-right: 1px solid var(--line) !important; }
          .industries-grid > div:nth-child(2n) { border-right: 0 !important; }
        }
        @media (max-width: 480px) {
          .industries-grid { grid-template-columns: 1fr !important; }
          .industries-grid > div { border-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
