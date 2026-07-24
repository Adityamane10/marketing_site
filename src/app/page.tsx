import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  openGraph: {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: pageMetadata.home.path,
  },
  twitter: {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
  },
  alternates: {
    canonical: pageMetadata.home.path,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </>
  );
}
