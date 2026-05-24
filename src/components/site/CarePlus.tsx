"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { CAREPLUS } from "@/lib/content";

export function CarePlus() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="care-plus" id="care-plus" ref={ref}>
      <div className="section-inner">
        <div className="care-plus__card">
          <motion.div
            className="care-plus__left"
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">{CAREPLUS.eyebrow}</p>
            <h2 className="section-title care-plus__title">{CAREPLUS.title}</h2>
            <p className="care-plus__sub">{CAREPLUS.sub}</p>
            <a href="#contact" className="btn btn--sage">
              {CAREPLUS.cta}
              <ArrowRight size={16} aria-hidden />
            </a>
          </motion.div>

          <motion.ul
            className="care-plus__list"
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {CAREPLUS.features.map((feat) => (
              <li key={feat} className="care-plus__item">
                <Check size={15} className="care-plus__check" aria-hidden />
                {feat}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
