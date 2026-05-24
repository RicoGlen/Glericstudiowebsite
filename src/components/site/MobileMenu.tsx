"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { GlericLogo } from "@/components/brand/GlericLogo";

interface MobileMenuProps {
  links: { href: string; label: string }[];
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ links, open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <motion.div
            className="mobile-menu__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />

          {/* panel */}
          <motion.div
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigatiemenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
          >
            <div className="mobile-menu__head">
              <GlericLogo variant="wordmark" tone="light" style={{ height: 24, width: "auto" }} />
              <button
                className="mobile-menu__close"
                onClick={onClose}
                aria-label="Menu sluiten"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-menu__links" aria-label="Mobiele navigatie">
              {links.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  className="mobile-menu__link"
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            <div className="mobile-menu__foot">
              <a href="#contact" className="btn btn--primary" onClick={onClose}>
                Start jouw project
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
