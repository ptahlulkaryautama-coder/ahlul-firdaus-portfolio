# OOI Portfolio Refresh — Material & IDE Master Prompt

## Objective

Update the OOI case study at `/work/ooi` so it accurately represents the current live product at `https://ooindonesia.com`.

The live product is a premium Indonesian food marketplace and B2B sourcing platform. It combines curated products, certification visibility, retail ordering, wholesale inquiry, gift kits, and multi-supplier consolidation through Batam.

The case study must no longer present OOI primarily as a dark enterprise commodity-trading or escrow dashboard.

## Core Positioning

**Project name:** OOI — Origin of Indonesia  
**Category:** Commerce, Export & Sourcing Platform  
**Classification:** Founder-Led Product — Phase 1 Launch  
**Role:** Founder, Product Strategist, UI/UX Designer & Full-Stack Developer  
**Duration:** Ongoing Since 2026

### Short description

Founder-led commerce and sourcing platform connecting certified Indonesian food brands with international consumers, specialty retailers, importers, and distribution partners.

### One-line value proposition

Curated Indonesian products, consolidated in Batam, prepared for global buyers.

## Thumbnail Creative Direction

### Concept

Create a premium editorial-commerce thumbnail that visually matches the live OOI website.

### Required visual characteristics

- Warm cream background.
- Burgundy/deep red primary accent.
- Soft gold details.
- Elegant serif display typography paired with a clean sans-serif.
- Product-led composition featuring Indonesian snacks, cashews, coffee, and spices.
- Subtle Indonesia map or archipelago motif.
- Optional Batam/export cue, kept secondary.
- Website interface shown inside a clean browser or laptop mockup.
- Spacious, premium, trustworthy—not a crowded marketplace banner.

### Avoid

- Dark green enterprise dashboard.
- Escrow balance cards and trading tables.
- Crypto, fintech, banking, or blockchain imagery.
- Palm-oil commodity imagery as the main subject.
- Unrelated fictional screens.
- Excessive text or tiny unreadable UI.

### Thumbnail copy

**OOI — Origin of Indonesia**  
Premium Indonesian Products for Global Markets

Optional supporting labels:

- Curated & Verified
- Batam Consolidation Hub
- Global Shipping

### Recommended composition

- Left 42%: brand headline, short descriptor, and three trust labels.
- Right 58%: browser/laptop mockup using the current OOI homepage hero and products.
- Preserve safe margins so the image remains readable when cropped into a portfolio card.
- Keep the OOI logo visible but not oversized.

### Thumbnail format

- Use the existing thumbnail aspect ratio from the portfolio component.
- Export WebP for production and PNG as a master fallback.
- Aim for at least 1600 px width.
- Compress without visible text or product-image degradation.

## Replacement Case Study Copy

### Project Narrative & Background

OOI — Origin of Indonesia is a founder-led commerce and sourcing platform created to make premium Indonesian food products easier to discover, evaluate, and purchase internationally. The platform brings curated snacks, specialty coffee, spices, cashews, and gift collections into one cohesive buyer experience while positioning Batam as a strategic consolidation hub for global fulfillment.

Rather than operating as a conventional single-brand store, OOI is designed as a bridge between verified Indonesian producers and multiple international buyer segments—from individual customers to specialty retailers, importers, and distributors.

### The Operational Challenge

Indonesia has thousands of quality regional products, but international access is fragmented. Buyers often face disconnected suppliers, inconsistent product information, unclear certification status, high shipping costs, and no simple way to combine products from several origins into one order or inquiry.

### The Product Solution

Designed and developed a responsive marketplace and B2B sourcing experience that organizes curated Indonesian products into a clear catalog, surfaces trust and certification indicators, supports retail and wholesale buyer journeys, and communicates the commercial value of multi-supplier consolidation through the Batam hub.

### Key Product and Design Decisions

1. Built the catalog around product discovery and buyer confidence, using origin, certification, product attributes, format, and pricing as primary decision signals.
2. Combined premium Indonesian storytelling with commerce-focused calls to action so the experience feels both authentic and commercially credible.
3. Created separate but connected pathways for retail purchasing and B2B sourcing instead of forcing every visitor into one funnel.
4. Made Batam consolidation a central differentiator while keeping products—not logistics—the primary visual focus.
5. Used a warm cream, burgundy, and gold design language to position OOI as a premium food and origin brand.

