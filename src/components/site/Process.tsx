"use client";

import { SectionHeading } from "./SectionHeading";
import { ProcessStep } from "./ProcessStep";
import { PROCESS_STEPS } from "@/lib/content";

export function Process() {
  return (
    <section className="process" id="process">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Werkwijze"
          title="Van idee tot live"
          sub="Een gestructureerd proces zodat jij altijd weet waar je aan toe bent."
        />

        <div className="process__steps">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep
              key={step.n}
              step={step}
              index={i}
              isLast={i === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
