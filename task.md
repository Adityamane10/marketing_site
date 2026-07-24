# B2B Marketing Website and Performance Optimization Challenge

## Role

Act as a senior frontend engineer, accessibility specialist, technical SEO expert, and web performance consultant.

Complete both tasks described below using production-quality development practices. The final submission must demonstrate strong frontend architecture, responsive design, semantic HTML, accessibility, structured data, technical SEO, performance optimization, diagnostic ability, and professional client communication.

Do not use page builders, pre-built website templates, or copied website sections.

---

# Recommended Technology Stack

Use the following stack unless a technical requirement justifies an alternative:

* Next.js with App Router
* React
* TypeScript
* CSS Modules, Tailwind CSS, or well-structured global CSS
* Static generation wherever appropriate
* ESLint
* Prettier
* Lighthouse
* PageSpeed Insights
* Chrome DevTools Performance panel
* Schema Markup Validator or Rich Results Test

The application must be deployable on Vercel, Netlify, or another publicly accessible hosting platform.

---

# TASK A — Production Marketing Website

## Objective

Build a polished, responsive, multi-page marketing website for a fictional B2B software company.

The website should look and behave like a real production website rather than a basic coding demonstration.

Create an original fictional company, product name, branding system, content, value proposition, pricing structure, and target audience.

Example product categories include:

* Business automation software
* CRM platform
* Analytics software
* Project management software
* AI-powered business platform
* Customer support software
* Workforce management software

Do not copy the design, branding, content, or layout of an existing company.

---

## Required Pages

Create at least the following four pages:

1. Home
2. Product
3. Pricing
4. Contact

Additional pages such as About, Security, Features, Integrations, Privacy Policy, or Terms may be added when they improve the submission.

---

## 1. Architecture and Component Structure

Create a scalable project structure that allows a content team to update page content without modifying layout or component code.

Requirements:

* Use shared layout components.
* Use reusable UI components.
* Separate page content from presentation where practical.
* Store repeated content in structured TypeScript, JSON, or configuration files.
* Avoid duplicating navigation, footer, buttons, cards, forms, FAQ items, pricing plans, and metadata logic.
* Use clear component names and folder organization.
* Keep components focused and reusable.
* Avoid oversized components containing an entire page.
* Use TypeScript types or interfaces for structured content.
* Implement a centralized metadata configuration.
* Create reusable section components where appropriate.

Suggested structure:

```text
src/
├── app/
│   ├── page.tsx
│   ├── product/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   ├── forms/
│   └── seo/
├── content/
├── config/
├── lib/
├── types/
└── styles/
```

The final structure may differ, but it must remain clean, scalable, and easy to understand.

---

## 2. Visual and Responsive Design

Create a professional B2B SaaS design suitable for a real software company.

Requirements:

* Mobile-first responsive layout
* Clear visual hierarchy
* Consistent typography
* Consistent spacing system
* Professional color palette
* Responsive navigation
* Mobile navigation menu
* Strong hero section
* Clear calls to action
* Product feature sections
* Customer or business-benefit sections
* Pricing cards
* FAQ section
* Contact form
* Footer with useful navigation
* Proper hover, active, focus, loading, success, and error states
* No horizontal overflow
* No layout breakage at common screen sizes

Test at minimum:

* 320px
* 375px
* 768px
* 1024px
* 1440px

The design must not depend on excessive animation. Any animation must be subtle, purposeful, and performance-friendly.

Respect the user’s `prefers-reduced-motion` setting.

---

## 3. Semantic HTML

Use semantic HTML throughout the website.

Expected elements include:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `aside`, where appropriate
* `footer`
* `address`, where appropriate
* Native `button` elements for actions
* Native links for navigation
* Correctly associated form labels

Do not use generic `div` elements where a semantic HTML element is more appropriate.

Each page must contain:

* One clear primary `h1`
* Logically nested `h2`, `h3`, and lower-level headings
* Meaningful page landmarks
* Descriptive link text
* Descriptive image alternative text

Do not skip heading levels purely for visual styling.

---

## 4. Accessibility

The website must be fully usable with a keyboard.

Requirements:

