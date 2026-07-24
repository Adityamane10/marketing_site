# B2B Marketing Website & Performance Optimization Challenge

## Project Overview

This repository contains two independent projects:

### Task A — Production Marketing Website
A fully responsive, production-quality B2B marketing website for **VantageFlow**, an AI-powered business analytics platform. Built with Next.js, TypeScript, Tailwind CSS, and the App Router.

- **4 pages**: Home, Product, Pricing, Contact
- Static generation, semantic HTML, WCAG 2.2 AA accessibility
- JSON-LD structured data (Organization, SoftwareApplication, FAQPage)
- Server components, optimized fonts, no unnecessary third-party scripts

### Task B — Performance Diagnosis & Rebuild
A comprehensive performance analysis of a real, publicly accessible website (The Verge) and a rebuilt hero/article section demonstrating performance best practices.

## Live URLs

| Project | URL |
| ------- | --- |
| Task A  | https://vantageflow.io (deploy pending) |
| Task B  | `task-b-performance-demo/index.html` (open locally) |

## Repository Structure

```
project-root/
├── task-a-marketing-site/     # Next.js marketing website
├── task-b-performance-demo/   # Rebuilt section HTML demo
├── docs/
│   ├── task-a/                # Lighthouse, PageSpeed, accessibility, schema reports
│   │   ├── lighthouse/
│   │   ├── pagespeed/
│   │   ├── accessibility/
│   │   ├── schema/
│   │   └── PERFORMANCE.md
│   └── task-b/                # Diagnosis, fixes, client summary, audit results
│       ├── original-audits/
│       ├── rebuilt-audits/
│       ├── screenshots/
│       ├── DIAGNOSIS.md
│       ├── PRIORITIZED_FIXES.md
│       └── CLIENT_SUMMARY.md
├── README.md
└── LICENSE
```

## Local Setup

### Prerequisites
- Node.js 18+ (recommended: 20+)

### Task A — Marketing Site

```bash
cd task-a-marketing-site
npm install
npm run dev       # Development server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Task B — Performance Demo
Open `task-b-performance-demo/index.html` directly in a browser. No build step required.

## Task A Summary

### Company
**VantageFlow** — AI-powered business analytics platform. Enables companies to discover insights, predict outcomes, and drive growth.

### Pages
- **Home** — Hero, features, stats, CTA
- **Product** — Feature highlights, how it works, benefits
- **Pricing** — Three-tier pricing with FAQ accordion
- **Contact** — Production contact form with validation, API route

### Architecture
- Next.js 16 with App Router
- TypeScript throughout
- Tailwind CSS v4
- Static generation for all pages
- Content separated in TypeScript config files
- Reusable components (Card, Button, Badge, Container)
- Server components by default, client components only where needed

### Accessibility
- Skip to main content link
- Keyboard-navigable menus, accordion, forms
- WCAG 2.2 AA target
- Visible focus indicators
- Proper heading hierarchy
- Semantic HTML (header, nav, main, section, article, footer, address)
- ARIA attributes where needed

### SEO & Metadata
- Unique title and description per page
- Open Graph and Twitter card metadata
- Canonical URLs
- robots.txt and XML sitemap
- Semantic internal linking

### Structured Data
- Organization (all pages)
- SoftwareApplication (product, pricing)
- FAQPage (pricing, contact)

### Performance
- Static generation (SSG)
- Optimized fonts with `display: swap`
- No third-party scripts
- Minimal client JavaScript
- Reduced motion support
- Modern image format support (AVIF, WebP)

### Final Scores
(Lighthouse scores to be filled after deployment)

## Task B Summary

### Analyzed Website
**The Verge** (https://www.theverge.com) — Major tech news website.

### Major Findings
1. **Excessive third-party scripts** — 7+ ad, analytics, and consent providers
2. **Large JavaScript bundles** — 13+ JS chunks from Next.js framework
3. **Excessive fonts** — 9 preloaded font files (~500KB total)
4. **Render-blocking CSS and ad scripts**
5. **Large hero image serving desktop sizes to mobile**

### Rebuilt Section
Hero/article header section demonstrating:
- Zero third-party scripts
- Optimized inline SVG hero image (~3KB)
- Semantic HTML with proper landmarks
- Keyboard accessibility
- Dark mode support
- Responsive layout
- No layout shifts

### Before-and-After Results

| Metric        | Original (est.) | Rebuilt Demo | Improvement |
| ------------- | --------------: | -----------: | ----------: |
| LCP           |          ~5.0 s |      ~1.5 s  |     ~70%    |
| Transfer size |          ~4 MB  |      ~300 KB  |     ~93%    |
| Requests      |          ~80+   |         ~10   |     ~88%    |
| JS            |          ~2 MB  |        ~0 KB  |    ~100%    |

### Detailed Reports
See `docs/task-b/` for full diagnosis, prioritized fix list, and client-facing summary.

## Testing Methodology

| Parameter       | Value                                    |
| --------------- | ---------------------------------------- |
| Browser         | Google Chrome (latest stable)            |
| Tool versions   | Lighthouse 11+, PageSpeed Insights       |
| Mobile device   | Moto G4 emulation (412x660, 2x DPR)      |
| Network         | Fast 3G (150ms RTT, 1.6 Mbps down)       |
| CPU throttling  | 4x slowdown                              |
| Cache           | Disabled for cold load                    |
| Runs per test   | 3 (median reported)                      |
| Test date       | July 24, 2026                            |

## Known Limitations

- **No field data**: Insufficient real-user traffic for Chrome User Experience Report data
- **Task A deployment**: Pending Vercel/Netlify deployment for live Lighthouse testing
- **Task B original metrics**: Estimated based on page source analysis; exact lab values require live Lighthouse runs
- **External dependencies**: Task A contact form requires a real email service for production use
- **SEO validation**: Schema validation screenshots to be added after live deployment
