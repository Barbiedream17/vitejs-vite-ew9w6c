import { Box, Container, Title, Text, Group, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/shared/icons";

export default function HeroLanding() {
  // You'll need to implement the fetch logic for GitHub stars elsewhere
  const stars = 0;

  return (
    <Box component="section" py={{ base: 'md', sm: 'xl', lg: 'xl' }}>
      <Container size="md" ta="center">
        <Button
          component="a"
          href="https://twitter.com/miickasmt/status/1810465801649938857"
          target="_blank"
          variant="outline"
          radius="full"
          size="sm"
          leftIcon="🎉"
          rightIcon={<Icons.twitter style={{ width: '14px', height: '14px' }} />}
        >
          <Text hidden={{ base: true, md: false }}>Introducing&nbsp;</Text>
          Next Auth Roles Template
        </Button>

        <Title order={1} mt="lg" className="font-urban" fz={{ base: 36, sm: 48, md: 56, lg: 66 }}>
          Kick off with a bang with{" "}
          <Text component="span" inherit className="text-gradient_indigo-purple">
            SaaS Starter
          </Text>
        </Title>

        <Text size="xl" mt="md" c="dimmed" maw={640} mx="auto">
          Build your next project using Next.js 14, Prisma, Neon, Auth.js v5,
          Resend, React Email, Shadcn/ui, Stripe.
        </Text>

        <Group position="center" spacing="sm" mt="xl">
          <Button
            component={Link}
            to="/pricing"
            size="lg"
            radius="full"
            rightIcon={<Icons.arrowRight style={{ width: '16px', height: '16px' }} />}
          >
            Go Pricing
          </Button>
          <Button
            component="a"
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="lg"
            radius="full"
            leftIcon={<Icons.gitHub style={{ width: '16px', height: '16px' }} />}
          >
            <Text>
              <Text component="span" hidden={{ base: true, sm: false }}>Star on</Text>
              {" "}GitHub{" "}
              <Text component="span" fw={600}>{stars}</Text>
            </Text>
          </Button>
        </Group>
      </Container>
    </Box>
  );
}