* All interactive elements must be keyboard accessible.
* Use a visible focus indicator.
* Navigation menus must support keyboard interaction.
* Mobile menu state must be communicated properly.
* Add a “Skip to main content” link.
* Forms must include visible labels.
* Validation errors must be understandable and associated with their fields.
* Required fields must be identified programmatically.
* Success and error messages must be announced appropriately.
* Decorative images must use empty alternative text.
* Informative images must use meaningful alternative text.
* Icon-only buttons must have accessible names.
* Do not rely on color alone to communicate meaning.
* Text and UI elements must meet WCAG contrast requirements.
* Modal or dialog components, if used, must manage focus correctly.
* Avoid unnecessary ARIA attributes.
* Prefer native HTML behavior over custom ARIA implementations.

Target WCAG 2.2 Level AA compliance.

Test the application using:

* Keyboard-only navigation
* Lighthouse accessibility audit
* Browser accessibility tree
* axe DevTools or an equivalent accessibility tool
* Screen-reader-friendly labels and landmarks

---

## 5. Technical SEO and Metadata

Every page must include unique and correct metadata.

Include:

* Page title
* Meta description
* Canonical URL
* Open Graph title
* Open Graph description
* Open Graph URL
* Open Graph image
* Open Graph type
* Twitter card metadata
* Robots directives where appropriate

Also implement:

* `robots.txt`
* XML sitemap
* Semantic internal linking
* Descriptive URLs
* Descriptive link text
* Favicon and application icons where appropriate

Avoid duplicate page titles and descriptions.

Metadata should accurately represent each page rather than using the same content globally.

---

## 6. Structured Data

Add valid JSON-LD structured data.

Required schemas:

* `Organization`
* `Product` or `Service`
* `FAQPage` on pages containing visible FAQ content

Include relevant properties such as:

* Name
* URL
* Logo
* Description
* Contact information
* Same-as links
* Product or service name
* Brand
* Offers or pricing details
* FAQ questions and accepted answers

Requirements:

* Structured data must match visible page content.
* Do not include hidden FAQ content only for search engines.
* Do not create misleading reviews, ratings, customers, or business claims.
* Avoid duplicate structured-data entities.
* Use stable entity IDs where appropriate.
* Validate all schemas before submission.

Provide screenshots or exported results from:

* Schema Markup Validator
* Google Rich Results Test, where supported

---

## 7. Contact Form

Create a production-quality contact form with fields such as:

* Full name
* Work email
* Company name
* Company size
* Subject or inquiry type
* Message
* Consent checkbox, where appropriate

Requirements:

* Client-side validation
* Server-side validation or a clearly documented mock API
* Accessible labels and error messages
* Loading state
* Success state
* Failure state
* Prevention of repeated submissions
* Basic spam protection such as a honeypot field
* No exposed secrets
* Appropriate input types and autocomplete attributes

The form does not need to send real email, but its submission behavior must work through an API route or documented mock service.

---

## 8. Core Web Vitals and Performance

The website must target green Core Web Vitals results on mobile.

Performance goals:

* Largest Contentful Paint: 2.5 seconds or less
* Interaction to Next Paint: 200 milliseconds or less
* Cumulative Layout Shift: 0.1 or less

Target mobile Lighthouse scores:

* Performance: 90 or higher
* Accessibility: 95 or higher
* Best Practices: 95 or higher
* SEO: 95 or higher

Optimization requirements:

* Use optimized images.
* Specify image dimensions or aspect ratios.
* Avoid layout shifts.
* Use responsive image sizes.
* Prefer modern image formats.
* Lazy-load below-the-fold media.
* Do not lazy-load the primary LCP image.
* Minimize client-side JavaScript.
* Prefer server components where appropriate.
* Avoid unnecessary third-party scripts.
* Optimize fonts.
* Use `font-display` appropriately.
* Preload only genuinely critical resources.
* Remove unused CSS and JavaScript.
* Avoid large animation libraries unless necessary.
* Prevent hydration-related layout changes.
* Use code splitting where appropriate.
* Keep the DOM structure reasonable.
* Avoid render-blocking resources.
* Use caching headers where supported.

Document each major performance decision and explain which metric it improves.

---

## 9. TASK A Evidence

Create a folder such as:

```text
docs/
└── task-a/
    ├── lighthouse/
    ├── pagespeed/
    ├── accessibility/
    ├── schema/
    └── PERFORMANCE.md
```

Include:

