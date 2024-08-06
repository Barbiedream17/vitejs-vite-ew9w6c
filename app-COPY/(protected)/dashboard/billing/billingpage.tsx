import React from 'react';
import { Navigate } from 'react-router-dom';
import { Alert, Text, Container, Anchor } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { BillingInfo } from "@/components/pricing/billing-info";

export function BillingPage() {
  const user = getCurrentUser();

  let userSubscriptionPlan;
  if (user && user.id && user.role === "USER") {
    userSubscriptionPlan = getUserSubscriptionPlan(user.id);
  } else {
    return <Navigate to="/login" />;
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <Container>
        <Alert icon={<IconAlertCircle size="1rem" />} title="This is a demo app." color="blue">
          <Text>
            SaaS Starter app is a demo app using a Stripe test environment. You
            can find a list of test card numbers on the{" "}
            <Anchor href="https://stripe.com/docs/testing#cards" target="_blank" rel="noreferrer">
              Stripe docs
            </Anchor>.
          </Text>
        </Alert>
        <BillingInfo userSubscriptionPlan={userSubscriptionPlan} />
      </Container>
    </DashboardShell>
  );
}