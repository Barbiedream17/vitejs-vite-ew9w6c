import React from 'react';
import { Navigate } from 'react-router-dom';
import { Grid, Container } from '@mantine/core';
import { getCurrentUser } from "@/lib/session";
import { DashboardHeader } from "@/components/dashboard/header";
import InfoCard from "@/components/dashboard/info-card";
import { DashboardShell } from "@/components/dashboard/shell";
import TransactionsList from "@/components/dashboard/transactions-list";

export function AdminPage() {
  const user = getCurrentUser();
  if (!user || user.role !== "ADMIN") return <Navigate to="/login" />;

  return (
    <DashboardShell>
      <DashboardHeader heading="Admin" text="Access only for admin." />
      <Container>
        <Grid>
          <Grid.Col span={4}><InfoCard /></Grid.Col>
          <Grid.Col span={4}><InfoCard /></Grid.Col>
          <Grid.Col span={4}><InfoCard /></Grid.Col>
        </Grid>
        <TransactionsList />
      </Container>
    </DashboardShell>
  );
}