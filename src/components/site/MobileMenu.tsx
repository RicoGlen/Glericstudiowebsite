"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { GlericLogo } from "@/components/brand/GlericLogo";
import { NAV_ITEMS } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("gleric:menu-open", handler);
    return () => window.removeEventListener("gleric:menu-open", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "rgba(27,29,36,0.96)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
          }}
          aria-modal="true"
          role="dialog"
          aria-label="Navigatiemenu"
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Sluit menu"
            style={{
              position: "absolute",
              top: 22,
              right: "var(--pad)",
              width: 42,
              height: 42,
              borderRadius: 999,
              border: "1px solid var(--line-2)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: "flex", flexDirection: "column", padding: "100px var(--pad) 40px", height: "100%" }}>
            <div style={{ paddingTop: 6 }}>
              <GlericLogo variant="wordmark" tone="light" style={{ width: 200, height: "auto" }} />
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 20 }}>
              {NAV_ITEMS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={(e) => handleAnchor(e, href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: "clamp(34px,9vw,56px)",
                    letterSpacing: "-0.03em",
                    fontWeight: 500,
                    padding: "10px 0",
                    borderBottom: "1px solid var(--line)",
                    color: "var(--text)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{label}</span>
                  <span style={{ fontSize: 12, color: "var(--text-mute)", letterSpacing: "0.2em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-mute)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              <span>Gleric Studio · NL</span>
              <span>info@glericstudio.nl</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
