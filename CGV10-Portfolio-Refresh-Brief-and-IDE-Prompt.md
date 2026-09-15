# Portal Warga CGV — Portfolio Refresh Brief & IDE Prompt

## Objective

Refresh the case study at `/work/cgv10` so it accurately represents the current live product at `https://portalwargacgv.id`.

Portal Warga CGV is an integrated residential community platform with separate experiences for public visitors, registered residents, and authorized community administrators. The portfolio must explain features that become available only after resident registration and sign-in.

Preserve the portfolio's established architecture, design system, typography, navigation, footer, accent selector, theme controls, and responsive behavior. Do not modify unrelated projects.

## Project Positioning

**Project name:** Portal Warga CGV  
**Portfolio title:** Portal Warga CGV — Integrated Residential Community Platform  
**Category/Domain:** Civic Tech, Community Operations & Resident Services  
**Classification:** Founder-Led Civic-Tech Product — Live Community Platform  
**Role:** Product Strategist, UI/UX Designer & Full-Stack Developer  
**Project status:** Live Community Platform

### Short description

An integrated residential platform combining public neighborhood information, authenticated resident services, transparent community finance, local commerce, and administrative operations in one connected digital ecosystem.

### Value proposition

One trusted digital portal for community information, resident services, financial transparency, local businesses, and neighborhood operations.

## Supplied Assets

Expected asset paths:

```text
public/images/projects/cgv10/
├── portal-warga-cgv-thumbnail-v2.png
├── cgv10-resident-portal-redacted.png
├── cgv10-layanan-warga.png
├── cgv10-palugada-redacted.png
└── cgv10-admin-dashboard-redacted.png
```

If an asset is stored elsewhere, locate its exact path before updating references. Do not create placeholders or unnecessary duplicates.

### Approved thumbnail

Use `portal-warga-cgv-thumbnail-v2.png` as the final Selected Work thumbnail.

- Do not regenerate or redesign it.
- Do not add HTML text over it.
- Do not crop it destructively.
- Do not restore any redacted information.
- Keep the PNG as the master asset.
- Generate an optimized WebP derivative only if supported by the existing asset pipeline.
- Preserve the original 16:9 composition.
- Prevent stretching and layout shift.
- Use the portfolio's existing image component and loading strategy.

Recommended alt text:

`Portal Warga CGV integrated residential community platform with resident services, local marketplace, financial transparency, and admin operations`

The approved thumbnail is a promotional composite. Do not treat small interface text inside it as factual project evidence.

## Required Workflow

Before editing:

1. Inspect the repository structure.
2. Locate the `/work/cgv10` page.
3. Locate CGV10 project data or content files.
4. Locate the Selected Work card and thumbnail configuration.
5. Locate existing CGV10 image assets.
6. Identify reusable case-study, gallery, architecture, and interactive-demo components.
7. Inspect scripts defined in `package.json`.

Summarize the exact files you intend to change and why, then continue without waiting unless the change is destructive, affects unrelated projects, or requires an unclear business decision.

If internet access is available, inspect the public experience at `portalwargacgv.id`. Do not register a new resident, bypass authentication, or infer hidden resident information. Use the supplied privacy-safe screenshots for authenticated features.

## Access Architecture

The case study must explain three access layers.

### Public Portal

- Community homepage.
- Neighborhood news and announcements.
- Community leadership information.
- Public transparency information.
- Introduction to resident services.
- Publicly available PALUGADA listings.
- Registration and login entry points.

### Authenticated Resident Portal

- Personalized resident homepage.
- Resident-specific navigation.
- Community-service requests.
- Environmental issue reporting.
- Administrative document requests.
- Resident data-update requests.
- Suggestions and aspirations.
- Supporting-photo attachments.
- Community contribution information.
- Payment or contribution history.
- Community finance access.
- PALUGADA discovery and listing registration.
- Unified portal search.
- News and community announcements.
- Installable PWA experience.

### Authorized Admin Operations

