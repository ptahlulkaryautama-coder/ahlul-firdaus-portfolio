# Portfolio Phase 3 — Technical Polish Brief and IDE Prompt

**Portfolio:** `https://www.ahlulfirdaus.com`  
**Owner:** Ahlul Firdaus  
**Phase:** 3 — Performance, Mobile, Accessibility & Reliability  
**Prerequisites:** Phase 1 Trust and Clarity; Phase 2 Approachable Homepage  
**Prepared:** September 2026

---

## 1. Objective

Make the portfolio itself a credible demonstration of technical care.

Phase 3 focuses on:

- Runtime performance
- Core Web Vitals readiness
- Responsive behavior
- Mobile navigation and content density
- Image delivery
- JavaScript and animation cost
- Keyboard accessibility
- Screen-reader structure
- Contrast and readable typography
- Reduced-motion support
- Form usability
- Interactive-component fallbacks
- Link and route reliability
- Production-build health

This phase must not reintroduce claims removed in Phase 1 or disrupt the clearer information hierarchy created in Phase 2.

Guiding principle:

> The portfolio should feel fast, readable, stable, and usable before it feels technically impressive.

---

## 2. Measurement Policy

Measure before optimizing and measure again after changes.

Use the repository's current tooling first. If Lighthouse, bundle analysis, automated accessibility checks, or browser tests already exist, use them rather than adding parallel tools.

### Preferred test conditions

- Production build, not development mode
- Homepage
- Every public case-study route
- Writings/index and at least one article
- Services/contact interaction
- Desktop viewport
- Mobile viewport around 360–390px wide
- Tablet viewport around 768px wide
- Reduced-motion preference
- Keyboard-only navigation

### Web performance targets

Treat these as engineering targets, not public marketing claims:

- Largest Contentful Paint: 2.5 seconds or better at the 75th percentile
- Interaction to Next Paint: 200 milliseconds or better at the 75th percentile
- Cumulative Layout Shift: 0.1 or better at the 75th percentile

Lab tests do not prove real-user performance. Do not publish these numbers unless field measurement exists and remains representative.

### Lighthouse

Aim for consistently strong scores, but do not chase a perfect numeric score at the expense of product clarity or accessibility.

Do not keep public footer copy such as `LCP < 0.8s` unless it is based on current, repeatable field evidence.

---

## 3. Performance Audit Scope

### Rendering and hydration

- Identify components that unnecessarily require client-side rendering.
- Keep static content server-rendered where supported by the existing framework.
- Isolate interactive client components.
- Avoid hydrating large sections only for simple decoration.
- Prevent browser-only APIs from blocking initial rendering.
- Inspect animation libraries, chart libraries, visualizers, search, command palette, and estimators for bundle cost.

### JavaScript

- Remove unused imports and unreachable code.
- Dynamically load heavy interactive components that are below the fold.
- Avoid shipping case-study-only code on the homepage.
- Avoid shipping every project's data or gallery assets when only a subset is visible.
- Verify that event listeners, timers, observers, and animation loops are cleaned up.
- Pause continuous animations and activity streams when off-screen or when the document is hidden.
- Avoid artificial terminal logs or clocks that continuously re-render without user value.

### Fonts

- Use the existing font-loading strategy.
- Prefer self-hosted or framework-optimized fonts when already supported.
- Load only required families, weights, and subsets.
- Prevent invisible-text delays and large layout shifts.
- Do not add new display fonts during this phase.

### Third-party code

- Inventory analytics, external widgets, icon libraries, code highlighting, embeds, and remote scripts.
- Remove unused services.
- Load non-critical third-party scripts after primary content where possible.
- Do not add tracking merely to improve an audit report.

---

## 4. Image and Media Optimization

- Inventory PNG, JPEG, WebP, AVIF, GIF, SVG, and video assets.
- Preserve approved PNG master assets.
- Use the existing optimized image component where possible.
- Supply intrinsic width and height or a stable aspect-ratio container.
- Prevent stretching and cumulative layout shift.
- Use responsive `sizes` appropriate to actual layout width.
- Use WebP/AVIF derivatives when supported by the current pipeline.
- Lazy-load below-the-fold images.
- Do not lazy-load the primary above-the-fold hero image if doing so delays LCP.
- Preload only the confirmed critical visual; avoid excessive preload hints.
- Use sensible quality settings rather than automatically serving master-resolution files.
- Ensure gallery thumbnails do not download full-size assets unnecessarily.
- Keep focal positions for project cards where approved compositions require them.
- Use descriptive alt text for meaningful images and empty alt text for purely decorative images.
- Avoid encoding important text only inside thumbnails.

