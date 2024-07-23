import { Box, Container, Title, Text, SimpleGrid, Paper, Group, Avatar } from '@mantine/core';
import { testimonials } from "@/config/landing";

function HeaderSection({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <Box ta="center">
      <Text>{label}</Text>
      <Title>{title}</Title>
      <Text>{subtitle}</Text>
    </Box>
  );
}

export default function Testimonials() {
  return (
    <Box component="section">
      <Container size="xl" py={{ base: 'xl', sm: '2xl' }}>
        <HeaderSection
          label="Testimonials"
          title="What our clients are sharing."
          subtitle="Discover the glowing feedback from our delighted customers worldwide."
        />

        <SimpleGrid
          cols={1}
          breakpoints={[
            { minWidth: 'md', cols: 2 },
            { minWidth: 'lg', cols: 3 },
          ]}
          spacing="md"
          mt="xl"
        >
          {testimonials.map((item) => (
            <Paper key={item.name} withBorder p="md" radius="md">
              <Group noWrap>
                <Avatar src={item.image} size="lg" radius="full" />
                <Box>
                  <Text fz="sm" fw={500}>
                    {item.name}
                  </Text>
                  <Text fz="xs" c="dimmed">
                    {item.job}
                  </Text>
                </Box>
              </Group>
              <Text mt="sm" fz="sm" c="dimmed">
                "{item.review}"
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}