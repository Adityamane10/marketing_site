import { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  product: {
    label: "Product",
    items: [
      { label: "Features", href: "/product" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/product" },
      { label: "Changelog", href: "/product" },
    ],
  },
  company: {
    label: "Company",
    items: [
      { label: "About", href: "/" },
      { label: "Blog", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Press", href: "/" },
    ],
  },
  support: {
    label: "Support",
    items: [
      { label: "Documentation", href: "/contact" },
      { label: "Help Center", href: "/contact" },
      { label: "Contact", href: "/contact" },
      { label: "Status", href: "/contact" },
    ],
  },
  legal: {
    label: "Legal",
    items: [
      { label: "Privacy Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
      { label: "Cookie Policy", href: "/" },
    ],
  },
};
