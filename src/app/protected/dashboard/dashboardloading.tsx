import { Skeleton } from '@mantine/core';
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";

export function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Panel"
        text="Current Role :"
      />
      <Skeleton height={400} radius="md" />
    </DashboardShell>
  );
}