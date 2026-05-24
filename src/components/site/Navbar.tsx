"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { GlericLogo } from "@/components/brand/GlericLogo";
import { NAV_ITEMS } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuOpen = () => {
    window.dispatchEvent(new CustomEvent("gleric:menu-open"));
  };

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className="nav"
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 60,
        paddingTop: 14,
        transition: "backdrop-filter .4s var(--ease), background .4s var(--ease), border-color .4s var(--ease)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        background: scrolled ? "rgba(27,29,36,0.68)" : "transparent",
        backdropFilter: scrolled ? "saturate(160%) blur(20px)" : undefined,
        WebkitBackdropFilter: scrolled ? "saturate(160%) blur(20px)" : undefined,
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, paddingBlock: 14 }}>
        <a href="#top" aria-label="Gleric Studio home" onClick={(e) => handleAnchor(e, "#top")}>
          <GlericLogo variant="wordmark" tone="light" className="h-8 md:h-10 w-auto" style={{ height: "clamp(28px,3.5vw,36px)" }} />
        </a>

        <nav aria-label="Primaire navigatie" style={{ display: "flex", alignItems: "center", gap: 30 }} className="hidden md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleAnchor(e, href)}
              style={{
                fontSize: 13,
                color: "var(--text-dim)",
                letterSpacing: "-0.005em",
                transition: "color .3s var(--ease)",
                position: "relative",
              }}
              className="nav-link"
            >
              {label}
            </a>
          ))}
        </nav>

        <Link
          href="#contact"
          onClick={(e) => handleAnchor(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            borderRadius: 999,
            border: "1px solid var(--line-2)",
            fontSize: 13,
            color: "var(--text)",
            transition: "background .3s var(--ease), border-color .3s var(--ease)",
          }}
          className="hidden md:inline-flex hover:bg-white/5"
        >
          Start project
          <ArrowUpRight size={14} />
        </Link>

        <button
          onClick={handleMenuOpen}
          aria-label="Open menu"
          className="md:hidden"
          style={{
            width: 42,
            height: 42,
            borderRadius: 999,
            border: "1px solid var(--line-2)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Menu size={18} />
        </button>
      </div>

      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -6px;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .5s var(--ease);
        }
        .nav-link:hover { color: var(--text) !important; }
        .nav-link:hover::after { transform: scaleX(1); }
      `}</style>
    </header>
  );
}
