import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { adminConfig } from "@/config/admin";
import { dashboardConfig } from "@/config/dashboard";
import { docsConfig } from "@/config/docs";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { DocsSearch } from "@/components/docs/search";
import { ModalContext } from "@/components/modals/providers";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import { UserAccountNav } from "./user-account-nav";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const location = useLocation();
  const { setShowSignInModal } = useContext(ModalContext);

  const selectedLayout = location.pathname.split('/')[1];
  const admin = selectedLayout === "admin";
  const dashBoard = selectedLayout === "dashboard";
  const documentation = selectedLayout === "docs";

  const configMap = {
    docs: docsConfig.mainNav,
    dashboard: dashboardConfig.mainNav,
  };

  const links =
    (selectedLayout && configMap[selectedLayout]) || marketingConfig.mainNav;

  // Replace useSession with your own auth state management
  const isAuthenticated = false; // Replace with your auth check
  const userRole = "USER"; // Replace with your user role check
  const user = null; // Replace with your user object

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      {/* Navbar content */}
      {/* ... (keep the existing navbar content, replacing Next.js Link with React Router Link) */}
    </header>
  );
}