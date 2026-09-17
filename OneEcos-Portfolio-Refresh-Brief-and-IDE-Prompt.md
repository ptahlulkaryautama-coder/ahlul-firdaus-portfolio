# OneEcos Portfolio Refresh Brief and IDE Prompt

**Project:** OneEcos Business Operating System  
**Portfolio route:** `/work/oneecos`  
**Live product reference:** `https://oneecos.vercel.app/oneecos`  
**Portfolio:** `https://www.ahlulfirdaus.com`  
**Prepared:** September 2026

---

## 1. Purpose

Refresh the OneEcos project card and case study so they accurately represent the current live product.

The current case study communicates the correct broad idea—a connected Order-to-Cash system—but contains outdated visuals, reused labels from unrelated projects, and enterprise-scale figures that are not supported by production evidence.

The refreshed case study must present OneEcos as a credible founder-led operational prototype for small B2B trading and export teams. It should demonstrate product thinking, workflow design, operational experience, interface design, and AI-assisted implementation without implying proven enterprise adoption or financial outcomes.

---

## 2. Approved Positioning

### Project title

**OneEcos — B2B Trade Operations System**

### Project classification

**Founder-Led Product — Operational Prototype**

### Category/domain

**B2B Trade, Export Operations & Business Workflow**

### Primary audiences

- Small trading and export businesses
- Founder-led commercial teams
- Sales operations staff
- Procurement and fulfillment teams
- Logistics and documentation coordinators
- Finance and collection personnel

### Primary proposition

**From scattered records to one connected trade workflow.**

### Supporting product statement

**People Execute. OneEcos Connects. Business Scales.**

### Approved short description

OneEcos is a connected operational workspace that helps small trading and export teams organize buyers, quotations, orders, fulfillment, shipments, documents, invoices, and follow-ups through one structured workflow.

### Approved role

**Product Strategy, Operational Workflow Design, UI/UX & AI-Assisted Development**

Do not describe the creator as an enterprise software engineer unless that wording is already consistently supported elsewhere in the portfolio. The case study should emphasize the combination of operational experience, systems thinking, product structure, and practical implementation.

---

## 3. Approved Assets

### Primary thumbnail

Expected filename:

`oneecos-portfolio-thumbnail-v2.png`

This is an approved final asset. Do not regenerate, reinterpret, add text over it, or redesign its composition.

Use it for:

1. The OneEcos card in Selected Work.
2. The main case-study hero or System Preview.

Implementation requirements:

- Preserve its original 16:9 composition.
- Keep the PNG as the master asset.
- Convert or optimize to WebP only if supported by the existing asset pipeline.
- Use the portfolio's existing image component and loading strategy.
- Provide explicit intrinsic dimensions or a stable aspect-ratio container.
- Prevent stretching and layout shift.
- Avoid destructive cropping.
- Use `object-fit: cover` only where the existing card layout requires it.
- Use a safe central focal position so the official logo, headline, workflow, and laptop remain visible.
- Do not add another text overlay in the component.
- Use descriptive alt text:

`OneEcos connected B2B trade workflow and export operations dashboard`

### Official logo assets

- `oneecos-mark.png` — transparent symbol mark
- `oneecos-wordmark.png` — transparent official wordmark
- `OneEcos.png` — brand presentation/reference board

Rules:

- Preserve logo spelling, shape, proportions, and blue-cyan-teal-violet gradient.
- Do not recreate or approximate the logo.
- Do not place it on low-contrast backgrounds.
- Prefer the transparent mark and wordmark in UI implementation.
- Treat the brand board as reference material, not as the primary portfolio thumbnail.

### Existing screenshots

Prefer screenshots from the current live OneEcos application. Do not use a generic dashboard or fabricate screens that are presented as real product interfaces.

Recommended screenshot set:

1. Executive Command Center / Daily Brief
2. Simple Daily Workspace
3. Buyer or customer records
4. Quotation and sales-order workflow
5. Shipment and document control
6. Financial tracking or invoice control
7. Readiness Gate / product roadmap view

