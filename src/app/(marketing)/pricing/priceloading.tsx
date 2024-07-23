import React from 'react';
import { Container, Stack, Grid, Skeleton } from '@mantine/core';
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export function PriceLoading() {
  return (
    <Stack spacing="xl" py="xl">
      <MaxWidthWrapper>
        <Container>
          <Stack align="center" spacing="md">
            <HeaderSection label="Pricing" title="Start at full speed !" />
            <Skeleton height={32} width="20%" radius="xl" />
          </Stack>

          <Grid mt="xl">
            {[0, 1, 2].map((i) => (
              <Grid.Col key={i} span={12} md={4}>
                <Skeleton height={520} radius="lg" />
              </Grid.Col>
            ))}
          </Grid>

          <Stack align="center" mt="md" spacing={8}>
            <Skeleton height={16} width="33%" />
            <Skeleton height={16} width="16%" />
          </Stack>
        </Container>
      </MaxWidthWrapper>

      <Container>
        <Skeleton height={1} />
      </Container>
    </Stack>
  );
}