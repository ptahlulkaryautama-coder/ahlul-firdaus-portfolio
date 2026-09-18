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
  ctaLabel: string;
  popular?: boolean;
}

export const serviceTiers: ServiceTier[] = [
  {
    id: "review-and-clarify",
    name: "Review & Clarify",
    badge: "Discovery & Review",
    tagline: "Review an existing website, prototype, spreadsheet process, or internal workflow and receive a structured improvement plan.",
    startingPriceIDR: "Rp 4.500.000",
    startingPriceUSD: "$300",
    deliveryTime: "3 - 5 Days (Est.)",
    recommendedFor: "Businesses and organizations needing clear workflow clarity before investing in software development.",
    ctaLabel: "Request a Review",
    features: [
      "Operational Workflow & Process Review",
      "Existing Website, Tool, or Spreadsheet Assessment",
      "Information Architecture & Usability Observations",
      "Feature Prioritization & Scope Clarification",
      "Data Structure & Practical Tool Recommendations",
      "Structured Improvement Register & Action Plan",
      "2x 60-min Dedicated Discovery & Handover Sessions",
    ],
  },
  {
    id: "design-and-build",
    name: "Design & Build",
    badge: "Focused MVP Build",
    tagline: "Design and build a focused first version of a website, portal, or internal tool around agreed users, content, and workflows.",
    startingPriceIDR: "Rp 15.000.000",
    startingPriceUSD: "$1,000",
    deliveryTime: "3 - 6 Weeks (Est.)",
    recommendedFor: "Focused business websites, community portals, internal reporting tools, and product prototypes.",
    ctaLabel: "Discuss an MVP",
    features: [
      "Workflow Discovery & Requirement Scoping",
      "Custom Information Architecture & Responsive UI Design",
      "Next.js / React Modern Front-End Implementation",
      "Essential Forms, Navigation & User Flows",
      "Structured Data Model & Database Integration (if required)",
      "Essential SEO Setup, Fast Performance & Semantic HTML",
      "Deployment Configuration, Domain Setup & Handover",
      "30-Day Post-Launch Technical Support",
    ],
    popular: true,
  },
  {
    id: "improve-and-support",
    name: "Improve & Support",
    badge: "Iterative Support",
    tagline: "Iterative support for usability improvements, workflow refinement, feature planning, and ongoing technical updates.",
    startingPriceIDR: "Rp 4.500.000 / bln",
    startingPriceUSD: "$300 / mo",
    deliveryTime: "Monthly Retainer (Est.)",
    recommendedFor: "Teams needing continuous product refinement, usability iterations, and practical feature updates.",
    ctaLabel: "Discuss Ongoing Support",
    features: [
      "Scheduled Bi-Weekly Product & Workflow Reviews",
      "UI/UX Refinement & Layout Usability Improvements",
      "Feature Planning & Scope Prioritization",
      "Dedicated Monthly Implementation & Tweak Hours",
      "Documentation & Progress Summaries",
      "Async Guidance & Feedback via Dedicated Channel",
    ],
  },
];
