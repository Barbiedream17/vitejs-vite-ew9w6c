import React from 'react';
import { Button, Container, Title, Center } from '@mantine/core';

interface ErrorPageProps {
  reset: () => void;
}

export function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <Container size="xs" className="min-h-screen">
      <Center style={{ height: '100vh' }}>
        <div>
          <Title order={2} align="center" mb="md">Something went wrong!</Title>
          <Button onClick={reset} fullWidth>
            Try again
          </Button>
        </div>
      </Center>
    </Container>
  );
}