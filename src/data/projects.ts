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
    oneLiner: "Founder-led B2B export catalog & inquiry platform connecting premium Indonesian origin commodities to international buyers.",
    problem: "Indonesian producers, farmers, and emerging exporters struggle to present their commodities and manufactured products in a standardized, credible digital format that satisfies global B2B procurement standards.",
    challenge: "International importers require clear technical specifications, origin certifications, packaging details, minimum order quantities (MOQ), and structured sample-request workflows before engaging in commercial dialogue.",
    solution: "Architected and engineered a premium B2B export showcase platform that categorizes Indonesian commodities by origin, technical grades, packaging standards, and HS codes, paired with a streamlined buyer inquiry and sample request workflow.",
    status: "Founder-Led Product — Active Prototype",
    statusBadge: "Founder-Led Product — Active Prototype",
    context: "Product-validation platform establishing digital presentation and inquiry standards for Indonesian export commodities.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify", "GitHub"],
    duration: "Ongoing Since 2026",
    role: "Founder, Product Strategist, UI/UX Designer & Full-Stack Developer",
    images: ["/screenshots/ooi-dashboard.jpg"],
    liveUrl: "https://ooindonesia.com",
    githubUrl: "https://github.com/ahlul-firdaus/ooindonesia",
    longDescription: "OOI — Origin Of Indonesia is a founder-led B2B export showcase platform designed to position premium Indonesian commodities (agricultural crops, spices, coconut derivatives, coffee, and manufactured goods) directly in front of international importers, distributors, and wholesale buyers. Drawing on 20+ years of operational, quality, and manufacturing expertise, the platform translates complex trade and sourcing information into a clean, modern B2B buyer experience.",
    keyDeliverables: [
      "Premium responsive B2B export showcase platform",
      "Commodity catalog organized by origin, grade, and packaging specs",
      "Standardized B2B buyer inquiry and sample-request funnel",
      "Export-readiness specification sheets and compliance indicators",
      "Batam Free Trade Zone (FTZ) strategic hub positioning",
      "Editorial origin storytelling emphasizing traceability and quality",
      "Search-optimized technical SEO foundation for global discovery"
    ],
    keyDecisions: [
      "Structured the product catalog strictly around B2B procurement needs (MOQ, specs, lead times) rather than consumer retail e-commerce patterns.",
      "Paired authentic origin storytelling with rigorous technical data sheets to build commercial trust with international buyers.",
      "Focused on a frictionless sample-request and RFQ inquiry funnel before introducing heavier transactional logic."
    ],
    outcome: "Built a production-grade digital platform at ooindonesia.com that establishes credibility for Indonesian commodities and serves as the strategic digital foundation for international buyer engagement and trade partnerships."
  },
  {
    id: "cgv10",
    name: "CGV10 Portal Warga",
    category: "Digital Community System",
    oneLiner: "Centralized community information hub, financial transparency portal, and local resident marketplace for RT 010 / RW 021.",
    problem: "Neighborhood communication in residential estates is typically scattered across chaotic WhatsApp groups, lost PDF attachments, and unorganized financial records, making it difficult for residents to find official announcements or track community dues.",
    challenge: "Consolidating diverse community needs—official RT notices, committee contacts, transparent Kas RT balance reports, and resident UMKM promotions—into an intuitive, mobile-first web app that non-technical residents can use effortlessly.",
    solution: "Designed and deployed a responsive community portal featuring official RT announcements, a committee directory, transparent monthly financial reporting, and PALUGADA—a dedicated resident marketplace empowering neighborhood commerce.",
    status: "Live & Deployed",
    statusBadge: "Live Project",
    context: "Live community web platform empowering 500+ residents with centralized communication, financial openness, and local trade.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    duration: "Live Community Project",
    role: "Product Strategist, UI/UX Designer & Lead Developer",
    images: ["/screenshots/cgv10-portal.jpg"],
    liveUrl: "https://portalwargacgv.id",
    githubUrl: "https://github.com/ahlul-firdaus/cgv10",
    longDescription: "CGV10 Portal Warga is the official digital information system for the residents of Cipta Greenville RT 010 / RW 021. The portal eliminates communication fragmentation by unifying neighborhood announcements, pengurus committee contacts, monthly Kas RT financial balances, emergency contacts, and PALUGADA (the resident business marketplace) into one accessible, mobile-first web experience.",
    keyDeliverables: [
      "Live responsive community information portal at portalwargacgv.id",
      "Official RT announcement & community event publishing stream",
      "Transparent monthly Kas RT financial balance & disbursement summary",
      "Pengurus RT 010 directory with direct WhatsApp coordination links",
      "PALUGADA: Local resident UMKM marketplace for food, goods, and services",
      "Emergency & neighborhood public utility contact directory",
      "Mobile-optimized interface ensuring instant access without app store downloads"
    ],
    keyDecisions: [
      "Designed as a lightweight, mobile-first web application so residents can open it instantly from WhatsApp without requiring native app installations.",
      "Built PALUGADA as a core feature to stimulate the local neighborhood micro-economy and support resident-owned businesses.",
      "Implemented visual, easy-to-read financial summary cards to foster high trust and accountability between pengurus and residents."
    ],
    outcome: "Successfully deployed and live at portalwargacgv.id, serving as the official digital reference point for RT 010/RW 021 residents, boosting community engagement and financial transparency."
  },
  {
    id: "masjid-al-ikhlas",
    name: "Masjid Al Ikhlas Digital Presence",
    category: "Community & Philanthropy",
    oneLiner: "Responsive public information hub, real-time Batam prayer schedule sync, and transparent infaq reporting for Masjid Al Ikhlas.",
    problem: "Mosque activities, daily prayer timetables, Friday bulletins, and donation transparency reports were traditionally limited to physical noticeboards and sporadic messaging group forwards.",
    challenge: "Delivering an accessible, respectful digital experience that accurately syncs Batam prayer schedules, provides real-time prayer countdowns, and displays transparent weekly Infaq/Sedekah accounting for the congregation.",
    solution: "Developed a modern, responsive digital portal featuring accurate Batam prayer schedules, a live countdown to the next prayer, Kajian event calendars, digital donation guides with QRIS, and transparent weekly financial reports.",
    status: "Live & Deployed",
    statusBadge: "Live Project",
    context: "Public information and transparency hub serving jamaah and the Cipta Greenville mosque community.",
    techStack: ["Next.js", "HTML5", "Tailwind CSS", "JavaScript", "SVG Design Assets", "Vercel"],
    duration: "Live Community Project",
    role: "Digital Experience Strategist, UI/UX Designer & Front-End Developer",
    images: ["/screenshots/alikhlas-hub.jpg"],
    liveUrl: "https://alikhlascgv.vercel.app/",
    githubUrl: "https://github.com/ahlul-firdaus/alikhlas-cgv-digital-ecosystem",
    longDescription: "Masjid Al Ikhlas Digital Presence is the centralized online portal for Masjid Al Ikhlas Cipta Greenville. Built to serve jamaah and the wider community, the platform provides real-time Batam prayer times, countdown timers for upcoming prayers, a schedule of Kajian and religious programs, transparent financial audit summaries, and official digital donation (Infaq/Sedekah) channels.",
    keyDeliverables: [
      "Live mosque portal deployed at alikhlascgv.vercel.app",
      "Automated Batam prayer time schedule with live countdown timer",
      "Kajian, Tarawih, and community program calendar",
      "Transparent weekly Infaq and Sedekah financial balance showcase",
      "Digital donation guide with QRIS and verified bank account information",
      "Mosque location and committee contact directory",
      "Culturally respectful visual identity featuring deep Islamic green and warm gold accents"
    ],
    keyDecisions: [
      "Prioritized a mobile-friendly prayer time countdown widget so jamaah can quickly verify the remaining time until the next prayer.",
      "Adopted an open-book financial reporting layout to build deep donor trust and community transparency.",
      "Optimized assets and static rendering for near-instant loading even on weak mobile connections."
    ],
    outcome: "Live and actively serving the congregation at alikhlascgv.vercel.app, improving community participation in mosque programs and streamlining digital donation collections."
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
