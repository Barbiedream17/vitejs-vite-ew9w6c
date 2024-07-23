import { Box, Container, Title, SimpleGrid, Anchor } from '@mantine/core';

const logos = [
  // ... (keep the logos array as it is)
];

export default function Powered() {
  return (
    <Box component="section" py="xl" c="dimmed">
      <Container>
        <Title order={2} ta="center" fz="sm" tt="uppercase" fw={600}>
          Powered by
        </Title>

        <SimpleGrid cols={2} breakpoints={[{ minWidth: 'md', cols: 4 }]} mt="xl">
          {logos.slice(0, 4).map((logo) => (
            <Anchor
              key={logo.title}
              href={logo.href}
              target="_blank"
              aria-label={logo.title}
              sx={(theme) => ({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 250ms',
                filter: 'grayscale(100%)',
                '&:hover': {
                  color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                  filter: 'grayscale(0%)',
                },
              })}
            >
              {logo.icon}
            </Anchor>
          ))}
        </SimpleGrid>

        <SimpleGrid cols={2} breakpoints={[{ minWidth: 'md', cols: 4 }]} mt={{ base: 'lg', md: 'xl' }}>
          {logos.slice(4, 8).map((logo) => (
            <Anchor
              key={logo.title}
              href={logo.href}
              target="_blank"
              aria-label={logo.title}
              sx={(theme) => ({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 250ms',
                filter: 'grayscale(100%)',
                '&:hover': {
                  color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                  filter: 'grayscale(0%)',
                },
              })}
            >
              {logo.icon}
            </Anchor>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}