# Masjid Al Ikhlas — Portfolio Refresh Brief & IDE Prompt

## Objective

Refresh `/work/masjid-al-ikhlas` so it accurately represents the current live product at `https://alikhlascgv.vercel.app/`.

The live product has evolved beyond a basic mosque information page. It is a digital mosque and community ecosystem combining worship information, Batam prayer schedules, TPQ education, kajian and programs, agenda, media and Islamic knowledge, news, financial transparency, donations, contact services, and an installable PWA experience.

Preserve the portfolio's architecture, component patterns, typography, navigation, footer, theme/accent controls, and overall identity. Avoid unrelated refactors.

## Project Positioning

**Project name:** Masjid Al Ikhlas Digital Ecosystem  
**Category/Domain:** Faith-Based Civic Tech, Education & Community Services  
**Classification:** Founder-Led Community Platform — Live Project  
**Role:** Digital Experience Strategist, UI/UX Designer & Full-Stack Developer  
**Status:** Live Community Platform

### Short description

A digital mosque and community ecosystem connecting worship information, Islamic education, community programs, transparent financial reporting, donations, media, and jamaah services in one accessible platform.

### Value proposition

Connecting worship, knowledge, community service, and trusted stewardship in one digital home for Masjid Al Ikhlas.

## Approved Asset

Expected path:

`public/images/projects/masjid-al-ikhlas/masjid-al-ikhlas-thumbnail-v3-official-logo.png`

Additional approved admin preview:

`public/images/projects/masjid-al-ikhlas/masjid-al-ikhlas-admin-finance-preview-v2-official-logo.png`

The supplied v3 thumbnail with the official Masjid Al Ikhlas logo is approved and final.

- Do not regenerate, redesign, or reinterpret it.
- Do not add HTML text over it.
- Preserve its 16:9 composition.
- Keep the real mosque building, live-site interface, and brand identity visible.
- Keep PNG as the master; produce WebP only if supported by the existing pipeline.
- Prevent image stretching, destructive cropping, and layout shift.
- Use the portfolio's existing image component and loading strategy.

Alt text:

`Masjid Al Ikhlas digital mosque and community ecosystem with prayer times, TPQ education, programs, and financial transparency`

The thumbnail is a promotional composite. Do not use small text or graphic values inside it as factual evidence.

## Required Workflow

1. Inspect the repository and locate `/work/masjid-al-ikhlas`.
2. Locate the Selected Work card and thumbnail configuration.
3. Locate project data, content, images, and reusable case-study components.
4. Identify existing architecture and interactive-demo components.
5. Inspect `package.json` scripts.
6. Summarize intended file changes and why.
7. Continue implementation without waiting unless a change is destructive, unclear, or affects unrelated projects.
8. Inspect the live site when internet access is available; otherwise use this brief and supplied assets.

## Project Narrative

### Background

Masjid Al Ikhlas Digital Ecosystem is the unified online platform for Masjid Al Ikhlas Cipta Greenville Batam. It supports jamaah and the surrounding community with prayer information, Islamic learning, TPQ education, activities, transparent stewardship, donation guidance, media, and direct access to mosque services.

The platform combines day-to-day worship needs with community communication and institutional transparency in a responsive, installable web experience.

### Operational Challenge

Mosque information is often fragmented across chat messages, posters, verbal announcements, social-media posts, and separate financial updates. Jamaah need a trustworthy place to check prayer times, discover kajian and activities, access TPQ information, review published financial summaries, find donation guidance, and contact mosque administrators.

The platform also needs to remain accessible on mobile devices, respectful in presentation, easy for non-technical users, and clear about which information is current, verified, archived, or illustrative.

### Product Solution

Designed and developed a responsive digital mosque platform that organizes worship information, education, programs, agenda, media, news, transparency, donations, and contact services into one coherent experience. A dynamic prayer-time module gives fast access to Batam schedules, while structured program and transparency pages support community trust and participation.

## Experience Areas

### Worship Information

- Batam prayer schedule.
- Countdown to the next prayer.
- Mosque location and worship context.
- Mobile-first access to time-sensitive information.

### Programs and Agenda

- Kajian listings.
- Islamic program details.
- Grid and calendar agenda views.
- Community and DKM activities.

### TPQ Education

- TPQ Al-Mardhotillah portal.
- Quran learning and tajwid context.
- Memorization and character education.
- Program information for students and families.

### Media and Knowledge

