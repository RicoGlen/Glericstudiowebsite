"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CARE_PLUS_ITEMS } from "@/lib/content";

export function CarePlus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="careplus" style={{ position: "relative", paddingBlock: "clamp(80px,10vw,140px)" }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{
            position: "relative",
            border: "1px solid var(--line)",
            borderRadius: 24,
            padding: "clamp(36px,5vw,64px)",
            background: "radial-gradient(700px 320px at 100% 0%, oklch(0.90 0.11 220 / 0.16), transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
            boxShadow: "0 1px 0 rgba(255,255,255,0.12) inset, 0 40px 80px -30px rgba(0,0,0,0.55), 0 16px 30px -16px rgba(0,0,0,0.35)",
            overflow: "hidden",
            isolation: "isolate",
          }}>
            {/* Background grid accent */}
            <div style={{
              position: "absolute", inset: 0, zIndex: -1,
              backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage: "radial-gradient(ellipse at 80% 20%, #000, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at 80% 20%, #000, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="careplus-layout">
              <div>
                <span className="eyebrow">Onderhoud · 005</span>
                <h2 style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.04, margin: "16px 0 20px" }}>
                  Care<sup style={{ fontSize: "0.45em", color: "var(--accent)", verticalAlign: "top", position: "relative", top: "0.2em", letterSpacing: 0 }}>+</sup>
                  <br />Zodat je website nooit verouderd voelt.
                </h2>
                <p style={{ color: "var(--text-dim)", maxWidth: "46ch", fontSize: 15, margin: 0 }}>
                  Een maandelijks onderhoudsplan dat je site snel, actueel en technisch gezond houdt — zonder dat jij erover hoeft na te denken.
                </p>
                <div style={{ marginTop: 24, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", fontSize: 12, color: "var(--text-mute)", letterSpacing: "0.04em" }}>
                  <span style={{ fontFamily: "var(--mono)", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 11 }}>
                    Vanaf €145 / maand
                  </span>
                  <a
                    href="#contact"
                    onClick={handleAnchor}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "10px 16px",
                      borderRadius: 999,
                      border: "1px solid var(--line-2)",
                      color: "var(--text)",
                      fontSize: 13,
                      transition: "background .3s var(--ease), border-color .3s var(--ease)",
                    }}
                    className="care-cta"
                  >
                    Voeg Care+ toe aan je project
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
                {CARE_PLUS_ITEMS.map((it, i) => (
                  <li key={it.t} style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: 16, padding: "18px 0", borderBottom: "1px solid var(--line)", alignItems: "start", borderTop: i === 0 ? "1px solid var(--line)" : undefined }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-mute)", letterSpacing: "0.16em", paddingTop: 3 }}>/{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <strong style={{ fontWeight: 500, fontSize: 15, color: "var(--text)", letterSpacing: "-0.01em" }}>{it.t}</strong>
                      <span style={{ fontSize: 13, color: "var(--text-mute)" }}>{it.d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .care-cta:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.28) !important; }
        @media (max-width: 980px) { .careplus-layout { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