### Animation/media

- Do not autoplay large background videos.
- Provide poster images for video.
- Avoid animated GIFs for large hero areas when a more efficient format exists.
- Never introduce motion that cannot be paused when it distracts or continues indefinitely.

---

## 5. Mobile Navigation and Layout

### Navigation

- Ensure navigation is usable at 320px width and above.
- Use a clear menu button with an accessible name and correct expanded state.
- Trap focus only when a true modal/drawer is open and restore focus when it closes.
- Support Escape to close overlays.
- Prevent background scrolling while a full-screen mobile menu is open.
- Keep primary contact and work links easy to reach without overcrowding.
- Avoid exposing the full desktop command/navigation density on small screens.

### Homepage

- Stack hero CTAs cleanly when space is limited.
- Prevent the supporting line and metric cards from becoming tiny or compressed.
- Keep card padding and typography readable.
- Avoid extremely long single-column pages with every technical component expanded.
- Collapse or defer technical artifacts on small screens where appropriate.

### Project cards

- Keep approved thumbnails at stable aspect ratios.
- Prevent status and category labels from pushing titles below the useful preview area.
- Avoid horizontal stack tags that overflow.
- Allow technology lists to wrap, truncate accessibly, or move into Quick Spec.

### Case studies

- Prevent full-width screenshots from becoming unreadable.
- Provide tap-to-enlarge/lightbox behavior only if accessible and stable.
- Use focused crops or captions where full screenshots contain tiny text.
- Ensure tables and diagrams have a usable small-screen alternative.

---

## 6. Architecture Visualizer and Interactive Components

Interactive components are differentiators but must degrade gracefully.

### Required behavior

- All controls must be reachable by keyboard.
- Nodes must use real buttons or appropriate interactive semantics.
- Selected, active, expanded, and running states must be programmatically communicated.
- Provide a static textual summary of the architecture.
- Provide a linear workflow list on small screens if the diagram becomes unreadable.
- Do not require drag, hover, or precise pointer interaction.
- Do not auto-run simulations.
- Stop or reduce animation when `prefers-reduced-motion` is enabled.
- Prevent canvas/SVG overflow from expanding the page width.
- Ensure event logs have an appropriate accessible label and do not steal focus.
- Announce meaningful state changes politely only when necessary; do not flood screen readers.

### Estimators and configurators

- Use proper labels, groups, and descriptions.
- Maintain visible selected states beyond color alone.
- Provide a clear Reset action.
- Do not present estimated output as an official quotation.
- Keep results readable without animation.
- Preserve selections when doing so is useful, but do not expose sensitive input in URLs or logs.

### Galleries and lightboxes

- Use keyboard-operable open/close controls.
- Support Escape.
- Restore focus to the triggering thumbnail.
- Provide accessible image descriptions.
- Avoid trapping the user in zoom/pan behavior.

---

## 7. Accessibility Audit

Target WCAG 2.2 AA where practical and appropriate to the existing product.

### Structure

- One clear page-level heading.
- Logical heading order.
- Semantic landmarks for header, navigation, main content, complementary content, and footer.
- Skip-to-content link.
- Descriptive page titles.
- Meaningful link text.
- No duplicate IDs.

### Keyboard and focus

- Every interactive control is keyboard operable.
- Focus order follows visual and reading order.
- Focus is always visible.
- Sticky elements do not cover focused content.
- No keyboard traps.
- Modals, drawers, menus, accordions, tabs, filters, visualizers, galleries, and forms have appropriate behavior.

### Contrast and typography

- Audit muted grey text, gold-on-cream combinations, status badges, disabled controls, code blocks, and placeholder text.
- Do not rely on color alone.
- Maintain readable body size and line height.
- Avoid extremely small uppercase metadata.
- Support zoom to 200% without loss of content or functionality.
- Avoid fixed-height containers that clip translated, zoomed, or wrapped text.

