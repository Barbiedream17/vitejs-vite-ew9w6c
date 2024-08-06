import { Stack } from '@mantine/core';
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { CardSkeleton } from "@/components/shared/card-skeleton";

const SettingsLoading = () => {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Loading your settings..." />
      <Stack
        h={300}
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="center"
        gap="md"
      >
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </Stack>
    </DashboardShell>
  );
};

export default SettingsLoading;
