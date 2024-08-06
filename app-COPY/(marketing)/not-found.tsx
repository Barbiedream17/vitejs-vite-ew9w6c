import { Link } from 'react-router-dom';
import { Container, Title, Text, Image, Center } from '@mantine/core';

export function NotFoundPage() {
  return (
    <Container size="sm" className="min-h-screen">
      <Center style={{ height: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <Title order={1} size="4rem">404</Title>
          <Image
            src="/_static/illustrations/rocket-crashed.svg"
            alt="404"
            width={400}
            height={400}
            className="pointer-events-none mb-5 mt-6 dark:invert"
          />
          <Text size="xl">
            Page not found. Back to{" "}
            <Link to="/" className="text-muted-foreground underline underline-offset-4 hover:text-purple-500">
              Homepage
            </Link>
            .
          </Text>
        </div>
      </Center>
    </Container>
  );
}