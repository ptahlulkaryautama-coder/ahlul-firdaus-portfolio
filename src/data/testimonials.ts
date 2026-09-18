export interface SystemContext {
  id: string;
  project: string;
  projectId: string;
  category: string;
  designedFor: string;
  problemSolved: string;
  keyCapabilities: string[];
  accentColor: "gold" | "emerald" | "purple" | "cyan";
}

export const systemContexts: SystemContext[] = [
  {
    id: "ooi-context",
    project: "OOI — Origin of Indonesia",
    projectId: "ooi",
    category: "Commerce & Export Platform",
    designedFor: "International specialty retailers, food importers, and Indonesian artisanal food producers.",
    problemSolved: "Eliminates fragmented supplier discovery, single-producer freight overhead, and inconsistent compliance data by consolidating certified origin products through the Batam FTZ hub.",
    keyCapabilities: [
      "Curated multi-producer product catalog with origin and certification indicators",
      "Unified B2B wholesale inquiry and retail sample request pathways",
      "Consolidation logistics model designed for international export efficiency"
    ],
    accentColor: "gold",
  },
  {
    id: "cgv10-context",
    project: "Portal Warga CGV",
    projectId: "cgv10",
    category: "Civic Tech & Community Platform",
    designedFor: "Residential community administrators, registered estate residents, and local home-based businesses (UMKM).",
    problemSolved: "Replaces chaotic chat-group coordination, informal dues tracking, and lost notices with an integrated community portal featuring role-based workflows.",
    keyCapabilities: [
      "Role-based resident, public, and administrator workspaces",
      "Structured environmental reporting and community administration requests",
      "Transparent community finance summaries and local PALUGADA business directory"
    ],
    accentColor: "emerald",
  },
  {
    id: "oneecos-context",
    project: "OneEcos — Trade Operations System",
    projectId: "oneecos",
    category: "B2B Trade Operations Prototype",
    designedFor: "Small trading teams, independent exporters, and operational managers coordinating multi-step orders.",
    problemSolved: "Connects fragmented spreadsheets into a single continuous chain: Buyer → Product → Quote → Sales Order → Work Order → Shipment → Documents → Invoice.",
    keyCapabilities: [
      "Daily operator workspace paired with managerial exception overview",
      "Guided readiness gates and next-action operational suggestions",
      "Export documentation reference previews and CBM calculation tools"
    ],
    accentColor: "purple",
  },
  {
    id: "alikhlas-context",
    project: "Masjid Al Ikhlas Digital Ecosystem",
    projectId: "masjid-al-ikhlas",
    category: "Mosque & Community Portal",
    designedFor: "Local mosque congregation (jamaah), DKM committee administrators, TPQ parents, and community donors.",
    problemSolved: "Transforms paper noticeboards and scattered messaging into a reliable, mobile-friendly hub for worship timetables, education portals, and financial transparency.",
    keyCapabilities: [
      "Dynamic Batam prayer schedule and next-prayer countdown interface",
      "TPQ education portal and community program agenda calendar",
      "Open financial stewardship summaries and verified donation guidance"
    ],
    accentColor: "emerald",
  },
  {
    id: "corum-context",
    project: "PT. Corum Sustainability Reporting Template",
    projectId: "corum",
    category: "Internal Reporting Template",
    designedFor: "Plant department contributors (EHS, HR, Facilities, QA/QC, Finance) and sustainability report coordinators.",
    problemSolved: "Structures complex sustainability workbooks into guided, browser-local data-entry forms with JSON file consolidation and print-to-PDF reports.",
    keyCapabilities: [
      "23 tracked reporting sections across 7 operational departments",
      "Browser localStorage persistence with zero external server dependencies",
      "Manual JSON export/import consolidation and @media print PDF stylesheets"
    ],
    accentColor: "cyan",
  },
  {
    id: "sakku-context",
    project: "Sakku 2.0 — Personal & Household Finance",
    projectId: "sakku",
    category: "Personal Finance PWA",
    designedFor: "Individuals and families seeking structured budgeting and expense tracking without third-party cloud data exposure or recurring subscription fees.",
    problemSolved: "Provides rule-based conversational transaction logging, envelope budgeting, and balance tracking using client-side local-first storage.",
    keyCapabilities: [
      "Rule-based conversational parser for quick transaction entry",
      "Visual envelope budget allocation and spending limit tracking",
      "Client-side local storage with complete offline functionality"
    ],
    accentColor: "gold",
  },
];

// Backwards compatibility alias
export const testimonials = systemContexts;
