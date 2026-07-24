import { Container } from "@/components/ui/Container";
import { PricingCards } from "@/components/sections/PricingCards";
import { FAQSection } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import { ProductJsonLd } from "@/components/seo/JsonLd";
import { pricingFAQ } from "@/content/faq";
import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";

export const metadata: Metadata = {
  title: pageMetadata.pricing.title,
  description: pageMetadata.pricing.description,
  openGraph: {
    title: pageMetadata.pricing.title,
    description: pageMetadata.pricing.description,
    url: pageMetadata.pricing.path,
  },
  twitter: {
    title: pageMetadata.pricing.title,
    description: pageMetadata.pricing.description,
  },
  alternates: {
    canonical: pageMetadata.pricing.path,
  },
};

export default function PricingPage() {
  return (
    <>
      <ProductJsonLd />
      <FAQPageJsonLd items={pricingFAQ} />
      <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <Container className="py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Find the right plan for your team
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 sm:text-xl">
              Start free and upgrade when you are ready. All plans include a 14-day free trial.
            </p>
          </div>
        </Container>
      </section>
      <PricingCards />
      <FAQSection items={pricingFAQ} title="Frequently asked questions" id="pricing-faq" />
      <CTA />
    </>
  );
}
