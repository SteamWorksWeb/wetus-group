import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

/*
  ┌─────────────────────────────────────────────────────────────────────────┐
  │  FONT AUDIT — wetusgroup.com (live DOM, 2026-05-27)                    │
  │                                                                         │
  │  Computed :root { --font-sans } =                                       │
  │    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,              │
  │    "Helvetica Neue", Arial, sans-serif                                  │
  │                                                                         │
  │  No <link> to Google Fonts or Adobe Fonts found in <head>.             │
  │  No @font-face rules in any stylesheet.                                 │
  │  → The live site ships 100% system fonts. No external fonts to import. │
  └─────────────────────────────────────────────────────────────────────────┘
*/

/* ── SEO Metadata (Audit-Exact) ───────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default:
      "Pensacola General Contractor | Licensed Residential & Commercial Builder",
    template: "%s | WETUS Group",
  },
  description:
    "WETUS Group provides residential construction, commercial build-outs, remodeling, and consulting services with transparent budgets, clear communication, and proven project execution. FL Licensed CRC1334830 & CBC1268785.",
  keywords: [
    "Pensacola general contractor",
    "licensed contractor Florida",
    "residential construction Pensacola",
    "commercial construction Pensacola",
    "storm hardening",
    "construction consulting",
    "owner representative",
    "WETUS Group",
    "CRC1334830",
    "CBC1268785",
    "Gulf Breeze contractor",
    "Northwest Florida builder",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.wetusgroup.com",
    siteName: "WETUS Group",
    title:
      "Pensacola General Contractor | Licensed Residential & Commercial Builder",
    description:
      "WETUS Group provides residential construction, commercial build-outs, remodeling, and consulting services. FL Licensed CRC1334830 & CBC1268785.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.wetusgroup.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