If a screenshot contains names, email addresses, phone numbers, addresses, account details, payment details, or private commercial information, redact or replace them before publication. Sample organizations already embedded in the prototype must be described as sample data.

---

## 4. Current Product Scope

The live prototype currently communicates the following modules and workflows:

- Daily operational brief
- Current Work context
- Guided next actions
- Buyer/customer records
- RFQ inbox
- Product records
- Quotation workflow
- Sales-order control
- Procurement
- Work orders and operational fulfillment
- Shipment and dispatch tracking
- Export-document previews
- Invoice and collection monitoring
- KPI tracking
- Financial month records
- Reports
- Attention triggers and exception alerts
- Connected-record navigation
- Simple Daily Workspace for operators
- Executive Command Center for founders or management
- Workspace backup/export
- Phase/readiness tracking
- Planned backend migration and automation roadmap

The product should not be presented as a deployed enterprise ERP or a replacement for regulated accounting, customs, banking, or compliance systems.

---

## 5. Core Workflow

Replace inflated or overly complex architecture language with the following product flow:

`Buyer → Product → Quote → Sales Order → Work Order → Shipment → Documents → Invoice → Collection`

### Workflow explanation

1. **Buyer** — Record the commercial account, contacts, market, and relevant terms.
2. **Product** — Maintain SKU, MOQ, carton, weight, CBM, lead-time, and reference pricing information.
3. **Quote** — Prepare structured offer lines using product records and commercial assumptions.
4. **Sales Order** — Confirm the accepted commercial record and link downstream work.
5. **Work Order** — Coordinate product or material readiness for fulfillment.
6. **Shipment** — Track dispatch status, route, container information, ETD, and ETA.
7. **Documents** — Prepare or preview relevant trade-document records.
8. **Invoice** — Record billing milestones and payment status.
9. **Collection** — Highlight due or overdue follow-up actions.

This flow is a product/workflow model. Do not claim that all steps are fully automated, connected to external APIs, or used in live commercial transactions unless project evidence supports it.

---

## 6. Two Workspace Modes

### Simple Daily Workspace

Designed for operators who need an understandable sequence of work rather than a dense executive dashboard.

Communicate:

- Recommended next action
- Workflow checklist
- Current records
- Open tasks
- Readiness gates
- Reference material

### Executive Command Center

Designed to provide founders or operational leaders with a concise overview of workflow health and exceptions.

Communicate:

- Daily Brief
- Current Work
- Attention triggers
- Pipeline and operational status
- Shipment, invoice, material, and follow-up exceptions
- Connected records
- Decision-support prompts

All visible figures must be labeled as sample workspace data unless supported by actual project records.

---

## 7. Approved Case-Study Narrative

### Hero copy

**Eyebrow:** B2B TRADE OPERATIONS & BUSINESS WORKFLOW

**Title:** OneEcos — B2B Trade Operations System

**Description:**

One connected workspace for managing buyers, quotations, orders, fulfillment, shipments, export documents, invoices, and commercial follow-ups.

**Status label:** Founder-Led Product — Operational Prototype

### Project background

Small trading and export teams often coordinate work across spreadsheets, messaging apps, manually prepared documents, and individual follow-up lists. The information may exist, but the operational context is fragmented: a buyer record is separated from its quotation, the accepted quote is separated from fulfillment, and shipment or payment follow-ups depend on individual memory.

OneEcos explores how these records can be organized into a connected, understandable workflow without forcing a small team into an oversized enterprise platform.

### The operational challenge

The core challenge was not simply to create another dashboard. It was to design a shared operational structure that connects commercial intent with execution: who the buyer is, what was quoted, what was confirmed, what must be fulfilled, what has shipped, which documents are required, and what remains unpaid.

### Product response

OneEcos organizes those activities around linked business records and guided next actions. The interface provides two levels of detail: a simple daily workspace for operators and a higher-density command center for founders or managers monitoring exceptions and workflow health.

### Key product decisions

