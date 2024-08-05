import { Link } from 'react-router-dom';
import { Container, Title, Text, Button, Grid, Paper, Stack } from '@mantine/core';
import { UserAuthForm } from "@/components/forms/user-auth-form";
import { Icons } from "@/components/shared/icons";

export function RegisterPage() {
  return (
    <Container fluid className="h-screen">
      <Button
        component={Link}
        to="/login"
        variant="subtle"
        className="absolute right-4 top-4 md:right-8 md:top-8"
      >
        Login
      </Button>
      <Grid className="h-full" gutter={0}>
        <Grid.Col span={6} className="hidden lg:block bg-muted" />
        <Grid.Col span={6} className="flex items-center justify-center">
          <Paper shadow="xs" p="md" withBorder>
            <Container size="xs">
              <Stack align="center">
                <Icons.logo className="size-6" />
                <Title order={2}>Create an account</Title>
                <Text size="sm" c="dimmed">
                  Enter your email below to create your account
                </Text>
                <UserAuthForm />
                <Text size="xs" c="dimmed" ta="center">
                  By clicking continue, you agree to our{' '}
                  <Link to="/terms" className="hover:text-brand underline underline-offset-4">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="hover:text-brand underline underline-offset-4">
                    Privacy Policy
                  </Link>.
                </Text>
              </Stack>
            </Container>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}