### Forms

- Every input has a persistent label.
- Required fields are indicated in text, not color alone.
- Instructions appear before they are needed.
- Validation messages identify the field and correction.
- Errors are programmatically associated with inputs.
- Submission states are understandable without terminal jargon.
- Do not clear user input after a failed submission.
- Confirmation messages are announced appropriately.

### Motion

- Respect `prefers-reduced-motion` across Framer Motion, CSS animations, smooth scrolling, counters, marquees, streams, diagrams, and page transitions.
- Remove unnecessary parallax.
- Avoid flashing content.
- Pause non-essential continuous movement.

### Images, charts, code, and diagrams

- Provide useful alt text.
- Supply textual summaries for charts and diagrams.
- Keep code blocks scrollable without causing page-level overflow.
- Do not convey status only through red/green color.
- Ensure syntax highlighting remains readable in both themes.

---

## 8. Content Density and Progressive Disclosure

Phase 2 makes the homepage more approachable; Phase 3 ensures that technical density does not overwhelm devices or assistive technology.

- Default to concise summaries.
- Reveal deep technical specifications on demand.
- Preserve crawlable descriptions outside purely client-rendered interactions.
- Avoid rendering every tab panel and heavy chart simultaneously when hidden.
- Keep FAQ answers complete, but use an accessible accordion if needed.
- Do not truncate critical service, privacy, status, or claims information.
- Ensure the mobile reading order remains coherent if desktop grids are rearranged.

---

## 9. Links, Routes, Metadata and Error Handling

- Crawl or programmatically check all internal links.
- Verify every public case-study route.
- Verify external live demos.
- Clearly label unavailable demos rather than linking to broken pages.
- Verify Resume/CV download.
- Verify email and WhatsApp links without sending messages.
- Verify navigation anchors after homepage reordering.
- Ensure the active navigation state remains accurate.
- Provide a useful 404 page with routes back to Work and Contact.
- Ensure canonical URLs, titles, descriptions, Open Graph images, and social preview metadata resolve without errors.
- Avoid indexing internal prototype routes, sensitive assets, or source artifacts that are not intended to be public.
- Check robots and sitemap behavior without changing intentional exclusions.

---

## 10. Privacy and Security Hygiene

This is a limited public-portfolio hygiene pass, not a penetration test or security certification.

- Search public assets and generated output for secrets, tokens, private endpoints, personal addresses, private phone numbers, internal company figures, and unredacted user data.
- Ensure `.env` files are not committed or served.
- Remove source maps from public delivery only if consistent with the project's debugging and deployment strategy; do not hide errors instead of fixing them.
- Avoid injecting raw HTML from untrusted content.
- Add safe external-link attributes where appropriate.
- Avoid exposing contact-form credentials or direct service keys in client bundles.
- Ensure error messages do not disclose infrastructure details.
- Preserve privacy/redaction disclosures established in Phase 1.

Do not claim that this audit makes the portfolio secure, compliant, or enterprise-ready.

---

## 11. Verification Matrix

### Routes

- Homepage
- All Selected Work case studies
- Writings index
- At least one writing detail page
- Services/contact section
- Artifacts route if separate
- Resume/CV download
- 404 route

### Viewports

- 320 × 568
- 360 × 800
- 390 × 844
- 768 × 1024
- 1280 × 800
- 1440 × 900

Use available browser/device tooling; exact height may vary. Width coverage is more important than matching every device model.

### Interaction modes

- Mouse/pointer
- Keyboard only
- Touch-size viewport
- Reduced motion
- 200% zoom
- Light and dark theme if both exist

### Network/performance

- Production build on a clean load
- Repeat visit where caching exists
- Throttled mobile profile when supported
- No-JavaScript or failed-client-script graceful reading where the framework permits it

---

## 12. Phase 3 Non-Goals

Do not perform:

- Full redesign
- Rebranding
- New case-study narratives
- New testimonials or results
- New project features
- Complete SEO content strategy
- New analytics platform
- Major framework migration
- Dependency upgrades unrelated to demonstrated issues
- Security certification
- Premature microservice or backend work

