"use client";

import { ArrowRight } from "lucide-react";

interface ProcessStepProps {
  n: string;
  title: string;
  active: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

export function ProcessStep({ n, title, active, onClick, onMouseEnter }: ProcessStepProps) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-pressed={active}
      style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr auto",
        gap: 20,
        padding: active ? "28px 0 28px 14px" : "28px 0",
        borderBottom: "1px solid var(--line)",
        alignItems: "center",
        cursor: "pointer",
        transition: "padding-left .4s var(--ease)",
        outline: "none",
      }}
    >
      <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: active ? "var(--accent)" : "var(--text-mute)", letterSpacing: "0.18em", transition: "color .4s var(--ease)" }}>
        /{n}
      </span>
      <h3 style={{ fontSize: "clamp(22px,2.2vw,30px)", letterSpacing: "-0.02em", fontWeight: 500, margin: 0 }}>{title}</h3>
      <span style={{ color: "var(--text-mute)", opacity: active ? 1 : 0, transform: active ? "translateX(0)" : "translateX(-8px)", transition: "opacity .4s var(--ease), transform .4s var(--ease)" }}>
        <ArrowRight size={18} />
      </span>
    </div>
  );
}
