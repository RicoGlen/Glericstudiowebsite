"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ShowcaseItem } from "@/lib/content";

interface ShowcaseCardProps {
  item: ShowcaseItem;
  index: number;
}

export function ShowcaseCard({ item, index }: ShowcaseCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      className="showcase-card"
      style={{ "--card-bg": item.bg, "--card-accent": item.accent } as React.CSSProperties}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
    >
      {/* visual area */}
      <div className="showcase-card__visual" aria-hidden>
        <div className="showcase-card__mock">
          <div className="showcase-card__mock-bar" />
          <div className="showcase-card__mock-body" />
        </div>
      </div>

      {/* foot */}
      <div className="showcase-card__foot">
        <div className="showcase-card__info">
          <span className="showcase-card__sector">{item.sector}</span>
          <h3 className="showcase-card__name">{item.name}</h3>
          <p className="showcase-card__desc">{item.desc}</p>
        </div>
        <a
          href={item.href ?? "#showcase"}
          className="showcase-card__link"
          aria-label={`Bekijk ${item.name}`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
    </motion.article>
  );
}