1. **One connected record chain** — Buyers, products, quotations, orders, work orders, shipments, documents, and invoices are treated as related operational records.
2. **Action before analytics** — The product prioritizes the next required action instead of displaying metrics without operational context.
3. **Manual-first foundation** — Core workflows are modeled and tested before introducing external integrations or automation.
4. **Two information densities** — Operators receive a guided workflow, while managers receive exception-focused oversight.
5. **Visible readiness** — The prototype identifies what is functional, what remains manual, and what is planned for later phases.

### Current prototype capabilities

- Connected trade-record workflow
- Daily Brief and Current Work context
- Guided next actions
- Buyer, product, quote, order, shipment, document, and invoice records
- Exception alerts based on prototype workspace data
- Export-document previews
- CBM and container-loading reference calculations
- Financial and KPI reference views
- Workspace backup/export
- Readiness and roadmap indicators

### Outcome

The current result is an operational prototype that demonstrates how fragmented trade activities can be translated into one coherent workspace. It validates information architecture, workflow relationships, interface hierarchy, and the transition from daily operator actions to management oversight.

It does not yet claim verified enterprise adoption, measured operational savings, completed external integrations, or production transaction volume.

### Next-stage roadmap

- Supabase/PostgreSQL persistence
- Authentication and role-based access
- Multi-user activity history
- Controlled document templates
- Notification and follow-up automation
- External shipping, payment, accounting, or communication integrations where justified
- Production security and permissions audit
- Verified user testing
- Reliable audit trail and reporting

Roadmap items must be clearly labeled as planned, concept, or future phase.

---

## 8. Claims Audit

Remove, soften, or relabel unsupported claims.

| Existing or risky claim | Required treatment |
| --- | --- |
| 1,246 active orders | Remove or replace with clearly labeled sample workspace data |
| 982 shipments | Remove or label as illustrative/demo only |
| USD 8.42M collected | Remove |
| 96.4% on-time | Remove unless supported by real operational records |
| Real-time enterprise metrics | Use “sample operational telemetry” |
| AI-powered insights | Use “rule-based decision support prototype” unless a real AI service is implemented |
| Automated credit check | Label as planned validation workflow if not implemented |
| Full compliance | Replace with “compliance-supporting document structure” |
| Cuts handoffs from 18+ to 5 | Reframe as a design objective, not a measured result |
| Reduces duplicate entries from 8+ to 1 | Reframe as an intended workflow principle |
| Live Order-to-Cash engine | Use “interactive operational prototype” |
| Automated workflow triggers | Use “prototype alerts and guided actions” where applicable |
| REST/API integration | State only integrations demonstrably implemented |
| Business scales without added headcount | Reframe as a long-term product hypothesis |

### Required disclosure language

Use a short note near simulations or prototype data:

> Interface data shown in this case study is sample workspace data used to demonstrate workflow behavior. It does not represent audited customer activity, transaction volume, or financial performance.

---

## 9. Architecture Visualizer Requirements

The architecture visualizer may remain if it is useful and stable, but it must be rewritten around the real product model.

Remove unrelated labels such as:

- Role-Based Civic Architecture
- Industrial ESG Audit
- Local-First FinTech OS
- Any reused community, fintech, or ESG terminology unrelated to OneEcos

Approved architecture groups:

1. **Commercial Records** — Buyers, products, RFQs, quotations, sales orders
2. **Operational Execution** — Procurement, work orders, material readiness, fulfillment
3. **Trade & Logistics** — Shipments, routing, container/CBM references, documents
4. **Financial Control** — Invoices, payment status, collection follow-ups, monthly records
5. **Decision Support** — Daily Brief, Current Work, exception alerts, KPIs, reports
6. **Platform Foundation** — Persistence, authentication, roles, audit history, backups

If the component currently displays unsupported metrics, replace them with functional descriptions or explicitly labeled sample data.

---

## 10. Interactive Demo Requirements

The existing interactive cockpit can be retained only after the following changes:

- Remove enterprise-scale numbers and unsupported performance improvements.
- Label all records and figures as sample/demo data.
- Reflect the current navigation and product terminology.
- Prefer interaction around a single sample order moving through the workflow.
- Show linked records and recommended next actions.
- Do not simulate actual payment processing, customs clearance, bank confirmation, or external shipment tracking unless those capabilities are implemented.
- Respect keyboard navigation, focus visibility, contrast, and reduced-motion preferences.