### Key Deliverables & Capabilities

- Responsive premium storefront.
- Categorized and filterable product catalog.
- Product cards with origin, certifications, attributes, size, and pricing.
- Curated gift-kit collection.
- Retail cart and order journey.
- B2B wholesale and sourcing pathway.
- Trial/sample and strategic-partnership options.
- Batam consolidation value proposition.
- Shipping-savings estimator.
- Founder story and origin-led brand narrative.
- Mobile-responsive navigation and layouts.
- SEO-ready content structure.

### Project Outcome

Launched the Phase 1 product experience at ooindonesia.com, establishing a unified digital foundation for showcasing Indonesian brands, validating buyer interest, supporting retail discovery, and developing international B2B sourcing relationships.

## Recommended System Preview

Replace the existing escrow-dashboard screenshot with a curated gallery of three current screens:

1. Homepage hero — shows the OOI identity and value proposition.
2. Product catalog — shows product variety, origin, certifications, and pricing.
3. B2B or shipping section — shows the sourcing and consolidation model.

Desktop presentation:

- One large primary screenshot.
- Two smaller supporting screenshots below or beside it.
- Use consistent corner radius and a subtle neutral border.
- Avoid heavy shadows that conflict with the portfolio design system.

Mobile presentation:

- Stack screenshots vertically.
- Allow horizontal swipe only if that pattern already exists elsewhere in the portfolio.
- Never shrink three desktop screenshots into an unreadable row.

## Replacement Architecture

Use a five-stage product and fulfillment flow:

1. Verified Indonesian Brands
2. OOI Curated Catalog
3. Retail Order or B2B Inquiry
4. Batam Consolidation Hub
5. International Buyer or Partner

Node descriptions:

- **Verified Indonesian Brands:** Curated producers with product, origin, and applicable compliance information.
- **OOI Curated Catalog:** Unified discovery experience across snacks, coffee, spices, and gift collections.
- **Retail Order or B2B Inquiry:** Separate conversion paths based on buyer type and volume.
- **Batam Consolidation Hub:** Proposed coordination point for multi-supplier preparation and consolidated shipment.
- **International Buyer or Partner:** Consumers, retailers, importers, distributors, and specialty-food partners.

Do not label external integrations as live unless they are implemented and connected.

## Replacement Interactive Component

Replace the escrow/customs transaction simulation with a **Consolidated Shipping Estimator**.

Suggested inputs:

- Destination region.
- Number of selected suppliers.
- Estimated shipment weight.
- Buyer type: Retail Sample or B2B.

Suggested outputs:

- Separate-shipment estimate.
- Consolidated-shipment estimate.
- Estimated savings amount and percentage.
- Indicative lead-time range.

Use clearly labeled demo assumptions. Do not describe calculated output as a binding shipping quote.

## Credibility and Claims Audit

Review all factual or commercial claims before publishing:

- Do not present testimonials as real unless they came from identifiable genuine customers and are approved for publication.
- Show certifications only at the correct product or producer level; do not imply every product holds every certification.
- Treat “up to 40% lower shipping cost” as an estimate unless supported by documented comparisons.
- Do not state that Net 30, escrow, customs integrations, live payments, or global fulfillment are operational unless they really are.
- Label conceptual architecture, sample calculations, and planned capabilities clearly.
- Replace “production-grade” with “Phase 1 live product” unless production operations and transactions substantiate the stronger claim.

## Implementation Acceptance Criteria

- Portfolio thumbnail visually matches the current OOI brand.
- No dark escrow-dashboard imagery remains as the primary OOI preview.
- Page description matches snacks, coffee, spices, gift kits, retail, B2B, and consolidation.
- Existing portfolio-wide header, navigation, accent selector, footer, and contact behavior remain unchanged.
- Existing shared components are reused where appropriate.
- Desktop and mobile layouts remain responsive.
- Images use correct aspect ratios and do not stretch.
- Alt text is descriptive and useful.
- No console errors, broken links, missing assets, or hydration warnings.
- Reduced-motion preferences are respected for new animation.
- Build, lint, and available tests pass.

