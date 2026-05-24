"use client";

import { Check, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  idx: string;
  name: string;
  best: string;
  included: readonly string[];
  timeline: string;
  price: string;
  featured: boolean;
  badge: string | null;
}

export function ServiceCard({ idx, name, best, included, timeline, price, featured, badge }: ServiceCardProps) {
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <article
      style={{
        position: "relative",
        padding: "32px 28px 28px",
        background: featured
          ? "radial-gradient(500px 220px at 80% 0%, oklch(0.90 0.11 220 / 0.18), transparent 65%), linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.025))"
          : "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
        border: "1px solid var(--line)",
        borderRadius: 18,
        display: "flex",
        flexDirection: "column",
        minHeight: 520,
        overflow: "hidden",
        boxShadow: "0 1px 0 rgba(255,255,255,0.10) inset, 0 30px 60px -30px rgba(0,0,0,0.5), 0 10px 22px -16px rgba(0,0,0,0.35)",
        transition: "border-color .5s var(--ease), transform .5s var(--ease), box-shadow .5s var(--ease)",
      }}
      className="service-card"
    >
      {/* Inset highlight border */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: 18, padding: 1,
        background: "linear-gradient(180deg, rgba(255,255,255,0.18), transparent 40%)",
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
        opacity: 0.5,
      }} />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-mute)", letterSpacing: "0.16em" }}>/{idx}</span>
        {badge && (
          <span style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", padding: "5px 9px", border: "1px solid color-mix(in oklch, var(--accent) 50%, transparent)", borderRadius: 999 }}>
            {badge}
          </span>
        )}
      </div>

      <h3 style={{ fontSize: 26, letterSpacing: "-0.02em", fontWeight: 500, margin: "0 0 8px" }}>{name}</h3>
      <p style={{ color: "var(--text-dim)", fontSize: 14, margin: "0 0 24px" }}>{best}</p>

      <ul style={{ margin: "0 0 28px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
        {included.map((line) => (
          <li key={line} style={{ display: "flex", gap: 12, fontSize: 14, color: "var(--text)" }}>
            <Check size={14} style={{ flexShrink: 0, marginTop: 4, color: "var(--silver)" }} />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--line)", borderRadius: 12, overflow: "hidden", marginBottom: 18 }}>
        {[["Doorlooptijd", timeline], ["Investering", price]].map(([k, v]) => (
          <div key={k} style={{ background: "var(--bg-2)", padding: "14px 16px" }}>
            <div style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-mute)" }}>{k}</div>
            <div style={{ fontSize: 15, color: "var(--text)", marginTop: 4, letterSpacing: "-0.01em" }}>{v}</div>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        onClick={handleAnchor}
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px",
          border: "1px solid var(--line-2)",
          borderRadius: 999,
          fontSize: 13,
          transition: "background .3s var(--ease), border-color .3s var(--ease)",
        }}
        className="service-cta"
      >
        Praat over dit pakket
        <ArrowUpRight size={14} />
      </a>

      <style>{`
        .service-card:hover { border-color: var(--line-2) !important; transform: translateY(-4px); box-shadow: 0 1px 0 rgba(255,255,255,0.12) inset, 0 40px 80px -30px rgba(0,0,0,0.7), 0 14px 28px -16px rgba(0,0,0,0.5) !important; }
        .service-cta:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.3) !important; }
      `}</style>
    </article>
  );
}
