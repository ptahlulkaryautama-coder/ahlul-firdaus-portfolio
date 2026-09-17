# PT. Corum Portfolio Refresh Brief and IDE Prompt

**Project:** PT. Corum Sustainability Reporting Template  
**Product status:** Functional Browser-Based Prototype  
**Source artifact:** Standalone HTML/CSS/JavaScript reporting template  
**Prepared:** September 2026

---

## 1. Purpose

Refresh the PT. Corum portfolio project so it accurately represents the supplied source artifact.

This project is not a deployed enterprise ESG platform, cloud application, real-time collaboration system, or automated compliance product. It is a functional interactive reporting template that transforms a complex sustainability-reporting workbook into a clearer browser-based workflow for data entry, completion monitoring, visualization, manual consolidation, and print-to-PDF reporting.

The case study should demonstrate reporting structure, operational thinking, information architecture, UI design, front-end implementation, and privacy-aware presentation without overstating deployment, integration, automation, compliance, or measured business outcomes.

---

## 2. Approved Positioning

### Project title

**PT. Corum Sustainability Reporting Template**

### Classification

**Internal Reporting Prototype — Browser-Based Template**

### Category/domain

**Sustainability Reporting, Data Collection & Progress Monitoring**

### Role

**Reporting Structure, Workflow Design, Dashboard UI & Front-End Prototype**

### Product status

**Functional HTML Prototype**

### Primary proposition

**Turning a complex sustainability workbook into a clearer, guided reporting workflow.**

### Approved short description

A browser-based sustainability reporting template designed to organize outstanding reporting sections, guide department-level data entry, monitor completion status, visualize entered data, and support manual consolidation through JSON export and import.

### Primary users

- Internal reporting coordinator
- Department data contributors
- Section owners or PICs
- Management reviewing reporting completion

Do not present the project as an officially deployed PT. Corum system unless documented approval and deployment evidence are available.

---

## 3. Approved Thumbnail

Expected filename:

`pt-corum-portfolio-thumbnail-v2.png`

Treat this as an approved final asset.

Use it for:

1. The PT. Corum card in Selected Work.
2. The main case-study hero or System Preview.

Implementation requirements:

- Preserve the original 16:9 composition.
- Keep the PNG source as the master asset.
- Optimize or convert to WebP only if supported by the existing asset pipeline.
- Use the portfolio's existing image component and loading strategy.
- Provide explicit intrinsic dimensions or a stable aspect-ratio container.
- Prevent stretching and cumulative layout shift.
- Do not add text over the image.
- Avoid destructive cropping.
- Keep the headline, laptop, dashboard, and template status visible.
- Use descriptive alt text:

`PT. Corum browser-based sustainability reporting and data-entry template`

The thumbnail uses plain text `PT. CORUM`; it does not introduce or claim an official corporate logo.

---

## 4. Verified Current Functionality

The supplied HTML prototype includes:

- A reporting overview
- 23 tracked reporting sections
- Completion status: Not Started, In Progress, and Complete
- Completion KPIs
- Department-level progress charts
- Overall status visualization
- Reporting-section overview table
- Already Reported view
- Data Trends view populated from entered data
- Fill In Data interface
- Department and PIC references
- `Filled by` and last-updated information
- Per-section fields and logs
- Browser-local data persistence
- JSON export
- JSON import and merge workflow
- Print-friendly layout
- Browser print/export to PDF
- Responsive layout rules

### Actual data model and sharing limitation

Data is stored locally in the current browser. It does not automatically synchronize between computers or users.

The intended consolidation workflow is:

1. A contributor completes assigned sections.
2. The contributor exports a JSON file.
3. The file is shared manually with the reporting coordinator.
4. The coordinator imports files to merge the entries.
5. The consolidated file may be exported again for distribution or backup.

This manual workflow must remain visible in the case study. Do not imply cloud collaboration or real-time shared state.

---

## 5. Approved Case-Study Copy

### Hero

**Eyebrow:** SUSTAINABILITY REPORTING & DATA COLLECTION

**Title:** PT. Corum Sustainability Reporting Template

**Description:**

A guided browser-based template for organizing reporting sections, collecting department inputs, monitoring completion, reviewing trends, and preparing a consolidated sustainability report.

