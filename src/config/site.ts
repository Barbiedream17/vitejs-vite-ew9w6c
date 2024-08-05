import { SidebarNavItem, SiteConfig } from "@/types/types";

const site_url = import.meta.env.VITE_APP_URL;

export const siteConfig: SiteConfig = {
  name: "SaaS Starter",
  description:
    "Get your project off to an explosive start with SaaS Starter! Harness the power of React, Vite, Tailwind CSS, TypeScript, Mantine, and more to build your next big thing.",
  url: site_url,
  ogImage: `${site_url}/static/og.jpg`,
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/next-saas-stripe-starter",
  },
  mailSupport: "support@saas-starter.com",
  plans: [
    {
      id: "basic",
      name: "Basic",
      description: "Basic plan description",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: "pro",
      name: "Pro",
      description: "Pro plan description",
      features: ["Feature A", "Feature B", "Feature C"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Enterprise plan description",
      features: ["Feature X", "Feature Y", "Feature Z"],
    },
  ],
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];
