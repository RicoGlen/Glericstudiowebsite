"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer style={{ borderTop: "1px solid var(--line)", paddingBlock: "60px 40px", fontFamily: "var(--sans)" }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={{
            fontSize: "clamp(48px,12.4vw,168px)",
            lineHeight: 0.88,
            letterSpacing: "-0.055em",
            fontWeight: 600,
            margin: 0,
            background: "linear-gradient(180deg, #ffffff 0%, #f0f2f7 30%, #a6a9b3 75%, #6c6f78 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            whiteSpace: "nowrap",
            filter: "drop-shadow(0 6px 30px rgba(255,255,255,0.06))",
          }}>
            GLERIC&nbsp;STUDIO
          </h2>
        </motion.div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
          paddingTop: 40,
          marginTop: 40,
          borderTop: "1px solid var(--line)",
          fontSize: 12,
          color: "var(--text-mute)",
          letterSpacing: "0.04em",
        }}>
          <span>© 2026 Gleric Studio · KvK ·· BTW NL</span>
          <span>In-house ontworpen &amp; gebouwd · Nederland</span>
          <a href="mailto:info@glericstudio.nl" style={{ color: "var(--text-mute)", transition: "color .3s var(--ease)" }} className="footer-email">
            info@glericstudio.nl
          </a>
        </div>
      </div>
      <style>{`.footer-email:hover { color: var(--text) !important; }`}</style>
    </footer>
  );
}
