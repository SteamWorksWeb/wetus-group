"use client";
import { useState } from "react";

interface Faq { q: string; a: string; }

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" style={{ backgroundColor: "#EEF0F5", padding: "5rem 1.5rem" }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center font-bold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", color: "#162032", marginBottom: "0.5rem" }}>
          Frequently Asked Questions
        </h2>
        <p className="text-center" style={{ color: "#6B7280", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
          Common questions from homeowners and property owners in Pensacola and Northwest Florida
        </p>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #D1D5DB" }}>
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 500, color: "#162032", paddingRight: "1rem" }}>{faq.q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#162032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms" }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open === i && (
                <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.7, paddingBottom: "1.25rem" }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a href="/faq" className="flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium" style={{ borderColor: "#162032", color: "#162032" }}>
            View All FAQs
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
