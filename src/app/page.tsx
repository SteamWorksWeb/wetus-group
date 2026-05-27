/* =================================================================
   WETUS Group — Homepage (Server Component)
   Static replica of wetusgroup.com — above-the-fold viewport
   Interactive elements delegated to ./components.tsx (Client)
================================================================= */

import { TopBar, Header, HeroCTAs } from "./components";

/* ---------------------------------------------------------------
   SVG Icons (static, no interactivity)
--------------------------------------------------------------- */
function ShieldCheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BarnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 20h20M4 20V10l8-6 8 6v10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function HardHatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2z" />
      <path d="M10 10V5a2 2 0 114 0v5" />
      <path d="M4 15V9a8 8 0 0116 0v6" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Service Category Badges
--------------------------------------------------------------- */
const SERVICE_BADGES = [
  { icon: <HomeIcon />,     label: "Residential" },
  { icon: <BarnIcon />,     label: "Farm & Ranch" },
  { icon: <BuildingIcon />, label: "Commercial" },
  { icon: <HardHatIcon />,  label: "Consulting" },
] as const;

/* ---------------------------------------------------------------
   Stats Panel (right side on wide screens)
--------------------------------------------------------------- */
const STATS = [
  { number: "20+",  label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "9",    label: "Service Areas" },
  { number: "2",    label: "FL Contractor Licenses" },
] as const;

/* ---------------------------------------------------------------
   Hero Section (static shell — CTAs delegated to Client)
--------------------------------------------------------------- */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 96px)" }}
      aria-labelledby="hero-headline"
    >
      {/* Background gradient — deep navy construction aesthetic */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #0D1B2A 0%, #162032 40%, #1A2940 70%, #0D1B2A 100%)",
        }}
      />

      {/* Subtle diagonal rule texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(200,150,12,1) 40px,
              rgba(200,150,12,1) 41px
            )
          `,
        }}
      />

      {/* Gold accent bar — left edge */}
      <div
        className="absolute left-0 z-10 rounded-r-full"
        style={{
          top: "25%",
          bottom: "25%",
          width: "3px",
          backgroundColor: "#C8960C",
          opacity: 0.65,
        }}
      />

      {/* -------- Main Content -------- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">

          {/* License badge pill */}
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-8"
            style={{
              backgroundColor: "rgba(200,150,12,0.15)",
              color: "#C8960C",
              border: "1px solid rgba(200,150,12,0.35)",
            }}
          >
            <ShieldCheckIcon />
            FL Licensed &nbsp;·&nbsp; CRC1334830 &amp; CBC1268785
          </div>

          {/* H1 */}
          <h1
            id="hero-headline"
            className="text-balance font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
              color: "#FFFFFF",
            }}
          >
            Northwest Florida&apos;s
            <br />
            <span style={{ color: "#C8960C" }}>Trusted General</span>
            <br />
            Contractor
          </h1>

          {/* Sub-headline */}
          <p
            className="text-balance mb-10 leading-relaxed"
            style={{
              color: "#B8B0A5",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              maxWidth: "580px",
              fontFamily: "var(--font-sans)",
            }}
          >
            Residential remodeling, new construction, storm hardening, farm &amp; ranch
            structures, and owner&apos;s rep consulting — serving Pensacola, Gulf Breeze,
            Navarre &amp; beyond.
          </p>

          {/* CTA Buttons (Client Component) */}
          <HeroCTAs />

          {/* Service category badges */}
          <div
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {SERVICE_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "#9C9490" }}
              >
                <span style={{ color: "#C8960C" }}>{badge.icon}</span>
                <span style={{ fontFamily: "var(--font-sans)" }}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats panel — right side, visible xl+ */}
        <div
          className="hidden xl:flex absolute right-6 flex-col gap-4"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-lg text-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(200,150,12,0.22)",
                backdropFilter: "blur(8px)",
                minWidth: "150px",
              }}
            >
              <div
                className="font-bold leading-none mb-1"
                style={{
                  fontSize: "1.75rem",
                  color: "#C8960C",
                  fontFamily: "var(--font-display)",
                }}
              >
                {stat.number}
              </div>
              <div
                className="text-xs leading-tight"
                style={{ color: "#9C9490", fontFamily: "var(--font-sans)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Page Entry Point
--------------------------------------------------------------- */
export default function HomePage() {
  return (
    <main id="main-content">
      <TopBar />
      <Header />
      <HeroSection />
    </main>
  );
}