---

# Master Prompt for the IDE Agent

You are updating an existing portfolio codebase. Work directly in the repository and preserve its established architecture, component patterns, typography, navigation, footer, theme/accent controls, and overall portfolio identity.

## Task

Refresh the OOI case study at `/work/ooi` so it accurately represents the current live product at `https://ooindonesia.com`.

The current portfolio page is misaligned: it primarily shows a dark enterprise commodity-trading and escrow dashboard, while the live OOI product is a warm cream-and-burgundy premium Indonesian food marketplace with retail commerce, B2B sourcing, curated products, gift kits, certification indicators, and a Batam consolidation proposition.

Read the full brief in `OOI-Portfolio-Refresh-Brief-and-IDE-Prompt.md` and treat it as the content and acceptance-criteria source of truth.

## Required workflow

1. Inspect the repository structure and identify:
   - the `/work/ooi` page;
   - OOI data/content files;
   - Selected Work card/thumbnail configuration;
   - current OOI image assets;
   - reusable case-study, gallery, architecture, and interactive-demo components.
2. Inspect the current live `ooindonesia.com` appearance if internet access is available. If it is unavailable, use the supplied brief and existing approved screenshots/assets; do not invent unrelated UI.
3. Before editing, summarize the files you intend to change and the reason for each.
4. Replace the OOI thumbnail and System Preview with visuals based on the current live experience.
5. Rewrite the project metadata and narrative using the supplied approved copy.
6. Replace the escrow architecture with the product-and-fulfillment flow defined in the brief.
7. Replace the escrow/customs simulation with a consolidated-shipping estimator, or remove the old simulation if implementing the replacement safely would require unsupported assumptions.
8. Audit claims and clearly mark estimates, concepts, and planned capabilities.
9. Preserve the rest of the portfolio and avoid unrelated refactors.
10. Run the repository's existing lint, type-check, test, and production-build commands.
11. Inspect the result at desktop and mobile widths and fix overflow, cropping, contrast, and unreadable typography.

## Thumbnail implementation

Create or assemble a thumbnail aligned with the live OOI identity:

- warm cream background;
- burgundy/deep-red accent;
- subtle gold details;
- elegant serif plus clean sans-serif typography;
- current product imagery and a current homepage/interface preview;
- readable headline: “OOI — Origin of Indonesia”;
- subheadline: “Premium Indonesian Products for Global Markets”;
- optional small labels: “Curated & Verified”, “Batam Consolidation Hub”, and “Global Shipping”.

Use the portfolio's existing thumbnail aspect ratio. Export an optimized WebP plus a PNG master when the asset workflow supports both. Do not introduce a dark dashboard, trading table, escrow balance, blockchain motif, or unrelated fictional screen.

## Content rules

- Use “Founder-Led Product — Phase 1 Launch”.
- Use “Commerce, Export & Sourcing Platform” as the category/domain.
- The primary audience is international consumers, specialty retailers, importers, and distributors.
- The represented products are Indonesian snacks, cashews, specialty coffee, spices, and gift collections.
- Keep the Batam consolidation hub as a core differentiator.
- Do not claim real customers, transactions, integrations, savings, certifications, payment terms, or fulfillment capabilities unless supported by project data.
- Label simulations and forward-looking functionality clearly.

## Engineering constraints

- Follow the existing framework and design system; do not add a new UI framework.
- Prefer existing components and dependencies.
- Keep TypeScript strict and avoid `any` unless already justified by the codebase.
- Optimize images and prevent layout shift.
- Maintain semantic headings, keyboard accessibility, focus states, contrast, and useful alt text.
- Respect `prefers-reduced-motion`.
- Do not change routes or shared navigation behavior.
- Do not expose secrets or modify environment files.
- Do not commit or push unless explicitly requested.

## Final report

Return:

1. A concise summary of the visual and narrative changes.
2. The exact files changed.
3. Any claims or capabilities that were softened, labeled, or removed.
4. Test/build results.
5. Remaining items that require real business evidence or approved product assets.

