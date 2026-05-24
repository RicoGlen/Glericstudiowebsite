"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Smartphone, Search, Rocket, GitBranch, Shield } from "lucide-react";
import { TRUST_ITEMS, TRUST_HEADING } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  "sparkles":   <Sparkles  size={16} />,
  "zap":        <Zap       size={16} />,
  "smartphone": <Smartphone size={16} />,
  "search":     <Search    size={16} />,
  "rocket":     <Rocket    size={16} />,
  "git-branch": <GitBranch size={16} />,
  "shield":     <Shield    size={16} />,
};

function RevealItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function Trust() {
  return (
    <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingBlock: "clamp(60px,7vw,100px)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 32 }}>
          {/* Heading — full width */}
          <div style={{ gridColumn: "1 / -1", marginBottom: 24 }}>
            <RevealItem>
              <span className="eyebrow">{TRUST_HEADING.eyebrow}</span>
            </RevealItem>
            <RevealItem delay={0.1}>
              <h2 style={{ margin: "8px 0 0", fontSize: "clamp(22px,2.4vw,32px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: "32ch" }}>
                {TRUST_HEADING.h2a}{" "}
                <em style={{ fontStyle: "normal", color: "var(--text-mute)", fontWeight: 300 }}>{TRUST_HEADING.h2b}</em>
              </h2>
            </RevealItem>
          </div>

          {/* Pills */}
          {TRUST_ITEMS.map((item, i) => (
            <RevealItem key={item.label} delay={i * 0.06}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "16px 20px",
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset, 0 14px 32px -20px rgba(0,0,0,0.55)",
                  fontSize: 13,
                  color: "var(--text)",
                  width: "100%",
                  transition: "border-color .4s var(--ease), transform .4s var(--ease)",
                }}
                className="trust-pill"
              >
                <span style={{ color: "var(--silver)", flexShrink: 0 }}>{iconMap[item.icon]}</span>
                {item.label}
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
      <style>{`.trust-pill:hover { border-color: var(--line-2) !important; transform: translateY(-2px); }`}</style>
    </section>
  );
}
