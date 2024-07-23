import * as React from "react";
import { Link } from "react-router-dom";

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";

import { NewsletterForm } from "../forms/newsletter-form";
import { Icons } from "../shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      {/* Footer content */}
      {/* ... (keep the existing footer content, replacing Next.js Link with React Router Link) */}
    </footer>
  );
}