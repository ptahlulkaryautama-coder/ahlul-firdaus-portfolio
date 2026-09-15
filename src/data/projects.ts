export interface Project {
  id: string;
  name: string;
  category: string;
  oneLiner: string;
  problem: string;
  challenge: string;
  solution: string;
  status: string;
  statusBadge: "Live Project" | "Client Work" | "Active Concept" | "Proof of Concept" | "In Development" | "Founder-Led Product — Active Prototype" | "Founder-Led Product — Phase 1 Launch" | "Founder-Led Civic-Tech Product — Live Community Platform" | "Community Portal — In Development" | "Live Community Project" | "A Fundamental Stage";
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
    name: "OOI — Origin of Indonesia",
    category: "Commerce, Export & Sourcing Platform",
    oneLiner: "Founder-led commerce and sourcing platform connecting certified Indonesian food brands with international consumers, specialty retailers, importers, and distribution partners.",
    problem: "Indonesia has thousands of quality regional products, but international access is fragmented. Buyers often face disconnected suppliers, inconsistent product information, unclear certification status, high shipping costs, and no simple way to combine products from several origins into one order or inquiry.",
    challenge: "Connecting verified Indonesian food brands with international consumers, specialty retailers, and importers across snacks, specialty coffee, spices, cashews, and gift kits while overcoming single-supplier shipping inefficiencies.",
    solution: "Designed and developed a responsive marketplace and B2B sourcing experience that organizes curated Indonesian products into a clear catalog, surfaces trust and certification indicators, supports retail and wholesale buyer journeys, and communicates the commercial value of multi-supplier consolidation through the Batam hub.",
    status: "Founder-Led Product — Phase 1 Launch",
    statusBadge: "Founder-Led Product — Phase 1 Launch",
    context: "Curated Indonesian products, consolidated in Batam, prepared for global buyers.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify", "GitHub"],
    duration: "Ongoing Since 2026",
    role: "Founder, Product Strategist, UI/UX Designer & Full-Stack Developer",
    images: ["/screenshots/ooi-portfolio-thumbnail-v2.png"],
    liveUrl: "https://ooindonesia.com",
    githubUrl: "https://github.com/ahlul-firdaus/ooindonesia",
    longDescription: "OOI — Origin of Indonesia is a founder-led commerce and sourcing platform created to make premium Indonesian food products easier to discover, evaluate, and purchase internationally. The platform brings curated snacks, specialty coffee, spices, cashews, and gift collections into one cohesive buyer experience while positioning Batam as a strategic consolidation hub for global fulfillment.\n\nRather than operating as a conventional single-brand store, OOI is designed as a bridge between verified Indonesian producers and multiple international buyer segments—from individual customers to specialty retailers, importers, and distributors.",
    keyDeliverables: [
      "Responsive premium storefront",
      "Categorized and filterable product catalog",
      "Product cards with origin, certifications, attributes, size, and pricing",
      "Curated gift-kit collection",
      "Retail cart and order journey",
      "B2B wholesale and sourcing pathway",
      "Trial/sample and strategic-partnership options",
      "Batam consolidation value proposition",
      "Shipping-savings estimator",
      "Founder story and origin-led brand narrative",
      "Mobile-responsive navigation and layouts",
      "SEO-ready content structure"
    ],
    keyDecisions: [
      "Built the catalog around product discovery and buyer confidence, using origin, certification, product attributes, format, and pricing as primary decision signals.",
      "Combined premium Indonesian storytelling with commerce-focused calls to action so the experience feels both authentic and commercially credible.",
      "Created separate but connected pathways for retail purchasing and B2B sourcing instead of forcing every visitor into one funnel.",
      "Made Batam consolidation a central differentiator while keeping products—not logistics—the primary visual focus.",
      "Used a warm cream, burgundy, and gold design language to position OOI as a premium food and origin brand."
    ],
    outcome: "Launched the Phase 1 product experience at ooindonesia.com, establishing a unified digital foundation for showcasing Indonesian brands, validating buyer interest, supporting retail discovery, and developing international B2B sourcing relationships."
  },
  {
    id: "cgv10",
    name: "Portal Warga CGV",
    category: "Civic Tech, Community Operations & Resident Services",
    oneLiner: "An integrated residential platform combining public neighborhood information, authenticated resident services, transparent community finance, local commerce, and administrative operations in one connected digital ecosystem.",
    problem: "Community information and services were previously distributed across chat groups, manual records, informal payment confirmations, personal messages, and disconnected communication channels.",
    challenge: "Residents lacked one trusted place to find official neighborhood information, submit requests, report environmental problems, access community finance, review contribution history, discover nearby resident businesses, and follow community announcements. Administrators needed a structured way to manage residents, service requests, contributions, content, and marketplace listings.",
    solution: "Designed and developed a role-based residential platform with separate public, resident, and administrator experiences. The system combines a public community portal, personalized resident dashboard, service-request workflow, transparent finance access, PALUGADA local marketplace, and administrative control center.",
    status: "Live Community Platform",
    statusBadge: "Founder-Led Civic-Tech Product — Live Community Platform",
    context: "Live civic-tech residential ecosystem serving the Cipta Green Ville RT 010/RW 021 community with 3-tier role-based access.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PWA", "Vercel"],
    duration: "Live Community Platform",
    role: "Product Strategist, UI/UX Designer & Full-Stack Developer",
    images: [
      "/Image/project/cgv10/portal-warga-cgv-thumbnail-v2.png",
      "/Image/project/cgv10/cgv10-resident-portal-redacted.png",
      "/Image/project/cgv10/cgv10-layanan-warga.png",
      "/Image/project/cgv10/cgv10-palugada-redacted.png",
      "/Image/project/cgv10/cgv10-admin-dashboard-redacted.png"
    ],
    liveUrl: "https://portalwargacgv.id",
    githubUrl: "https://github.com/ahlul-firdaus/cgv10",
    longDescription: "Portal Warga CGV is an integrated digital ecosystem developed for the residents and administrators of Cipta Green Ville RT 010/RW 021. It centralizes community information, resident services, financial transparency, neighborhood commerce, and administrative workflows in one accessible system.\n\nThe platform supports both open public communication and authenticated experiences for registered residents and authorized administrators.",
    keyDeliverables: [
      "Public community portal",
      "Resident registration and authentication",
      "Personalized resident dashboard",
      "Role-based access control",
      "Community-service request workflow",
      "Environmental issue reporting",
      "Resident administration requests",
      "Supporting-image attachments",
      "Contribution and finance visibility",
      "PALUGADA local marketplace",
      "Business and service listing registration",
      "News and announcement publishing",
      "Admin operational dashboard",
      "Resident data administration",
      "Payment-verification workflow",
      "Request review and follow-up",
      "Marketplace moderation",
      "Content-management workflow",
      "Installable PWA",
      "Responsive desktop and mobile layouts",
      "Privacy-aware interface structure"
    ],
    keyDecisions: [
      "Separated public, resident, and administrator access instead of exposing all functionality through one interface.",
      "Created a personalized resident portal so authenticated residents can access relevant services and information from one dashboard.",
      "Structured resident requests into environmental reports, resident data, documents, security, and community suggestions.",
      "Added photo-supporting evidence to improve the clarity of reports and service requests.",
      "Integrated community financial information without exposing individual resident records publicly.",
      "Developed PALUGADA so resident businesses and services are easier to discover than searching through old group messages.",
      "Created a dedicated administrator workspace for operational review, verification, moderation, and publishing.",
      "Used deep green, warm cream, and gold to create a trustworthy community identity."
    ],
    outcome: "Launched an integrated community platform that provides residents and administrators with a structured digital foundation for neighborhood information, resident services, financial transparency, local commerce, and community operations."
  },
  {
    id: "masjid-al-ikhlas",
    name: "Masjid Al Ikhlas Digital Ecosystem",
    category: "Faith-Based Civic Tech, Education & Community Services",
    oneLiner: "A digital mosque and community ecosystem connecting worship information, Islamic education, community programs, transparent financial reporting, donations, media, and jamaah services in one accessible platform.",
    problem: "Mosque activities, daily prayer timetables, Friday bulletins, TPQ information, and donation transparency reports were traditionally fragmented across physical noticeboards, posters, and disparate messaging group forwards.",
    challenge: "Jamaah needed a trustworthy place to check prayer times, discover kajian and activities, access TPQ information, review published financial summaries, find donation guidance, and contact mosque administrators, while maintaining high mobile accessibility and respectful community presentation.",
    solution: "Designed and developed a responsive digital mosque and community ecosystem organizing worship information, TPQ education, programs, agenda, media, news, financial transparency, donations, and contact services into one coherent, installable PWA experience.",
    status: "Community Portal — In Development",
    statusBadge: "Community Portal — In Development",
    context: "Digital mosque and community ecosystem for Masjid Al Ikhlas Cipta Greenville Batam connecting worship, education, transparency, and jamaah services.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA", "PostgreSQL", "Vercel"],
    duration: "In Development (Pre-Launch)",
    role: "Digital Experience Strategist, UI/UX Designer & Full-Stack Developer",
    images: [
      "/images/projects/masjid-al-ikhlas/masjid-al-ikhlas-thumbnail-v3-official-logo.png",
      "/images/projects/masjid-al-ikhlas/masjid-al-ikhlas-admin-finance-preview-v2-official-logo.png"
    ],
    liveUrl: undefined,
    githubUrl: "https://github.com/ahlul-firdaus/alikhlas-cgv-digital-ecosystem",
    longDescription: "Masjid Al Ikhlas Digital Ecosystem is the unified online platform for Masjid Al Ikhlas Cipta Greenville Batam. It supports jamaah and the surrounding community with prayer information, Islamic learning, TPQ education, activities, transparent stewardship, donation guidance, media, and direct access to mosque services.\n\nThe platform combines day-to-day worship needs with community communication and institutional transparency in a responsive, installable web experience.",
    keyDeliverables: [
      "Responsive mosque information portal",
      "Dynamic Batam prayer schedule and countdown",
      "Kajian and program directory",
      "Agenda grid and calendar experience",
      "TPQ education portal (TPQ Al-Mardhotillah)",
      "News and announcement publishing",
      "Media and Islamic knowledge hub",
      "Financial-transparency presentation",
      "Authorized finance and operations dashboard (demonstration preview)",
      "Donation and infaq guidance",
      "Mosque location and contact workflow",
      "Installable PWA experience",
      "Mobile-responsive navigation and layouts",
      "SEO-ready semantic content structure"
    ],
    keyDecisions: [
      "Used the real Masjid Al Ikhlas building and local community identity instead of generic mosque imagery.",
      "Prioritized prayer schedule and next-prayer countdown in the homepage hero for quick mobile access.",
      "Organized content around worship, education, programs, stewardship, and community service.",
      "Made financial transparency visible without exposing donor-level or private administrative records.",
      "Combined deep Islamic green, warm gold, ivory typography, and sunset photography for a respectful local identity.",
      "Created a mobile-first, installable PWA experience for frequent jamaah access.",
      "Separated public community information from authorized DKM finance administration."
    ],
    outcome: "Launched a unified digital platform that gives Masjid Al Ikhlas a structured foundation for worship information, Islamic education, program communication, public transparency, community support, and mobile jamaah access."
  },
  {
    id: "oneecos",
    name: "OneEcos Business Operating System",
    category: "Business Ecosystem & Operating System",
    oneLiner: "People Execute. OneEcos Connects. Business Scales — transforming fragmented manual handoffs into one connected Order-to-Cash transaction flow.",
    problem: "Traditional businesses struggle with operational chaos: 12-14 disconnected functions, 18+ manual spreadsheet handoffs, redundant data entry, and endless status meetings across disparate tools, causing high overhead and delayed cash settlement.",
    challenge: "Unifying the entire end-to-end commercial lifecycle—from initial RFQ and Quotation to Sales Order, Procurement, Production, Logistics, Invoicing, and Payment Collection—into a single coherent transaction flow.",
    solution: "Designed OneEcos: A connected Business Operating System where every department works off a single source of truth. 'A Fundamental Stage' establishes the connected 8-phase Order-to-Cash engine, while 'OneEcos Enterprise Stage' introduces AI telemetry and automated workflow triggers.",
    status: "A Fundamental Stage (Live) | Enterprise Stage (In Development)",
    statusBadge: "A Fundamental Stage",
    context: "Unified business operating system orchestrating the complete Order-to-Cash commercial lifecycle.",
    techStack: ["React", "TypeScript", "Recharts", "Framer Motion", "Tailwind CSS", "REST APIs"],
    duration: "Ongoing Product Evolution",
    role: "Product Strategist, UI/UX Designer & Systems Architect",
    images: ["/screenshots/oneecos-dashboard.png", "/screenshots/oneecos-cockpit.jpg"],
    longDescription: "OneEcos fundamentally rethinks how modern enterprises scale: instead of employees manually coordinating business processes across disjointed spreadsheets and chat apps, OneEcos connects every operational step around a unified transaction flow. 'A Fundamental Stage' delivers real-time visibility across the 8 core phases of Order-to-Cash, dramatically reducing coordination friction and accelerating time-to-cash.",
    keyDeliverables: [
      "A Fundamental Stage: Core 8-Phase Order-to-Cash transaction engine (RFQ -> Quote -> Sales Order -> Procurement -> Production -> Logistics -> Invoicing -> Payment)",
      "Single-source-of-truth architecture cutting manual handoffs from 18+ to 5 and duplicate data entries from 8+ to 1",
      "High-density executive operational cockpit with real-time financial telemetry",
      "Role-based visibility tailored for Sales, Planning, Purchasing, Production QC, Logistics, and Finance",
      "Enterprise Stage Roadmap: Automated exception alerts, AI insights, and compliance audit logging"
    ],
    keyDecisions: [
      "Anchored the system around the core paradigm: 'People Execute. OneEcos Connects. Business Scales.'",
      "Placed the Sales Order at the mathematical center of the transaction graph to eliminate manual status inquiries.",
      "Engineered high-density, low-clutter interfaces to provide executives and operators with immediate situational awareness."
    ],
    outcome: "Engineered a foundational business operating system that empowers enterprises to process higher transaction volumes with lower coordination overhead, allowing revenue to scale without proportional headcount growth."
  },
  {
    id: "corum",
    name: "PT. Corum — Sustainability Reporting System",
    category: "ESG & Industrial Reporting",
    oneLiner: "Multi-department industrial ESG & sustainability reporting dashboard with offline-first client-side data interchange for plant operations.",
    problem: "Compiling annual industrial Sustainability Reporting Packages (SRP2026) in manufacturing plants involved manual data collection across 7 disparate departments (Finance, Facilities, EHS, HR, Procurement, QC, IT), resulting in version conflicts and lengthy audit preparations.",
    challenge: "Tracking 23 sensitive industrial parameters—including electricity (kWh), water discharge (m³), raw resin imports (MT), diesel fuel burn (L), and hazardous waste compliance—without deploying complex server infrastructure or compromising plant data security.",
    solution: "Engineered an offline-first, client-side ESG reporting dashboard featuring dynamic JSON data interchange, department PIC data validation, real-time Chart.js trend analytics, and print-optimized PDF generation for official audit submissions.",
    status: "Live & Deployed",
    statusBadge: "Live Project",
    context: "Industrial ESG reporting portal consolidating multi-department operational metrics for Batam manufacturing operations.",
    techStack: ["HTML5", "JavaScript (ES6+)", "Chart.js", "Tailwind CSS", "LocalStorage Sync", "CSS Print Engine"],
    duration: "3 Months",
    role: "Digital Systems Architect & Lead Engineer",
    images: ["/screenshots/corum-dashboard.jpg"],
    liveUrl: undefined,
    githubUrl: undefined,
    longDescription: "PT. Corum Sustainability Reporting Package (SRP2026) transforms industrial ESG compliance into an interactive, zero-latency dashboard. The system tracks 23 critical environmental, social, and operational parameters across 7 departments, allowing individual PICs to record monthly figures offline, merge JSON data files seamlessly, and generate audit-ready PDF reports with a single click.",
    keyDeliverables: [
      "7-Department PIC tracking matrix (Finance, Facilities, EHS, HR, Procurement, QC, IT)",
      "Client-side JSON data import/export merge protocol for offline multi-user collaboration",
      "Interactive Chart.js data trends for electricity, water, raw resin, and diesel burn",
      "Print-optimized PDF report generator (@media print CSS) for instant audit package printing",
      "Zero-server architecture ensuring 100% internal plant data sovereignty"
    ],
    keyDecisions: [
      "Adopted an offline-first browser architecture so department heads can input monthly data securely on plant laptops without server dependencies.",
      "Implemented a structured JSON schema merge algorithm to resolve concurrent submissions across multiple department PICs.",
      "Built print-specific CSS stylesheets ensuring exported PDF documents perfectly match official industrial audit formats."
    ],
    outcome: "Reduced annual ESG audit compilation time by 60% and established a transparent, verifiable digital data trail across all 23 industrial compliance parameters."
  },
  {
    id: "sakku",
    name: "Sakku 2.0 — Privacy-First Wealth OS",
    category: "FinTech & Wealth Operating System",
    oneLiner: "Privacy-first personal & family wealth operating system with zero-knowledge offline architecture, natural-language parsing, and envelope budgeting.",
    problem: "Most financial tracking tools either monetize sensitive personal banking data through intrusive cloud syncing, lock essential features behind costly monthly subscriptions, or require tedious multi-step manual data entry.",
    challenge: "Providing rich executive financial telemetry (real-time Net Worth, savings rates, multi-account aggregation, envelope allocations) while maintaining strict 100% data sovereignty with zero cloud storage of financial transactions.",
    solution: "Engineered Sakku 2.0: A high-performance Local-First PWA featuring Indonesian natural-language 'Catat Cepat' parsing, visual envelope budgeting, multi-account net worth tracking, and zero-knowledge local storage.",
    status: "Live & Deployed",
    statusBadge: "Live Project",
    context: "Privacy-first wealth operating system delivering executive telemetry with zero monthly subscriptions and 100% data sovereignty.",
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Recharts", "Lucide React", "LocalStorage / Local-First", "PWA"],
    duration: "Active Production Product",
    role: "Product Strategist, UI/UX Designer & Lead Full-Stack Architect",
    images: ["/screenshots/sakkupreview.png"],
    liveUrl: "https://sakku.ahlulfirdaus.com/",
    githubUrl: "https://github.com/ptahlulkaryautama-coder/sakku-2-0",
    longDescription: "Sakku 2.0 is a privacy-first personal and family financial operating system built on the philosophy of 'Privacy-First, Zero-Latency, Zero-Subscription'. Unlike conventional FinTech applications that monetize user data or charge recurring fees, Sakku 2.0 stores 100% of data locally on the user's device while providing executive-tier financial telemetry, conversational transaction parsing, visual envelope budgets, and real-time Net Worth aggregation.",
    keyDeliverables: [
      "Live PWA wealth operating system deployed at sakku.ahlulfirdaus.com",
      "Natural-language 'Catat Cepat' parser with automated Indonesian conversational amount and category detection",
      "Visual Envelope Budgeting Engine with dynamic spending limit meters",
      "Multi-Account Net Worth Aggregator (Cash, BCA, GoPay, Jago, Bareksa Investments & Liabilities)",
      "Executive Financial Telemetry (Net Worth, Savings Rate %, 6-Month Cash Flow & Expense Breakdown)",
      "Zero-Knowledge Local-First architecture ensuring 100% data sovereignty with zero server leaks",
      "One-click JSON backup and restore protocols for complete data ownership"
    ],
    keyDecisions: [
      "Committed to a strict Local-First / Zero-Knowledge storage paradigm to eliminate third-party privacy risks completely.",
      "Engineered a custom Indonesian regex tokenizer for conversational amounts ('25rb', '12jt', 'Makan siang 35rb via GoPay').",
      "Modeled household cash flow after the proven Envelope Budgeting methodology to curb impulse spending effectively."
    ],
    outcome: "Live and deployed at sakku.ahlulfirdaus.com, empowering users with institutional-grade financial visibility, zero tracking, and zero subscription overhead."
  }
];

export function getProjectById(id: string): Project | undefined {
  if (id === "rumah-ringkas") return projects.find((p) => p.id === "sakku");
  return projects.find((p) => p.id === id);
}

export function getAllProjectIds(): string[] {
  return [...projects.map((p) => p.id), "rumah-ringkas"];
}
