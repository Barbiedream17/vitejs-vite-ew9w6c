import React from 'react';
import { Navigate } from 'react-router-dom';
import { Stack } from '@mantine/core';
import { getCurrentUser } from "@/lib/session";
import { DeleteAccountSection } from "@/components/dashboard/delete-account";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { UserNameForm } from "@/components/forms/user-name-form";
import { UserRoleForm } from "@/components/forms/user-role-form";

export function SettingsPage() {
  const user = getCurrentUser();

  if (!user?.id) return <Navigate to="/login" />;

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <Stack spacing="md">
        <UserNameForm user={{ id: user.id, name: user.name || "" }} />
        <UserRoleForm user={{ id: user.id, role: user.role }} />
        <DeleteAccountSection />
      </Stack>
    </DashboardShell>
  );
}