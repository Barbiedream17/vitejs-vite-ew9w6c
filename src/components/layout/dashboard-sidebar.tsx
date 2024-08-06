import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarNavItem, NavLink } from "@/types/types";
import { Menu, PanelLeftClose, PanelRightClose } from "lucide-react";
import { Button, ScrollArea, Tooltip } from "@mantine/core";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import ProjectSwitcher from "@/components/dashboard/project-switcher";
import { UpgradeCard } from "@/components/dashboard/upgrade-card";
import { Icons } from "@/components/shared/icons";

interface DashboardSidebarProps {
  links: SidebarNavItem[];
}

export function DashboardSidebar({ links }: DashboardSidebarProps) {
  const location = useLocation();
  const path = location.pathname;

  const { isTablet } = useMediaQuery();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(!isTablet);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    setIsSidebarExpanded(!isTablet);
  }, [isTablet]);

  return (
    <div className="sticky top-0 h-full">
      <ScrollArea className="h-full overflow-y-auto border-r">
        <aside
          className={cn(
            isSidebarExpanded ? "w-[220px] xl:w-[260px]" : "w-[68px]",
            "hidden h-screen md:block"
          )}
        >
          <div className="flex h-full max-h-screen flex-1 flex-col gap-2">
            <div className="flex h-14 items-center p-4 lg:h-[60px]">
              {isSidebarExpanded ? <ProjectSwitcher /> : null}

              <Button
                variant="subtle"
                className="ml-auto size-9 lg:size-8"
                onClick={toggleSidebar}
              >
                {isSidebarExpanded ? (
                  <PanelLeftClose size={18} className="text-gray-500" />
                ) : (
                  <PanelRightClose size={18} className="text-gray-500" />
                )}
              </Button>
            </div>

            <nav className="flex flex-1 flex-col gap-8 px-4 pt-4">
              {links.map((section) => (
                <section key={section.title} className="flex flex-col gap-0.5">
                  {isSidebarExpanded ? (
                    <p className="text-xs text-gray-500">{section.title}</p>
                  ) : (
                    <div className="h-4" />
                  )}
                  {section.items && section.items.map((item: NavLink) => {
                    const Icon = Icons[section.icon as keyof typeof Icons] || Icons.arrowRight;
                    return (
                      item.href && (
                        <Fragment key={`link-fragment-${item.title}`}>
                          {isSidebarExpanded ? (
                            <Link
                              key={`link-${item.title}`}
                              to={item.disabled ? "#" : item.href}
                              className={cn(
                                "flex items-center gap-3 rounded-md p-2 text-sm font-medium hover:bg-gray-100",
                                path === item.href
                                  ? "bg-gray-100"
                                  : "text-gray-600 hover:text-gray-900",
                                item.disabled &&
                                  "cursor-not-allowed opacity-80 hover:bg-transparent hover:text-gray-500"
                              )}
                            >
                              <Icon className="size-5" />
                              {item.title}
                            </Link>
                          ) : (
                            <Tooltip label={item.title} position="right">
                              <Link
                                key={`link-tooltip-${item.title}`}
                                to={item.disabled ? "#" : item.href}
                                className={cn(
                                  "flex items-center gap-3 rounded-md py-2 text-sm font-medium hover:bg-gray-100",
                                  path === item.href
                                    ? "bg-gray-100"
                                    : "text-gray-600 hover:text-gray-900",
                                  item.disabled &&
                                    "cursor-not-allowed opacity-80 hover:bg-transparent hover:text-gray-500"
                                )}
                              >
                                <span className="flex size-full items-center justify-center">
                                  <Icon className="size-5" />
                                </span>
                              </Link>
                            </Tooltip>
                          )}
                        </Fragment>
                      )
                    );
                  })}
                </section>
              ))}
            </nav>

            <div className="mt-auto xl:p-4">
              {isSidebarExpanded ? <UpgradeCard /> : null}
            </div>
          </div>
        </aside>
      </ScrollArea>
    </div>
  );
}

export function MobileSheetSidebar() {
  const { device } = useMediaQuery();
  const isMobile = device === "mobile";

  if (isMobile) {
    return (
      <div>
        <Button
          variant="outline"
          className="size-9 shrink-0 md:hidden"
          onClick={() => {
            // Implement mobile sidebar open logic here
          }}
        >
          <Menu className="size-5" />
        </Button>
        {/* Implement a custom drawer or use a Mantine Drawer component here */}
        {/* The content of the drawer should be similar to the sidebar content */}
      </div>
    );
  }

  return (
    <div className="flex size-9 animate-pulse rounded-lg bg-gray-200 md:hidden" />
  );
}