import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            {site.hero.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 sm:text-xl">
            {site.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              {site.hero.cta}
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-8 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              {site.hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-xl border border-zinc-200 bg-white p-2 shadow-lg sm:p-4" aria-hidden="true">
          <div className="aspect-[16/9] rounded-lg bg-slate-50 overflow-hidden">
            <svg viewBox="0 0 800 450" className="w-full h-full block">
              <rect width="800" height="450" fill="#f8fafc" />
              <rect x="0" y="0" width="800" height="48" fill="#4f46e5" />
              <circle cx="20" cy="24" r="8" fill="rgba(255,255,255,0.3)" />
              <rect x="40" y="16" width="80" height="16" rx="4" fill="rgba(255,255,255,0.4)" />
              <rect x="140" y="16" width="60" height="16" rx="4" fill="rgba(255,255,255,0.2)" />
              <rect x="210" y="16" width="60" height="16" rx="4" fill="rgba(255,255,255,0.2)" />
              <rect x="700" y="14" width="80" height="20" rx="6" fill="rgba(255,255,255,0.3)" />
              <rect x="20" y="64" width="240" height="160" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <rect x="36" y="80" width="80" height="10" rx="3" fill="#e2e8f0" />
              <rect x="36" y="96" width="120" height="8" rx="3" fill="#f1f5f9" />
              <polyline points="36,140 60,130 84,145 108,120 132,135 156,110 180,125 204,100 228,115" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="108" cy="120" r="3" fill="#4f46e5" />
              <circle cx="156" cy="110" r="3" fill="#4f46e5" />
              <circle cx="204" cy="100" r="3" fill="#4f46e5" />
              <rect x="36" y="170" width="50" height="6" rx="2" fill="#4f46e5" opacity="0.3" />
              <rect x="96" y="170" width="30" height="6" rx="2" fill="#10b981" opacity="0.3" />
              <rect x="280" y="64" width="240" height="160" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <rect x="296" y="80" width="100" height="10" rx="3" fill="#e2e8f0" />
              <rect x="296" y="96" width="140" height="8" rx="3" fill="#f1f5f9" />
              <rect x="296" y="120" width="40" height="60" rx="3" fill="#4f46e5" opacity="0.6" />
              <rect x="344" y="135" width="40" height="45" rx="3" fill="#10b981" opacity="0.6" />
              <rect x="392" y="110" width="40" height="70" rx="3" fill="#f59e0b" opacity="0.6" />
              <rect x="440" y="125" width="40" height="55" rx="3" fill="#6366f1" opacity="0.6" />
              <rect x="296" y="198" width="60" height="6" rx="2" fill="#4f46e5" opacity="0.3" />
              <rect x="366" y="198" width="60" height="6" rx="2" fill="#10b981" opacity="0.3" />
              <rect x="540" y="64" width="240" height="160" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <rect x="556" y="80" width="70" height="10" rx="3" fill="#e2e8f0" />
              <rect x="556" y="96" width="110" height="8" rx="3" fill="#f1f5f9" />
              <circle cx="600" cy="140" r="24" fill="none" stroke="#4f46e5" strokeWidth="4" strokeDasharray="90 360" transform="rotate(-90 600 140)" />
              <circle cx="600" cy="140" r="24" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="60 360" transform="rotate(-90 600 140)" />
              <text x="600" y="145" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="bold" fill="#1e293b">76%</text>
              <circle cx="680" cy="128" r="4" fill="#4f46e5" />
              <rect x="692" y="124" width="60" height="8" rx="3" fill="#e2e8f0" />
              <circle cx="680" cy="148" r="4" fill="#e2e8f0" />
              <rect x="692" y="144" width="60" height="8" rx="3" fill="#f1f5f9" />
              <rect x="20" y="244" width="380" height="180" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <rect x="36" y="260" width="100" height="10" rx="3" fill="#e2e8f0" />
              <rect x="36" y="278" width="160" height="8" rx="3" fill="#f1f5f9" />
              <line x1="60" y1="320" x2="60" y2="400" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="140" y1="320" x2="140" y2="400" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="220" y1="320" x2="220" y2="400" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="300" y1="320" x2="300" y2="400" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="380" y1="320" x2="380" y2="400" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="40" y1="380" x2="400" y2="380" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="40" y1="350" x2="400" y2="350" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="40" y1="320" x2="400" y2="320" stroke="#e2e8f0" strokeWidth="1" />
              <polyline points="60,380 100,360 140,370 180,340 220,355 260,330 300,345 340,325 380,335" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="60,380 100,375 140,365 180,370 220,350 260,340 300,335 340,320 380,330" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3" />
              <rect x="420" y="244" width="360" height="180" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <rect x="436" y="260" width="100" height="10" rx="3" fill="#e2e8f0" />
              <rect x="436" y="278" width="130" height="8" rx="3" fill="#f1f5f9" />
              <rect x="451" y="310" width="60" height="30" rx="4" fill="#4f46e5" opacity="0.7" />
              <rect x="451" y="355" width="60" height="12" rx="2" fill="#4f46e5" opacity="0.2" />
              <rect x="525" y="310" width="60" height="30" rx="4" fill="#10b981" opacity="0.7" />
              <rect x="525" y="355" width="60" height="12" rx="2" fill="#10b981" opacity="0.2" />
              <rect x="599" y="310" width="60" height="30" rx="4" fill="#f59e0b" opacity="0.7" />
              <rect x="599" y="355" width="60" height="12" rx="2" fill="#f59e0b" opacity="0.2" />
              <rect x="673" y="310" width="60" height="30" rx="4" fill="#6366f1" opacity="0.7" />
              <rect x="673" y="355" width="60" height="12" rx="2" fill="#6366f1" opacity="0.2" />
              <text x="481" y="328" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill="white">$12K</text>
              <text x="555" y="328" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill="white">$8K</text>
              <text x="629" y="328" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill="white">$5K</text>
              <text x="703" y="328" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill="white">$3K</text>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