- Operational dashboard.
- Resident data management.
- Community-contribution administration.
- Payment verification.
- Service-request review and follow-up.
- PALUGADA listing moderation.
- News and announcement management.
- Portal content management.
- Role-based administrative controls.
- Operational status overview.

Do not imply that administrator capabilities are available to ordinary residents.

## Project Narrative

### Background

Portal Warga CGV is an integrated digital ecosystem developed for the residents and administrators of Cipta Green Ville RT 010/RW 021. It centralizes community information, resident services, financial transparency, neighborhood commerce, and administrative workflows in one accessible system.

The platform supports both open public communication and authenticated experiences for registered residents and authorized administrators.

### Operational Challenge

Community information and services were previously distributed across chat groups, manual records, informal payment confirmations, personal messages, and disconnected communication channels.

Residents lacked one trusted place to find official neighborhood information, submit requests, report environmental problems, access community finance, review contribution history, discover nearby resident businesses, and follow community announcements.

Administrators needed a structured way to manage residents, service requests, contributions, content, and marketplace listings.

### Product Solution

Designed and developed a role-based residential platform with separate public, resident, and administrator experiences. The system combines a public community portal, personalized resident dashboard, service-request workflow, transparent finance access, PALUGADA local marketplace, and administrative control center.

## Key Product and Design Decisions

1. Separated public, resident, and administrator access instead of exposing all functionality through one interface.
2. Created a personalized resident portal so authenticated residents can access relevant services and information from one dashboard.
3. Structured resident requests into environmental reports, resident data, documents, security, and community suggestions.
4. Added photo-supporting evidence to improve the clarity of reports and service requests.
5. Integrated community financial information without exposing individual resident records publicly.
6. Developed PALUGADA so resident businesses and services are easier to discover than searching through old group messages.
7. Created a dedicated administrator workspace for operational review, verification, moderation, and publishing.
8. Used deep green, warm cream, and gold to create a trustworthy community identity.

## Key Deliverables and Capabilities

- Public community portal.
- Resident registration and authentication.
- Personalized resident dashboard.
- Role-based access control.
- Community-service request workflow.
- Environmental issue reporting.
- Resident administration requests.
- Supporting-image attachments.
- Contribution and finance visibility.
- PALUGADA local marketplace.
- Business and service listing registration.
- News and announcement publishing.
- Admin operational dashboard.
- Resident data administration.
- Payment-verification workflow.
- Request review and follow-up.
- Marketplace moderation.
- Content-management workflow.
- Installable PWA.
- Responsive desktop and mobile layouts.
- Privacy-aware interface structure.

Only include capabilities supported by the repository or supplied screenshots. Clearly label planned functionality.

## System Preview

Use the approved thumbnail once as the Selected Work card visual and, when appropriate, as the case-study hero.

Create a System Preview gallery using:

1. Personal Resident Portal.
2. Layanan Warga.
3. PALUGADA.
4. Admin Dashboard.

Labels:

- `Authenticated Resident Portal`
- `Resident Service Request`
- `PALUGADA Local Marketplace`
- `Authorized Admin Operations`

Desktop: use one large personal-portal screenshot plus three supporting screenshots in a structured grid. Use consistent corner radii, subtle borders, and minimal shadows.

Mobile: stack screenshots vertically. Do not shrink full-page screenshots into an unreadable row. Use horizontal swipe only if the portfolio already uses that pattern.

Use only privacy-safe images.

## Architecture Replacement

Represent the following role-based architecture:

```text
Public Visitor
  → Public Community Portal
  → News, Announcements, Public Information and PALUGADA

Registered Resident
  → Authentication
  → Personal Resident Portal
  → Services, Finance, PALUGADA and Community Information

Authorized Administrator
  → Role-Based Authentication
  → Admin Operations
  → Residents, Requests, Contributions, Listings and Content
```

Do not expose actual resident records or claim third-party integrations unless implemented.

## Interactive Component

Create a **Resident Access Journey** that lets portfolio visitors select:

1. Public Visitor.
2. Registered Resident.
3. Community Administrator.

Public journey:

```text
Open Portal → Read Information → View News → Explore Public PALUGADA → Register or Sign In
```

Resident journey:

