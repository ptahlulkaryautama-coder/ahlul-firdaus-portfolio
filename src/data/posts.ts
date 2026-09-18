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
    title: "Bridging the Regional Divide: Designing Batam Hub Consolidation for Indonesian Food Brands",
    excerpt:
      "How multi-supplier consolidation at Batam FTZ enables regional Indonesian snack, coffee, and spice brands to reach global consumers and B2B buyers through unified export packaging and shipping optimization.",
    date: "August 2024",
    readTime: "5 min read",
    category: "Commerce & Supply Chain Architecture",
    author: {
      name: "Ahlul Firdaus",
      role: "Operational Systems Builder & Founder",
      avatar: "/logo/af-monogram-alternate.png",
    },
    relatedProjectId: "ooi",
    content: `
## The Fragmentation Problem in Regional Exports

Indonesia is home to thousands of quality food artisans and regional agricultural producers—from single-origin Gayo Arabica coffee in Aceh to artisan tempeh chips in Java and wild-harvested cashews in Bali.

However, international buyers and overseas consumers often face a logistical barrier: **supplier fragmentation**. Ordering products from four distinct regional producers can mean paying four separate international courier minimum dispatch fees, creating high shipping overhead and disjointed tracking.

---

## The Batam FTZ Consolidation Concept

To explore a practical solution for **Origin of Indonesia (OOI)**, we designed a unified commerce and hub consolidation model:

\`\`\`
[ Verified Regional Brands ] ---> [ OOI Curated Catalog ] ---> [ Batam FTZ Hub ] ---> [ Single Consolidated Dispatch ]
\`\`\`

### 1. Unified Catalog & Verification Layer
Regional producers are presented with standardized origin details, certification attributes (BPOM, Halal, HACCP where applicable), and structured packaging metadata, transforming disconnected product offerings into a clear digital catalog.

### 2. Smart Cart & Hub Consolidation
When a buyer selects products from multiple regional brands, the system models order consolidation through the **Batam Free Trade Zone (FTZ) Consolidation Hub**. Batam's strategic maritime and airport proximity allows efficient cross-docking and unified export packaging.

### 3. Dual-Channel Buyer Journeys
- **Retail Discovery**: Direct consumers and specialty gift shoppers order curated boxes with estimated consolidation savings.
- **B2B Sourcing**: Wholesale importers and specialty retailers request structured sample kits, specification sheets, and volume pricing.

---

## Key Operational & Technical Takeaways

1. **Multi-Supplier Freight Modeling**: Combining multiple product lines into one export carton significantly reduces international shipping overhead compared to separate individual dispatches.
2. **Standardized Compliance Metadata**: Embedding origin, certification, and export-readiness attributes directly into product cards accelerates commercial evaluation for overseas buyers.
3. **Decoupled Architecture**: Running a lightweight Next.js storefront paired with flexible inquiry routing provides instant global responsiveness.
`,
  },
  {
    slug: "from-whatsapp-chaos-to-qr-gate-control-cgv10",
    title: "From Informal Coordination to Structured Community Systems: Designing Portal Warga CGV",
    excerpt:
      "A deep dive into replacing scattered chat messages and manual record-keeping with an integrated residential community platform.",
    date: "July 2024",
    readTime: "5 min read",
    category: "Community & Systems",
    author: {
      name: "Ahlul Firdaus",
      role: "AI-Assisted Product Builder",
      avatar: "/logo/af-monogram-alternate.png",
    },
    relatedProjectId: "cgv10",
    content: `
## The Challenge of Informal Neighborhood Coordination

In residential communities (Perumahan), neighborhood administration often relies on fragmented tools:
- **Monthly Dues (Iuran Warga)** tracked across manual spreadsheets by volunteer treasurers.
- **Security Checkpoints** managed via physical paper logbooks.
- **Community Announcements** lost in fast-moving chat groups.

This fragmentation creates communication gaps, delayed reporting, and difficulty in maintaining long-term financial transparency.

---

## Structuring the CGV10 Ecosystem

We designed **Portal Warga CGV** as an integrated platform with distinct access levels for Residents, Public Visitors, and Community Administrators.

### Key Functional Pillars

1. **Structured Community Finance**: Clear publication of community balance summaries, monthly billing statuses, and transparent expense categories accessible to authenticated residents.
2. **Environmental & Service Requests**: Standardized submission forms allowing residents to log maintenance needs, environmental reports, and administrative requests with photo attachments.
3. **Local Resident Business Directory (PALUGADA)**: Dedicated space for resident-owned micro-businesses and local services.

---

## Operational Lessons

- **Role Separation**: Separating public notices from authenticated resident dashboards protects community privacy while keeping official news accessible.
- **Workflow Over Complexity**: Providing simple, dependable reporting forms proved more effective than forcing complex enterprise workflows on volunteer administrators.
`,
  },
  {
    slug: "designing-high-density-saas-dashboards-oneecos",
    title: "Designing High-Density Dashboards: Lessons from OneEcos",
    excerpt:
      "Why high-density operational cockpits require a different visual grammar than consumer apps — grid discipline, micro-sparklines, and contextual visual hierarchy.",
    date: "June 2024",
    readTime: "4 min read",
    category: "UI/UX & Product Strategy",
    author: {
      name: "Ahlul Firdaus",
      role: "Product Builder & UI/UX Designer",
      avatar: "/logo/af-monogram-alternate.png",
    },
    relatedProjectId: "oneecos",
    content: `
## Data Density vs. Visual Fatigue

Consumer apps thrive on generous whitespace and minimal text. But when building an **Operations Workspace** for founders and operators who track orders, quotations, fulfillment, and shipments daily — overly sparse layouts can slow down critical tasks.

Operators need rich contextual information at a glance without feeling overwhelmed by visual noise.

---

## 4 Principles of Operational Workspace Design

### 1. Strict Grid Alignment & Micro-Margins
We used a disciplined layout grid with compact padding inside data modules, maximizing visible context on standard desktop monitors.

### 2. Glanceable Status Indicators
Instead of lengthy prose, we use ambient status indicators:
- **Status Pills**: Discrete color-coded tags for quick scanability.
- **Contextual Next Actions**: Highlighting what needs attention today without blocking other workflows.

### 3. Monospace Typography for Quantitative Data
We paired clean sans-serif headers with monospace fonts for numerical values, IDs, timestamps, and currency amounts, keeping tables vertically aligned.

### 4. Grounded Dark Theme Palettes
To reduce eye strain during extended work sessions, we used deep dark backgrounds with warm cream and muted gold accents.
`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
