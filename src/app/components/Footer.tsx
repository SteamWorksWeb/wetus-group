"use client";

import Link from "next/link";

const FOOTER_SERVICES = [
  { label: "General Contracting",    href: "/construction" },
  { label: "Construction Consulting",href: "/consulting" },
  { label: "Beach Home Construction",href: "/construction/residential/beach-home-construction" },
  { label: "Agricultural Structures",href: "/construction/farm-ranch/agricultural-structures" },
  { label: "Custom Homes",           href: "/construction/residential/custom-homes" },
  { label: "Remodels & Renovations", href: "/construction/residential/remodels" },
  { label: "Church Construction",    href: "/construction/commercial/church-construction" },
  { label: "Light Commercial",       href: "/construction/commercial/light-commercial" },
];

const FOOTER_COMPANY = [
  { label: "About Us",               href: "/about" },
  { label: "Locations",              href: "/locations" },
  { label: "The Buildbook",          href: "/portfolio" },
  { label: "FAQ",                    href: "/faq" },
  { label: "The Builders Journal",   href: "/blog" },
  { label: "Vendors/Sub-Contractors",href: "/vendors" },
  { label: "Contact",                href: "/contact" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A2744" }}>
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 — Logo + tagline + social */}
          <div>
            {/* Logo: same SVG mark as header, white version */}
            <div className="flex flex-col items-start gap-2 mb-4">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                <path d="M22 5L8 15v20h10v-10h8v10h10V15L22 5z" fill="white" opacity="0.15"/>
                <path d="M22 5L8 15v20h10v-10h8v10h10V15L22 5z" fill="none" stroke="white" strokeWidth="1.5"/>
                <text x="22" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Georgia,serif">W</text>
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  fontSize: "0.75rem",
                  color: "#FFFFFF",
                }}
              >
                WETUS GROUP
              </span>
            </div>
            <p style={{ color: "#9CA3AF", fontSize: "0.9rem", lineHeight: 1.6, fontFamily: "var(--font-sans)", marginBottom: "1.25rem" }}>
              Elevating the Standard — One Build at a Time.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                aria-label="WETUS Group on Facebook"
                className="transition-opacity duration-150 hover:opacity-70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="WETUS Group on Instagram"
                className="transition-opacity duration-150 hover:opacity-70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.02em", marginBottom: "1rem" }}>
              Services
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: "#9CA3AF", fontSize: "0.875rem", fontFamily: "var(--font-sans)", transition: "color 150ms" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.02em", marginBottom: "1rem" }}>
              Company
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: "#9CA3AF", fontSize: "0.875rem", fontFamily: "var(--font-sans)", transition: "color 150ms" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.02em", marginBottom: "1rem" }}>
              Contact
            </h3>
            <ul className="space-y-3">
              {/* Address */}
              <li className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span style={{ color: "#9CA3AF", fontSize: "0.875rem", fontFamily: "var(--font-sans)", lineHeight: 1.5 }}>
                  6901A N. 9th Ave, #546,<br />Pensacola, FL 32504
                </span>
              </li>
              {/* Office phone */}
              <li className="flex items-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#9CA3AF" className="flex-shrink-0"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <a href="tel:+18504668909" style={{ color: "#9CA3AF", fontSize: "0.875rem", fontFamily: "var(--font-sans)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF"; }}>
                  Office: (850) 466-8909
                </a>
              </li>
              {/* Toll-free */}
              <li className="flex items-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#9CA3AF" className="flex-shrink-0"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <a href="tel:+18339993887" style={{ color: "#9CA3AF", fontSize: "0.875rem", fontFamily: "var(--font-sans)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF"; }}>
                  Toll-Free: (833) 999-3887
                </a>
              </li>
              {/* Email */}
              <li className="flex items-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info@wetusgroup.com" style={{ color: "#9CA3AF", fontSize: "0.875rem", fontFamily: "var(--font-sans)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF"; }}>
                  info@wetusgroup.com
                </a>
              </li>
            </ul>

            {/* License badge */}
            <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ color: "#C8960C", fontSize: "0.8rem", fontWeight: 600, fontFamily: "var(--font-sans)" }}>
                Florida Licenses: CRC1334830 &amp; CBC1268785
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: "#6B7280", fontSize: "0.8rem", fontFamily: "var(--font-sans)" }}>
            © 2026 WETUS Consulting Group, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy",        href: "/policy/privacy" },
              { label: "Terms & Conditions",    href: "/policy/terms" },
              { label: "Accessibility Statement",href: "/accessibility" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "#6B7280", fontSize: "0.8rem", fontFamily: "var(--font-sans)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6B7280"; }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
