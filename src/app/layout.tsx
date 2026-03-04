import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",  // reuse variables
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Razin Tooling Services | Industrial Tooling & Manpower in India",
    template: "%s | Razin Tooling Services"
  },
  description: "Specialized in Press Tool Installation, Die Proving, Modification and providing Skilled Industrial Manpower across India. Headquarters in Pune.",
  keywords: ["Tooling Services India", "Die Proving Services India", "Press Tool Installation", "Industrial Manpower Supplier", "Tool Commissioning"],
  authors: [{ name: "Razin Tooling Services" }],
  openGraph: {
    title: "Razin Tooling Services",
    description: "Premium Tool Installation, Die Proving & Industrial Manpower Services in India.",
    url: "https://razintoolingservices.in",
    siteName: "Razin Tooling Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razin Tooling Services",
    description: "Premium Tool Installation, Die Proving & Industrial Manpower Services in India.",
  },
  alternates: {
    canonical: "https://razintoolingservices.in",
  },
  verification: {
    google: 'cde13b8de980ac7a',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Razin Tooling Services",
    "image": "https://razintoolingservices.in/logo.png", // Placeholder
    "@id": "https://razintoolingservices.in",
    "url": "https://razintoolingservices.in",
    "telephone": "+919922957006",
    "email": "shaikhasifn@rediffmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Akurdi",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411035",
      "addressCountry": "IN"
    },
    "taxID": "27NPAPS0212C1Z7",
    "sameAs": []
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
