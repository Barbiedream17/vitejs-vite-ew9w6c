import React from 'react';
import { Paper, Box, Title, Text } from '@mantine/core';

interface ClassNameProps {
  className?: string;
}

export const Card: React.FC<ClassNameProps & React.ComponentProps<typeof Paper>> = ({ className, ...props }) => (
  <Paper shadow="sm" p="md" {...props} className={className} />
);

export const CardHeader: React.FC<ClassNameProps & React.ComponentProps<typeof Box>> = ({ className, ...props }) => (
  <Box mb="md" {...props} className={className} />
);

export const CardTitle: React.FC<ClassNameProps & React.ComponentProps<typeof Title>> = ({ className, ...props }) => (
  <Title order={3} {...props} className={className} />
);

export const CardDescription: React.FC<ClassNameProps & React.ComponentProps<typeof Text>> = ({ className, ...props }) => (
  <Text size="sm" color="dimmed" {...props} className={className} />
);

export const CardContent: React.FC<ClassNameProps & React.ComponentProps<typeof Box>> = ({ className, ...props }) => (
  <Box {...props} className={className} />
);

export const CardFooter: React.FC<ClassNameProps & React.ComponentProps<typeof Box>> = ({ className, ...props }) => (
  <Box mt="md" {...props} className={className} />
);
