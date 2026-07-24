import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { ProductJsonLd } from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: pageMetadata.product.title,
  description: pageMetadata.product.description,
  openGraph: {
    title: pageMetadata.product.title,
    description: pageMetadata.product.description,
    url: pageMetadata.product.path,
  },
  twitter: {
    title: pageMetadata.product.title,
    description: pageMetadata.product.description,
  },
  alternates: {
    canonical: pageMetadata.product.path,
  },
};

const highlights = [
  {
    title: "Connect your data sources",
    description:
      "VantageFlow connects to over 50 data sources including Salesforce, HubSpot, Google Analytics, Stripe, and Snowflake. Set up in minutes with our pre-built connectors or use the REST API for custom integrations.",
  },
  {
    title: "Build powerful dashboards",
    description:
      "Create custom dashboards with drag-and-drop simplicity. Choose from line charts, bar charts, heatmaps, tables, and more. Every dashboard updates in real time so your team always has the latest data.",
  },
  {
    title: "Let AI find the insights",
    description:
      "Our machine learning models automatically detect anomalies, surface trends, and generate forecasts. No data science team required. VantageFlow explains every insight in plain language.",
  },
  {
    title: "Share and collaborate",
    description:
      "Share dashboards with your team, export reports as PDF or CSV, and set up automated email schedules. Built-in commenting lets your team discuss data without leaving the platform.",
  },
];

export default function ProductPage() {
  return (
    <>
      <ProductJsonLd />
      <article>
        <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
          <Container className="py-20 sm:py-28 lg:py-36">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                See what {site.name} can do
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 sm:text-xl">
                From connecting your data to discovering insights, VantageFlow streamlines every step of the analytics workflow.
              </p>
            </div>
          </Container>
        </section>

        <section aria-labelledby="how-it-works-heading">
          <Container className="pb-20 sm:pb-28">
            <h2 id="how-it-works-heading" className="sr-only">How it works</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {highlights.map((item, index) => (
                <Card key={index}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </article>

      <Features />
      <Stats />
      <CTA />
    </>
  );
}
