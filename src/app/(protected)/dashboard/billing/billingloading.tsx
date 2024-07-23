import React from 'react';
import { Skeleton, Container } from '@mantine/core';
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { CardSkeleton } from "@/components/shared/card-skeleton";

export function BillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <Container>
        <Skeleton height={112} radius="md" mb={16} />
        <CardSkeleton />
      </Container>
    </DashboardShell>
  );
}