**Status:** Internal Reporting Prototype — Browser-Based Template

### Project background

Sustainability reporting often begins in a large workbook containing many sections, owners, reporting periods, and incomplete data points. Although the workbook may provide the required structure, contributors can still struggle to identify what remains outstanding, where their input belongs, and how overall completion is progressing.

This prototype explores a clearer interface for that process. It organizes reporting sections into a guided data-entry workflow, makes completion status visible, and provides simple charts and summaries for reviewing entered information.

### The reporting challenge

The central challenge was to make a complex reporting package easier to navigate without changing its underlying responsibility structure. Contributors needed a practical way to locate assigned sections, enter information, identify incomplete work, and return their data for consolidation.

### The prototype response

The reporting template introduces four primary views:

1. **Overview** — Completion KPIs, department progress, overall status, and the full section list.
2. **Already Reported** — Previously completed sections and their available reference data.
3. **Data Trends** — Charts generated from values entered into the template.
4. **Fill In Data** — Section-level forms, status selection, ownership fields, notes, and logs.

Data is stored locally in the browser. Contributors can export their entries as JSON files, while a coordinator can import and merge those files before preparing the consolidated report.

### Key design decisions

1. **Completion visibility** — Outstanding, in-progress, and completed sections are visible without searching through a large workbook.
2. **Section ownership** — Department, PIC, and contributor references clarify responsibility.
3. **Guided data entry** — Inputs are grouped by reporting section instead of exposed as one large data sheet.
4. **Local-first prototype** — The workflow can be tested without a server or database.
5. **Manual data portability** — JSON export and import provide a simple consolidation method during the prototype stage.
6. **Print-oriented reporting** — Styles support browser-based print and PDF preparation.

### Current outcome

The result is a functional reporting prototype that demonstrates how a static sustainability workbook can become a more understandable guided interface. It validates the navigation, input structure, completion tracking, charting, local persistence, and manual consolidation workflow.

It does not represent verified production deployment, multi-user synchronization, automated ESG compliance, or an audited corporate reporting system.

### Future development opportunities

- Shared database persistence
- Secure authentication
- Role-based access
- Department-level assignments
- Validation rules and approval workflow
- Change history and audit trail
- Controlled reporting periods
- Document attachments
- Automated reminders
- Centralized report generation
- Verified sustainability framework mapping
- Security, privacy, and production-readiness review

All future items must be labeled as roadmap or planned capabilities.

---

## 6. Workflow Visual

Use the following workflow instead of an enterprise platform diagram:

`Reporting Package → Sections & Owners → Department Input → Completion Review → JSON Export → Manual Consolidation → Print/PDF Report`

### Supporting states

- Not Started
- In Progress
- Complete

### Roles

- Contributor
- Section PIC
- Reporting Coordinator
- Management Reviewer

Do not depict automated synchronization, external ESG APIs, cloud approval engines, or regulatory submission unless those features are actually implemented.

---

## 7. Privacy and Confidentiality Rules

The source artifact may contain real company figures and personnel references. Public portfolio materials must not expose:

- Revenue or purchase values
- Electricity, water, raw-material, resin, diesel, or other operational consumption values
- Employee or PIC names
- Email addresses or phone numbers
- Customer or supplier information
- Internal reporting identifiers that are not approved for publication
- Confidential notes, incidents, targets, or performance details
- Imported JSON data

Use anonymized sample data in all public screenshots and interactive examples.

Add this disclosure near the gallery or demo:

> Interface shown with anonymized sample data. Company figures, personnel information, and internal reporting details are not disclosed.

If safe redaction cannot be guaranteed, do not publish the affected screenshot.

---

## 8. Claims Audit

| Risky claim | Approved treatment |
| --- | --- |
| Sustainability management system | Use “sustainability reporting template” |
| Enterprise ESG platform | Remove |
| Real-time reporting | Use “browser-local reporting prototype” |
| Collaborative dashboard | Use “manual JSON export/import consolidation” |
| Cloud synchronized | Remove |
| Automated reporting | Use “guided data entry and chart generation” |
| ESG compliant | Remove unless framework mapping and verification exist |
| Audited reporting | Remove |
| Production deployment | Remove unless documented |
| Official PT. Corum system | Do not claim without company approval |
| Centralized database | List as roadmap only |
| Role-based access | List as roadmap only |
| Automated PDF generator | Use “browser print/export to PDF” |
| Measured time savings | Remove unless measured |
| Improved reporting accuracy | Describe as a design objective, not a verified outcome |
| Multi-user editing | Remove |

