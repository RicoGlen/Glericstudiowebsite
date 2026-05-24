"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlericLogo } from "@/components/brand/GlericLogo";
import { HERO } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

// Generated once at module level — stable, no re-render impurity
const STREAKS = Array.from({ length: 14 }, (_, i) => ({
  key: i,
  angle: -18 + (((i * 137.5) % 36)),          // deterministic spread
  y:    10 + i * 6 + ((i * 31) % 3),
  dur:  8  + ((i * 17) % 14),
  delay: -((i * 23) % 12),
  w:    80 + ((i * 53) % 200),
}));

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      el.style.setProperty("--mx", `${x * 12}px`);
      el.style.setProperty("--my", `${y * 12}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="top"
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100svh",
        paddingTop: 120,
        paddingBottom: 80,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* ── Background ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: -1, overflow: "hidden" }}>
        {/* Grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at 50% 30%, #000 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, #000 30%, transparent 70%)",
          opacity: 0.7,
        }} />
        {/* Ambient glow */}
        <div style={{
          position: "absolute",
          width: "80vmax", height: "80vmax",
          borderRadius: "50%",
          left: "50%", top: "60%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, oklch(0.86 0.13 220 / 0.18) 0%, transparent 55%)",
          filter: "blur(20px)",
          animation: "glow-drift 18s ease-in-out infinite alternate",
        }} />
        {/* Light streaks */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          preserveAspectRatio="none"
          viewBox="0 0 1600 900"
          aria-hidden="true"
        >
          {STREAKS.map((s) => (
            <line
              key={s.key}
              x1="0" x2={s.w}
              y1={s.y * 9} y2={s.y * 9 + s.angle * 2}
              style={{
                stroke: "var(--accent)",
                strokeWidth: 0.6,
                opacity: 0.25,
                filter: "drop-shadow(0 0 12px var(--accent-glow))",
                animation: `streak ${s.dur}s linear ${s.delay}s infinite`,
              }}
            />
          ))}
        </svg>
        {/* Grain */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>")`,
          opacity: 0.08,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }} />
      </div>

      <style>{`
        @keyframes glow-drift {
          0%   { transform: translate(-52%,-52%) scale(1); }
          100% { transform: translate(-48%,-46%) scale(1.08); }
        }
        @keyframes streak {
          0%   { transform: translateX(-200px); opacity: 0; }
          10%  { opacity: 0.4; }
          90%  { opacity: 0.3; }
          100% { transform: translateX(1900px); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1;  transform: scale(1); }
          50%       { opacity: .5; transform: scale(.85); }
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.95) inset,
                      0 16px 36px -8px rgba(0,0,0,0.6),
                      0 4px 10px rgba(0,0,0,0.4) !important;
        }
        .hero-btn-ghost:hover {
          background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04)) !important;
          border-color: var(--line-3) !important;
        }
      `}</style>

      {/* ── Corner labels ── */}
      <div className="hidden md:block" style={{ position: "absolute", top: 84, left: "var(--pad)", zIndex: 2, fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 500, lineHeight: 1.6 }}>
        <div style={{ color: "var(--text)" }}>{HERO.cornerTL1}</div>
        <div style={{ color: "var(--text-mute)", fontWeight: 400 }}>{HERO.cornerTL2}</div>
      </div>
      <div className="hidden md:block" style={{ position: "absolute", top: 84, right: "var(--pad)", zIndex: 2, textAlign: "right", fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 500, lineHeight: 1.6 }}>
        <div style={{ color: "var(--text)" }}>{HERO.cornerTR1}</div>
        <div style={{ color: "var(--text-mute)", fontWeight: 400 }}>{HERO.cornerTR2}</div>
      </div>

      {/* ── Content ── */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Full logo */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="hidden lg:block"
          style={{ marginBottom: 48 }}
        >
          <GlericLogo variant="full" tone="light" style={{ width: "min(560px, 100%)", height: "auto" }} />
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 500, marginBottom: 48 }}
        >
          <span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 12px var(--accent)", animation: "pulse 2s ease infinite", display: "inline-block", marginRight: 8, verticalAlign: 1 }} />
            {HERO.meta}
          </span>
          <span className="hidden md:inline">{HERO.metaRight}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          style={{ fontSize: "clamp(40px,7vw,104px)", lineHeight: 0.98, letterSpacing: "-0.04em", fontWeight: 500, margin: 0, maxWidth: "18ch", background: "linear-gradient(180deg,#ffffff 0%,#eef0f5 35%,#9aa0ac 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}
        >
          {HERO.headline1}{" "}
          <em style={{ fontStyle: "normal", background: "linear-gradient(180deg,#a7aab5 0%,#74778a 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", fontWeight: 300 }}>
            {HERO.headline2}
          </em>{" "}
          {HERO.headline3}
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.32 }}
          style={{ margin: "28px 0 0", maxWidth: "52ch", color: "var(--text-dim)", fontSize: "clamp(15px,1.3vw,18px)" }}
        >
          {HERO.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.44 }}
          style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}
        >
          <a
            href="#contact"
            onClick={(e) => handleAnchor(e, "#contact")}
            className="hero-btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 26px", borderRadius: 999, background: "linear-gradient(180deg,#ffffff 0%,#e7e9ee 100%)", color: "#0a0a0b", fontSize: 15, fontWeight: 500, border: "1px solid transparent", boxShadow: "0 1px 0 rgba(255,255,255,0.85) inset,0 -1px 0 rgba(0,0,0,0.08) inset,0 10px 24px -8px rgba(0,0,0,0.55),0 2px 6px rgba(0,0,0,0.35)", transition: "transform .4s var(--ease),box-shadow .4s var(--ease)" }}
          >
            {HERO.cta1}
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#process"
            onClick={(e) => handleAnchor(e, "#process")}
            className="hero-btn-ghost"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 26px", borderRadius: 999, background: "linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))", color: "var(--text)", fontSize: 15, border: "1px solid var(--line-2)", boxShadow: "0 8px 24px -10px rgba(0,0,0,0.5)", transition: "background .3s var(--ease),border-color .3s var(--ease)" }}
          >
            {HERO.cta2}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
