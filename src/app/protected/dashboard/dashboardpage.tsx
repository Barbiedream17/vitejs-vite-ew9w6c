import React from 'react';
import { Button, Text, Container, Title, Paper } from '@mantine/core';
import { getCurrentUser } from "@/lib/session";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";

export function DashboardPage() {
  const user = getCurrentUser();

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Panel"
        text={`Current Role : ${user?.role} — Change your role in settings.`}
      />
      <Container>
        <Paper padding="md">
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <Title order={3}>No content created</Title>
            <Text>You don't have any content yet. Start creating content.</Text>
            <Button variant="outline">Fake button</Button>
          </EmptyPlaceholder>
        </Paper>
      </Container>
    </DashboardShell>
  );
}