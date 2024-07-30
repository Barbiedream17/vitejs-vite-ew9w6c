import React, { ReactNode } from 'react';
import { Paper, Box, Title, Text } from '@mantine/core';

interface ClassNameProps {
  className?: string;
  children?: ReactNode;
}

export const Card: React.FC<ClassNameProps & React.ComponentProps<typeof Paper>> = ({ className, children, ...props }) => (
  <Paper shadow="sm" p="md" {...props} className={className}>
    {children}
  </Paper>
);

export const CardHeader: React.FC<ClassNameProps & React.ComponentProps<typeof Box>> = ({ className, children, ...props }) => (
  <Box mb="md" {...props} className={className}>
    {children}
  </Box>
);

export const CardTitle: React.FC<ClassNameProps & React.ComponentProps<typeof Title>> = ({ className, children, ...props }) => (
  <Title order={3} {...props} className={className}>
    {children}
  </Title>
);

export const CardDescription: React.FC<ClassNameProps & React.ComponentProps<typeof Text>> = ({ className, children, ...props }) => (
  <Text size="sm" color="dimmed" {...props} className={className}>
    {children}
  </Text>
);

export const CardContent: React.FC<ClassNameProps & React.ComponentProps<typeof Box>> = ({ className, children, ...props }) => (
  <Box {...props} className={className}>
    {children}
  </Box>
);

export const CardFooter: React.FC<ClassNameProps & React.ComponentProps<typeof Box>> = ({ className, children, ...props }) => (
  <Box mt="md" {...props} className={className}>
    {children}
  </Box>
);
