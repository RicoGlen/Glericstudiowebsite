"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { ProcessStep } from "./ProcessStep";
import { PROCESS_STEPS } from "@/lib/content";

export function Process() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const current = PROCESS_STEPS[active];

  return (
    <section id="process" style={{ position: "relative", paddingBlock: "clamp(80px,10vw,140px)" }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(48px,6vw,80px)" }}
        >
          <span className="eyebrow">Proces · 004</span>
          <h2 className="section-title">Vier stappen. Geen verrassingen.</h2>
          <p className="section-lead">
            Elk Gleric-project doorloopt dezelfde vier fases. Voorspelbaar in proces, onderscheidend in resultaat.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.2fr", gap: 80, alignItems: "start" }} className="process-layout">
          {/* Steps list */}
          <div>
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.n} style={i === 0 ? { borderTop: "1px solid var(--line)" } : undefined}>
                <ProcessStep
                  n={s.n}
                  title={s.title}
                  active={i === active}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                />
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.n}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "sticky",
                top: 100,
                padding: 32,
                border: "1px solid var(--line)",
                borderRadius: 18,
                background: "linear-gradient(180deg, rgba(255,255,255,0.025), transparent)",
                minHeight: 360,
              }}
            >
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--text-mute)" }}>
                Fase · {current.n}
              </div>
              <h3 style={{ fontSize: "clamp(26px,2.6vw,36px)", letterSpacing: "-0.02em", fontWeight: 500, margin: "12px 0 16px" }}>
                {current.title}
              </h3>
              <p style={{ color: "var(--text-dim)", margin: "0 0 24px", fontSize: 15 }}>{current.body}</p>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-mute)", marginBottom: 12 }}>
                Wat je krijgt
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {current.deliverables.map((d) => (
                  <li key={d} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--text)", padding: "10px 14px", border: "1px solid var(--line)", borderRadius: 10 }}>
                    <Check size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .process-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
