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
    title: "OOI System Architecture Blueprint",
    category: "Blueprint",
    filename: "ooi_architecture_v2.1.yaml",
    description: "Multi-service infrastructure layout mapping supply chain APIs, transaction escrow, and document pipelines.",
    language: "yaml",
    content: `services:
  supplier-gateway:
    image: ooi/supplier-portal:latest
    environment:
      - DATABASE_URL=postgresql://db-replica.ooi.internal:5432/supplier
      - REDIS_CACHE=redis://redis-cluster.ooi.internal:6379
    ports:
      - "4000:4000"
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '1.0'
          memory: 2Gi

  document-vault:
    image: ooi/compliance-vault:latest
    description: "Processes custom clearance documents automatically"
    volumes:
      - trade-docs:/var/lib/ooi/vault
    depends_on:
      - supplier-gateway

  payment-escrow-bridge:
    image: ooi/escrow-bridge:latest
    security_context:
      read_only_root_filesystem: true
    secrets:
      - STRIPE_ESCROW_SIGNING_KEY
      - INDONESIAN_CUSTOMS_API_CERT

volumes:
  trade-docs:
    driver: aws-efs
    driver_opts:
      performanceMode: maxIO`
  },
  {
    id: "cgv10-db-schema",
    title: "CGV10 Supabase Database Schema",
    category: "Database Schema",
    filename: "cgv10_portal_schema.sql",
    description: "Relational structure detailing household tracking, resident authentication, and ledger associations.",
    language: "sql",
    content: `-- Neighborhood Core Schema
CREATE TABLE households (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    block_number VARCHAR(10) NOT NULL,
    house_number VARCHAR(10) NOT NULL,
    resident_count INT DEFAULT 1,
    outstanding_dues NUMERIC(12,2) DEFAULT 0.00,
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
    title: "System Orchestrator Prompt",
    category: "Prompt",
    filename: "llm_systems_orchestrator.txt",
    description: "Custom context-scoping prompt used to build structured JSON payloads from raw shipping broker emails.",
    language: "markdown",
    content: `# SYSTEM PROMPT: SHIPPING LEDGER INGESTION
You are an expert logistics coordinator and data structure extraction engine.
Your goal is to parse raw communication logs (emails, Slack messages, PDFs) from international shipping brokers and extract cargo milestones.

## Output JSON Schema:
{
  "trackingNumber": "String (e.g. OOI-ID-XXXX)",
  "containerId": "String (e.g. MSKUXXXXXXX)",
  "vesselName": "String",
  "portOfDeparture": "String (IDJKT or comparable UN/LOCODE)",
  "portOfArrival": "String",
  "eta": "ISO-8601 Date",
  "customsStatus": "UNRELEASED | EXAMINING | RELEASED | CLEAR_ERROR",
  "anomaliesDetected": "String or null"
}

## Rule-sets:
1. Do not assume or guess any dates. If ETA is written as 'next Tuesday', compute it relative to the email timestamp [{{EMAIL_TIMESTAMP}}].
2. Identify customs delays: If key-phrases like 'retention', 'quarantine', or 'verification audit' are present, flag "customsStatus" as "EXAMINING".`
  },
  {
    id: "launch-checklist",
    title: "Export Platform Launch Runbook",
    category: "Launch Checklist",
    filename: "runbook_production_launch.md",
    description: "Production launch operations roadmap detailing critical checks before open transaction processing.",
    language: "markdown",
    content: `# OOI Production Launch Checklist
Critical checklist for migrating OOI from staging-sandbox to direct production live-traffic.

## [x] Layer 1: Infrastructure Security
- [x] Configure SSL/TLS parameters to restrict cipher suites to TLS 1.3
- [x] Validate AWS CloudFront Web Application Firewall (WAF) rule sets
- [x] Run penetration script scanning for exposed postgres credentials on container ports

## [ ] Layer 2: External Integrations (Launch Blockers)
- [ ] Toggle Stripe API keys from \`test_mode\` to \`live_mode\`
- [ ] Verify Webhook endpoint security verification hashes
- [ ] Complete live-payout tests with the Indonesian Customs Bank gateway ($1 transaction check)

## [ ] Layer 3: Support Readiness
- [ ] Initialize intercom chat system triggers for support operators
- [ ] Sync database emergency read-replica failovers`
  }
];

export function getArtifactById(id: string): Artifact | undefined {
  return artifacts.find((a) => a.id === id);
}

export function getAllArtifactIds(): string[] {
  return artifacts.map((a) => a.id);
}

