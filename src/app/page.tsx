import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/app/components/FaqAccordion";

/* ── Hero ── */
function Hero() {
  return (
    <section id="hero" className="relative w-full" style={{ minHeight: "580px" }}>
      <Image
        src="/images/Hero_construction_site_image_fdf65ec5.webp"
        alt="Coastal beach home construction in Pensacola Florida"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(22,32,50,0.62)" }} />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24" style={{ minHeight: "580px" }}>
        <h1 className="text-balance font-bold text-white mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.5rem)", maxWidth: "820px", lineHeight: 1.15 }}>
          Pensacola General Contractor – Licensed Residential &amp; Commercial Builders
        </h1>
        <p className="text-white mb-3" style={{ fontSize: "clamp(1rem,2vw,1.15rem)", maxWidth: "680px", opacity: 0.92 }}>
          Licensed Florida general contractor providing residential construction, commercial build-outs, and consulting services in Pensacola, Gulf Breeze, Pace, Milton, and Northwest Florida.
        </p>
        <p className="text-white mb-8" style={{ fontSize: "0.95rem", maxWidth: "600px", opacity: 0.78 }}>
          WETUS Group provides residential construction, commercial build-outs, remodeling, and consulting services with transparent budgets, clear communication, and proven project execution.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" id="hero-cta-estimate"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200"
            style={{ backgroundColor: "#162032", fontSize: "0.95rem" }}>
            Request a Free Estimate
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <a href="tel:+18504668909" id="hero-cta-call"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white border border-white/40 transition-all duration-200"
            style={{ fontSize: "0.95rem" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call (850) 466-8909
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Serving Section ── */
function ServingSection() {
  return (
    <section id="serving" style={{ backgroundColor: "#162032", padding: "3rem 1.5rem" }}>
      <div className="max-w-4xl mx-auto">
        <h2 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, marginBottom: "1rem" }}>
          Serving Pensacola &amp; Northwest Florida
        </h2>
        <p style={{ color: "#D1D5DB", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          WETUS Group is a licensed general contractor based in Pensacola, Florida, providing{" "}
          <Link href="/construction" style={{ color: "#E5E7EB", textDecoration: "underline" }}>Pensacola general contracting services</Link>{" "}
          and{" "}
          <Link href="/consulting" style={{ color: "#E5E7EB", textDecoration: "underline" }}>construction consulting services</Link>{" "}
          throughout Escambia and Santa Rosa County. We regularly serve clients in Pensacola, Gulf Breeze, Pace, Milton, Navarre, and Pensacola Beach with residential and commercial construction solutions. Explore the{" "}
          <Link href="/construction" style={{ color: "#E5E7EB", textDecoration: "underline" }}>construction services across Northwest Florida</Link>{" "}
          or <Link href="/contact" style={{ color: "#E5E7EB", textDecoration: "underline" }}>request a free construction estimate</Link>.
        </p>
        <ul className="space-y-2">
          {["Pensacola General Contractor","Gulf Breeze Construction Services","Pace & Milton Residential Construction","Navarre & Pensacola Beach Coastal Construction"].map(item => (
            <li key={item} className="flex items-center gap-2" style={{ color: "#D1D5DB", fontSize: "0.9rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Trust Badges ── */
function TrustBadges() {
  const badges = [
    { icon: "✓", label: "Licensed Florida General Contractor" },
    { icon: "◈", label: "Transparent Budgets" },
    { icon: "⌂", label: "Local Expertise" },
    { icon: "⚇", label: "Clear Communication" },
  ];
  return (
    <section id="trust" style={{ backgroundColor: "#EEF0F5", padding: "3rem 1.5rem" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {badges.map(b => (
          <div key={b.label} className="flex flex-col items-center text-center p-6 rounded-xl" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
            <span style={{ fontSize: "1.75rem", color: "#162032", marginBottom: "0.75rem" }}>{b.icon}</span>
            <p style={{ color: "#162032", fontWeight: 600, fontSize: "0.875rem", fontFamily: "var(--font-sans)", lineHeight: 1.4 }}>{b.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Services Cards ── */
function ServicesSection() {
  return (
    <section id="services" style={{ backgroundColor: "#EEF0F5", padding: "4rem 1.5rem" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-balance font-bold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", color: "#162032", marginBottom: "0.75rem" }}>
          Construction &amp; Consulting Services in Northwest Florida
        </h2>
        <p className="text-center" style={{ color: "#6B7280", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
          Expert construction services and consulting for residential and commercial clients across Northwest Florida
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-8 rounded-xl" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: "#EEF0F5" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#162032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "#162032", fontWeight: 700, marginBottom: "0.75rem" }}>
              Residential &amp; Commercial General Contracting in Pensacola, FL
            </h3>
            <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Full-service residential and light commercial construction, from new builds and agricultural structures to remodels, additions, and commercial projects.
            </p>
            <ul className="space-y-1.5">
              {["New construction & additions","Kitchen & bathroom remodels","Church & ministry facilities","Light commercial & municipal","Agricultural buildings & barns"].map(item => (
                <li key={item} className="flex items-center gap-2" style={{ color: "#6B7280", fontSize: "0.875rem" }}>
                  <span style={{ color: "#162032", fontSize: "0.5rem" }}>●</span>{item}
                </li>
              ))}
            </ul>
          </div>
          {/* Card 2 */}
          <div className="p-8 rounded-xl" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: "#EEF0F5" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#162032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "#162032", fontWeight: 700, marginBottom: "0.75rem" }}>
              Construction Consulting &amp; Owner&apos;s Representation in Northwest Florida
            </h3>
            <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Professional owner&apos;s representation and consulting services to help you navigate projects with confidence, detailed documentation, and expert guidance.
            </p>
            <ul className="space-y-1.5">
              {["Owner's representation","Budgeting & estimating (insurance-aligned)","Insurance Claim and Litigation Support","Schedule & quality audits","Punch-list management"].map(item => (
                <li key={item} className="flex items-center gap-2" style={{ color: "#6B7280", fontSize: "0.875rem" }}>
                  <span style={{ color: "#162032", fontSize: "0.5rem" }}>●</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/vendors" id="vendor-link"
            className="flex items-center gap-2 px-6 py-3 rounded-full border font-medium text-sm transition-colors duration-200"
            style={{ borderColor: "#162032", color: "#162032" }}>
            Join Our Vendor Network
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
        <p className="text-center mt-8" style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "760px", margin: "2rem auto 0" }}>
          WETUS Group is a Pensacola-based general contractor providing construction and consulting services across Northwest Florida. Our team regularly works in Pensacola, Gulf Breeze, Pace, Milton, Navarre, and Pensacola Beach, delivering residential and commercial projects built to Florida code and coastal conditions.
        </p>
      </div>
    </section>
  );
}

/* ── Our Process ── */
function ProcessSection() {
  const steps = [
    { n: "1", title: "Consult", desc: "We listen to your needs, assess your project, and provide honest, transparent guidance tailored to your goals." },
    { n: "2", title: "Plan", desc: "Our team develops detailed scopes, budgets, and timelines to ensure your project is set up for success from day one." },
    { n: "3", title: "Build & Deliver", desc: "With vetted subcontractors and rigorous quality standards, we execute your vision on time and on budget." },
  ];
  return (
    <section id="process" style={{ backgroundColor: "#EEF0F5", padding: "5rem 1.5rem" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-bold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", color: "#162032", marginBottom: "0.5rem" }}>
          Our Process
        </h2>
        <p className="text-center" style={{ color: "#6B7280", fontSize: "0.95rem", marginBottom: "3.5rem" }}>
          Simple, transparent, and designed around your success
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4" style={{ backgroundColor: "#162032", fontFamily: "var(--font-sans)" }}>
                {s.n}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "#162032", fontWeight: 700, marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why Choose ── */
function WhyChooseSection() {
  const items = [
    "Licensed Florida General Contractor (CRC1334830 & CBC1268785)",
    "Based in Pensacola — Serving Pensacola, Gulf Breeze, Pace, Milton, Navarre, and all of Escambia & Santa Rosa Counties",
    "Residential and commercial construction expertise",
    "Transparent budgets and detailed project planning",
    "Consulting and construction services under one roof",
  ];
  return (
    <section id="why-choose" style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-bold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", color: "#162032", marginBottom: "0.75rem" }}>
          Why Choose WETUS Group
        </h2>
        <p className="text-center text-balance" style={{ color: "#6B7280", fontSize: "0.95rem", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
          We bring licensing, transparency, and local expertise together under one roof — so your project gets done right the first time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map(item => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#162032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span style={{ color: "#162032", fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/about" id="about-cta"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-colors duration-200"
            style={{ backgroundColor: "#162032" }}>
            Learn More About WETUS Group
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Specializations Grid ── */
function SpecializationsSection() {
  const specs = [
    { title: "Beach Home Construction", desc: "Hurricane-resistant homes designed for waterfront properties in Pensacola Beach and Gulf Breeze", href: "/construction/residential/beach-home-construction" },
    { title: "Agricultural Structures", desc: "Durable barns, equipment storage, and farm buildings across Northwest Florida", href: "/construction/farm-ranch/agricultural-structures" },
    { title: "Custom Homes", desc: "Build your dream home from the ground up in Pensacola and surrounding communities", href: "/construction/residential/custom-homes" },
    { title: "Light Commercial", desc: "Office build-outs, retail renovations, and tenant improvements in Escambia County", href: "/construction/commercial/light-commercial" },
    { title: "Church Construction & Ministry Facilities", desc: "Worship centers, fellowship halls, and ministry buildings throughout Northwest Florida", href: "/construction/commercial/church-construction" },
    { title: "Remodels & Renovations", desc: "Kitchen, bathroom, and whole-home renovation specialists in Pensacola and surrounding areas", href: "/construction/residential/remodels" },
    { title: "The Builders Journal", desc: "Expert insights on construction, permits, and building best practices", href: "/blog", cta: "Read Our Articles" },
    { title: "The Buildbook", desc: "Browse our portfolio of completed projects and see our work", href: "/portfolio", cta: "View Our Portfolio" },
    { title: "Service Areas", desc: "Explore our Pensacola general contractor services across Northwest Florida", href: "/locations", cta: "View All Locations" },
  ];
  return (
    <section id="specializations" style={{ backgroundColor: "#EEF0F5", padding: "5rem 1.5rem" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-bold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", color: "#162032", marginBottom: "0.75rem" }}>
          Our Construction Specializations
        </h2>
        <p className="text-center" style={{ color: "#6B7280", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
          Explore our expertise in specialized construction projects across Northwest Florida
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {specs.map(s => (
            <Link key={s.title} href={s.href} className="block p-6 rounded-xl transition-shadow duration-200 hover:shadow-md" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#162032", fontWeight: 700, marginBottom: "0.5rem" }}>{s.title}</h3>
              <p style={{ color: "#6B7280", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: s.cta ? "1rem" : 0 }}>{s.desc}</p>
              {s.cta && (
                <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "#162032" }}>
                  {s.cta}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
const FAQS = [
  { q: "How much does a construction project cost in Pensacola, FL?", a: "Construction costs vary widely based on project scope, materials, and site conditions. We provide detailed, transparent estimates after an initial consultation. Contact us for a free estimate specific to your project." },
  { q: "Do I need permits for remodeling in Escambia or Santa Rosa County?", a: "Most remodeling projects require permits in Escambia and Santa Rosa Counties. WETUS Group handles permit applications and inspections as part of our full-service contracting, ensuring your project meets all local code requirements." },
  { q: "What types of construction projects does WETUS Group handle?", a: "We handle residential construction (custom homes, beach homes, remodels, additions), agricultural and farm structures, light commercial build-outs, church construction, and owner's representation consulting." },
  { q: "How long does a typical construction or remodeling project take?", a: "Timelines depend on project size and complexity. A kitchen remodel may take 4–8 weeks, while new home construction typically takes 6–12 months. We provide detailed project schedules during the planning phase." },
  { q: "Do you offer commercial construction services in Pensacola and surrounding areas?", a: "Yes. WETUS Group provides light commercial construction including office build-outs, retail renovations, church facilities, and municipal projects throughout Escambia and Santa Rosa Counties." },
];

/* ── Testimonials ── */
function TestimonialsSection() {
  const reviews = [
    { quote: '"WETUS Group handled our kitchen remodel with professionalism and precision. They stayed on budget and finished ahead of schedule. Highly recommend!"', name: "Sarah M.", role: "Kitchen Remodel" },
    { quote: '"After Hurricane Sally, we needed storm hardening upgrades. The team at WETUS Group walked us through every step and did exceptional work on our roof-to-wall connections."', name: "Michael R.", role: "Storm Hardening, Gulf Breeze" },
    { quote: '"Their consulting services saved us thousands on our commercial build. The detailed estimates and scope work were exactly what we needed for our insurance claim."', name: "Jennifer L.", role: "Insurance Claim Consulting" },
  ];
  return (
    <section id="testimonials" style={{ backgroundColor: "#EEF0F5", padding: "5rem 1.5rem" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-bold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", color: "#162032", marginBottom: "0.5rem" }}>
          What Our Clients Say
        </h2>
        <p className="text-center" style={{ color: "#6B7280", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
          Real experiences from real clients across <span style={{ color: "#162032" }}>Northwest Florida</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div key={r.name} className="p-6 rounded-xl flex flex-col" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#162032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1rem", opacity: 0.5 }}>
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
              </svg>
              <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.7, flex: 1, marginBottom: "1.25rem" }}>{r.quote}</p>
              <div style={{ borderLeft: "3px solid #162032", paddingLeft: "0.75rem" }}>
                <p style={{ color: "#162032", fontWeight: 700, fontSize: "0.875rem" }}>{r.name}</p>
                <p style={{ color: "#6B7280", fontSize: "0.8rem" }}>{r.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/contact" id="testimonials-cta"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white"
            style={{ backgroundColor: "#162032" }}>
            Start Your Project Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <ServingSection />
      <TrustBadges />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseSection />
      <SpecializationsSection />
      <FaqAccordion faqs={FAQS} />
      <TestimonialsSection />
    </main>
  );
}
