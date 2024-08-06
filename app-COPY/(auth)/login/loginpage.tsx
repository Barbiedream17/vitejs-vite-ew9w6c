import { Link } from 'react-router-dom';
import { Container, Title, Text, Button, Stack } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';

import UserAuthForm from "@/components/forms/user-auth-form";
import { Icons } from "@/components/shared/icons";

export function LoginPage() {
  return (
    <Container size="xs" className="h-screen flex flex-col justify-center">
      <Button
        component={Link}
        to="/"
        variant="outline"
        size="sm"
        leftSection={<IconChevronLeft size={14} />}
        className="absolute left-4 top-4 md:left-8 md:top-8"
      >
        Back
      </Button>
      <Stack align="center">
        <Icons.logo className="size-6" />
        <Title order={2}>Welcome back</Title>
        <Text size="sm" c="dimmed">
          Enter your email to sign in to your account
        </Text>
        <UserAuthForm />
        <Text size="sm" c="dimmed">
          Don't have an account?{' '}
          <Link to="/register" className="hover:text-brand underline underline-offset-4">
            Sign Up
          </Link>
        </Text>
      </Stack>
    </Container>
  );
}