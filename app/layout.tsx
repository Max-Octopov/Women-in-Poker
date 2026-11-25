import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // On Vercel, resolve og:image against the Vercel production domain (the site isn't on
  // go.octopipoker.ai yet); any other build uses the final URL.
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/` : site.url,
  ),
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  icons: { icon: [{ url: "images/favicon.svg", type: "image/svg+xml" }, { url: "images/favicon.ico" }] },
  openGraph: {
    type: "website",
    siteName: "Octopi Poker",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [{ url: "images/og-image.jpg", width: 1200, height: 630, alt: "Women in Poker — a free global study group for women" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#110a15",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${cinzel.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-plum focus:px-4 focus:py-2 focus:text-champagne"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
