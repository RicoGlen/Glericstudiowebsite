"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  sub?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, sub, centered = false }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`section-heading${centered ? " section-heading--center" : ""}`}
    >
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      >
        {title}
      </motion.h2>

      {sub && (
        <motion.p
          className="section-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
