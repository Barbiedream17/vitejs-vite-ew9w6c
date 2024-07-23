import React from 'react';
import { Paper, Box, Title, Text } from '@mantine/core';

export const Card = ({ className, ...props }: React.ComponentProps<typeof Paper>) => (
  <Paper shadow="sm" p="md" {...props} className={className} />
);

export const CardHeader = ({ className, ...props }: React.ComponentProps<typeof Box>) => (
  <Box mb="md" {...props} className={className} />
);

export const CardTitle = ({ className, ...props }: React.ComponentProps<typeof Title>) => (
  <Title order={3} {...props} className={className} />
);

export const CardDescription = ({ className, ...props }: React.ComponentProps<typeof Text>) => (
  <Text size="sm" color="dimmed" {...props} className={className} />
);

export const CardContent = ({ className, ...props }: React.ComponentProps<typeof Box>) => (
  <Box {...props} className={className} />
);

export const CardFooter = ({ className, ...props }: React.ComponentProps<typeof Box>) => (
  <Box mt="md" {...props} className={className} />
);