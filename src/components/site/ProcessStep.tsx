"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProcessStep as ProcessStepType } from "@/lib/content";

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  isLast: boolean;
}

export function ProcessStep({ step, index, isLast }: ProcessStepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="process-step"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12,
      }}
    >
      {/* connector line */}
      {!isLast && <div className="process-step__line" aria-hidden />}

      {/* number node */}
      <div
        className="process-step__node"
        style={{ "--step-color": step.color } as React.CSSProperties}
      >
        <span className="process-step__n">{step.n}</span>
      </div>

      {/* content */}
      <div className="process-step__body">
        <h3 className="process-step__title" style={{ color: step.color }}>
          {step.title}
        </h3>
        <p className="process-step__desc">{step.desc}</p>
        <p className="process-step__duration">{step.duration}</p>
      </div>
    </motion.div>
  );
}
