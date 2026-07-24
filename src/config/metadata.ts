import { MetadataConfig } from "@/types";
import { site } from "@/content/site";

export const pageMetadata: Record<string, MetadataConfig> = {
  home: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "VantageFlow is an AI-powered business analytics platform. Discover insights, predict outcomes, and drive growth with real-time dashboards and predictive forecasting.",
    path: "/",
  },
  product: {
    title: `Product — ${site.name}`,
    description:
      "Explore VantageFlow features: AI-powered insights, real-time dashboards, predictive forecasting, seamless integrations, and enterprise-grade security.",
    path: "/product",
  },
  pricing: {
    title: `Pricing — ${site.name}`,
    description:
      "Choose the right plan for your team. Starter, Professional, and Enterprise plans with a 14-day free trial. No credit card required.",
    path: "/pricing",
  },
  contact: {
    title: `Contact — ${site.name}`,
    description:
      "Get in touch with the VantageFlow team. Request a demo, ask questions, or learn about enterprise plans.",
    path: "/contact",
  },
};
