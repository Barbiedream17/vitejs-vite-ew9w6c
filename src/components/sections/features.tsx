import { Box, Container, Title, Text, SimpleGrid, Card, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { features } from "@/config/landing";
import { Icons } from "@/components/shared/icons";

function HeaderSection({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <Box ta="center">
      <Text>{label}</Text>
      <Title>{title}</Title>
      <Text>{subtitle}</Text>
    </Box>
  );
}

export default function Features() {
  return (
    <Box component="section">
      <Box py={{ base: 28, sm: 40 }}>
        <Container>
          <HeaderSection
            label="Features"
            title="Discover all features."
            subtitle="Harum quae dolore inventore repudiandae? orrupti aut temporibus
          ariatur."
          />

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md" mt="xl">
            {features.map((feature) => {
              const Icon = Icons[feature.icon || "nextjs"];
              return (
                <Card key={feature.title} padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Box
                      style={{
                        background: 'linear-gradient(to bottom, rgba(147, 51, 234, 0.8), rgba(255, 255, 255, 0.05))',
                        opacity: 0.25,
                        filter: 'blur(16px)',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '16px',
                      }}
                    />
                  </Card.Section>
                  <Box pos="relative">
                    <Box
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '16px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid',
                        borderColor: 'var(--mantine-color-gray-3)',
                      }}
                    >
                      <Icon style={{ width: '24px', height: '24px' }} />
                    </Box>

                    <Text mt="md" mb="md" c="dimmed">
                      {feature.description}
                    </Text>

                    <Box mt="md" pt="md" style={{ borderTop: '1px solid var(--mantine-color-gray-3)' }}>
                      <Button
                        component={Link}
                        to="/"
                        variant="light"
                        rightIcon={<Icons.arrowUpRight style={{ width: '16px', height: '16px' }} />}
                      >
                        Visit the site
                      </Button>
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}