---

## 9. Gallery and System Preview

Recommended gallery sequence:

1. Approved thumbnail / hero
2. Anonymized Overview screen
3. Anonymized Fill In Data screen
4. Anonymized Data Trends screen
5. JSON export/import workflow explanation
6. Print/PDF layout preview

Screenshot requirements:

- Populate with clearly fictitious or neutral sample data.
- Remove actual company figures and personnel information.
- Retain the real interface structure and color system.
- Include descriptive captions.
- Avoid tiny full-page screenshots without zoom or lightbox support.
- Do not fabricate database, login, approval, or cloud-sync screens.

---

## 10. Visual Direction

- Forest green: `#0E3828`
- Warm cream: `#F3EFE6`
- Muted gold: `#C9A55A`
- White cards
- Soft slate supporting text
- Positive green, warning ochre, and muted red only for status communication

Preserve the existing portfolio design system. Use the PT. Corum palette as a project accent rather than replacing shared portfolio typography, navigation, footer, or layout behavior.

Avoid decorative sustainability clichés that imply capabilities not present in the product. The interface and reporting workflow should remain the primary visual evidence.

---

## 11. SEO and Accessibility

### Suggested title

`PT. Corum Sustainability Reporting Template | Ahlul Firdaus`

### Suggested meta description

`Case study of a browser-based sustainability reporting template for guided data entry, completion tracking, trend visualization, manual consolidation, and PDF preparation.`

### Thumbnail alt text

`PT. Corum browser-based sustainability reporting and data-entry template`

### Screenshot alt-text example

`Anonymized sustainability reporting overview showing section completion cards, department progress, and reporting status`

Maintain semantic headings, keyboard navigation, visible focus, sufficient contrast, meaningful chart labels, and reduced-motion support.

---

## 12. IDE Execution Prompt

