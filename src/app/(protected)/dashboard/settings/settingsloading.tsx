import React from 'react';
import { Stack } from '@mantine/core';
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { CardSkeleton } from "@/components/shared/card-skeleton";

export function SettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <Stack spacing="md">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </Stack>
    </DashboardShell>
  );
}