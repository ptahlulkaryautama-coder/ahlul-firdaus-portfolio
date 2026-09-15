export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  relatedProjectId?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "smart-consolidation-indonesian-food-export-ooi",
    title: "Bridging the Archipelago Divide: Engineering Batam Hub Consolidation for Indonesian Food Brands",
    excerpt:
      "How multi-supplier consolidation at Batam FTZ enables regional Indonesian snack, coffee, and spice brands to reach global consumers and B2B buyers with up to 40% lower shipping overhead.",
    date: "August 2024",
    readTime: "5 min read",
    category: "Commerce & Supply Chain Architecture",
    author: {
      name: "Ahlul Firdaus",
      role: "Systems Architect & Founder",
      avatar: "/logo/af-monogram-alternate.png",
    },
    relatedProjectId: "ooi",
    content: `
## The Fragmentation Problem in Regional Exports

Indonesia is home to thousands of world-class food artisans and regional agricultural producers—from single-origin Gayo Arabica coffee in Aceh to artisan tempeh chips in Java and wild-harvested cashews in Bali.

However, international buyers and overseas consumers faced a massive logistical barrier: **supplier fragmentation**. Ordering products from four distinct regional producers meant paying four separate international courier minimum dispatch fees, creating prohibitive shipping costs and disjointed tracking.

---

## The Batam FTZ Consolidation Architecture

To solve this for **Origin of Indonesia (OOI)**, we designed a unified commerce and hub consolidation pipeline:

\`\`\`
[ Verified Regional Brands ] ---> [ OOI Curated Catalog ] ---> [ Batam FTZ Hub ] ---> [ Single Consolidated Dispatch ]
\`\`\`

### 1. Unified Catalog & Verification Layer
Regional producers are onboarded with standardized compliance checks (BPOM, Halal, HACCP) and unified product metadata, transforming disconnected product offerings into a filterable digital catalog.

### 2. Smart Cart & Hub Consolidation
When a buyer selects products from multiple regional brands, the system routes orders to the **Batam Free Trade Zone (FTZ) Consolidation Hub**. Batam's strategic maritime and airport proximity allows efficient cross-docking and unified export packaging.

### 3. Dual-Channel Buyer Journeys
- **Retail Discovery**: Direct consumers and specialty gift shoppers order curated boxes with automated consolidation savings.
- **B2B Sourcing**: Wholesale importers and specialty retailers request structured sample kits, specification sheets, and volume pricing.

---

## Key Operational & Technical Takeaways

1. **Multi-Supplier Freight Optimization**: Combining multiple product lines into one export carton cuts international shipping overhead by up to 40% compared to separate courier dispatches.
2. **Standardized Compliance Metadata**: Embedding origin, certification, and export-readiness attributes directly into product cards accelerates commercial evaluation for overseas buyers.
3. **Decoupled Architecture**: Running a lightweight Next.js storefront paired with flexible inquiry routing provides instant global responsiveness with zero server bloat.
`,
  },
  {
    slug: "from-whatsapp-chaos-to-qr-gate-control-cgv10",
    title: "From WhatsApp Chaos to QR Gate Control: Engineering CGV10 Portal Warga",
    excerpt:
      "A deep dive into replacing chaotic spreadsheet dues tracking and informal chat announcements with a multi-tenant residential governance system.",
    date: "July 2024",
    readTime: "5 min read",
    category: "Community & Systems",
    author: {
      name: "Ahlul Firdaus",
      role: "Full-Stack Engineer",
      avatar: "/logo/af-monogram-alternate.png",
    },
    relatedProjectId: "cgv10",
    content: `
## The Challenge of Informal Neighborhood Governance

In large residential communities across Indonesia (Perumahan), community management often relies on fragmented tools:
- **Monthly Dues (Iuran Warga)** managed via manual Excel spreadsheets by volunteer treasurers.
- **Security Checkpoints** managed by guards who manually write visitor license plates in physical logbooks.
- **Community Notices** lost in spammy WhatsApp group chats.

This leads to low collection rates (<60%), zero financial auditability, and security vulnerabilities at community gates.

---

## Building the CGV10 Ecosystem

We designed **CGV10 Portal Warga** as an integrated Progressive Web App (PWA) with distinct access levels for Residents, Security Guards, and Estate Administrators.

### Key Functional Pillars

1. **Automated Monthly Invoicing & Direct Payments**: Integrated automated billing runs on the 1st of every month. Residents receive instant push notifications with QRIS/Virtual Account payment links. Payment verification updates the public transparency ledger automatically.
2. **Offline-First Security Tablet Interface**: Security guards operate a simplified tablet interface that functions even during temporary internet disconnections. Guards scan temporary QR visitor passes pre-generated by residents.
3. **Emergency Alert Heartbeat**: A single-tap emergency button on resident smartphones sends instant location-aware alerts to guardhouse tablets and nearby neighbors.

---

## Results & Impact

- **Dues Collection**: Increased from 58% to **94% in the first two months**.
- **Check-in Speed**: Reduced visitor gate verification time from 90 seconds to **less than 6 seconds**.
- **Financial Auditability**: 100% of community disbursements are logged with digital receipt uploads accessible to all residents.
`,
  },
  {
    slug: "designing-high-density-saas-dashboards-oneecos",
    title: "Designing High-Density SaaS Dashboards: Lessons from OneEcos",
    excerpt:
      "Why high-density operational cockpits require a different visual grammar than consumer apps — grid discipline, micro-sparklines, and contextual visual hierarchy.",
    date: "June 2024",
    readTime: "4 min read",
    category: "UI/UX & Product Strategy",
    author: {
      name: "Ahlul Firdaus",
      role: "UI/UX Director",
      avatar: "/logo/af-monogram-alternate.png",
    },
    relatedProjectId: "oneecos",
    content: `
## Data Density vs. Visual Fatigue

Consumer apps thrive on whitespace, large card padding, and minimal text. But when building an **Operations Cockpit** for multi-channel business founders who manage dozens of inventory SKUs, sales webhooks, and ad metrics daily — sparse layouts fail.

Operators don't want to scroll through 10 pages to check their daily cash flow. They need high-density data clarity without cognitive overload.

---

## 4 Principles of High-Density Cockpit Design

### 1. Strict Grid Alignment & Micro-Margins
We used a strict 8px/4px layout grid with compact 12px padding inside data modules. Every pixel saved translates to more visible context on desktop monitors.

### 2. Glanceable Status Indicators over Text
Instead of spelling out status messages in prose, we use ambient status indicators:
- **Soft Glows**: Low-stock SKUs pulse with a subtle amber background blur instead of alarming red popups.
- **Inline Sparklines**: Micro trendlines embedded directly inside table cells reveal 30-day directional trends without requiring full chart views.

### 3. Monospace Typography for Quantitative Data
We paired clean sans-serif headers (*Geist Sans*) with high-contrast monospace fonts (*Geist Mono*) for numerical values, IDs, timestamps, and currency amounts. Monospace alignment keeps numbers vertically readable across tables.

### 4. Dynamic Dark Mode Palettes
To prevent eye strain during 10+ hour operator shifts, we used a deep charcoal background (\`#0E0A06\` / \`#0A0A0A\`) with muted gold (\`#C5A880\`) and emerald accents instead of harsh stark white text on pure black.
`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