- Kajian recording references.
- Khutbah bulletins and written materials.
- Islamic digital library structure.
- Live and archived broadcast entry points.

### Transparency and Donations

- Published mosque cash summaries.
- Infaq, sedekah, and social-program reporting.
- Donation and bank/QRIS guidance.
- Clear distinction between published summaries and private financial administration.

### Community Services

- Mosque news.
- Contact and WhatsApp inquiry preparation.
- Location guidance.
- PWA installation experience.

### Authorized Admin & Finance Operations

- Protected administrator dashboard.
- Mosque cash and financial-period overview.
- Inflow, outflow, balance, and transaction summaries.
- Cash-flow trend visualization.
- Expense-category composition.
- Transaction ledger and reconciliation workflow.
- Manual financial-entry and supporting-document workflow.
- Program and operational fund administration.

Keep this section concise in the portfolio. Show the approved short admin-finance preview rather than the original full-page dashboard. Do not display the complete ledger, long forms, bank accounts, administrator identity, receipt references, or private transaction descriptions.

## Key Design and Product Decisions

1. Used the real Masjid Al Ikhlas building and local community identity instead of generic mosque imagery.
2. Prioritized prayer schedule and next-prayer countdown in the homepage hero.
3. Organized content around worship, education, programs, stewardship, and service.
4. Made financial transparency visible without exposing donor-level or private administrative records.
5. Combined deep Islamic green, warm gold, ivory typography, and sunset photography for a respectful local identity.
6. Created a mobile-first, installable PWA experience for frequent jamaah access.
7. Separated current, scheduled, archived, and illustrative content where applicable.

## Key Deliverables and Capabilities

- Responsive mosque information portal.
- Dynamic Batam prayer schedule and countdown.
- Kajian and program directory.
- Agenda grid and calendar experience.
- TPQ education portal.
- News and announcement publishing.
- Media and knowledge hub.
- Financial-transparency presentation.
- Authorized finance and operations dashboard.
- Donation and infaq guidance.
- Mosque location and contact workflow.
- Installable PWA experience.
- Mobile-responsive navigation and layouts.
- SEO-ready semantic content structure.

Only claim features verified in the repository or visible live product.

## System Preview

Use the approved thumbnail for the Selected Work card and optionally once as the case-study hero.

Replace the old silhouette-based System Preview with actual current visuals:

1. Homepage hero and prayer countdown.
2. Programs and agenda.
3. TPQ portal.
4. Transparency or media section.
5. Short Admin Finance dashboard preview.

Prefer one large primary screenshot and three supporting screenshots. On mobile, stack them vertically or reuse an established accessible gallery pattern. Do not repeat the same thumbnail multiple times when real screenshots are available.

Do not show bank account numbers, QRIS codes, phone numbers, individual donor data, private transactions, or administrator credentials in portfolio screenshots. Redact sensitive information before use.

For the admin finance preview, use only `masjid-al-ikhlas-admin-finance-preview-v2-official-logo.png`. It is a deliberately condensed 16:9 demonstration visual using the official Masjid Al Ikhlas logo. Do not use the original extremely tall admin screenshot in the public portfolio.

## Architecture Replacement

Use a community information and stewardship flow:

```text
Jamaah & Community
  → Masjid Digital Hub
  → Prayer Information
  → Programs, Agenda & TPQ
  → Media, News & Knowledge
  → Transparency, Donations & Contact

DKM / Content Administrators
  → Authorized Content & Finance Management
  → Cash Overview, Ledger, Reconciliation & Reporting
  → Verified Public Information
  → Masjid Digital Hub
```

If a prayer-time API or data provider is actually implemented, show it as an external source. Otherwise label schedules as dynamically calculated or configured without claiming live API synchronization.

Do not present public financial summaries as a banking integration or real-time accounting system unless implemented.

Keep private admin operations visually and conceptually separate from the public transparency page.

## Interactive Component

Retain the useful prayer, transparency, and agenda concept but reposition it as a **Digital Mosque Journey Explorer**.

Suggested audience modes:

1. `Jamaah` — prayer times, agenda, kajian, location, and contact.
2. `TPQ Family` — TPQ information, learning programs, and announcements.
3. `Community Supporter` — published transparency, social programs, and donation guidance.
4. `DKM` — clearly labeled conceptual/authorized content-management responsibilities only.

Use demo data. Never embed live donation actions, private ledgers, donor identities, or account credentials in the portfolio simulation.

## Credibility and Privacy Audit

