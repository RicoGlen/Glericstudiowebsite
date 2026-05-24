"use client";

import { ArrowUpRight } from "lucide-react";

// ── Mock visuals ──────────────────────────────────────────────────────────────

function MockClothing() {
  return (
    <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #0f0f13, #08080b)" }}>
      <div style={{
        position: "absolute",
        inset: "24% 8% 100px 8%",
        border: "1px solid var(--line-2)",
        borderRadius: 10,
        background: "var(--bg-3)",
        overflow: "hidden",
        boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderBottom: "1px solid var(--line)", fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--text-mute)" }}>
          <span style={{ display: "flex", gap: 5 }}>
            {[0,1,2].map(i => <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--line-2)", display: "block" }} />)}
          </span>
          maison · drift / aw26
        </div>
        <div style={{ padding: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {[0,1,2,3,4,5].map((i) => (
            <div key={i} style={{
              aspectRatio: "3/4",
              borderRadius: 4,
              background: i === 1 ? "linear-gradient(180deg, #2a2a32, #14141a)" : i === 4 ? "linear-gradient(180deg, #353540, #16161c)" : "linear-gradient(180deg, #1c1c22, #0e0e12)",
              border: "1px solid var(--line)",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MockAuto() {
  return (
    <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #0d0d12, #07070a)" }}>
      <div style={{
        position: "absolute",
        inset: "22% 10% 96px 10%",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid var(--line-2)",
        background: "radial-gradient(600px 200px at 30% 100%, oklch(0.86 0.13 220 / 0.20), transparent 60%), linear-gradient(180deg, #0e0e12, #050507)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 18px", fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--text-mute)", borderBottom: "1px solid var(--line)" }}>
          <span>NORTHGATE · DETAILING</span>
          <span>BOOK</span>
        </div>
        <div style={{ padding: "28px 22px 22px", display: "flex", flexDirection: "column", gap: 8 }}>
          <h5 style={{ margin: 0, fontSize: 26, letterSpacing: "-0.02em", fontWeight: 500, lineHeight: 1.05 }}>Mirror finish.<br />Every panel.</h5>
          <p style={{ margin: 0, fontSize: 11, color: "var(--text-mute)" }}>Paint correction & ceramic coating · Amsterdam</p>
          <span style={{ marginTop: 10, display: "inline-flex", width: "fit-content", padding: "8px 14px", borderRadius: 999, background: "#fff", color: "#0a0a0b", fontSize: 10, fontWeight: 500 }}>
            Boek behandeling →
          </span>
        </div>
        <svg style={{ position: "absolute", inset: 0, pointerEvents: "none", width: "100%", height: "100%" }} viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="180" x2="400" y2="120" stroke="oklch(0.86 0.13 220 / 0.5)" strokeWidth="0.5" />
          <line x1="0" y1="190" x2="400" y2="140" stroke="oklch(0.86 0.13 220 / 0.3)" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}

function MockLocal() {
  return (
    <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #0e0e13, #07070a)" }}>
      <div style={{
        position: "absolute",
        inset: "22% 10% 96px 10%",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid var(--line-2)",
        background: "linear-gradient(180deg, #11141a, #08080b)",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: "100%" }}>
          {/* Left col */}
          <div style={{ padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 8.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-mute)" }}>04 — Services</span>
            <h5 style={{ margin: 0, fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.1 }}>Installatie & onderhoud, voor heel Noord-Holland.</h5>
            <ul style={{ listStyle: "none", padding: 0, margin: "auto 0 0", display: "flex", flexDirection: "column", gap: 6, fontSize: 10, color: "var(--text-mute)" }}>
              {["CV ketels", "Warmtepompen", "Onderhoud", "Spoed-service"].map(s => (
                <li key={s} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--line)", paddingTop: 6 }}>
                  <span>{s}</span><span>→</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right col */}
          <div style={{ padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10, borderLeft: "1px solid var(--line)", background: "rgba(255,255,255,0.015)" }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 8.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-mute)" }}>— Contact</span>
            <h5 style={{ margin: 0, fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em" }}>020 — 123 4567</h5>
            <p style={{ margin: 0, fontSize: 10, color: "var(--text-mute)" }}>Bel direct of vraag een offerte aan.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "auto 0 0", display: "flex", flexDirection: "column", gap: 6, fontSize: 10, color: "var(--text-mute)" }}>
              {[["Ma – Vr", "08–18"], ["Za", "09–14"]].map(([day, time]) => (
                <li key={day} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--line)", paddingTop: 6 }}>
                  <span>{day}</span><span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Card shell ────────────────────────────────────────────────────────────────

type MockType = "clothing" | "auto" | "local";

interface ShowcaseCardProps {
  conceptNum: string;
  category: string;
  title: string;
  subtitle: string;
  mock: MockType;
}

const mockComponents: Record<MockType, React.ReactNode> = {
  clothing: <MockClothing />,
  auto: <MockAuto />,
  local: <MockLocal />,
};

export function ShowcaseCard({ conceptNum, category, title, subtitle, mock }: ShowcaseCardProps) {
  return (
    <article style={{
      position: "relative",
      border: "1px solid var(--line)",
      borderRadius: 18,
      overflow: "hidden",
      background: "var(--bg-2)",
      display: "flex",
      flexDirection: "column",
      transition: "transform .6s var(--ease), border-color .4s var(--ease)",
    }}
    className="showcase-card"
    >
      <div style={{ position: "absolute", top: 18, left: 18, right: 18, display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-mute)", zIndex: 2 }}>
        <span>{conceptNum}</span>
        <span>{category}</span>
      </div>

      {mockComponents[mock]}

      <div style={{ position: "absolute", left: 18, right: 18, bottom: 18, display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 2 }}>
        <div>
          <h4 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em", fontWeight: 500 }}>{title}</h4>
          <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--text-mute)", letterSpacing: "0.04em" }}>{subtitle}</p>
        </div>
        <ArrowUpRight size={18} />
      </div>

      <style>{`.showcase-card:hover { transform: translateY(-4px); border-color: var(--line-2) !important; }`}</style>
    </article>
  );
}