* Mobile Lighthouse reports for all major pages
* Desktop Lighthouse reports
* PageSpeed Insights screenshots or links
* Structured-data validation evidence
* Accessibility testing evidence
* Core Web Vitals summary
* Testing date
* Test environment
* Device or throttling configuration
* Performance optimization explanation
* Known limitations, if any

Do not claim field data is available when the deployed website does not have enough Chrome User Experience Report data.

Clearly distinguish between:

* Field data
* Lab data
* Lighthouse results
* PageSpeed Insights lab results

---

# TASK B — Diagnose and Improve a Slow Website

## Objective

Select a real, publicly accessible website that performs poorly on mobile.

The selected website:

* Must not belong to the evaluator.
* Must not be a website created for Task A.
* Must be accessible without authentication.
* Must have a meaningful page section that can be independently rebuilt.
* Should have measurable mobile performance problems.
* Must not require copying proprietary source code.

Use the website only for analysis and comparison. Recreate the selected section from scratch based on visible behavior and layout.

Do not copy protected assets, source code, written content, or branding into the public demo unless legally permitted. Generic replacement content and placeholder branding may be used.

---

## 1. Website Selection

Document:

* Website name
* Tested page URL
* Reason for selecting it
* Date and time of testing
* Location used for testing
* Device and network conditions
* Whether field data was available
* Initial performance results

Run multiple tests to reduce one-off measurement variation.

Use either the median result or clearly explain the selected representative run.

---

## 2. Performance Diagnosis

Perform a complete mobile performance analysis.

Use appropriate tools such as:

* PageSpeed Insights
* Lighthouse
* Chrome DevTools Performance panel
* Chrome DevTools Network panel
* WebPageTest
* Chrome User Experience Report data
* Coverage panel
* Performance Insights
* Network request waterfalls

Analyze both field and lab data when available.

Important: Do not describe PageSpeed Insights lab results as field data.

---

## 3. Metrics to Analyze

Review at minimum:

* Largest Contentful Paint
* Interaction to Next Paint
* Total Blocking Time
* Cumulative Layout Shift
* First Contentful Paint
* Speed Index
* Time to First Byte
* Main-thread activity
* JavaScript execution time
* Render-blocking resources
* Image transfer size
* Font loading
* Third-party scripts
* Request count
* Total transferred bytes
* DOM size
* Long tasks
* Cache behavior
* Resource priority
* Layout shifts
* Unused JavaScript
* Unused CSS

---

## 4. Root-Cause Analysis

Do not merely list Lighthouse opportunities.

For every important problem, identify:

1. The affected metric
2. The visible or technical symptom
3. The responsible resource, component, script, image, request, or rendering behavior
4. Why it causes the performance issue
5. The recommended fix
6. Expected impact
7. Approximate implementation difficulty
8. Evidence supporting the conclusion

Example format:

| Finding               | Evidence                                      | Root Cause                                              | Metric Impact   | Recommendation                                                                    |
| --------------------- | --------------------------------------------- | ------------------------------------------------------- | --------------- | --------------------------------------------------------------------------------- |
| Hero image delays LCP | Image starts loading after CSS and JavaScript | Hero image is CSS background and not discoverable early | High LCP impact | Use an HTML image, responsive sources, correct priority, and compressed AVIF/WebP |

Avoid unsupported assumptions.

State clearly when a finding is inferred rather than directly confirmed.

---

## 5. Prioritized Fix List

Prioritize recommendations using impact and implementation cost.

Use categories such as:

* P0 — Critical
* P1 — High priority
* P2 — Medium priority
* P3 — Low priority
* Not recommended

For each recommendation include:

* Problem
* Related metric
* Estimated impact
* Estimated effort
* Risk
* Dependencies
* Implementation recommendation
* Reason for its priority

Use an impact-versus-effort matrix where helpful.

Recommended table:

| Priority | Recommendation                         | Impact | Effort | Reason                                                   |
| -------- | -------------------------------------- | -----: | -----: | -------------------------------------------------------- |
| P0       | Optimize and prioritize the LCP image  |   High |    Low | Directly addresses the largest mobile rendering delay    |
| P1       | Defer non-critical third-party scripts |   High | Medium | Reduces main-thread blocking and improves responsiveness |

---

## 6. Explicitly State What Not to Fix

Include a dedicated section explaining which findings are not worth prioritizing.

Examples may include:

