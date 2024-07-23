import { Box, Container, Grid, Title, Text, List, Image } from '@mantine/core';
import { InfoLdg } from "@/types";
import { Icons } from "@/components/shared/icons";

interface InfoLandingProps {
  data: InfoLdg;
  reverse?: boolean;
}

export default function InfoLanding({ data, reverse = false }: InfoLandingProps) {
  return (
    <Box py={{ base: 'xl', sm: 'xl' }}>
      <Container>
        <Grid gutter="xl" align="center">
          <Grid.Col order={{ base: 2, lg: reverse ? 2 : 1 }} span={{ base: 12, lg: 6 }}>
            <Title order={2} fz={{ base: 24, md: 36, lg: 40 }}>
              {data.title}
            </Title>
            <Text mt="md" c="dimmed">
              {data.description}
            </Text>
            <List spacing="sm" mt="lg">
              {data.list.map((item, index) => {
                const Icon = Icons[item.icon || "arrowRight"];
                return (
                  <List.Item
                    key={index}
                    icon={
                      <Icon style={{ width: '20px', height: '20px', color: 'var(--mantine-color