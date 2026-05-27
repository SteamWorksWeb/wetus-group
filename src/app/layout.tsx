import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WETUS Group | Licensed FL Contractor & Consulting Firm",
    template: "%s | WETUS Group",
  },
  description:
    "WETUS Group: FL licensed contractor CRC1334830 & CBC1268785. Residential remodeling, new construction, storm hardening, and owner's rep consulting in Northwest Florida.",
  keywords: [
    "Pensacola general contractor",
    "licensed contractor Florida",
    "residential construction Pensacola",
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
    title: "WETUS Group | Licensed FL Contractor & Consulting Firm",
    description:
      "WETUS Group: FL licensed contractor CRC1334830 & CBC1268785. Residential remodeling, new construction, storm hardening, and owner's rep consulting in Northwest Florida.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.wetusgroup.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-sans)" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
