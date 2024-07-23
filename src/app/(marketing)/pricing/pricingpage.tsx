import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Text, Image, Stack, Divider } from '@mantine/core';
import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { ComparePlans } from "@/components/pricing/compare-plans";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { PricingFaq } from "@/components/pricing/pricing-faq";

export function PricingPage() {
  const user = getCurrentUser();

  if (user?.role === "ADMIN") {
    return (
      <Container size="sm" className="flex min-h-screen flex-col items-center justify-center">
        <Title order={1}>Seriously?</Title>
        <Image
          src="/_static/illustrations/call-waiting.svg"
          alt="403"
          width={560}
          height={560}
          className="pointer-events-none -my-20 dark:invert"
        />
        <Text size="xl" align="center">
          You are an {user.role}. Back to{" "}
          <Link to="/admin" className="text-muted-foreground underline underline-offset-4 hover:text-purple-500">
            Dashboard
          </Link>
          .
        </Text>
      </Container>
    );
  }

  let subscriptionPlan;
  if (user && user.id) {
    subscriptionPlan = getUserSubscriptionPlan(user.id);
  }

  return (
    <Stack spacing="xl" py="xl">
      <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} />
      <Divider />
      <ComparePlans />
      <PricingFaq />
    </Stack>
  );
}