```text
Sign In → Personal Portal → Submit Service Request → Access Finance → Explore or Register PALUGADA
```

Administrator journey:

```text
Authorized Sign In → Operations Dashboard → Review Requests → Verify Contributions → Moderate PALUGADA → Publish Content
```

Use demonstration states only. Do not display real names, addresses, phone numbers, bills, payment history, or resident records.

## Privacy and Security Rules

Include this statement:

> Screens shown in this case study use redacted or demonstration data. Resident identities, contact information, addresses, billing details, transaction records, and administrative information are intentionally concealed.

- Never restore blurred or redacted data.
- Do not use real resident names or personal WhatsApp numbers.
- Do not display exact house, block, unit, or shop addresses.
- Do not expose individual bills, payment history, admin usernames, resident photos, QR codes, or identifiers.
- Do not invent realistic-looking private resident records.
- Use generic demonstration data when examples are required.
- Aggregate statistics may remain visible when they do not identify individuals.
- The RT/RW and community name may remain visible as public community identity.

## Project Outcome

Use this outcome copy:

> Launched an integrated community platform that provides residents and administrators with a structured digital foundation for neighborhood information, resident services, financial transparency, local commerce, and community operations.

Avoid unsupported claims about percentage improvements, guaranteed response times, workload reduction, full resident adoption, or fully digital payment processing.

## Engineering Constraints

- Follow the existing framework and design system.
- Reuse existing components and dependencies.
- Do not add a new UI framework.
- Avoid unrelated refactoring.
- Keep TypeScript strict and avoid `any` unless already justified.
- Preserve routes, navigation, footer, theme, and accent controls.
- Optimize images and prevent layout shift.
- Maintain semantic headings, keyboard accessibility, focus states, contrast, and useful alt text.
- Respect `prefers-reduced-motion`.
- Do not expose secrets or modify environment files.
- Do not commit or push unless explicitly requested.

## Validation

Inspect `package.json` and run only scripts already defined by the repository. Run all applicable lint, type-check, test, and production-build checks. Do not invent missing scripts or add testing dependencies solely for this task.

Inspect desktop and mobile layouts for overflow, destructive cropping, stretched images, unreadable screenshots, weak contrast, broken links, missing assets, console errors, hydration warnings, layout shift, incorrect role labeling, and accidental disclosure of private information.

## Acceptance Criteria

- Selected Work uses the approved CGV10 thumbnail.
- The case study presents CGV10 as an integrated residential platform.
- Public, resident, and administrator access layers are explained.
- Hidden resident features use privacy-safe screenshots.
- Personal Portal, Layanan Warga, PALUGADA, finance, and admin operations are represented.
- Private information is not exposed.
- Resident Access Journey replaces unrelated simulation content.
- Existing portfolio functionality remains unchanged.
- Desktop and mobile layouts work correctly.
- Applicable repository checks pass.

## Final Report

Return:

1. Summary of visual and narrative changes.
2. Exact files changed.
3. Existing components reused.
4. Public, resident, and administrator features represented.
5. Privacy protections applied.
6. Claims softened, labeled, or removed.
7. Lint, type-check, test, and build results.
8. Desktop and mobile validation results.
9. Remaining items requiring evidence or approved assets.
10. Old CGV10 assets that became unused but were not deleted.

---

# IDE Starter Prompt

Read `CGV10-Portfolio-Refresh-Brief-and-IDE-Prompt.md` completely.

The approved assets are located in `public/images/projects/cgv10/`.

Update the CGV10 Selected Work card and `/work/cgv10` case study according to the complete brief.

Use `portal-warga-cgv-thumbnail-v2.png` as the final approved thumbnail. Do not regenerate or redesign it.

Use only the supplied privacy-safe screenshots for authenticated resident and administrator features. Never restore, infer, or expose redacted resident data.

Before editing, inspect the repository and summarize the exact files you intend to change and why. Then continue with implementation unless a destructive or unclear change requires confirmation.

Preserve the existing portfolio design system and do not modify unrelated projects. Run all applicable existing validation scripts and provide the final report required by the brief.
