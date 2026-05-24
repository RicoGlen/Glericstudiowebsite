"use client";

import { SectionHeading } from "./SectionHeading";
import { ShowcaseCard } from "./ShowcaseCard";
import { SHOWCASE } from "@/lib/content";

export function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Ons werk"
          title="Recente projecten"
          sub="Elk project vertelt een verhaal. Dit zijn er een paar van ons."
          centered
        />

        <div className="showcase__grid">
          {SHOWCASE.map((item, i) => (
            <ShowcaseCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
