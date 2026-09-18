export interface Project {
  id: string;
  name: string;
  category: string;
  oneLiner: string;
  problem: string;
  challenge: string;
  solution: string;
  status: string;
  statusBadge: "Live Product" | "Active Prototype" | "Internal Template" | "In Development" | "Concept / Roadmap" | "Founder-Led Product — Phase 1 Launch";
  evidenceLabel: "Public Live Product" | "Public Demo" | "Functional Prototype" | "Internal Template" | "In Development" | "Concept / Roadmap" | "Founder-Led Product — Phase 1 Launch";
  problemSnippet: string;
  builtSnippet: string;
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
    problemSnippet: "Indonesian specialty products are fragmented across separate suppliers with high shipping costs and unclear buyer pathways.",
    builtSnippet: "A curated B2B & retail showcase catalog highlighting origin traceability, product specs, and Batam consolidation.",
    challenge: "Connecting verified Indonesian food brands with international consumers, specialty retailers, and importers across snacks, specialty coffee, spices, cashews, and gift kits while overcoming single-supplier shipping inefficiencies.",
    solution: "Designed and developed a responsive marketplace and B2B sourcing experience that organizes curated Indonesian products into a clear catalog, surfaces trust and certification indicators, supports retail and wholesale buyer journeys, and communicates the commercial value of multi-supplier consolidation through the Batam hub.",
    status: "Founder-Led Product — Phase 1 Launch",
    statusBadge: "Founder-Led Product — Phase 1 Launch",
    evidenceLabel: "Public Live Product",
    context: "Curated Indonesian products, consolidated in Batam, prepared for global buyers.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify", "GitHub"],
    duration: "Ongoing Since 2026",
    role: "Founder, Product Strategy, UI/UX Design & AI-Assisted Development",
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
    status: "Live Product",
    statusBadge: "Live Product",
    evidenceLabel: "Public Live Product",
    problemSnippet: "Neighborhood announcements, requests, contributions, and local commerce were scattered across chat groups.",
    builtSnippet: "A role-based community portal connecting 500+ residents with announcements, requests, transparent Kas RT balance, and a local marketplace.",
    context: "Live civic-tech residential ecosystem serving the Cipta Green Ville RT 010/RW 021 community with 3-tier role-based access.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PWA", "Vercel"],
    duration: "Live Community Platform",
    role: "Product Strategy, UI/UX Design & AI-Assisted Development",
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
    problemSnippet: "Mosque prayer schedules, TPQ info, and weekly donation reports were dispersed across physical boards and chat forwards.",
    builtSnippet: "A responsive community web hub with Batam prayer schedule information, TPQ education portal, and transparent stewardship reports.",
    challenge: "Jamaah needed a trustworthy place to check prayer times, discover kajian and activities, access TPQ information, review published financial summaries, find donation guidance, and contact mosque administrators, while maintaining high mobile accessibility and respectful community presentation.",
    solution: "Designed and developed a responsive digital mosque and community ecosystem organizing worship information, TPQ education, programs, agenda, media, news, financial transparency, donations, and contact services into one coherent, installable PWA experience.",
    status: "In Development",
    statusBadge: "In Development",
    evidenceLabel: "In Development",
    context: "Digital mosque and community ecosystem for Masjid Al Ikhlas Cipta Greenville Batam connecting worship, education, transparency, and jamaah services.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA", "PostgreSQL", "Vercel"],
    duration: "In Development (Pre-Launch)",
    role: "Digital Experience Strategy, UI/UX Design & AI-Assisted Development",
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
    name: "OneEcos — B2B Trade Operations System",
    category: "B2B Trade, Export Operations & Business Workflow",
    oneLiner: "From scattered records to one connected trade workflow.",
    problem: "Small trading and export teams often coordinate work across spreadsheets, messaging apps, manually prepared documents, and individual follow-up lists. The information may exist, but the operational context is fragmented: a buyer record is separated from its quotation, the accepted quote is separated from fulfillment, and shipment or payment follow-ups depend on individual memory.",
    problemSnippet: "Trade records, quotations, orders, and follow-ups can become scattered across disconnected spreadsheets.",
    builtSnippet: "A connected operational prototype organizing buyers, quotes, orders, fulfillment, shipments, documents, and invoices.",
    challenge: "The core challenge was not simply to create another dashboard. It was to design a shared operational structure that connects commercial intent with execution: who the buyer is, what was quoted, what was confirmed, what must be fulfilled, what has shipped, which documents are required, and what remains unpaid.",
    solution: "OneEcos organizes those activities around linked business records and guided next actions. The interface provides two levels of detail: a simple daily workspace for operators and a higher-density command center for founders or managers monitoring exceptions and workflow health.",
    status: "Active Prototype",
    statusBadge: "Active Prototype",
    evidenceLabel: "Public Demo",
    context: "People Execute. OneEcos Connects. Business Scales — connected operational workspace for small B2B trading and export teams.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    duration: "Founder-Led Operational Prototype",
    role: "Product Strategy, Operational Workflow Design, UI/UX & AI-Assisted Development",
    images: [
      "/Image/project/oneecos/oneecos-portfolio-thumbnail-v2.png",
      "/Image/project/oneecos/OneEcos.png"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    longDescription: "OneEcos is a connected operational workspace that helps small trading and export teams organize buyers, quotations, orders, fulfillment, shipments, documents, invoices, and follow-ups through one structured workflow.\n\nRather than forcing small teams into oversized enterprise platforms or leaving them with disjointed spreadsheets, OneEcos models the complete operational chain: Buyer → Product → Quote → Sales Order → Work Order → Shipment → Documents → Invoice → Collection.",
    keyDeliverables: [
      "Connected trade-record workflow (Buyer, Product, Quote, Order, Work Order, Shipment, Docs, Invoice)",
      "Daily Brief and Current Work contextual workspace",
      "Guided next actions and operational readiness gates",
      "Rule-based decision support prototype and prototype attention alerts",
      "Export-document previews and record links",
      "CBM and container-loading reference calculators",
      "Financial and KPI reference telemetry (sample workspace data)",
      "Dual workspace modes: Simple Daily Workspace & Executive Command Center",
      "Workspace data backup and export utilities",
      "Next-stage roadmap (PostgreSQL/Supabase persistence, RBAC, multi-user audit history)"
    ],
    keyDecisions: [
      "One connected record chain — Buyers, products, quotations, orders, work orders, shipments, documents, and invoices are treated as related operational records.",
      "Action before analytics — The product prioritizes the next required action instead of displaying metrics without operational context.",
      "Manual-first foundation — Core workflows are modeled and tested before introducing external integrations or automation.",
      "Two information densities — Operators receive a guided workflow, while managers receive exception-focused oversight.",
      "Visible readiness — The prototype identifies what is functional, what remains manual, and what is planned for later phases."
    ],
    outcome: "The current result is an operational prototype that demonstrates how fragmented trade activities can be translated into one coherent workspace. It validates information architecture, workflow relationships, interface hierarchy, and the transition from daily operator actions to management oversight without claiming unverified enterprise adoption."
  },
  {
    id: "corum",
    name: "PT. Corum Sustainability Reporting Template",
    category: "Operational Reporting & Workflow Concept",
    oneLiner: "Turning a complex sustainability workbook into a clearer, guided reporting workflow.",
    problem: "Preparing periodic sustainability reporting packages often requires compiling qualitative answers and quantitative metrics across multiple company departments (Facilities, EHS, HR, Procurement, QA/QC, Finance, Production). Spreadsheets can be overwhelming, error-prone, and difficult to monitor for overall reporting progress.",
    problemSnippet: "A large multi-department sustainability workbook was difficult to navigate, fill, and monitor for reporting progress.",
    builtSnippet: "A browser-based reporting and data-entry template structuring 23 sections across 7 departments with local storage and PDF export.",
    challenge: "The core challenge was translating a comprehensive sustainability reporting package into a self-contained, browser-local template that guides department contributors through their assigned sections without introducing complex server infrastructure, database administration, or external cloud dependencies.",
    solution: "Designed and built a browser-based sustainability reporting prototype that structures 23 tracked reporting sections across departments into clear views (Overview, Already Reported, Data Trends, Fill In Data), tracks completion statuses locally, supports client-side JSON export/import for file-based consolidation, and enables print/export to PDF.",
    status: "Internal Template",
    statusBadge: "Internal Template",
    evidenceLabel: "Functional Prototype",
    context: "Client-side sustainability reporting prototype and data-entry template organizing multi-department metrics without server dependencies.",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Chart.js", "LocalStorage", "CSS @media print"],
    duration: "Prototype Sprint",
    role: "Reporting Structure, Workflow Design, Dashboard UI & Front-End Template",
    images: ["/Image/project/pt.corum/pt-corum-portfolio-thumbnail-v2.png"],
    liveUrl: undefined,
    githubUrl: undefined,
    longDescription: "PT. Corum Sustainability Reporting Template is a browser-based prototype designed to turn a multi-department sustainability reporting workbook into a guided, structured reporting workflow.\n\nThe prototype organizes 23 tracked sections across 7 operational domains (Facilities, EHS, HR, Procurement, QA/QC, Finance, Production), providing completion tracking, client-side data persistence, trend visualizations, and JSON file export/import for manual consolidation.\n\nWorkflow: Reporting Package → Sections & Owners → Department Input → Completion Review → JSON Export → Manual Consolidation → Print/PDF Report.",
    keyDeliverables: [
      "23 tracked reporting sections across 7 departments",
      "4 structured views: Overview, Already Reported, Data Trends, and Fill In Data",
      "Visual completion indicators (Not Started, In Progress, Complete)",
      "Client-side data persistence via browser localStorage",
      "Manual JSON export and file-based merge/import utilities",
      "Interactive Chart.js trend visualizations for sample consumption metrics",
      "Browser-optimized print stylesheet (@media print) for PDF export",
      "Self-contained architecture with zero external database dependencies"
    ],
    keyDecisions: [
      "Structured 23 reporting sections into clear operational domains rather than an unguided monolithic spreadsheet.",
      "Employed client-side browser storage to allow standalone, offline-capable operation on plant workstations.",
      "Provided manual JSON export and import functions so distributed department files can be consolidated without cloud synchronization.",
      "Implemented browser @media print formatting to generate clean summary reports directly from the web interface.",
      "Clearly demarcated prototype boundaries: database persistence, authentication, and automated audit trails remain future roadmap items."
    ],
    outcome: "Delivered a functioning standalone prototype that validates the information hierarchy, section ownership matrix, and data-entry workflow needed to transform a static sustainability workbook into a user-friendly digital reporting template."
  },
  {
    id: "sakku",
    name: "Sakku 2.0 — Personal & Household Finance",
    category: "Privacy-First Personal Finance & Budgeting",
    oneLiner: "Privacy-first personal and household financial system with local-first offline architecture, rule-based conversational transaction input, and envelope budgeting.",
    problem: "Personal and household expense tracking often requires intrusive cloud syncing, paid subscriptions, or tedious manual data entry.",
    problemSnippet: "Personal and household expense tracking often requires intrusive cloud syncing, paid subscriptions, or tedious manual data entry.",
    builtSnippet: "A privacy-first local PWA featuring rule-based conversational 'Catat Cepat' parsing, envelope budgeting, and zero cloud tracking.",
    challenge: "Providing clear household expense tracking (balance, savings rates, multi-wallet balance tracking, envelope allocations) with client-side local storage and zero cloud tracking.",
    solution: "Built Sakku 2.0: A high-performance Local-First PWA featuring rule-based conversational 'Catat Cepat' transaction input, visual envelope budgeting, multi-wallet balance tracking, and local client-side storage.",
    status: "Live Product",
    statusBadge: "Live Product",
    evidenceLabel: "Public Live Product",
    context: "Privacy-first personal and household financial tool delivering spending visibility with zero monthly subscriptions and local-first data storage.",
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Recharts", "Lucide React", "LocalStorage / Local-First", "PWA"],
    duration: "Live Product",
    role: "Product Strategy, UI/UX Design & Lead Developer",
    images: ["/screenshots/sakkupreview.png"],
    liveUrl: "https://sakku.ahlulfirdaus.com/",
    githubUrl: "https://github.com/ptahlulkaryautama-coder/sakku-2-0",
    longDescription: "Sakku 2.0 is a privacy-first personal and household financial tool built on the philosophy of 'Privacy-First, Zero-Latency, Zero-Subscription'. Unlike conventional FinTech applications that monetize user data or charge recurring fees, Sakku 2.0 stores data locally on the user's device while providing structured budgeting metrics, rule-based conversational transaction parsing, visual envelope budgets, and multi-wallet balance tracking.",
    keyDeliverables: [
      "Live PWA personal finance tool deployed at sakku.ahlulfirdaus.com",
      "Rule-based conversational 'Catat Cepat' transaction parser with automated Indonesian amount and category detection",
      "Visual Envelope Budgeting Engine with dynamic spending limit meters",
      "Multi-Wallet Balance & Net Balance Tracker (Cash, BCA, GoPay, Jago, Savings & Liabilities)",
      "Budget Telemetry (Net Balance, Savings Rate %, 6-Month Cash Flow & Expense Breakdown)",
      "Zero-Knowledge Local-First architecture storing data exclusively in client-side storage",
      "One-click JSON backup and restore protocols for complete data ownership"
    ],
    keyDecisions: [
      "Committed to a strict Local-First storage paradigm to eliminate third-party data collection.",
      "Built a deterministic Indonesian regex tokenizer for conversational amounts ('25rb', '12jt', 'Makan siang 35rb via GoPay').",
      "Modeled household cash flow after the proven Envelope Budgeting methodology to curb impulse spending effectively."
    ],
    outcome: "Live and deployed at sakku.ahlulfirdaus.com, empowering users with clear household budgeting visibility, zero tracking, and zero subscription overhead."
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((p) => p.id);
}
