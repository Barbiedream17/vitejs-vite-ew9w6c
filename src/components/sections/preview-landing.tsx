import { Box, Container, Image } from '@mantine/core';

export default function PreviewLanding() {
  return (
    <Box pb={{ base: 'md', sm: 'xl' }}>
      <Container>
        <Box
          sx={(theme) => ({
            borderRadius: theme.radius.xl,
            [theme.fn.largerThan('md')]: {
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              padding: '14px',
              border: `1px solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
              }`,
            },
          })}
        >
          <Box
            sx={(theme) => ({
              position: 'relative',
              aspectRatio: '16 / 9',
              overflow: 'hidden',
              borderRadius: theme.radius.md,
              border: `1px solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
              }`,
            })}
          >
            <Image
              src="/_static/blog/blog-post-3.jpg"
              alt="preview landing"
              fit="cover"
              width="100%"
              height="100%"
              sx={(theme) => ({
                objectPosition: 'center',
                ...(theme.colorScheme === 'dark' && {
                  opacity: 0.85,
                  filter: 'invert(1)',
                }),
              })}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}