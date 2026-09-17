import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "System Templates & Industrial UI Kits | Ahlul Firdaus",
  description:
    "Production-grade Next.js & React system template kits: Industrial Manufacturing ERP, B2B Export Hub, Community Governance, and ESG Sustainability reporting tools.",
  alternates: {
    canonical: "https://ahlulfirdaus.com/templates",
  },
  openGraph: {
    title: "System Templates & Industrial UI Kits | Ahlul Firdaus",
    description:
      "Production-grade Next.js & React system template kits: Industrial Manufacturing ERP, B2B Export Hub, Community Governance, and ESG Sustainability reporting tools.",
    url: "https://ahlulfirdaus.com/templates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Templates & Industrial UI Kits | Ahlul Firdaus",
    description:
      "Production-grade Next.js & React architecture templates and enterprise dashboard kits.",
  },
};

const templatesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "System Templates & Industrial UI Kits",
  description:
    "Production-grade Next.js & React architecture template kits designed for enterprise operations and industrial workflows.",
  url: "https://ahlulfirdaus.com/templates",
  creator: {
    "@type": "Person",
    name: "Ahlul Firdaus",
    url: "https://ahlulfirdaus.com",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ahlulfirdaus.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Templates",
        item: "https://ahlulfirdaus.com/templates",
      },
    ],
  },
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(templatesJsonLd) }}
      />
      {children}
    </>
  );
}
