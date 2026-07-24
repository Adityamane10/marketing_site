# VantageFlow — B2B Marketing Website

A fully responsive, production-quality B2B marketing website for **VantageFlow**, an AI-powered business analytics platform. Built with Next.js, TypeScript, Tailwind CSS, and the App Router.

- **4 pages**: Home, Product, Pricing, Contact
- Static generation, semantic HTML, WCAG 2.2 AA accessibility
- JSON-LD structured data (Organization, SoftwareApplication, FAQPage)
- Server components, optimized fonts, no unnecessary third-party scripts

## Live URL

https://vantageflow.io (deploy pending)

## Local Setup

```bash
npm install
npm run dev       # localhost:3000
npm run build
npm run start
npm run lint
```

## Structure

```
├── src/app/           # Pages + layout + API route
├── src/components/    # Layout, sections, UI, forms, SEO
├── src/content/       # All page content (editable by content team)
├── src/config/        # Centralized metadata
├── src/types/         # TypeScript interfaces
├── src/lib/           # Utilities
├── docs/              # Lighthouse, schema, accessibility evidence
└── public/            # Static assets
```

## Deploy to Vercel

```bash
npx vercel --prod
```

Or import the repo at https://vercel.com/new — framework auto-detects Next.js.
