# Task A — Performance Optimization Documentation

## Company

**VantageFlow** — AI-powered business analytics platform.

## Performance Decisions

### 1. Font Loading

- **Decision**: Used `next/font/google` with `display: "swap"`.
- **Metric improved**: LCP, CLS.
- **Explanation**: Geist font is self-hosted via Next.js, eliminating external requests. `font-display: swap` ensures text remains visible while the font loads, preventing invisible text (FOIT). System font fallback prevents layout shift when the custom font loads.

### 2. Image Optimization

- **Decision**: Configured Next.js to use AVIF and WebP formats via `next.config.ts`.
- **Metric improved**: LCP, FCP, transfer size.
- **Explanation**: Modern formats provide 25-35% better compression than JPEG/PNG at equivalent quality. Next.js automatically generates responsive image sizes and serves the appropriate format.

### 3. Static Generation

- **Decision**: All pages are statically generated at build time.
- **Metric improved**: TTFB, FCP, LCP.
- **Explanation**: Static HTML is served immediately without server computation. Only the `/api/contact` route is dynamic.

### 4. Server Components

- **Decision**: Most components are server components by default. Only interactive components (Header mobile menu, FAQ accordion, ContactForm) use `"use client"`.
- **Metric improved**: TBT, INP, JavaScript size.
- **Explanation**: Minimizing client-side JavaScript reduces main-thread work, parsing time, and hydration overhead.

### 5. CSS

- **Decision**: Tailwind CSS v4 with JIT compilation.
- **Metric improved**: FCP, LCP.
- **Explanation**: Only used utility classes are included in the production CSS. No unused CSS is shipped.

### 6. No Third-Party Scripts

- **Decision**: Zero analytics, tracking, or external scripts.
- **Metric improved**: TBT, INP, LCP, request count.
- **Explanation**: Third-party scripts are the most common cause of performance regressions. Eliminating them entirely guarantees no unexpected slowdowns.

### 7. Reduced Motion

- **Decision**: `prefers-reduced-motion` query disables all animations and transitions.
- **Metric improved**: Accessibility, user experience.
- **Explanation**: Respects user system settings. Reduces CPU work on low-power devices.

### 8. Semantic HTML

- **Decision**: Uses `header`, `nav`, `main`, `section`, `article`, `footer`, `address` elements instead of generic divs.
- **Metric improved**: Accessibility (indirectly Lighthouse accessibility score).
- **Explanation**: Semantic HTML provides built-in accessibility without ARIA overhead.

## Core Web Vitals Targets

| Metric  | Target  | Status       |
| ------- | ------: | ------------ |
| LCP     | < 2.5s | TBD on deploy |
| INP     | < 200ms | TBD on deploy |
| CLS     | < 0.1  | TBD on deploy |

## Lighthouse Targets

| Category        | Target | Status       |
| --------------- | -----: | ------------ |
| Performance     |    90+ | TBD on deploy |
| Accessibility   |    95+ | TBD on deploy |
| Best Practices  |    95+ | TBD on deploy |
| SEO             |    95+ | TBD on deploy |

## Known Limitations

- Field data will not be available until the site has sufficient real-user traffic.
- All reported numbers will be lab data from Lighthouse until CrUX data accumulates.
- The site requires deployment to a production environment (Vercel, Netlify) for accurate performance testing.

## Testing Methodology

- Browser: Chrome
- Device: Moto G4 emulation (mobile), Desktop
- Network: Fast 3G throttling (mobile), No throttling (desktop)
- CPU: 4x slowdown (mobile)
- Cache: Disabled for first load
- Runs: 3 per page, median reported
- Date: To be filled after deployment
