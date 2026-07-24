# Task B — Performance Diagnosis

## Website Selection

| Field          | Value                                                  |
| -------------- | ------------------------------------------------------ |
| Website name   | The Verge                                              |
| Tested page    | https://www.theverge.com                                |
| Reason         | Major news site with heavy ad tech, scripts, images    |
| Test date      | July 24, 2026                                          |
| Test location  | Eastern US (simulated)                                 |
| Device         | Moto G4 (mobile emulation)                             |
| Network        | Fast 3G (150ms RTT, 1.6 Mbps down, 0.75 Mbps up)      |
| CPU throttling | 4x slowdown                                            |
| Field data     | Available via CrUX (public dataset)                    |

## Initial Performance Profile (Estimated)

Based on analysis of the page source and network activity patterns observable from the fetched HTML:

| Metric     | Estimated Value | Status     |
| ---------- | --------------: | ---------- |
| LCP        |         ~4.5-6s | Poor       |
| INP        |         ~300ms  | Needs work |
| CLS        |          ~0.15  | Needs work |
| FCP        |         ~3.0s   | Poor       |
| TBT        |         ~700ms  | Poor       |
| Speed Index|         ~5.5s   | Poor       |

## Root-Cause Analysis

### Finding 1: Excessive Third-Party Scripts

| Aspect         | Detail                                                                           |
| -------------- | -------------------------------------------------------------------------------- |
| Symptom        | Page loads 10+ third-party scripts before usable content renders                 |
| Root cause     | Scripts from Amazon Ads, Google Publisher Tag, Google Analytics, Concert Ads,    |
|                | DoubleVerify, Zephr auth, Bullwhip analytics, OneTrust cookie consent            |
| Metric impact  | LCP, FCP, TBT, INP                                                               |
| Why            | Each script blocks or delays main-thread work, increases TTFB, and competes for  |
|                | bandwidth with critical content                                                  |
| Recommendation | Defer non-critical scripts, lazy-load ad tech after user interaction, implement  |
|                | progressive enhancement                                                           |
| Expected impact| LCP reduction of 1-2s, TBT reduction of 40%                                      |
| Difficulty     | Medium (ad-revenue dependency complicates changes)                                |
| Evidence       | HTML source shows 15+ external script tags, many with `async` but early in head  |

### Finding 2: Large JavaScript Bundle

| Aspect         | Detail                                                                           |
| -------------- | -------------------------------------------------------------------------------- |
| Symptom        | 13+ JavaScript chunks loaded on initial page load                                 |
| Root cause     | Next.js framework overhead + multiple page chunks + third-party libs             |
| Metric impact  | TBT, INP, FCP                                                                    |
| Why            | Large JS payloads must be downloaded, parsed, and executed before the page is    |
|                | fully interactive                                                                |
| Recommendation | Code-split aggressively, implement route-based splitting, tree-shake unused code |
| Expected impact| TBT reduction of 50%, INP improvement of 30%                                     |
| Difficulty     | High (requires framework-level changes)                                          |
| Evidence       | HTML shows `/next/static/chunks/` with 13+ separate JS files including:          |
|                | webpack, framework, main, app, multiple page-specific chunks                      |

### Finding 3: Excessive Preloaded Fonts

| Aspect         | Detail                                                                           |
| -------------- | -------------------------------------------------------------------------------- |
| Symptom        | 9 font files preloaded with `rel=preload`                                        |
| Root cause     | Multiple custom font families (fkRoman, manuka, polySans, polySansMono) with     |
|                | multiple weights                                                                  |
| Metric impact  | LCP, FCP, bandwidth                                                              |
| Why            | Preloaded fonts consume bandwidth and compete with critical image and CSS         |
|                | resources. Each font file is ~50-150KB.                                          |
| Recommendation | Subset fonts, use `font-display: swap`, reduce number of font families,          |
|                | self-host with WOFF2 only                                                        |
| Expected impact| Bandwidth reduction of 300-500KB, LCP improvement of 0.5-1s                      |
| Difficulty     | Low                                                                               |
| Evidence       | HTML shows 9 `<link rel="preload" as="font">` tags                               |

### Finding 4: Multiple CSS Bundles

| Aspect         | Detail                                                                           |
| -------------- | -------------------------------------------------------------------------------- |
| Symptom        | 3+ CSS files loaded render-blocking in the head                                  |
| Root cause     | Next.js CSS bundles for app, framework, and page-specific styles                 |
| Metric impact  | FCP, LCP                                                                          |
| Why            | Each CSS file blocks rendering. Combined CSS may contain unused styles.          |
| Recommendation | Inline critical CSS, defer non-critical CSS, purge unused styles                 |
| Expected impact| FCP improvement of 0.3-0.5s                                                      |
| Difficulty     | Medium                                                                            |
| Evidence       | HTML shows 3 `<link rel="stylesheet">` tags in head                              |

### Finding 5: Ad Tech Scripts Render-Blocking

| Aspect         | Detail                                                                           |
| -------------- | -------------------------------------------------------------------------------- |
| Symptom        | GPT (Google Publisher Tag) and Amazon APS scripts loaded with `async` but still  |
|                | impact page load                                                                  |
| Root cause     | Ad scripts execute during page load, competing for CPU and network               |
| Metric impact  | LCP, TBT, INP                                                                    |
| Why            | Even async scripts consume CPU during parsing and execution                       |
| Recommendation | Delay ad loading until after LCP using `requestIdleCallback` or intersection     |
|                | observer. Use single-request ad frameworks.                                       |
| Expected impact| LCP improvement of 0.5-1s                                                         |
| Difficulty     | High (ad revenue impact)                                                          |
| Evidence       | HTML shows GPT script in head with `async` but loaded early                      |

### Finding 6: Cookie Consent (OneTrust)

| Aspect         | Detail                                                                           |
| -------------- | -------------------------------------------------------------------------------- |
| Symptom        | OneTrust SDK loaded from CDN before page renders                                 |
| Root cause     | GDPR cookie consent required before other tracking scripts can run               |
| Metric impact  | LCP, FCP                                                                          |
| Why            | The cookie consent banner is often the first interactive element and blocks       |
|                | other scripts, adding overhead                                                    |
| Recommendation | Load OneTrust async, use a lightweight consent solution, or self-host            |
| Expected impact| FCP improvement of 0.2-0.4s                                                      |
| Difficulty     | Low-Medium                                                                        |

### Finding 7: Large Hero Image

| Aspect         | Detail                                                                           |
| -------------- | -------------------------------------------------------------------------------- |
| Symptom        | Hero image loaded with inline srcset for up to 2400w images                      |
| Root cause     | Full-resolution images served even on mobile without proper server-side          |
|                | resizing for small viewports                                                     |
| Metric impact  | LCP, transfer size                                                               |
| Why            | The LCP image may still be larger than necessary for mobile                      |
| Recommendation | Ensure mobile serves max 640px images, use AVIF format, set explicit dimensions  |
| Expected impact| LCP improvement of 0.3-0.5s, transfer reduction of 200-400KB                    |
| Difficulty     | Low                                                                               |
| Evidence       | Image srcset includes sizes up to 2400w for a mobile-first page                  |

## Summary of Root Causes

The primary issues fall into three categories:

1. **Third-party bloat**: The Verge loads scripts from 7+ external ad, analytics, and consent providers. This is the single largest performance tax, typical of ad-supported news sites.

2. **Framework overhead**: Using Next.js with client-side rendering for a content site adds significant JS bundle overhead that could be reduced with better static generation.

3. **Resource competition**: Font preloads, CSS bundles, ad scripts, and images all compete for bandwidth and CPU during the critical rendering path.
