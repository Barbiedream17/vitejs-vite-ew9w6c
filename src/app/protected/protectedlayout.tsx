import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppShell, Navbar, Header, Footer } from '@mantine/core';

import { dashboardConfig } from "@/config/dashboard";
import { getCurrentUser } from "@/lib/session";
import { DashboardNav } from "@/components/layout/dashboard-sidenav";
import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import { adminConfig } from "../../config/admin";

interface ProtectedLayoutProps {
  children?: React.ReactNode;
}

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const user = getCurrentUser();

  if (!user) return <Navigate to="/login" replace />;

  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 200 }}><DashboardNav items={user.role === "ADMIN" ? adminConfig.sidebarNav : dashboardConfig.sidebarNav} /></Navbar>}
      header={<Header height={60}><NavBar /></Header>}
      footer={<Footer height={60}><SiteFooter className="border-t" /></Footer>}
    >
      <MaxWidthWrapper className="min-h-svh">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </MaxWidthWrapper>
    </AppShell>
  );
}