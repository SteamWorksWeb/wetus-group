"use client";

/* =================================================================
   WETUS Group — Interactive UI Components (Client Components)
   Handles: hover states, dropdown menus, mobile nav
================================================================= */

import Link from "next/link";
import { useState } from "react";

/* ---------------------------------------------------------------
   Navigation Data — extracted from sitemap & site structure
--------------------------------------------------------------- */
const NAV_ITEMS = [
  {
    label: "Construction",
    href: "/construction",
    children: [
      {
        group: "Residential",
        links: [
          { label: "Beach Home Construction", href: "/construction/residential/beach-home-construction" },
          { label: "Custom Homes",            href: "/construction/residential/custom-homes" },
          { label: "Remodels",               href: "/construction/residential/remodels" },
          { label: "Storm Hardening",        href: "/construction/residential/storm-hardening" },
          { label: "Additions",              href: "/construction/residential/additions" },
          { label: "Kitchen Remodeling",     href: "/construction/residential/kitchen-remodeling" },
          { label: "Bathroom Remodeling",    href: "/construction/residential/bathroom-remodeling" },
          { label: "Outdoor Living",         href: "/construction/residential/outdoor-living" },
        ],
      },
      {
        group: "Farm & Ranch",
        links: [
          { label: "Agricultural Structures", href: "/construction/farm-ranch/agricultural-structures" },
          { label: "Pole Barns",              href: "/construction/farm-ranch/pole-barns" },
          { label: "Metal Buildings",         href: "/construction/farm-ranch/metal-buildings" },
          { label: "Equine Facilities",       href: "/construction/farm-ranch/equine-facilities" },
        ],
      },
      {
        group: "Commercial",
        links: [
          { label: "Light Commercial",    href: "/construction/commercial/light-commercial" },
          { label: "Church Construction", href: "/construction/commercial/church-construction" },
          { label: "Government",          href: "/construction/commercial/government" },
          { label: "Hospitality",         href: "/construction/commercial/hospitality" },
          { label: "Medical",             href: "/construction/commercial/medical" },
          { label: "Retail",              href: "/construction/commercial/retail" },
        ],
      },
    ],
  },
  {
    label: "Consulting",
    href: "/consulting",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      {
        group: "Service Areas",
        links: [
          { label: "Pensacola",       href: "/locations/pensacola" },
          { label: "Gulf Breeze",     href: "/locations/gulf-breeze" },
          { label: "Navarre",         href: "/locations/navarre" },
          { label: "Pensacola Beach", href: "/locations/pensacola-beach" },
          { label: "Pace",            href: "/locations/pace" },
          { label: "Milton",          href: "/locations/milton" },
          { label: "Jay",             href: "/locations/jay" },
          { label: "Molino",          href: "/locations/molino" },
          { label: "Perdido Key",     href: "/locations/perdido-key" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        group: "Resources",
        links: [
          { label: "Blog",        href: "/blog" },
          { label: "FAQ",         href: "/faq" },
          { label: "Our Process", href: "/resources/process" },
          { label: "Licensing",   href: "/resources/licensing" },
          { label: "Glossary",    href: "/resources/glossary" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

type NavItem = (typeof NAV_ITEMS)[number];

/* ---------------------------------------------------------------
   SVG Icon Components
--------------------------------------------------------------- */
export function WetusLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="18,2 33,10 33,26 18,34 3,26 3,10"
        fill="#C8960C"
        opacity="0.18"
      />
      <polygon
        points="18,2 33,10 33,26 18,34 3,26 3,10"
        fill="none"
        stroke="#C8960C"
        strokeWidth="1.5"
      />
      <text
        x="18"
        y="24"
        textAnchor="middle"
        fill="#C8960C"
        fontSize="16"
        fontWeight="700"
        fontFamily="Georgia, serif"
      >
        W
      </text>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Top Bar (license + phone)
--------------------------------------------------------------- */
export function TopBar() {
  return (
    <div
      className="hidden lg:block w-full text-xs py-2 px-6"
      style={{ backgroundColor: "#0D1B2A", color: "#9C9490" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="tracking-wide">
          FL Licensed General Contractor &nbsp;·&nbsp;
          <span style={{ color: "#C8960C" }}>CRC1334830</span>
          &nbsp;&amp;&nbsp;
          <span style={{ color: "#C8960C" }}>CBC1268785</span>
        </span>
        <a
          href="tel:+18504808000"
          className="flex items-center gap-1.5 transition-colors duration-200"
          style={{ color: "#9C9490" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C8960C")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9C9490")}
        >
          <PhoneIcon />
          (850) 480-8000
        </a>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Dropdown Menu
--------------------------------------------------------------- */
function NavDropdown({ item }: { item: NavItem }) {
  if (!item.children) return null;
  const isWide = item.children.length > 1;

  return (
    <div
      className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
      style={{ minWidth: isWide ? "680px" : "220px" }}
    >
      <div
        className="rounded-lg shadow-2xl p-6"
        style={{
          backgroundColor: "#162032",
          border: "1px solid rgba(200,150,12,0.25)",
        }}
      >
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: `repeat(${item.children.length}, minmax(180px, 1fr))`,
          }}
        >
          {item.children.map((group) => (
            <div key={group.group}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#C8960C" }}
              >
                {group.group}
              </p>
              <ul className="space-y-1.5" role="list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm block py-0.5 transition-colors duration-150"
                      style={{ color: "#9C9490" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9C9490")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Desktop Nav Item
--------------------------------------------------------------- */
function NavItem({ item }: { item: NavItem }) {
  return (
    <li className="relative group">
      <Link
        href={item.href}
        id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
        style={{ color: "#D1C8BC", fontFamily: "var(--font-sans)" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C8960C")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#D1C8BC")}
      >
        {item.label}
        {item.children && <ChevronDownIcon />}
      </Link>
      <NavDropdown item={item} />
    </li>
  );
}

/* ---------------------------------------------------------------
   Mobile Drawer Nav
--------------------------------------------------------------- */
function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className="absolute right-0 top-0 h-full w-80 max-w-full flex flex-col"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid rgba(200,150,12,0.2)" }}
        >
          <span
            className="font-bold text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}
          >
            WETUS <span style={{ color: "#C8960C" }}>Group</span>
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded"
            aria-label="Close menu"
          >
            <XIcon />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <button
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded transition-colors"
                style={{ color: "#D1C8BC" }}
                onClick={() =>
                  setExpanded(expanded === item.label ? null : item.label)
                }
              >
                {item.label}
                {item.children && (
                  <span
                    className="transition-transform duration-200"
                    style={{
                      transform:
                        expanded === item.label ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDownIcon />
                  </span>
                )}
              </button>

              {item.children && expanded === item.label && (
                <div className="mt-1 ml-3 space-y-3">
                  {item.children.map((group) => (
                    <div key={group.group}>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest px-3 py-1"
                        style={{ color: "#C8960C" }}
                      >
                        {group.group}
                      </p>
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-3 py-1.5 text-sm rounded transition-colors"
                          style={{ color: "#9C9490" }}
                          onClick={onClose}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF")}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9C9490")}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="px-6 py-4" style={{ borderTop: "1px solid rgba(200,150,12,0.2)" }}>
          <Link
            href="/contact"
            className="block w-full text-center py-3 rounded font-semibold text-sm text-white transition-colors"
            style={{ backgroundColor: "#C8960C" }}
            onClick={onClose}
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Main Header / Navbar (exported)
--------------------------------------------------------------- */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        id="site-header"
        className="sticky top-0 z-50 w-full"
        style={{
          backgroundColor: "#162032",
          borderBottom: "1px solid rgba(200,150,12,0.2)",
        }}
      >
        <nav
          className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            id="nav-logo"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="WETUS Group — Home"
          >
            <WetusLogo />
            <span
              className="text-white font-bold tracking-wide hidden sm:block"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                letterSpacing: "0.04em",
              }}
            >
              WETUS <span style={{ color: "#C8960C" }}>Group</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              id="nav-cta-contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
              style={{
                backgroundColor: "#C8960C",
                color: "#FFFFFF",
                fontFamily: "var(--font-sans)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#E2AF1A")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C8960C")
              }
            >
              Get a Quote
            </Link>

            {/* Hamburger */}
            <button
              id="nav-mobile-toggle"
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <span className="w-5 h-0.5 bg-white rounded-full block" />
              <span className="w-5 h-0.5 bg-white rounded-full block" />
              <span className="w-3.5 h-0.5 bg-white rounded-full block self-start" />
            </button>
          </div>
        </nav>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ---------------------------------------------------------------
   Hero CTA Buttons (interactive)
--------------------------------------------------------------- */
export function HeroCTAs() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link
        href="/contact"
        id="hero-cta-quote"
        className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
        style={{
          backgroundColor: "#C8960C",
          color: "#FFFFFF",
          fontFamily: "var(--font-sans)",
          boxShadow: "0 4px 20px rgba(200,150,12,0.35)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "#E2AF1A";
          el.style.boxShadow = "0 6px 28px rgba(200,150,12,0.50)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "#C8960C";
          el.style.boxShadow = "0 4px 20px rgba(200,150,12,0.35)";
        }}
      >
        Request a Free Quote
        <ArrowRightIcon />
      </Link>

      <Link
        href="/construction"
        id="hero-cta-services"
        className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
        style={{
          backgroundColor: "transparent",
          color: "#FFFFFF",
          border: "1.5px solid rgba(255,255,255,0.35)",
          fontFamily: "var(--font-sans)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.borderColor = "#C8960C";
          el.style.color = "#C8960C";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.borderColor = "rgba(255,255,255,0.35)";
          el.style.color = "#FFFFFF";
        }}
      >
        View Our Services
      </Link>
    </div>
  );
}

/* ---------------------------------------------------------------
   Shared icons used in page.tsx
--------------------------------------------------------------- */
function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
