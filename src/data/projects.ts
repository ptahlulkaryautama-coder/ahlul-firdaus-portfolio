export interface Project {
  id: string;
  name: string;
  category: string;
  oneLiner: string;
  problem: string;
  challenge: string;
  solution: string;
  status: string;
  statusBadge: "Live Project" | "Client Work" | "Active Concept" | "Proof of Concept" | "In Development" | "Founder-Led Product — Active Prototype" | "Community Portal — In Development" | "Live Community Project" | "A Fundamental Stage";
  context: string;
  techStack: string[];
  duration: string;
  role: string;
  longDescription: string;
  keyDeliverables: string[];
  keyDecisions: string[];
  outcome: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ooi",
    name: "OOI — Origin Of Indonesia",
    category: "Export Platform & Ecosystem",
    oneLiner: "Founder-led B2B export platform concept designed to present premium Indonesian origin products to international buyers.",
    problem: "Indonesian producers and emerging exporters often struggle to present their products in a way that meets the expectations of international B2B buyers.",
    challenge: "Product information may be fragmented, origin stories poorly communicated, and details such as specifications, packaging, minimum order quantities, documentation readiness, and sample availability are not presented consistently.",
    solution: "Designed and developed a premium, responsive B2B export website that organizes Indonesian products by category, origin, product characteristics, and buyer requirements, including a conceptual trade simulation.",
    status: "Founder-Led Product — Active Prototype",
    statusBadge: "Founder-Led Product — Active Prototype",
    context: "Marketing and product-validation prototype establishing digital presentation standards for Indonesian export products.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify", "GitHub"],
    duration: "Ongoing Since 2026",
    role: "Founder, Product Strategist, UI/UX Designer & AI-Assisted Web Developer",
    images: ["/screenshots/ooi-dashboard.jpg"],
    liveUrl: "https://ooindonesia.com",
    githubUrl: "https://github.com/ahlul-firdaus/ooindonesia",
    longDescription: "OOI — Origin Of Indonesia is a founder-led B2B export platform concept designed to present premium Indonesian origin products to international importers, distributors, hospitality groups, and wholesale buyers. Drawing on 20+ years of operational, quality, and manufacturing experience, the project translates sourcing and trade information into a clear B2B digital experience. Supplier onboarding, verified export documentation, transaction workflows, and external system integrations remain part of the future development roadmap.",
    keyDeliverables: [
      "Premium responsive B2B export website",
      "Product category and information architecture",
      "Origin-focused editorial storytelling",
      "Buyer inquiry and sample-request journey",
      "Export-readiness content framework",
      "Product specification presentation",
      "Batam FTZ trade-positioning content",
      "Visual identity and digital design system",
      "Technical SEO and search visibility foundation",
      "Conceptual export transaction and freight simulator"
    ],
    keyDecisions: [
      "Structured the product catalog around international buyer needs rather than conventional consumer e-commerce patterns.",
      "Combined origin storytelling with product specifications to strengthen both emotional appeal and commercial credibility.",
      "Designed clear inquiry and sample-request journeys before introducing complex transaction functionality.",
      "Created a future-state transaction concept to explore freight, documentation, and payment milestones without representing them as active integrations."
    ],
    outcome: "Developed a production-ready marketing prototype and a structured digital foundation for presenting Indonesian origin products to international buyers. The next phase will focus on supplier verification, real product documentation, sample readiness, buyer outreach, and operational workflow validation."
  },
  {
    id: "cgv10",
    name: "CGV10 Portal Warga",
    category: "Digital Community System",
    oneLiner: "Community information portal designed for residents of Cipta Greenville RT 010/RW 021.",
    problem: "Community information was previously distributed across WhatsApp messages, spreadsheets, documents, and separate announcements.",
    challenge: "Neighborhood information was fragmented across multiple communication channels, making it difficult for residents to access announcements, committee contacts, financial summaries, activities, and local business listings without searching through long message histories.",
    solution: "Designed and developed a responsive community portal that organizes essential neighborhood information into clear, accessible sections including announcements, committee directory, financial summaries, and PALUGADA resident marketplace.",
    status: "Community Portal — In Development",
    statusBadge: "Community Portal — In Development",
    context: "Centralized digital reference for residents, prioritizing mobile usability, clarity, and ease of access.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    duration: "Ongoing Since 2026",
    role: "Product Strategist, UI/UX Designer & AI-Assisted Full-Stack Developer",
    images: ["/screenshots/cgv10-portal.jpg"],
    githubUrl: "https://github.com/ahlul-firdaus/cgv10",
    longDescription: "CGV10 is a community information portal designed for residents of Cipta Greenville RT 010/RW 021. The portal brings neighborhood announcements, committee information, financial summaries, community contacts, local resident businesses, and essential services into one accessible mobile-friendly experience.",
    keyDeliverables: [
      "Responsive neighborhood information portal",
      "Community committee and role directory",
      "Financial summary and reporting interface",
      "Announcement and activity-publishing structure",
      "PALUGADA resident marketplace",
      "Important contact and WhatsApp access",
      "Mobile-first community navigation",
      "Supabase-backed data foundation",
      "Proposed visitor-pass and gate-verification prototype"
    ],
    keyDecisions: [
      "Prioritized a mobile-first interface because most residents access community information through their phones.",
      "Organized information around common resident needs rather than administrative structures.",
      "Created a transparent financial-summary presentation that is easier to understand than raw spreadsheets.",
      "Developed PALUGADA as a community marketplace for resident products, food, services, and property listings.",
      "Prepared the technical foundation for future authentication, administration, complaint tracking, and visitor-management workflows."
    ],
    outcome: "Created a centralized digital reference for residents, consolidating previously fragmented information into a clearer and more accessible mobile experience. The current portal establishes the design and technical foundation for future administrative, financial, complaint-management, and security workflows."
  },
  {
    id: "masjid-al-ikhlas",
    name: "Masjid Al Ikhlas Digital Presence",
    category: "Community & Philanthropy",
    oneLiner: "Responsive public information website for Masjid Al Ikhlas Cipta Greenville.",
    problem: "Masjid information was previously distributed through messaging groups, posters, announcements, and separate documents.",
    challenge: "Jamaah and community members needed a simpler way to find accurate mosque information (schedules, kajian, programs, donation channels, financial reports) without relying entirely on separate messages or printed posters.",
    solution: "Designed and developed a responsive mosque information website that brings essential community information into one accessible digital hub.",
    status: "Live Community Project",
    statusBadge: "Live Community Project",
    context: "Public information website prioritizing clarity, respectful visual presentation, and mobile accessibility.",
    techStack: ["HTML5", "Tailwind CSS", "JavaScript", "SVG Design Assets", "Netlify"],
    duration: "Ongoing Community Project",
    role: "Digital Experience Strategist, UI/UX Designer & AI-Assisted Front-End Developer",
    images: ["/screenshots/alikhlas-hub.jpg"],
    liveUrl: "https://bespoke-sundae-408c0c.netlify.app/",
    githubUrl: "https://github.com/ahlul-firdaus/alikhlas-cgv-digital-ecosystem",
    longDescription: "A responsive public information website for Masjid Al Ikhlas Cipta Greenville, designed to make prayer information, mosque programs, community updates, donation channels, and published reports easier to access.",
    keyDeliverables: [
      "Responsive mosque information website",
      "Prayer schedule and countdown interface",
      "Kajian and program information directory",
      "Article and community-update publishing framework",
      "Donation-account and QR information guide",
      "Financial-report publication showcase",
      "Mosque contact and location access map",
      "Consistent digital visual identity",
      "Mobile-friendly navigation",
      "Prepared structure for future video content"
    ],
    keyDecisions: [
      "Prioritized essential mosque information so jamaah can quickly understand what is available and where to find it.",
      "Designed the experience around mobile access, readable typography, and straightforward navigation.",
      "Used a calm visual direction inspired by the mosque's identity, with deep green, warm ivory, and restrained gold accents.",
      "Structured programs, reports, donation information, and community content so they can be published consistently.",
      "Kept unfinished video, streaming, and payment functionality clearly separated from active website features."
    ],
    outcome: "Launched a centralized digital information hub that gives jamaah and community members easier access to mosque schedules, programs, donation information, published reports, and community updates."
  },
  {
    id: "oneecos",
    name: "OneEcos Business Operating System",
    category: "Business Ecosystem & Operating System",
    oneLiner: "People Execute. OneEcos Connects. Business Scales — transforming fragmented manual handoffs into one connected Order-to-Cash transaction flow.",
    problem: "Before OneEcos: Enterprises operate via manual coordination — 12-14 touched functions, 18+ manual handoffs, 8+ duplicate data entries, 10+ status inquiries, and 12+ manual follow-ups across 5-10 disconnected tools, causing high coordination costs and delayed settlement.",
    challenge: "Transitioning from human-coordinated operational chaos to system-coordinated execution while establishing a single source of truth across Inquiry (RFQ), Quotation, Sales Order, Procurement, Production, Logistics, Billing, and Collection.",
    solution: "Designed OneEcos: A Business Operating System that connects every step. 'A Fundamental Stage' establishes the core Order-to-Cash transaction flow (reducing touched functions from 14 to 7 and manual handoffs from 18+ to 5). Under active development, 'OneEcos Enterprise Stage' adds AI-powered insights, automated workflow alerts, enterprise data integration, and compliance audit trails.",
    status: "A Fundamental Stage (Live) | Enterprise Stage (In Development)",
    statusBadge: "A Fundamental Stage",
    context: "Unified business operating system unifying the complete Order-to-Cash transaction lifecycle.",
    techStack: ["React", "TypeScript", "Recharts", "Framer Motion", "Tailwind CSS", "REST APIs"],
    duration: "Ongoing Product Evolution",
    role: "Product Strategist, UI/UX Designer & Systems Architect",
    images: ["/screenshots/oneecos-dashboard.png", "/screenshots/oneecos-cockpit.jpg"],
    longDescription: "OneEcos fundamentally shifts how businesses scale: instead of people coordinating the business across fragmented tools, the OneEcos system coordinates the business around a unified transaction flow with the Sales Order at its center. 'A Fundamental Stage' delivers real-time visibility across the entire Order-to-Cash lifecycle (Inquiry, Quote, Sales Order, Procurement, Production, Logistics, Invoicing, Collection). 'OneEcos Enterprise Stage' is expanding the system with real-time AI Insights, automated workflow triggers, multi-entity compliance audit trails, and unified enterprise telemetry.",
    keyDeliverables: [
      "A Fundamental Stage: Core 8-Phase Connected Transaction Flow Engine (RFQ -> Quote -> Sales Order -> Procurement -> Production -> Logistics -> Invoicing -> Payment)",
      "Operational Efficiency Shift (Cuts touched functions from 14 to 7, manual handoffs from 18+ to 5, duplicate entries to 1 core entry)",
      "OneEcos Enterprise Stage Roadmap (Real-Time AI Insights, Automated Alerts, Integrated Data & Compliance Audit Trail)",
      "High-Density Executive Telemetry & Global Order-to-Cash Dashboard",
      "Unified Role-Based Visibility for Sales, Planning, Procurement, QC, Logistics, Finance & Management"
    ],
    keyDecisions: [
      "Anchored the platform on the core philosophy: 'People Execute. OneEcos Connects. Business Scales.'",
      "Structured product evolution into 'A Fundamental Stage' (Core Transaction Engine) and 'OneEcos Enterprise Stage' (Full Automation & AI Insights).",
      "Placed Sales Order as the center of truth to eliminate duplicate data entries and manual status follow-ups."
    ],
    outcome: "Engineered a unified business operating system that empowers teams to execute more transactions with lower coordination overhead — scaling revenue without adding operational headcount."
  },
  {
    id: "corum",
    name: "PT. Corum — Sustainability Reporting System",
    category: "ESG & Industrial Reporting",
    oneLiner: "Multi-department ESG & sustainability reporting dashboard for industrial manufacturing operations.",
    problem: "Fragmented, spreadsheet-based data collection across 7 distinct departments (Facilities, EHS, HR, Finance, Procurement, QC, IT) for annual ESG reporting packages (SRP2026).",
    challenge: "Industrial plant operations faced data discrepancies across energy consumption (kWh), raw material resin imports (MT), water discharge (m³), and DOE scheduled waste compliance pings.",
    solution: "Engineered an offline-first, client-side dashboard with dynamic JSON data interchange, department PIC progress tracking, real-time Chart.js analytics, and print-optimized PDF generation.",
    status: "Live & Deployed",
    statusBadge: "Live Project",
    context: "Industrial ESG reporting portal consolidating multi-department operational metrics for Batam plant operations.",
    techStack: ["HTML5", "JavaScript (ES6+)", "Chart.js", "Tailwind CSS", "LocalStorage Sync", "CSS Print Engine"],
    duration: "3 Months",
    role: "Digital Systems Architect & Lead Engineer",
    images: ["/screenshots/corum-dashboard.jpg"],
    longDescription: "PT. Corum Sustainability Reporting Package (SRP2026) transforms industrial ESG compliance into an interactive, zero-latency dashboard. The system tracks 23 critical parameters across 7 departments, allowing individual PICs to record monthly figures, audit status pings, and export/import merged JSON files without requiring complex server infrastructure.",
    keyDeliverables: [
      "7-Department PIC tracking matrix (Finance, Facilities, EHS, HR, Procurement, QC, IT)",
      "Client-side JSON data import/export merge protocol for offline multi-user collaboration",
      "Interactive Chart.js data trends for electricity, water, raw resin, and diesel burn",
      "Print-optimized PDF report generator (@media print CSS) for instant audit package printing"
    ],
    keyDecisions: [
      "Designed an offline-first browser architecture so department heads can update data without server connectivity.",
      "Implemented a JSON merge algorithm to resolve concurrent data entry across multiple PIC exports.",
      "Embedded real-time prefill algorithms from historical SRP2026 workbook figures."
    ],
    outcome: "Streamlined ESG audit compilation time by 60% and established a 100% transparent digital data trail across all 23 industrial compliance parameters."
  },
  {
    id: "rumah-ringkas",
    name: "Rumah Ringkas — Keuangan Keluarga",
    category: "FinTech & Household Wealth Ecosystem",
    oneLiner: "All-in-one family financial management platform with envelope budgeting, natural language quick-entry, and wealth tracking.",
    problem: "Household finances managed through chaotic WhatsApp group chats, manual notebook accounting, and zero visibility into total family net worth across multiple banks and e-wallets.",
    challenge: "Multiple family members (Danu, Sari, Ibu Tuti) needed a frictionless way to record daily transactions instantly without complicated accounting forms.",
    solution: "Built a mobile-first PWA featuring a 'Catat Cepat' natural language parser, visual envelope budget caps, multi-account Net Worth calculator, and granular family data privacy controls.",
    status: "Live & Deployed",
    statusBadge: "Live Project",
    context: "Household wealth management platform linking multi-member financial records into a single family dashboard.",
    techStack: ["React 19", "Tailwind CSS", "Recharts", "Lucide React", "LocalStorage Sync", "PWA Architecture"],
    duration: "2.5 Months",
    role: "Product Architect & Full-Stack Engineer",
    images: ["/screenshots/rumahringkas-app.jpg"],
    longDescription: "Rumah Ringkas brings corporate-grade financial discipline to family budgets. Designed around the classic 'Envelope Budgeting' methodology, family members can quickly type natural-language notes (e.g. 'Makan siang 25rb pakai GoPay'), which the system automatically parses into category, amount, and account balances. The platform aggregates Cash, BCA, GoPay, Jago, Bareksa, and Debts into a live Net Worth indicator.",
    keyDeliverables: [
      "Natural language 'Catat Cepat' transaction parser with automatic category & account mapping",
      "Visual Envelope Budgeting Engine with dynamic weekly/monthly cap calculations",
      "Multi-Account Net Worth Aggregator (Cash, Bank, E-Wallets, Investments, Utang & Piutang)",
      "Interactive 6-Month Cashflow & Expense Breakdown analytics using Recharts"
    ],
    keyDecisions: [
      "Built a custom Regex parser for Indonesian financial shorthand ('25rb', '12jt', 'Gaji masuk')",
      "Implemented client-side reactive state sync across household member records.",
      "Added CSV export and instant data-reset controls for family data sovereignty."
    ],
    outcome: "Adopted for daily family financial orchestration, reducing monthly unbudgeted expenses by 22%."
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((p) => p.id);
}


