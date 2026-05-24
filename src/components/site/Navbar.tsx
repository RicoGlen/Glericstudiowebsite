"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { GlericLogo } from "@/components/brand/GlericLogo";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "#diensten",  label: "Diensten" },
  { href: "#process",   label: "Werkwijze" },
  { href: "#showcase",  label: "Werk" },
  { href: "#care-plus", label: "Care+" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar__inner">
          {/* logo */}
          <Link href="/" className="navbar__logo" aria-label="Gleric Studio — home">
            <GlericLogo variant="wordmark" tone="light" style={{ height: 28, width: "auto" }} />
          </Link>

          {/* desktop nav */}
          <nav className="navbar__links" aria-label="Hoofdnavigatie">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="navbar__link">
                {label}
              </a>
            ))}
          </nav>

          {/* desktop cta */}
          <div className="navbar__actions">
            <a href="#contact" className="btn btn--primary btn--sm">
              Start jouw project
            </a>
          </div>

          {/* mobile hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu openen"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        links={NAV_LINKS}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
