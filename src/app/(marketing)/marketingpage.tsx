import { Stack } from '@mantine/core';
import { HeroLanding } from "@/components/sections/hero-landing";
import { Testimonials } from "@/components/sections/testimonials";

export function MarketingPage() {
  // Sample testimonials data
  const testimonials = [
    { name: "John Doe", text: "This product is amazing!" },
    { name: "Jane Smith", text: "I can't imagine working without it now." }
  ];

  return (
    <Stack>
      <HeroLanding />
      <Testimonials testimonials={testimonials} />
    </Stack>
  );
}