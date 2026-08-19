export interface ServiceTier {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  startingPriceIDR: string;
  startingPriceUSD: string;
  deliveryTime: string;
  recommendedFor: string;
  features: string[];
  popular?: boolean;
}

export const serviceTiers: ServiceTier[] = [
  {
    id: "product-discovery",
    name: "Digital Product Review & Solution Blueprint",
    badge: "Discovery & Advisory",
    tagline: "A focused technical and workflow review for businesses needing clarity before building or scaling software.",
    startingPriceIDR: "Rp 4.500.000",
    startingPriceUSD: "$300",
    deliveryTime: "3 - 5 Days",
    recommendedFor: "Businesses & founders needing clear technical direction before investing in custom development.",
    features: [
      "Business Objectives & Workflow Review",
      "Existing Website & Product Assessment",
      "UI/UX & Usability Observations",
      "Feature Prioritization & Scope Blueprint",
      "High-Level System & Data Recommendations",
      "Product & Technical Improvement Register",
      "2x 60-min Dedicated Advisory Sessions",
    ],
  },
  {
    id: "end-to-end-mvp",
    name: "Custom Business Website or Portal MVP",
    badge: "End-to-End Execution",
    tagline: "A custom digital experience engineered for your operational requirements—from initial structure to production launch.",
    startingPriceIDR: "Rp 15.000.000",
    startingPriceUSD: "$1,000",
    deliveryTime: "3 - 6 Weeks",
    recommendedFor: "Company portals, operational dashboards, internal tools, and early-stage SaaS MVPs.",
    features: [
      "Discovery & Requirement Definition",
      "Information Architecture & Custom UI/UX",
      "Next.js & Modern Web Implementation",
      "Essential Forms & Workflows",
      "Basic Database Integration & User Roles",
      "Analytics & Essential SEO Setup",
      "Deployment Configuration & Handover",
      "30-Day Post-Launch Support",
    ],
    popular: true,
  },
  {
    id: "product-support-retainer",
    name: "Digital Product Improvement Retainer",
    badge: "Monthly Engagement",
    tagline: "Ongoing product support for regular improvements, feature planning, usability reviews, and technical guidance.",
    startingPriceIDR: "Rp 4.500.000 / bln",
    startingPriceUSD: "$300 / mo",
    deliveryTime: "Monthly Retainer",
    recommendedFor: "Companies needing regular product improvements, UI/UX iterations, and technical coordination.",
    features: [
      "2x Scheduled Product Reviews / Month",
      "UI/UX & Workflow Recommendation",
      "Feature Planning & Task Prioritization",
      "Up to 8h/mo Design & Development Tweaks",
      "Documentation Updates & Progress Summary",
      "Async Consultation During Business Hours",
    ],
  },
];

