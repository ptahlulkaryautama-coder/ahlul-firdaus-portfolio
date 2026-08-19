import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import CursorGlow from "../components/CursorGlow";
import WhatsAppButton from "../components/WhatsAppButton";
import CommandPalette from "../components/CommandPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "Courier New", "monospace"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahlulfirdaus.com"),
  title: {
    default: "Ahlul Firdaus | Digital Systems Architect & Founder",
    template: "%s | Ahlul Firdaus",
  },
  description:
    "Engineering digital systems, high-density dashboards, B2B export platforms, and community ecosystems — from architectural concept to launch-ready execution.",
  keywords: [
    "Ahlul Firdaus",
    "Digital Systems Architect",
    "Systems Architect Indonesia",
    "Full-Stack Developer Batam",
    "B2B Export Platform Founder",
    "Origin Of Indonesia OOI",
    "CGV10 Portal Warga",
    "Masjid Al Ikhlas Digital Ecosystem",
    "Next.js Systems Developer",
    "TypeScript SaaS Architect",
  ],
  authors: [{ name: "Ahlul Firdaus", url: "https://ahlulfirdaus.com" }],
  creator: "Ahlul Firdaus",
  publisher: "Ahlul Firdaus Architecture",
  alternates: {
    canonical: "https://ahlulfirdaus.com",
  },
  icons: {
    icon: "/logo/af-monogram-alternate.png",
    apple: "/logo/af-monogram-alternate.png",
  },
  openGraph: {
    title: "Ahlul Firdaus | Digital Systems Architect & Founder",
    description:
      "Engineering digital systems, high-density dashboards, B2B export platforms, and community ecosystems.",
    type: "website",
    url: "https://ahlulfirdaus.com",
    siteName: "Ahlul Firdaus Systems Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/logo/af-monogram-alternate.png",
        width: 1200,
        height: 630,
        alt: "Ahlul Firdaus AF Monogram Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahlul Firdaus | Digital Systems Architect",
    description:
      "Full-stack software architect & founder specializing in high-density SaaS dashboards, B2B platforms, and digital community hubs.",
    creator: "@ahlulfirdaus",
    images: ["/logo/af-monogram-alternate.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahlul Firdaus",
  jobTitle: "Digital Systems Architect & Founder",
  url: "https://ahlulfirdaus.com",
  sameAs: [
    "https://github.com/ahlul-firdaus",
    "https://bespoke-sundae-408c0c.netlify.app/",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Systems Architecture",
    "Supabase & PostgreSQL",
    "B2B Escrow Platforms",
    "Digital Community Governance",
    "SaaS Operations Cockpits",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Architectural & Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "B2B System Architecture & Custom Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Community Governance Systems",
        },
      },
    ],
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ahlul Firdaus Systems Portfolio",
  url: "https://ahlulfirdaus.com",
  author: {
    "@type": "Person",
    name: "Ahlul Firdaus",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ahlul Firdaus Digital Systems Architecture",
  image: "https://ahlulfirdaus.com/logo/af-monogram-alternate.png",
  url: "https://ahlulfirdaus.com",
  telephone: "+6281291254064",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batam",
    addressRegion: "Kepulauan Riau",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 1.1301,
    longitude: 104.0529,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: [
    "https://github.com/ptahlulkaryautama-coder",
    "https://wa.me/6281291254064",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="theme-color" content="#0C1810" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-deep-black text-cream selection:bg-gold-muted selection:text-deep-black font-sans relative">
        <CursorGlow />
        <CommandPalette />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