---

## 13. IDE Execution Prompt

```text
You are updating an existing portfolio repository for Ahlul Firdaus.

Task

Execute Phase 3: Technical Polish — performance, mobile, accessibility, and reliability.

Read Portfolio-Phase-3-Technical-Polish-Brief-and-IDE-Prompt.md in full and use it as the implementation and acceptance-criteria source of truth.

Prerequisites

Phase 1 Trust and Clarity and Phase 2 Approachable Homepage may already have changed copy, claims, project status, homepage hierarchy, services, biography, contact flow, and technical-content placement. Preserve those changes. Do not restore exaggerated language, unverified testimonials, or outdated homepage sections.

Authorization boundary

This task authorizes safe repository edits required for performance, responsive behavior, accessibility, link reliability, and related technical polish. It does not authorize deployment, analytics-account changes, external messages, credential changes, environment-file edits, or new product features.

Required workflow

1. Inspect repository structure, framework configuration, package scripts, image pipeline, font loading, route layout, metadata, client components, animations, charts, architecture visualizers, galleries, filters, estimator, search/command palette, forms, and test setup.

2. Before editing, report:
   - exact files intended for modification;
   - identified risks;
   - existing commands/tools available for formatting, lint, type-check, test, build, Lighthouse, bundle analysis, accessibility, and browser testing;
   - baseline measurements that can be collected safely.

3. Run a production build before major changes when practical. Record pre-existing warnings and failures separately.

4. Audit all public routes, with priority on:
   - homepage;
   - every Selected Work case study;
   - writings index and one detail page;
   - services/contact interactions;
   - Resume/CV download;
   - 404 behavior.

5. Performance:
   - reduce unnecessary client components and hydration;
   - isolate interactive components;
   - dynamically load heavy below-the-fold visualizers, charts, galleries, estimators, or code highlighters where safe;
   - avoid shipping case-study-only code on unrelated routes;
   - remove unused imports and unnecessary continuous timers/animations;
   - pause off-screen or hidden continuous activity;
   - preserve content and SEO when deferring interactive enhancement.

6. Images:
   - inventory large media;
   - preserve approved PNG masters;
   - use the existing optimized image component;
   - provide intrinsic dimensions or stable aspect ratios;
   - add responsive sizes;
   - lazy-load below-the-fold images;
   - keep the actual LCP image appropriately prioritized;
   - prevent galleries from downloading full-resolution assets for thumbnails;
   - preserve safe focal positions and alt text.

7. Fonts and third-party resources:
   - load only required font weights/subsets;
   - prevent font-related layout shift;
   - remove unused third-party scripts and libraries only after confirming they are unused;
   - defer non-critical external code.

8. Mobile:
   - test at 320, 360, 390, and 768px widths;
   - fix navigation density, CTA wrapping, card overflow, tag overflow, unreadable screenshots, tables, code blocks, diagrams, and fixed-width content;
   - provide linear/static alternatives for diagrams that do not fit small screens;
   - avoid expanding every technical section by default on mobile.

9. Accessibility:
   - target WCAG 2.2 AA where practical;
   - add/verify skip link, semantic landmarks, heading order, descriptive page titles, labels, alt text, and meaningful links;
   - verify keyboard operation and visible focus for navigation, menus, tabs, accordions, filters, project cards, visualizers, galleries/lightboxes, estimator, and forms;
   - fix keyboard traps and focus restoration;
   - ensure status is not communicated by color alone;
   - audit contrast and very small metadata;
   - support 200% zoom without clipped content;
   - provide textual summaries for charts and architecture diagrams.

10. Reduced motion:
    - audit CSS animation, Framer Motion, smooth scrolling, counters, marquees, terminal streams, diagram simulations, page transitions, and loading effects;
    - disable or substantially reduce non-essential motion when prefers-reduced-motion is set;
    - do not auto-run simulations;
    - stop unnecessary continuous movement.

11. Interactive architecture, galleries, and estimator:
    - use semantic controls;
    - communicate selected/expanded/running state programmatically;
    - support keyboard and Escape where applicable;
    - restore focus after modal/lightbox closure;
    - provide static readable summaries;
    - prevent SVG/canvas/page overflow;
    - keep estimator output explicitly preliminary, not an official quote.

12. Forms:
    - persistent labels;
    - clear required indicators;
    - accessible field errors;
    - human-language submission state;
    - preserve user input on failure;
    - accessible success confirmation;
    - do not add file upload or expose credentials.

13. Link and route audit:
    - verify internal routes and anchors;
    - verify external demos without modifying them;
    - verify Resume/CV download;
    - verify email/WhatsApp link construction without sending anything;
    - label unavailable demos;
    - confirm useful 404 behavior;
    - confirm canonical, title, description, Open Graph image, sitemap, and robots behavior.

14. Privacy/security hygiene:
    - scan public source and output for secrets, private endpoints, personal addresses, unapproved phone numbers, internal company data, and resident/customer information;
    - do not modify environment files;
    - do not claim security compliance;
    - fix client-exposed keys or unsafe public data only within the repository and report them clearly.

15. Run available validation after changes:
    - formatter/check;
    - lint;
    - TypeScript/type-check;
    - unit/integration tests;
    - production build;
    - accessibility checks;
    - browser/end-to-end smoke tests;
    - Lighthouse or equivalent lab audit;
    - bundle analysis if already supported or safely available.

16. Compare baseline and final results. Distinguish lab measurements from real-user field data. Do not insert unverified performance scores into public site copy.

17. Avoid unrelated refactors and dependency upgrades. Do not commit, push, or deploy unless explicitly requested.

Engineering targets

- LCP: 2.5s or better at the 75th percentile
- INP: 200ms or better at the 75th percentile
- CLS: 0.1 or better at the 75th percentile

Treat these as engineering targets. Lab tests alone do not prove field performance.

Final report

Return:

1. Concise summary of technical improvements.
2. Exact files changed.
3. Baseline and final measurements, including environment and whether each is lab or field data.
4. Images/media optimized and approximate size changes.
5. JavaScript/hydration/bundle changes.
6. Mobile issues fixed by viewport.
7. Accessibility issues fixed and any remaining limitations.
8. Link, route, metadata, Resume/CV, and external-demo results.
9. Privacy/security hygiene findings without exposing secret values.
10. Formatter, lint, type-check, test, production-build, accessibility, browser, Lighthouse, and bundle-analysis results.
11. Remaining issues requiring design decisions, external service access, real-device testing, or production field data.
```