- Do not claim improved participation without measured evidence.
- Do not claim streamlined donation collection without transaction evidence.
- Use `dynamic prayer schedule` instead of `live API sync` unless the integration is verified.
- Do not describe financial reporting as real-time unless updates are genuinely real-time.
- Match the reporting frequency to the actual implementation; do not say weekly if the live experience uses monthly or period-based summaries.
- Label sample, archived, future-dated, or illustrative agenda/media content clearly.
- Do not present placeholder Facebook, YouTube, article, speaker, or broadcast links as real official media.
- Do not expose bank account numbers, QRIS, personal phone numbers, donor identities, signatures, or transaction-level records in portfolio images.
- Treat figures inside the approved admin finance preview as demonstration data, not actual mosque financial results.
- Do not imply endorsement by religious teachers or DKM members beyond verified published information.

Add this note where screenshots show transparency or donation functionality:

> Screens in this case study use public, redacted, or demonstration information. Sensitive banking, donor, contact, and administrative data is intentionally concealed.

## Project Outcome

Use:

> Launched a unified digital platform that gives Masjid Al Ikhlas a structured foundation for worship information, Islamic education, program communication, public transparency, community support, and mobile jamaah access.

Avoid unsupported quantitative impact claims.

## Engineering Constraints

- Follow the existing framework and design system.
- Reuse current components and dependencies.
- Do not add a new UI framework.
- Preserve routes, navigation, footer, themes, and accent controls.
- Avoid unrelated refactors.
- Keep TypeScript strict and avoid unjustified `any`.
- Optimize images and prevent layout shift.
- Maintain semantic headings, keyboard accessibility, visible focus, contrast, and useful alt text.
- Respect `prefers-reduced-motion`.
- Do not expose secrets or modify environment files.
- Do not commit or push unless explicitly requested.

## Validation

Inspect `package.json` and run only existing applicable lint, type-check, test, and production-build scripts. Do not invent scripts or add dependencies solely for this task.

Validate desktop and mobile layouts for overflow, cropping, image stretching, readability, contrast, broken links, missing assets, console errors, hydration warnings, layout shift, and accidental sensitive-data exposure.

## Acceptance Criteria

- Selected Work uses the approved new thumbnail.
- Old generic silhouette thumbnail is no longer the primary preview.
- Narrative represents the complete live digital mosque ecosystem.
- Prayer, TPQ, program, agenda, media, transparency, donation, contact, and PWA experiences are represented accurately.
- Authorized admin and finance operations are represented through the approved concise demonstration preview.
- Architecture reflects community information and stewardship.
- Interactive experience becomes the Digital Mosque Journey Explorer.
- Unsupported impact and integration claims are removed or softened.
- Sensitive banking and personal information does not appear in portfolio visuals.
- Existing portfolio-wide functionality remains unchanged.
- Desktop/mobile QA and available project checks pass.

## Final Report

Return:

1. Summary of visual and narrative changes.
2. Exact files changed.
3. Existing components reused.
4. Features represented.
5. Claims softened, labeled, or removed.
6. Privacy protections applied.
7. Lint, type-check, test, and build results.
8. Desktop/mobile validation results.
9. Items requiring verified content or approved assets.
10. Old assets left unused but intentionally not deleted.

---

# IDE Starter Prompt

Read `Masjid-Al-Ikhlas-Portfolio-Refresh-Brief-and-IDE-Prompt.md` completely.

The approved thumbnail is expected at:

`public/images/projects/masjid-al-ikhlas/masjid-al-ikhlas-thumbnail-v3-official-logo.png`

Update the Masjid Al Ikhlas Selected Work card and `/work/masjid-al-ikhlas` case study according to the complete brief.

Use the supplied thumbnail as the final approved asset. Do not regenerate, redesign, or add text over it.

Use `public/images/projects/masjid-al-ikhlas/masjid-al-ikhlas-admin-finance-preview-v2-official-logo.png` as the only public preview of the protected admin-finance experience. Keep this section short. Do not use the original full-length admin screenshot or expose private financial details.

Replace the outdated generic silhouette preview with current live-site screenshots where available. Redact bank accounts, QRIS, phone numbers, donor-level records, private transactions, and administrator information before using screenshots.

Before editing, inspect the repository and summarize the exact files you intend to change and why. Then continue unless a destructive, unclear, or unrelated change requires confirmation.

Preserve the existing portfolio design system, avoid unrelated refactors, run all applicable existing validation scripts, inspect desktop and mobile layouts, and provide the final report required by the brief.
