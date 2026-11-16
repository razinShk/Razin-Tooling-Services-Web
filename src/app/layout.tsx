import type { Metadata } from "next";
import { Oswald, Archivo, Archivo_Narrow } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://razintoolingservices.in"),
  title: {
    default: "Razin Tooling Services | OEM Press Tooling, Die Proving & Manpower in Pune",
    template: "%s | Razin Tooling Services",
  },
  description:
    "Asif N Shaikh and Razin Tooling Services commission heavy press tools, prove 210 mm deep draws and DP-790 panels, and deploy 5 to 20 year toolmakers for Tata Motors, Gestamp, Panse Group, and JBM.",
  keywords: [
    "Razin Tooling Services",
    "Asif N Shaikh Tooling Pune",
    "Press Tool Installation India",
    "Die Proving Services Pune",
    "DP-790 Tool Proving",
    "Industrial Toolmakers Manpower India",
  ],
  authors: [{ name: "Asif N Shaikh, Razin Tooling Services" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Razin Tooling Services | OEM Press Tooling & Die Proving Dossier",
    description:
      "416+ press tools commissioned and proved for Tata Motors (Nexon, Sierra), Gestamp (MQB-Kushaq DP-790), Panse Group, and JBM Haridwar. Based in Akurdi, Pune.",
    url: "https://razintoolingservices.in",
    siteName: "Razin Tooling Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Razin Tooling Services — 416+ Press Tools Proved for OEMs (Asif N Shaikh, Pune)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Razin Tooling Services | OEM Press Tooling & Die Proving Dossier",
    description:
      "416+ press tools commissioned and proved for Tata Motors, Gestamp, Panse Group, and JBM Haridwar. Direct contact: Asif N Shaikh (+91 9922957006).",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://razintoolingservices.in",
  },
  verification: {
    google: "cde13b8de980ac7a",
  },
};

const slotScript = `window.hallmarkSlots = (m) => { for (const [k, v] of Object.entries(m)) { const s = document.querySelector('[data-slot="' + k + '"]'); if (!s) continue; const im = new Image(); im.src = typeof v === 'string' ? v : v.src; im.alt = (typeof v === 'object' && v.alt) || s.dataset.alt || ''; s.querySelectorAll(':scope > img').forEach((o) => o.remove()); s.prepend(im); } }; document.querySelectorAll('[data-slot] img').forEach((i) => { if (i.complete && !i.naturalWidth) i.remove(); else i.addEventListener('error', () => i.remove(), { once: true }); });`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Razin Tooling Services",
    logo: "https://razintoolingservices.in/logo.svg",
    image: "https://razintoolingservices.in/og-image.png",
    founder: "Asif N Shaikh",
    "@id": "https://razintoolingservices.in",
    url: "https://razintoolingservices.in",
    telephone: "+919922957006",
    email: "shaikhasifn@rediffmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Akurdi",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411035",
      addressCountry: "IN",
    },
    taxID: "27NPAPS0212C1Z7",
    sameAs: [],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Archivo:wght@400;500;700&family=Archivo+Narrow:wght@500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${oswald.variable} ${archivo.variable} ${archivoNarrow.variable} grained min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-grow relative z-10">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
        <Analytics />
        <script dangerouslySetInnerHTML={{ __html: slotScript }} />
      </body>
    </html>
  );
}
