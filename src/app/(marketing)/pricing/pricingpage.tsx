import { Link } from 'react-router-dom';
import { Container, Title, Text, Image, Stack, Divider } from '@mantine/core';
import ComparePlans from "@/components/pricing/compare-plans";
import PricingCards from "@/components/pricing/pricing-cards";
import PricingFaq from "@/components/pricing/pricing-faq";

export function PricingPage() {
  return (
    <Stack>
      <PricingCards />
      <Divider />
      <ComparePlans />
      <PricingFaq />
    </Stack>
  );
}