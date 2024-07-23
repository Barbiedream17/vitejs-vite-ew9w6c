import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { dashboardConfig } from "@/config/dashboard";
import { docsConfig } from "@/config/docs";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { DocsSidebarNav } from "@/components/docs/sidebar-nav";
import { Icons } from "@/components/shared/icons";

import { ModeToggle } from "./mode-toggle";

export function NavMobile() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const selectedLayout = location.pathname.split('/')[1];
  const documentation = selectedLayout === "docs";

  const configMap = {
    docs: docsConfig.mainNav,
    dashboard: dashboardConfig.mainNav,
  };

  const links =
    (selectedLayout && configMap[selectedLayout]) || marketingConfig.mainNav;

  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  // Replace useSession with your own auth state management
  const isAuthenticated = false; // Replace with your auth check
  const userRole = "USER"; // Replace with your user role check

  return (
    <>
      {/* Mobile nav content */}
      {/* ... (keep the existing mobile nav content, replacing Next.js Link with React Router Link) */}
    </>
  );
}