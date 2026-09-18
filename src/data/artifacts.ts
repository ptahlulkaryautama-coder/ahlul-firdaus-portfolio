export interface Artifact {
  id: string;
  title: string;
  category: "Blueprint" | "Prompt" | "Database Schema" | "Launch Checklist";
  filename: string;
  description: string;
  content: string;
  language: string;
}

export const artifacts: Artifact[] = [
  {
    id: "ooi-system-architecture",
    title: "OOI Product & Consolidation Blueprint (Conceptual)",
    category: "Blueprint",
    filename: "ooi_commerce_consolidation_conceptual.yaml",
    description: "Conceptual architecture blueprint mapping curated brand cataloging, dual retail/wholesale inquiry routing, and Batam FTZ consolidation pipelines.",
    language: "yaml",
    content: `# Conceptual Architecture Blueprint
# System: OOI — Origin of Indonesia Commerce & Consolidation
version: "1.0-conceptual"

services:
  catalog-frontend:
    description: "Next.js responsive storefront and curated product catalog"
    features:
      - origin-traceability
      - certification-badges
      - gift-kit-customizer
    routing:
      retail-funnel: "/shop -> cart -> checkout"
      wholesale-funnel: "/sourcing -> sample-request -> quotation-ticket"

  batam-consolidation-model:
    description: "Fulfillment coordination model at Batam FTZ"
    workflow:
      - receive-multi-supplier-manifest
      - verify-compliance-and-packaging
      - single-export-carton-assembly
      - dispatch-international-freight

  inquiry-routing-service:
    description: "Routes buyer sample inquiries and wholesale requests"
    channels:
      - email-notifications
      - structured-lead-logging`
  },
  {
    id: "cgv10-db-schema",
    title: "Portal Warga CGV Database Schema",
    category: "Database Schema",
    filename: "cgv10_portal_schema.sql",
    description: "Relational schema detailing household records, resident authentication, and community billing ledger associations.",
    language: "sql",
    content: `-- Neighborhood Community Core Schema
CREATE TABLE households (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    block_number VARCHAR(10) NOT NULL,
    house_number VARCHAR(10) NOT NULL,
    resident_count INT DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE residents (
    id UUID REFERENCES auth.users PRIMARY KEY,
    household_id UUID REFERENCES households(id) ON DELETE SET NULL,
    full_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20),
    role VARCHAR(20) DEFAULT 'resident' CHECK (role IN ('admin', 'resident', 'security', 'treasurer')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE billing_ledger (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    household_id UUID REFERENCES households(id) ON DELETE CASCADE,
    billing_period DATE NOT NULL,
    amount NUMERIC(12,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'unpaid' CHECK (status IN ('unpaid', 'pending_verification', 'paid')),
    payment_method VARCHAR(30),
    transaction_ref VARCHAR(100),
    verified_by UUID REFERENCES residents(id),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);`
  },
  {
    id: "ai-system-prompt",
    title: "Shipping Ledger Parser Prompt",
    category: "Prompt",
    filename: "llm_shipping_parser_prompt.txt",
    description: "Context-scoping prompt used in prototypes to extract structured JSON data from shipping notices and cargo manifests.",
    language: "markdown",
    content: `# SYSTEM PROMPT: SHIPPING RECORD EXTRACTION (PROTOTYPE)
You are an operational data structuring assistant.
Your task is to parse raw logistics notes, emails, or text snippets and extract structured shipment milestones.

## Expected JSON Schema:
{
  "referenceNumber": "String (e.g. OOI-EXP-XXXX)",
  "originPort": "String (UN/LOCODE or City Name)",
  "destinationPort": "String",
  "estimatedDeparture": "ISO-8601 Date or null",
  "estimatedArrival": "ISO-8601 Date or null",
  "cargoStatus": "PENDING | IN_TRANSIT | ARRIVED | EXAMINING",
  "notes": "String or null"
}

## Guidelines:
1. Do not assume or invent missing dates; leave as null if unstated.
2. Flag records requiring follow-up if document verification or customs review is pending.`
  },
  {
    id: "launch-checklist",
    title: "Web Project Pre-Launch Runbook",
    category: "Launch Checklist",
    filename: "runbook_prelaunch_checklist.md",
    description: "Standard pre-launch verification checklist for responsive web applications, form validations, and deployment hygiene.",
    language: "markdown",
    content: `# Web Application Pre-Launch Checklist
Quality and operational check-gates before opening public access.

## [ ] Layer 1: Usability & Responsiveness
- [ ] Test mobile navigation, touch targets, and viewport scaling (320px to 1440px)
- [ ] Verify keyboard accessibility, focus rings, and screen-reader headings
- [ ] Verify image aspect ratios, WebP formats, and loading performance

## [ ] Layer 2: Forms & Operational Routing
- [ ] Test contact and inquiry form submissions with valid and invalid inputs
- [ ] Confirm email notification delivery and error fallbacks
- [ ] Validate sample data disclosures on demonstration views

## [ ] Layer 3: SEO, Metadata & Handover
- [ ] Verify Open Graph cards, favicon, and canonical URLs
- [ ] Ensure proper robots.txt and sitemap.xml configuration
- [ ] Provide client handover documentation and credential access`
  }
];

export function getArtifactById(id: string): Artifact | undefined {
  return artifacts.find((a) => a.id === id);
}

export function getAllArtifactIds(): string[] {
  return artifacts.map((a) => a.id);
}
