import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

/* ---------------------------------------------------------------
   Typography — matching Wetus Group's professional serif + sans
   Playfair Display → headings / hero titles (display font)
   Inter           → body copy / navigation / UI elements
--------------------------------------------------------------- */
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

/* ---------------------------------------------------------------
   Metadata — pulled directly from wetusgroup.com
--------------------------------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "WETUS Group | Licensed FL Contractor & Consulting Firm",
    template: "%s | WETUS Group",
  },
  description:
    "WETUS Group: FL licensed contractor CRC1334830 & CBC1268785. Residential remodeling, new construction, storm hardening, and owner's rep consulting in Northwest Florida.",
  keywords: [
    "general contractor Pensacola",
    "licensed contractor Florida",
    "residential remodeling",
    "new construction Northwest Florida",
    "storm hardening",
    "owner's representative",
    "beach home construction",
    "custom homes Pensacola",
    "WETUS Group",
    "CRC1334830",
    "CBC1268785",
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
  twitter: {
    card: "summary_large_image",
    title: "WETUS Group | Licensed FL Contractor & Consulting Firm",
    description:
      "FL licensed contractor serving Pensacola, Gulf Breeze, Navarre & Northwest Florida.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.wetusgroup.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
