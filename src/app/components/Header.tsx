"use client";

import Link from "next/link";
import { useState } from "react";

/* ---------------------------------------------------------------
   Services dropdown items (from live site DOM)
--------------------------------------------------------------- */
const SERVICES_LINKS = [
  { label: "General Contracting",    href: "/construction" },
  { label: "Construction Consulting",href: "/consulting" },
  { label: "Beach Home Construction",href: "/construction/residential/beach-home-construction" },
  { label: "Custom Homes",           href: "/construction/residential/custom-homes" },
  { label: "Remodels & Renovations", href: "/construction/residential/remodels" },
  { label: "Storm Hardening",        href: "/construction/residential/storm-hardening" },
  { label: "Kitchen Remodeling",     href: "/construction/residential/kitchen-remodeling" },
  { label: "Bathroom Remodeling",    href: "/construction/residential/bathroom-remodeling" },
  { label: "Agricultural Structures",href: "/construction/farm-ranch/agricultural-structures" },
  { label: "Church Construction",    href: "/construction/commercial/church-construction" },
  { label: "Light Commercial",       href: "/construction/commercial/light-commercial" },
];

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "Services",  href: "/construction", hasDropdown: true },
  { label: "Homes",     href: "/homes" },
  { label: "Projects",  href: "/portfolio" },
  { label: "Locations", href: "/locations" },
  { label: "Journal",   href: "/blog" },
  { label: "About",     href: "/about" },
  { label: "Contact",   href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* ---- Main Nav Bar ---- */}
      <header
        className="sticky top-0 z-50 w-full"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo — SVG house mark + wordmark matching live site */}
          <Link href="/" id="nav-logo" aria-label="WETUS Group Home" className="flex items-center gap-2.5">
            {/* House icon */}
            <svg width="40" height="46" viewBox="0 0 40 46" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2L2 14v28h12V28h12v14h12V14L20 2z" fill="#162032" opacity="0.12"/>
              <path d="M20 2L2 14v28h12V28h12v14h12V14L20 2z" fill="none" stroke="#162032" strokeWidth="2" strokeLinejoin="round"/>
              <rect x="16" y="28" width="8" height="14" fill="#162032" opacity="0.4"/>
              <path d="M12 14h16v10H12z" fill="#162032" opacity="0.08"/>
            </svg>
            {/* Wordmark */}
            <div className="flex flex-col leading-none">
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "#162032", letterSpacing: "0.04em" }}>WETUS</span>
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.6rem", color: "#162032", letterSpacing: "0.18em", textTransform: "uppercase" }}>GROUP</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="relative group">
                  <button
                    id="nav-services"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-150"
                    style={{ color: "#162032", fontFamily: "var(--font-sans)" }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {/* Dropdown */}
                  <div
                    className="absolute top-full left-0 pt-1 z-50 transition-all duration-150"
                    style={{ opacity: servicesOpen ? 1 : 0, visibility: servicesOpen ? "visible" : "hidden", minWidth: "240px" }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div style={{ backgroundColor: "#FFFFFF", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", borderRadius: "8px", border: "1px solid #E5E7EB", padding: "8px 0" }}>
                      {SERVICES_LINKS.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2.5 text-sm transition-colors duration-150"
                          style={{ color: "#162032", fontFamily: "var(--font-sans)" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EEF0F5"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  id={`nav-${item.label.toLowerCase()}`}
                  className="px-3 py-2 text-sm font-medium transition-colors duration-150"
                  style={{ color: "#162032", fontFamily: "var(--font-sans)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#162032"; (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+18504668909"
              id="nav-call"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-150"
              style={{ color: "#162032", borderColor: "#D1D5DB", fontFamily: "var(--font-sans)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EEF0F5"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Call Us
            </a>
            <Link
              href="/contact"
              id="nav-estimate"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200"
              style={{ backgroundColor: "#162032", color: "#FFFFFF", fontFamily: "var(--font-sans)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0F1825"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#162032"; }}
            >
              Request Estimate
            </Link>

            {/* Mobile hamburger */}
            <button
              id="nav-mobile-toggle"
              className="lg:hidden p-2"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#162032" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>

        {/* ---- Info Bar ---- */}
        <div
          className="w-full text-center text-xs py-2 px-4"
          style={{ backgroundColor: "#F1F3F8", color: "#6B7280", fontFamily: "var(--font-sans)", borderTop: "1px solid #E5E7EB" }}
        >
          Florida Licenses: CRC1334830 &amp; CBC1268785 &bull; Locally Owned &bull; Serving Escambia &amp; Santa Rosa Counties &bull; Consulting Services Available Nationwide
        </div>
      </header>

      {/* ---- Mobile Drawer ---- */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 flex flex-col" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid #E5E7EB" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#162032" }}>WETUS Group</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#162032" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-3 text-sm font-medium rounded-lg"
                  style={{ color: "#162032" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 py-4 space-y-3" style={{ borderTop: "1px solid #E5E7EB" }}>
              <a href="tel:+18504668909" className="flex items-center justify-center gap-2 w-full py-3 rounded-full border text-sm font-medium" style={{ color: "#162032", borderColor: "#D1D5DB" }}>
                Call (850) 466-8909
              </a>
              <Link href="/contact" className="block text-center w-full py-3 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "#162032" }} onClick={() => setMobileOpen(false)}>
                Request Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
