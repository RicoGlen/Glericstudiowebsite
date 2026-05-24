"use client";

import { GlericLogo } from "@/components/brand/GlericLogo";

const FOOTER_LINKS = [
  { href: "#diensten",  label: "Diensten" },
  { href: "#process",   label: "Werkwijze" },
  { href: "#showcase",  label: "Werk" },
  { href: "#care-plus", label: "Care+" },
  { href: "#contact",   label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* logo lockup */}
        <div className="footer__brand">
          <GlericLogo variant="wordmark" tone="light" style={{ height: 26, width: "auto", opacity: 0.85 }} />
          <p className="footer__tagline">Premium websites voor Nederlandse bedrijven.</p>
        </div>

        {/* nav */}
        <nav className="footer__nav" aria-label="Footernavigatie">
          {FOOTER_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="footer__link">
              {label}
            </a>
          ))}
        </nav>

        {/* bottom row */}
        <div className="footer__row">
          <span className="footer__copy">
            © {year} Gleric Studio. Alle rechten voorbehouden.
          </span>
          <div className="footer__legal">
            <a href="/privacy" className="footer__legal-link">Privacybeleid</a>
            <a href="/terms"   className="footer__legal-link">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