* Small image savings with no meaningful metric improvement
* Minor accessibility warnings unrelated to the performance scope
* Requests already below practical size thresholds
* Changes with high engineering cost and negligible user impact
* Third-party behavior the site cannot realistically control
* Micro-optimizations that do not affect Core Web Vitals

For every skipped fix, explain why the expected benefit does not justify the cost.

---

## 7. Rebuild One Section

Select one important section of the analyzed page and rebuild it as a standalone demo.

Suitable sections include:

* Hero section
* Product listing section
* Article header
* Navigation header
* Promotional banner
* Image gallery
* Pricing section
* Featured-content section

The rebuilt section must:

* Reproduce the section’s purpose and approximate structure
* Be built from scratch
* Use generic or original content and assets
* Be responsive
* Be keyboard accessible
* Use semantic HTML
* Use optimized media
* Minimize JavaScript
* Avoid unnecessary third-party code
* Prevent layout shifts
* Demonstrate the proposed performance improvements

Do not embed or proxy the original website.

---

## 8. Before-and-After Measurement

Measure the original section or page and the rebuilt demo using comparable conditions.

Keep the following consistent:

* Device emulation
* Network throttling
* CPU throttling
* Browser
* Test location
* Tool version
* Cache state
* Number of test runs

Run at least three tests where practical and report the median.

Compare metrics such as:

* LCP
* FCP
* CLS
* TBT
* Speed Index
* Total transfer size
* Request count
* JavaScript transferred
* Main-thread execution time

Use a comparison table:

| Metric        | Original | Rebuilt Demo |   Improvement |
| ------------- | -------: | -----------: | ------------: |
| LCP           |    5.2 s |        1.8 s |    65% faster |
| CLS           |     0.24 |         0.02 | 92% reduction |
| TBT           |   480 ms |        60 ms | 87% reduction |
| Transfer size |   3.8 MB |       420 KB |   89% smaller |

Do not fabricate results. Insert real numbers only after completing the measurements.

If exact section-level metrics are unavailable, explain the measurement limitation and use the most defensible page-level comparison.

---

## 9. Client-Facing Summary

Write a separate summary for a non-technical client.

The summary should:

* Avoid technical jargon
* Explain how the performance problems affect users
* Explain the business impact
* Identify the highest-priority improvements
* Explain why certain minor issues should not be prioritized
* Summarize the rebuilt demonstration
* Include measurable results
* Recommend clear next steps

Suggested structure:

### What We Found

Explain the most important issue in plain language.

### Why It Matters

Connect the issue to visitor experience, conversion, engagement, and trust.

### What We Recommend

Present the highest-value improvements in priority order.

### What the Demonstration Proved

Explain the before-and-after result.

### Next Steps

Recommend an implementation sequence.

Do not overwhelm the client with raw audit terminology.

---

# Repository Requirements

Use a clean repository structure.

Suggested structure:

```text
project-root/
├── task-a-marketing-site/
├── task-b-performance-demo/
├── docs/
│   ├── task-a/
│   │   ├── lighthouse/
│   │   ├── pagespeed/
│   │   ├── accessibility/
│   │   ├── schema/
│   │   └── PERFORMANCE.md
│   └── task-b/
│       ├── original-audits/
│       ├── rebuilt-audits/
│       ├── screenshots/
│       ├── DIAGNOSIS.md
│       ├── PRIORITIZED_FIXES.md
│       └── CLIENT_SUMMARY.md
├── README.md
└── LICENSE
```

A monorepo structure may also be used.

---

# README Requirements

The root `README.md` must include:

## Project Overview

Explain Task A and Task B.

## Live URLs

Include:

* Task A production website
* Task B rebuilt-section demo

## Repository Structure

Explain the purpose of important folders.

## Local Setup

Include:

* Required Node.js version
* Installation command
* Development command
* Production build command
* Production start command
* Lint command
* Test command, if implemented

Example:

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## Task A Summary

Include:

* Fictional company description
* Page list
* Architecture decisions
* Accessibility features
* SEO implementation
* Structured-data implementation
* Performance optimizations
* Final scores

## Task B Summary

Include:

* Analyzed website
* Major findings
* Prioritization method
* Rebuilt section
* Before-and-after results
* Links to detailed reports

## Testing Methodology

Document:

* Browser
* Tool versions
* Device emulation
* Network throttling
* CPU throttling
* Cache settings
* Number of runs
* Measurement date

## Known Limitations