If it is unsafe or time-consuming to correct the simulation, replace it with a concise annotated product gallery rather than keeping misleading content.

---

## 11. Visual Direction

- Preserve the portfolio's overall architecture, typography, navigation, footer, and accent controls.
- Use the OneEcos palette selectively: midnight navy, electric blue, cyan, teal, and restrained violet.
- Do not turn the entire portfolio page into an unrelated design system.
- Prefer real interface screenshots over decorative dashboard illustrations.
- Keep high-density screens readable through cropping, captions, zoom/lightbox behavior, or focused callouts.
- Maintain sufficient contrast for body text and metadata.
- Avoid tiny typography inside screenshots where no enlargement mechanism exists.
- Do not use decorative world maps or logistics visuals as proof of actual global operations.

---

## 12. SEO and Accessibility Copy

### Suggested page title

`OneEcos B2B Trade Operations System | Ahlul Firdaus`

### Suggested meta description

`Case study of OneEcos, an operational prototype connecting buyers, quotations, orders, fulfillment, shipments, export documents, invoices, and follow-ups.`

### Primary thumbnail alt text

`OneEcos connected B2B trade workflow and export operations dashboard`

### Screenshot alt-text pattern

Describe the actual visible workflow, for example:

`OneEcos Executive Command Center showing a daily brief, current work, and operational attention alerts`

Avoid alt text such as “image”, “dashboard screenshot”, or keyword-stuffed descriptions.

---

## 13. IDE Execution Prompt

Copy the following prompt into the IDE after placing this brief and the approved assets in the repository.

```text
You are updating an existing portfolio codebase. Work directly in the repository and preserve its established architecture, component patterns, typography, navigation, footer, theme/accent controls, and overall portfolio identity.

Task

Refresh the OneEcos case study at /work/oneecos so it accurately represents the current live product at https://oneecos.vercel.app/oneecos.

Read the full brief in OneEcos-Portfolio-Refresh-Brief-and-IDE-Prompt.md and treat it as the content and acceptance-criteria source of truth.

The current portfolio case study contains outdated visuals, reused labels from unrelated projects, unsupported enterprise metrics, and claims that are stronger than the evidence available from the current operational prototype.

Supplied assets

An approved final OneEcos thumbnail has already been provided:

oneecos-portfolio-thumbnail-v2.png

Official logo assets:

oneecos-mark.png
oneecos-wordmark.png
OneEcos.png

Treat the thumbnail as an approved final asset. Do not generate a replacement or reinterpret its design. Preserve the official logo assets exactly.

Required workflow

1. Inspect the repository structure and identify:
   - the /work/oneecos page;
   - OneEcos project data/content files;
   - Selected Work card and thumbnail configuration;
   - existing OneEcos screenshots/assets;
   - reusable case-study, gallery, architecture, and interactive-demo components.

2. Inspect the current live OneEcos interface if internet access is available. If unavailable, use this brief and supplied approved assets. Do not invent unrelated UI.

3. Before editing, summarize the exact files you intend to change and the reason for each.

4. Replace the OneEcos Selected Work thumbnail and main case-study hero/System Preview with the approved thumbnail.

5. Rewrite project metadata and narrative using the approved copy in this brief.

6. Replace unrelated architecture labels and inflated enterprise figures with the approved B2B trade workflow and architecture groups.

7. Update or replace the interactive demo so that it uses clearly labeled sample data and accurately represents the current operational prototype.

8. Audit every quantitative, financial, integration, automation, AI, compliance, and outcome claim. Remove unsupported claims or mark them as sample data, design objectives, concepts, or roadmap items.

9. Preserve the rest of the portfolio and avoid unrelated refactors.

10. Run the repository's existing lint, type-check, test, and production-build commands.

11. Inspect the result at desktop and mobile widths. Fix overflow, cropping, contrast, layout shift, focus states, and unreadable typography.

Thumbnail implementation

- Source filename: oneecos-portfolio-thumbnail-v2.png
- Preserve its 16:9 composition.
- Do not redesign, regenerate, destructively crop, or add text over it.
- Keep PNG as the master asset.
- Optimize to WebP only if supported by the existing pipeline.
- Use the existing image component and loading strategy.
- Provide intrinsic dimensions or a stable aspect-ratio wrapper.
- Prevent stretching and cumulative layout shift.
- Keep the official OneEcos logo, headline, workflow, and laptop visible.
- Use alt text: OneEcos connected B2B trade workflow and export operations dashboard
- Apply it to both the OneEcos Selected Work card and the main case-study hero/System Preview.

Approved metadata

- Title: OneEcos — B2B Trade Operations System
- Classification: Founder-Led Product — Operational Prototype
- Domain: B2B Trade, Export Operations & Business Workflow
- Role: Product Strategy, Operational Workflow Design, UI/UX & AI-Assisted Development
- Primary proposition: From scattered records to one connected trade workflow.
- Supporting statement: People Execute. OneEcos Connects. Business Scales.

Core workflow

Buyer → Product → Quote → Sales Order → Work Order → Shipment → Documents → Invoice → Collection

Content and claims rules

- Treat visible prototype records and figures as sample workspace data.
- Do not claim verified customers, transaction volume, collected revenue, real shipment volume, measured savings, measured handoff reduction, compliance, external integrations, or production automation without evidence.
- Replace “AI-powered insights” with “rule-based decision support prototype” unless a real AI service is demonstrably implemented.
- Replace “real-time enterprise metrics” with “sample operational telemetry”.
- Replace “live Order-to-Cash engine” with “interactive operational prototype”.
- Treat backend migration, role-based authentication, notifications, external connectors, and production audit trails as roadmap items unless already implemented.
- Add the approved sample-data disclosure near simulations or prototype metrics.

Engineering constraints

- Follow the existing framework and design system; do not add a new UI framework.
- Prefer existing components and dependencies.
- Keep TypeScript strict and avoid any unless already justified by the codebase.
- Optimize images and prevent layout shift.
- Maintain semantic headings, useful alt text, keyboard accessibility, focus states, and color contrast.
- Respect prefers-reduced-motion.
- Do not change routes or shared navigation behavior.
- Do not expose secrets or modify environment files.
- Do not commit or push unless explicitly requested.

Final report

Return:

1. A concise summary of visual and narrative changes.
2. The exact files changed.
3. Claims or capabilities that were removed, softened, or relabeled.
4. Lint, type-check, test, and build results.
5. Remaining items requiring real business evidence, integrations, user testing, or approved product assets.
```

