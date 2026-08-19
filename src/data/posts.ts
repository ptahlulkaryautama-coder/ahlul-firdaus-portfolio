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
    slug: "b2b-escrow-architecture-indonesian-exports",
    title: "Architecting Escrow-Secured B2B Trade Flows for Indonesian Exporters",
    excerpt:
      "How we built a trustless transactional engine bridging local commodity producers in Sumatra and Java with global bulk buyers in Europe and Asia.",
    date: "August 2024",
    readTime: "6 min read",
    category: "Architecture & Fintech",
    author: {
      name: "Ahlul Firdaus",
      role: "Systems Architect",
      avatar: "/logo/af-monogram-alternate.png",
    },
    relatedProjectId: "ooi",
    content: `
## The Cross-Border Trust Deficit

When an agricultural producer in Riau or South Sumatra exports 500 metric tons of crude palm oil or coffee beans to a bulk buyer in Rotterdam, the central bottleneck isn't shipping logistics — **it's transaction trust**.

The buyer refuses to wire 100% upfront due to fraud risks and non-conformity concerns. The local producer cannot afford to ship freight without verified payment guarantees.

Traditional Letters of Credit (LCs) from international commercial banks take weeks to process, incur heavy banking surcharges (2.5–4%), and require manual paper document handoffs.

---

## The System Architecture

To solve this for **Origin Of Indonesia (OOI)**, we engineered a digital Escrow and Smart Verification Pipeline with four distinct stages:

\`\`\`
[ Buyer Deposit ] ---> ( Escrow Vault ) ---> [ Customs Verification ] ---> [ Freight Dispatch ] ---> [ Vault Release ]
\`\`\`

### 1. Multi-Currency Vault Deposit
Buyers fund their order into a multi-currency escrow account backed by tier-1 custodian banking partners. The funds are locked in a read-only vault state that neither party can unilaterally withdraw.

### 2. Automated Bill of Lading (BL) & Certificate of Origin (CoO) Ingestion
Our API ingest engine automatically cross-references uploaded shipping manifests against Indonesian Customs (Bea Cukai) clearing databases and maritime container tracking APIs.

### 3. Triggered Milestone Payouts
Instead of a single lump-sum payout, the escrow contract unlocks funds in verified operational phases:
- **30% Release**: Upon verified customs clearance and container vessel loading (Bill of Lading issuance).
- **60% Release**: Upon vessel departure and satellite GPS tracking confirmation past international maritime boundaries.
- **10% Final Settlement**: Upon buyer receiving inspection sign-off at destination port.

---

## Key Engineering Takeaways

1. **Idempotent Webhook Processing**: Shipping APIs often re-send status events. Ensuring strict idempotency key checks prevented double-triggering escrow release events.
2. **State Machine Integrity**: We modeled the trade state using a strict finite state machine (FSM), ensuring illegal state transitions (e.g. payout before vessel loading) are mathematically impossible.
3. **Auditable Audit Trails**: Every document upload and API verification event produces an immutable cryptographic hash stored for compliance audits.
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