Be transparent about unavailable field data, external scripts, hosting variation, or other constraints.

---

# Code Quality Requirements

The code must:

* Use TypeScript
* Avoid `any` unless justified
* Pass linting
* Build successfully
* Avoid console errors
* Avoid hydration errors
* Avoid broken links
* Avoid unused imports
* Avoid committed secrets
* Avoid unnecessary dependencies
* Use clear naming
* Include comments only where they add real value
* Handle errors gracefully
* Use reusable components
* Keep content maintainable
* Be suitable for public GitHub review

Do not create functionality that appears complete but does not work.

---

# Evidence and Integrity Requirements

All screenshots and reports must be based on real tests.

Do not:

* Fabricate Lighthouse scores
* Fabricate Core Web Vitals data
* Fabricate schema validation
* Label lab data as field data
* Claim accessibility compliance without testing
* Hide poor results
* modify screenshots to show better scores

For every report, include the test date and tested URL.

Where performance results vary between tests, report the median and explain the variation.

---

# Final Deliverables Checklist

## Task A

* [ ] Responsive production marketing website
* [ ] Home page
* [ ] Product page
* [ ] Pricing page
* [ ] Contact page
* [ ] Shared reusable components
* [ ] Maintainable content structure
* [ ] Semantic HTML
* [ ] Correct heading hierarchy
* [ ] Keyboard accessibility
* [ ] Accessible contact form
* [ ] Unique metadata on every page
* [ ] Open Graph metadata
* [ ] Organization structured data
* [ ] Product or Service structured data
* [ ] FAQPage structured data where appropriate
* [ ] Sitemap
* [ ] Robots configuration
* [ ] Lighthouse evidence
* [ ] PageSpeed evidence
* [ ] Accessibility evidence
* [ ] Schema validation evidence
* [ ] Live deployment URL
* [ ] Public GitHub repository

## Task B

* [ ] Real public website selected
* [ ] Mobile field data reviewed where available
* [ ] Mobile lab data collected
* [ ] Root causes identified
* [ ] Bottlenecks supported by evidence
* [ ] Fixes prioritized by impact and cost
* [ ] Low-value fixes explicitly rejected
* [ ] One section rebuilt from scratch
* [ ] Rebuilt demo deployed
* [ ] Before-and-after metrics recorded
* [ ] Diagnosis report completed
* [ ] Prioritized fix list completed
* [ ] Client-facing summary completed

---

# Evaluation Priorities

## Task A

| Evaluation Criterion                     |   Weight |
| ---------------------------------------- | -------: |
| Architecture and component structure     |      30% |
| Accessibility and semantics              |      25% |
| Structured data and metadata correctness |      20% |
| Core Web Vitals results                  |      25% |
| **Total**                                | **100%** |

## Task B

| Evaluation Criterion    |   Weight |
| ----------------------- | -------: |
| Diagnostic accuracy     |      30% |
| Prioritization judgment |      25% |
| Proof of improvement    |      25% |
| Client communication    |      20% |
| **Total**               | **100%** |

---

# Implementation Approach

Complete the work in the following order:

1. Plan the fictional B2B company and website content.
2. Define the design system and responsive layout.
3. Create the project architecture and shared components.
4. Implement the required pages.
5. Add accessibility and keyboard behavior.
6. Add page metadata and structured data.
7. Optimize images, fonts, JavaScript, and rendering.
8. Deploy Task A.
9. Run and document performance, accessibility, and schema tests.
10. Select a poorly performing public website for Task B.
11. Collect field and lab evidence.
12. Identify actual performance root causes.
13. Prioritize fixes using impact and implementation cost.
14. Rebuild one representative section.
15. Deploy the rebuilt demo.
16. Run comparable before-and-after tests.
17. Write the technical diagnosis and client-facing summary.
18. Verify every link, build command, report, and deliverable before submission.

---

# Final Instruction

Produce a complete, working, deployable solution rather than only an explanation or UI mock-up.

Before considering the project complete:

* Run the production build.
* Fix all build and lint errors.
* Test every page on mobile and desktop.
* Test keyboard navigation.
* Validate every JSON-LD block.
* Test the contact form.
* Check browser console errors.
* Run Lighthouse using deployed production URLs.
* Confirm all evidence files are included.
* Confirm all repository and deployment links work.
* Confirm that every reported metric is genuine and reproducible.