```text
You are updating an existing portfolio codebase. Work directly in the repository and preserve its established architecture, component patterns, typography, navigation, footer, theme/accent controls, and overall identity.

Task

Refresh the existing PT. Corum project card and case-study page so they accurately represent the supplied source artifact: a browser-based sustainability reporting template built as a standalone HTML/CSS/JavaScript prototype.

Read PT-Corum-Portfolio-Refresh-Brief-and-IDE-Prompt.md in full and treat it as the content and acceptance-criteria source of truth.

The project must not be represented as a deployed enterprise ESG platform, cloud collaboration system, automated compliance engine, audited reporting system, or production application.

Supplied asset

The approved final portfolio thumbnail is:

pt-corum-portfolio-thumbnail-v2.png

Do not regenerate, redesign, destructively crop, or add text over this image.

Required workflow

1. Inspect the repository and identify:
   - the current PT. Corum project route;
   - project data/content files;
   - Selected Work card configuration;
   - existing PT. Corum screenshots and assets;
   - reusable case-study, gallery, workflow, and interactive-demo components.

2. Inspect the supplied original HTML prototype and verify its actual functionality before editing portfolio content.

3. Before making changes, report the exact files you intend to modify and why.

4. Replace the PT. Corum Selected Work thumbnail and main case-study hero/System Preview with pt-corum-portfolio-thumbnail-v2.png.

5. Rewrite metadata and narrative using the approved copy in this brief.

6. Replace any enterprise/SaaS architecture with the approved reporting workflow:

   Reporting Package → Sections & Owners → Department Input → Completion Review → JSON Export → Manual Consolidation → Print/PDF Report

7. Show current functionality accurately:
   - 23 tracked sections;
   - Overview;
   - Already Reported;
   - Data Trends;
   - Fill In Data;
   - completion status;
   - local browser persistence;
   - JSON export/import;
   - browser print/export to PDF.

8. Clearly state the limitations:
   - no shared database;
   - no real-time synchronization;
   - no authentication or role-based access;
   - no multi-user editing;
   - manual file-based consolidation;
   - not a verified compliance or audited reporting product.

9. Audit all screenshots and content for confidential data. Replace real figures, names, contact information, operational metrics, and internal details with clearly anonymized sample data.

10. Add the approved privacy disclosure near screenshots or interactive demonstrations.

11. Preserve the rest of the portfolio and avoid unrelated refactors.

12. Run the repository's existing lint, type-check, test, and production-build commands.

13. Inspect desktop and mobile layouts and fix overflow, cropping, contrast, layout shift, focus states, and unreadable typography.

Approved metadata

- Title: PT. Corum Sustainability Reporting Template
- Classification: Internal Reporting Prototype — Browser-Based Template
- Domain: Sustainability Reporting, Data Collection & Progress Monitoring
- Role: Reporting Structure, Workflow Design, Dashboard UI & Front-End Prototype
- Product status: Functional HTML Prototype
- Primary proposition: Turning a complex sustainability workbook into a clearer, guided reporting workflow.

Thumbnail implementation

- Use pt-corum-portfolio-thumbnail-v2.png.
- Preserve the 16:9 composition.
- Keep PNG as the master asset.
- Convert to WebP only if supported by the existing asset pipeline.
- Use the existing image component and loading strategy.
- Provide intrinsic dimensions or a stable aspect-ratio wrapper.
- Prevent stretching and layout shift.
- Do not overlay additional text.
- Use alt text: PT. Corum browser-based sustainability reporting and data-entry template
- Apply it to the Selected Work card and main case-study hero/System Preview.

Claims rules

- Use “sustainability reporting template”, not “sustainability management system”.
- Use “browser-local reporting prototype”, not “real-time reporting platform”.
- Use “manual JSON export/import consolidation”, not “cloud collaboration”.
- Use “guided data entry and chart generation”, not “automated ESG reporting”.
- Use “browser print/export to PDF”, not “automated PDF generation”.
- Do not claim ESG compliance, audits, production deployment, official company adoption, central database, role-based access, multi-user collaboration, measured time savings, or accuracy improvements without evidence.
- List database, authentication, assignments, approval workflows, audit trails, reminders, and framework mapping only as roadmap items.

Privacy disclosure

Interface shown with anonymized sample data. Company figures, personnel information, and internal reporting details are not disclosed.

Engineering constraints

- Follow the existing framework and design system; do not add a new UI framework.
- Prefer existing components and dependencies.
- Keep TypeScript strict and avoid any unless already justified.
- Optimize images and prevent layout shift.
- Maintain semantic headings, keyboard accessibility, focus states, contrast, useful alt text, and reduced-motion behavior.
- Do not change routes or shared navigation behavior.
- Do not expose secrets or modify environment files.
- Do not commit or push unless explicitly requested.

Final report

Return:

1. A concise summary of visual and narrative changes.
2. Exact files changed.
3. Claims or capabilities removed, softened, or relabeled.
4. Confidential data redacted or replaced.
5. Lint, type-check, test, and build results.
6. Remaining items requiring company approval, real evidence, database implementation, or security review.
```

---

## 13. Acceptance Criteria

- The Selected Work card uses the approved thumbnail.
- The case-study hero/System Preview uses the approved thumbnail.
- The project is identified as an internal browser-based reporting prototype.
- The page accurately describes local persistence and manual JSON consolidation.
- The four real product views are represented accurately.
- No confidential company figures or personnel information are exposed.
- The privacy disclosure is visible.
- No enterprise ESG, cloud collaboration, compliance, audit, automation, or production claims remain without evidence.
- Database and multi-user features are labeled as roadmap items.
- Real interface screenshots use anonymized sample data.
- Desktop and mobile presentation is readable and stable.
- Accessibility behavior is preserved.
- Existing validation and build commands pass, or pre-existing failures are documented.
- No unrelated routes, shared components, or environment files are modified.

---

## 14. Evidence Required for Stronger Claims

Do not strengthen the case study until evidence is available for:

- Formal company approval
- Production deployment
- Number of contributors or reporting cycles
- Measured completion-time reduction
- Measured data-quality improvement
- Verified database or cloud synchronization
- Authentication and permission controls
- Audit trail
- Sustainability-framework mapping
- Regulatory or certification compliance
- Security and privacy assessment
- Actual report submission or audit acceptance