---

## 14. Acceptance Criteria

Phase 3 is complete when:

- Baseline and final measurements are recorded where tooling permits.
- Homepage and public case studies render successfully in production build.
- Critical images have stable dimensions and appropriate loading priority.
- Below-the-fold media is deferred appropriately.
- Heavy interactive code is not unnecessarily shipped everywhere.
- Continuous animations do not waste resources off-screen or under reduced motion.
- Mobile navigation works at narrow widths.
- No page-level horizontal overflow remains at tested viewports.
- Project thumbnails, tags, tables, code blocks, screenshots, and diagrams remain usable on mobile.
- All major controls are keyboard operable.
- Focus is visible and restored appropriately after overlays.
- Semantic headings and landmarks are valid.
- Forms have labels, errors, and understandable states.
- Meaningful images have useful alt text.
- Charts and diagrams have textual alternatives.
- Color is not the only status indicator.
- Reduced-motion behavior is implemented.
- Internal links, anchors, case-study routes, Resume/CV, and intended public demos are verified.
- Unavailable demos are clearly labeled.
- Public output does not expose secrets or confidential data found during the audit.
- Performance scores are not added as marketing claims without field evidence.
- Phase 1 and Phase 2 content corrections remain intact.
- Existing checks and production build pass, or pre-existing failures are documented.
- No unrelated redesign, feature work, deployment, commit, or push occurs.

---

## 15. Deferred Final Review

Do not perform the final cross-phase portfolio review inside Phase 3.

After all planned phases are implemented, perform a separate final review covering:

- Positioning consistency
- Claims and evidence
- Homepage clarity
- Project-card and case-study alignment
- Services and conversion
- Performance and accessibility
- SEO and social previews
- Content quality
- Mobile and real-device behavior
- Remaining business-evidence gaps

