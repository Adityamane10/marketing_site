import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { pricingPlans } from "@/content/pricing";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export function PricingCards() {
  return (
    <section aria-labelledby="pricing-heading">
      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-start">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} featured={plan.featured}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-zinc-900">{plan.name}</h3>
                {plan.featured && <Badge>Most Popular</Badge>}
              </div>
              <p className="mt-2 text-sm text-zinc-600">{plan.description}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold text-zinc-900">
                  {formatPrice(plan.price, plan.currency)}
                </span>
                <span className="text-sm text-zinc-500">/{plan.interval}</span>
              </p>

              <ul className="mt-8 space-y-3" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-indigo-600">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  plan.featured
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500"
                    : "border border-zinc-300 text-zinc-700 hover:bg-zinc-50 focus-visible:ring-zinc-400"
                }`}
              >
                {plan.cta}
              </Link>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          All plans include a 14-day free trial. Enterprise plans include custom onboarding and a dedicated support engineer.&nbsp;
          <Link href="/contact" className="font-medium text-indigo-600 hover:text-indigo-500">
            Contact us for details
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
