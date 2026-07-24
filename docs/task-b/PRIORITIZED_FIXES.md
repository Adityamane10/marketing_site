# Prioritized Fix List

## Impact vs Effort Matrix

```
                    HIGH EFFORT
                         │
                         │
     P2: JS bundles      │    Not recommended:
     Reduce framework    │    Replace Next.js entirely
     overhead            │    Remove all ads
                         │
─────────────────────────┼─────────────────────────
                         │
     P0: LCP image       │    P1: Defer ad scripts
     Optimize hero img   │    Lazy-load GPT/APS
     Set explicit sizes  │    Post-LCP ad loading
                         │
     P0: Fonts           │    P1: Inline critical CSS
     Reduce font count   │    Defer non-critical CSS
     Subset + WOFF2      │
                         │
                    LOW EFFORT
```

## Prioritized Recommendations

### P0 — Critical

| Priority | Recommendation                                       | Impact | Effort | Reason                                                              |
| -------- | ---------------------------------------------------- | -----: | -----: | ------------------------------------------------------------------- |
| P0       | Optimize LCP image (AVIF, correct mobile sizing)     |   High |    Low | Directly improves LCP, the most important CWV metric                |
| P0       | Reduce font count to 2 families, subset, WOFF2 only  |   High |    Low | Saves 300-500KB of bandwidth, improves LCP and FCP                 |
| P0       | Add explicit width/height to hero image              |   High |    Low | Eliminates CLS from image loading                                   |
| P0       | Set `font-display: swap` on all fonts                |   High |    Low | Prevents invisible text (FOIT), improves LCP                        |

### P1 — High Priority

| Priority | Recommendation                                       | Impact | Effort | Reason                                                              |
| -------- | ---------------------------------------------------- | -----: | -----: | ------------------------------------------------------------------- |
| P1       | Lazy-load ad scripts after LCP                       |   High | Medium | Reduces main-thread blocking, improves TBT and INP                  |
| P1       | Inline critical CSS, defer non-critical CSS bundles  | Medium | Medium | Improves FCP by 0.3-0.5s                                            |
| P1       | Implement route-based code splitting                 |   High | Medium | Reduces JS per page, improves TBT and INP                           |
| P1       | Load OneTrust consent async                         | Medium |    Low | Reduces render-blocking overhead                                    |

### P2 — Medium Priority

| Priority | Recommendation                                       | Impact | Effort | Reason                                                              |
| -------- | ---------------------------------------------------- | -----: | -----: | ------------------------------------------------------------------- |
| P2       | Tree-shake unused JS, reduce bundle size             | Medium |   High | Large effort for incremental gain (framework is already optimized)  |
| P2       | Implement intersection observer for below-fold media  | Medium |    Low | Reduces initial transfer size, improves LCP on slow connections      |
| P2       | Use responsive image sizes strictly for mobile       | Medium |    Low | Ensures mobile never downloads desktop-sized images                  |

### P3 — Low Priority

| Priority | Recommendation                                       | Impact | Effort | Reason                                                              |
| -------- | ---------------------------------------------------- | -----: | -----: | ------------------------------------------------------------------- |
| P3       | Add resource hints (preconnect, dns-prefetch) for CDNs|    Low |    Low | Already partially implemented; minimal additional gain              |
| P3       | Convert PNG icons to SVG                             |    Low |    Low | Marginal savings on favicon/icon files                              |

### Not Recommended

| Finding                                                     | Reason for Skipping                                                |
| ----------------------------------------------------------- | ------------------------------------------------------------------ |
| Replace Next.js with a static site generator                | Complete rebuild not feasible; incremental improvements better     |
| Remove all third-party ads                                  | Core business model depends on ad revenue                           |
| Micro-optimize individual CSS properties                    | No measurable impact on Core Web Vitals                             |
| Remove all JavaScript animation                             | Very minimal JS animation; no significant gain                      |
| Switch to different hosting/CDN                             | Existing CDN setup is already reasonable; marginal improvement     |

## Implementation Sequence

### Phase 1 (Days 1-5): Quick Wins
1. P0: Optimize hero image sizes and format
2. P0: Add explicit image dimensions
3. P0: Reduce font families and subset
4. P0: Ensure `font-display: swap` on all fonts
5. P1: Load OneTrust async

### Phase 2 (Days 6-15): Structural Changes
6. P1: Implement critical CSS inlining
7. P1: Defer ad scripts until after LCP
8. P2: Intersection observer for lazy loading

### Phase 3 (Days 16-30): Deep Optimization
9. P1: Route-based code splitting optimization
10. P2: Tree-shaking and bundle analysis
11. P3: Icon and asset cleanup
