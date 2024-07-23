import React from 'react';
import { AppShell, Header, Footer } from '@mantine/core';
import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { NavMobile } from "@/components/layout/mobile-nav";

interface PricingLayoutProps {
  children: React.ReactNode;
}

export function PricingLayout({ children }: PricingLayoutProps) {
  return (
    <AppShell
      header={<Header height={60}><NavBar scroll={true} /></Header>}
      footer={<Footer height={60}><SiteFooter /></Footer>}
      navbar={<NavMobile />}
    >
      <main className="flex-1">{children}</main>
    </AppShell>
  );
}