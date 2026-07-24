# VantageFlow — B2B Marketing Website

A fully responsive, production-quality B2B marketing website for **VantageFlow**, an AI-powered business analytics platform. Built with Next.js, TypeScript, Tailwind CSS, and the App Router.

- **4 pages**: Home, Product, Pricing, Contact
- Static generation, semantic HTML, WCAG 2.2 AA accessibility
- JSON-LD structured data (Organization, SoftwareApplication, FAQPage)
- Server components, optimized fonts, no unnecessary third-party scripts

## Live URL

https://vantageflow.io (deploy pending)

## Repository Structure

```
task-a-marketing-site/
├── src/
│   ├── app/           # Pages + layout + API route
│   ├── components/    # Layout, sections, UI, forms, SEO
│   ├── content/       # All page content (editable by content team)
│   ├── config/        # Centralized metadata config
│   ├── types/         # TypeScript interfaces
│   └── lib/           # Utilities
├── docs/              # Lighthouse, schema, accessibility evidence
├── public/            # Static assets
└── package.json
```

## Local Setup

### Prerequisites
- Node.js 18+ (recommended: 20+)

```bash
cd task-a-marketing-site
npm install
npm run dev       # Development server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Task Summary

### Company
**VantageFlow** — AI-powered business analytics platform.

### Pages
- **Home** — Hero, features, stats, CTA
- **Product** — Feature highlights, how it works, benefits
- **Pricing** — Three-tier pricing with FAQ accordion
- **Contact** — Production contact form with validation, API route

### Architecture
- Next.js 16 with App Router
- TypeScript throughout, Tailwind CSS v4
- Static generation for all pages
- Content separated in TypeScript config files (content team can update without touching layout)
- Server components by default, client components only for interactive elements

### Accessibility
- Skip to main content link, keyboard-navigable menus and forms
- WCAG 2.2 AA target with visible focus indicators
- Semantic HTML (header, nav, main, section, article, aside, footer, address)
- Proper heading hierarchy, ARIA attributes where needed

### SEO & Metadata
- Unique title, description, Open Graph, and Twitter card per page
- Canonical URLs, robots.txt, XML sitemap

### Structured Data
- Organization (all pages)
- SoftwareApplication (product, pricing)
- FAQPage (pricing, contact)

### Performance
- Static generation, optimized fonts with display:swap
- No third-party scripts, minimal client JavaScript
- Reduced motion support, modern image formats (AVIF, WebP)

### Final Scores
(Lighthouse scores to be filled after deployment)

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

- No field data yet (insufficient real-user traffic for CrUX)
- Lighthouse/schema testing pending live deployment
- Contact form uses a mock API route; needs real email service for production