---

## 14. Acceptance Criteria

The refresh is complete when:

- The OneEcos Selected Work card uses the approved thumbnail.
- The case-study hero/System Preview uses the approved thumbnail.
- The page represents the current live product rather than a generic enterprise dashboard.
- Metadata uses the approved title, classification, domain, and role.
- The workflow matches the current B2B trade operational model.
- Unrelated civic, ESG, and fintech labels are removed.
- Unsupported enterprise-scale metrics and financial figures are removed or clearly labeled as sample data.
- AI, automation, integrations, compliance, and roadmap capabilities are accurately qualified.
- The case study distinguishes current prototype capabilities from future development.
- Screenshots containing private information are redacted.
- Desktop and mobile layouts are readable and stable.
- Keyboard accessibility, reduced motion, contrast, headings, and alt text are preserved.
- Existing lint, type-check, tests, and production build pass, or any pre-existing failures are clearly documented.
- No unrelated routes, components, content, or environment files are modified.

---

## 15. Evidence Still Required for Stronger Claims

The following claims require real project or business evidence before publication:

- Number of active users or organizations
- Number and value of transactions
- Number of orders, shipments, invoices, or documents processed
- Measured reduction in handoffs or duplicate entries
- Measured time savings or productivity improvement
- Revenue, margin, cash collection, or on-time delivery performance
- Real customer names, feedback, or testimonials
- Live external API integrations
- Payment or banking connectivity
- Customs or regulatory compliance
- Production security certification
- Automated document validity
- AI model/service usage and evaluated output quality

Until evidence exists, describe these as sample data, design objectives, planned capabilities, or product hypotheses.

