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
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-monospace", "Courier New", "monospace"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahlulfirdaus.com"),
  title: {
    default: "Ahlul Firdaus | Operational Systems Builder",
    template: "%s | Ahlul Firdaus",
  },
  description:
    "Operational Systems Builder with 15+ years in manufacturing, quality & process improvement. Turning complex workflows, scattered information, and manual processes into clear websites, dashboards, portals, and practical digital tools.",
  keywords: [
    "Ahlul Firdaus",
    "Operational Systems Builder",
    "Workflow Optimization",
    "Operations Specialist Batam",
    "Process Improvement",
    "B2B Showcase Catalog",
    "Origin Of Indonesia OOI",
    "CGV10 Portal Warga",
    "Masjid Al Ikhlas Digital Platform",
    "Next.js Systems Developer",
  ],
  authors: [{ name: "Ahlul Firdaus", url: "https://ahlulfirdaus.com" }],
  creator: "Ahlul Firdaus",
  publisher: "Ahlul Firdaus",
  alternates: {
    canonical: "https://ahlulfirdaus.com",
  },
  icons: {
    icon: "/logo/af-monogram-alternate.png",
    apple: "/logo/af-monogram-alternate.png",
  },
  openGraph: {
    title: "Ahlul Firdaus | Operational Systems Builder",
    description:
      "Turning complex workflows, scattered information, and manual processes into clear websites, dashboards, portals, and practical digital tools.",
    type: "website",
    url: "https://ahlulfirdaus.com",
    siteName: "Ahlul Firdaus Portfolio",
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
    title: "Ahlul Firdaus | Operational Systems Builder",
    description:
      "Operational systems builder turning complex workflows into clear websites, dashboards, portals, and digital tools.",
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
  jobTitle: "Operational Systems Builder & Product Specialist",
  url: "https://ahlulfirdaus.com",
  sameAs: [
    "https://github.com/ahlul-firdaus",
    "https://portalwargacgv.id",
    "https://sakku.ahlulfirdaus.com/",
    "https://alikhlascgv.vercel.app/",
    "https://ooindonesia.com",
  ],
  knowsAbout: [
    "Manufacturing Operations",
    "Quality Management Systems",
    "Process Improvement",
    "Operational Workflows",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase & PostgreSQL",
    "Internal Portals & Dashboards",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Systems & Workflow Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Product & Workflow Review",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Website or Portal MVP Build",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing Product Improvement",
        },
      },
    ],
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ahlul Firdaus Portfolio",
  url: "https://ahlulfirdaus.com",
  author: {
    "@type": "Person",
    name: "Ahlul Firdaus",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ahlul Firdaus Operational Systems Builder",
  image: "https://ahlulfirdaus.com/logo/af-monogram-alternate.png",
  url: "https://ahlulfirdaus.com",
  telephone: "+6281291254064",
  priceRange: "$$",
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
    "https://github.com/ahlul-firdaus",
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
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="theme-color" content="#0C1810" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("af-portfolio-theme");if(t&&t!=="gold"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}try{if("serviceWorker" in navigator){navigator.serviceWorker.getRegistrations().then(function(r){for(var i=0;i<r.length;i++){r[i].unregister();}});}}catch(e){}})();`,
          }}
        />
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
      <body
        suppressHydrationWarning
        className="min-h-screen bg-deep-black text-cream selection:bg-gold-muted selection:text-deep-black font-sans relative"
      >
        {/* Skip to Main Content Landmark Link (WCAG 2.2 AA) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2.5 focus:bg-gold-muted focus:text-deep-black focus:font-bold focus:font-sans focus:text-xs focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-cream transition-transform"
        >
          Skip to main content
        </a>
        <CursorGlow />
        <CommandPalette />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
