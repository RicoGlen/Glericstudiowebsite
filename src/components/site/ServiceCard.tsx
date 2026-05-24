"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/content";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const TIER_VARS: Record<string, string> = {
  amber: "var(--c-amber)",
  blue:  "var(--c-blue)",
  sage:  "var(--c-sage)",
};

const TIER_SOFT_VARS: Record<string, string> = {
  amber: "var(--c-amber-soft)",
  blue:  "var(--c-blue-soft)",
  sage:  "var(--c-sage-soft)",
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const color     = TIER_VARS[service.tier]     ?? "var(--c-amber)";
  const colorSoft = TIER_SOFT_VARS[service.tier] ?? "var(--c-amber-soft)";

  return (
    <motion.div
      ref={ref}
      className={`service-card${service.featured ? " service-card--featured" : ""}`}
      style={
        {
          "--tier-color":      color,
          "--tier-color-soft": colorSoft,
        } as React.CSSProperties
      }
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
    >
      {/* color bar top */}
      <div className="service-card__bar" aria-hidden />

      <div className="service-card__head">
        <div className="service-card__meta">
          <span className="service-card__idx">{service.idx}</span>
          <span className="service-card__timeline">{service.timeline}</span>
        </div>
        {service.badge && (
          <span className="service-card__badge">{service.badge}</span>
        )}
      </div>

      <h3 className="service-card__name">{service.name}</h3>
      <p className="service-card__price">{service.price}</p>

      <ul className="service-card__list">
        {service.included.map((item) => (
          <li key={item} className="service-card__item">
            <Check size={14} className="service-card__check" aria-hidden />
            {item}
          </li>
        ))}
      </ul>

      <a href="#contact" className="service-card__cta">
        Meer info
        <ArrowRight size={14} aria-hidden />
      </a>
    </motion.div>
  );
}
