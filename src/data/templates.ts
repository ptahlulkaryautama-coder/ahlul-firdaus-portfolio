export interface TemplateKit {
  id: string;
  name: string;
  category: "Industrial & Manufacturing" | "Construction & EPC" | "Real Estate & Property" | "Logistics & Freight" | "Corporate & Holding";
  tagline: string;
  description: string;
  idealFor: string;
  previewImage: string;
  badge: string;
  techStack: string[];
  features: string[];
  specs: {
    pageCount: string;
    responsive: string;
    formIntegration: string;
    speedScore: string;
  };
  demoType: "industrial" | "construction" | "property" | "logistics" | "corporate";
}

export const templateKits: TemplateKit[] = [
  {
    id: "industrial-plant-profile",
    name: "Apex Industrial Plant & Manufacturing Profile",
    category: "Industrial & Manufacturing",
    tagline: "High-impact B2B company profile for manufacturing plants, OEM factories, and industrial processing facilities.",
    description:
      "Engineered specifically for Batam & Indonesian manufacturing plants. Features equipment inventory showcases, ISO/EHS compliance verification badges, multi-department facility capabilities, and automated Request for Quote (RFQ) forms.",
    idealFor: "Manufacturing Plants, Metal Stamping, Precision Tooling, Plastics & Electronics Assemblers.",
    previewImage: "/templates/template-industrial-full.jpg",
    badge: "Industrial & OEM",
    techStack: ["Next.js 16", "Tailwind CSS v4", "TypeScript", "Framer Motion", "Formspree / WhatsApp API"],
    features: [
      "Machinery & Equipment Capacity Specs Matrix",
      "ISO 9001, 14001, & EHS Compliance Certification Showcase",
      "Automated B2B RFQ (Request for Quote) Form with File Uploads",
      "Interactive 3D Plant Layout & Facility Tour Canvas",
      "Client Roster & Industrial Sector Case Studies",
      "Multilingual Toggle (English, Indonesian, Chinese)"
    ],
    specs: {
      pageCount: "6 Structured Sections / Pages",
      responsive: "100% Mobile & Tablet Optimized",
      formIntegration: "Direct WhatsApp & Email RFQ Engine",
      speedScore: "99/100 Google Lighthouse Score"
    },
    demoType: "industrial"
  },
  {
    id: "construction-epc-firm",
    name: "Vanguard Heavy Construction & EPC Engineering",
    tagline: "Corporate engineering profile for civil contractors, EPC firms, and infrastructure developers.",
    category: "Construction & EPC",
    description:
      "A rugged, high-trust digital profile designed for construction and EPC engineering firms. Showcases ongoing civil works, completed site projects, safety statistics (Zero-Accident record metrics), equipment fleet specs, and tender RFP submissions.",
    idealFor: "General Contractors, Civil Engineering Firms, Steel Fabricators, Marine Offshore Contractors.",
    previewImage: "/templates/template-construction-full.jpg",
    badge: "EPC & Civil Engineering",
    techStack: ["Next.js 16", "Tailwind CSS v4", "TypeScript", "Lucide Icons", "PDF Spec Generator"],
    features: [
      "Heavy Machinery & Crane Fleet Capability Showcase",
      "Project Case Studies with Before/After Site Progress Timelines",
      "Zero-Accident Safety & HSE Compliance Statistics Panel",
      "Tender & Bidding Document Submission Pipeline",
      "Interactive Project Map (Sumatra, Java, Kepri Sites)",
      "Printable Capability Statement (@media print PDF)"
    ],
    specs: {
      pageCount: "7 Key Sections / Pages",
      responsive: "Ultra-Fast Mobile & Site Tablet Layout",
      formIntegration: "Tender RFP & Procurement Inquiry",
      speedScore: "98/100 Lighthouse Performance"
    },
    demoType: "construction"
  },
  {
    id: "property-estate-showcase",
    name: "Prima Residence & Commercial Property Showcase",
    tagline: "Modern real estate and commercial property development showcase with interactive unit availability.",
    category: "Real Estate & Property",
    description:
      "Designed for housing estate developers, commercial ruko/shophouse projects, and industrial estate managers. Features interactive masterplan unit maps, floorplan viewers, loan installment calculators, and instant WhatsApp booking triggers.",
    idealFor: "Property Developers, Housing Estates, Industrial Parks, Commercial Shophouses, Villa Resorts.",
    previewImage: "/templates/template-property-full.jpg",
    badge: "Property & Real Estate",
    techStack: ["React 19", "Next.js 16", "Tailwind CSS v4", "Framer Motion", "Recharts"],
    features: [
      "Interactive Masterplan Map with Live Unit Status (Available/Booked)",
      "High-Res Architectural Floorplan & Site Layout Viewer",
      "Built-in KPR / Commercial Mortgage Installment Calculator",
      "360° Virtual Site Inspection Video Modal Support",
      "Direct WhatsApp Sales Agent Routing with Unit Specs",
      "Brochure PDF Download Gate"
    ],
    specs: {
      pageCount: "5 Core Sections + Unit Modals",
      responsive: "Mobile-First Touch & Swipe Friendly",
      formIntegration: "Instant WhatsApp Sales Lead Routing",
      speedScore: "97/100 Mobile Speed"
    },
    demoType: "property"
  },
  {
    id: "logistics-port-freight",
    name: "TransLogistics Port & Freight Ecosystem",
    tagline: "Freight forwarding, container shipping, and warehouse logistics corporate profile.",
    category: "Logistics & Freight",
    description:
      "High-efficiency corporate website for freight forwarders, maritime port operators, and warehousing providers. Features container shipping rate estimators, fleet specifications, warehouse location maps, and customs clearance checklists.",
    idealFor: "Freight Forwarders, Maritime Shipping Lines, Bonded Warehouses, Customs Clearance Brokers.",
    previewImage: "/templates/template-coworking-full.jpg",
    badge: "Logistics & Supply Chain",
    techStack: ["Next.js 16", "Tailwind CSS v4", "TypeScript", "Lucide React", "Form Engine"],
    features: [
      "Container Freight Rate & Volumetric Weight Calculator",
      "Customs Clearance Document Readiness Checklist (Bea Cukai)",
      "Fleet Capability Matrix (Trailer, Wingbox, Cold Chain)",
      "Interactive Bonded Warehouse Location Map",
      "Shipment Inquiry & Container Tracking Status Widget",
      "24/7 Logistics Desk Contact & Dispatch Route"
    ],
    specs: {
      pageCount: "6 Functional Pages",
      responsive: "Seamless Desktop & Mobile Fleet View",
      formIntegration: "Freight Scoping & Rate Request",
      speedScore: "99/100 Performance Score"
    },
    demoType: "logistics"
  },
  {
    id: "corporate-holding-enterprise",
    name: "Nusantara Group Corporate Holding Profile",
    tagline: "Executive corporate profile for multi-subsidiary holdings, conglomerates, and investment groups.",
    category: "Corporate & Holding",
    description:
      "An authoritative corporate holding profile designed for multi-subsidiary companies. Presents corporate governance, subsidiary division portals, ESG reporting summaries, investor relation metrics, and executive board profiles.",
    idealFor: "Holding Companies, Investment Conglomerates, Industrial Groups, Multi-Sector Enterprises.",
    previewImage: "/templates/template-corporate-full.jpg",
    badge: "Corporate & Holding",
    techStack: ["Next.js 16", "Tailwind CSS v4", "TypeScript", "Framer Motion"],
    features: [
      "Multi-Subsidiary Business Division Showcase & Matrix",
      "Executive Board & Leadership Team Biographies",
      "Corporate Governance & Compliance Policy Library",
      "Interactive Annual Financial & ESG Milestone Highlights",
      "Press Release & Corporate Announcements Hub",
      "Investor Relations Contact & Inquiry Gate"
    ],
    specs: {
      pageCount: "8 Executive Pages / Sections",
      responsive: "Executive Desktop & Tablet Optimized",
      formIntegration: "Investor & Strategic Partner Inquiry",
      speedScore: "98/100 Performance Score"
    },
    demoType: "corporate"
  }
];

export function getTemplateById(id: string): TemplateKit | undefined {
  return templateKits.find((t) => t.id === id);
}
