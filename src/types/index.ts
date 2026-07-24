export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: string;
  featured: boolean;
  features: string[];
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface MetadataConfig {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  companySize: string;
  subject: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  company?: string;
  companySize?: string;
  subject?: string;
  message?: string;
  consent?: string;
}
