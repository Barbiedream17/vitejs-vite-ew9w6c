import { Text, TextProps } from "@mantine/core";
import { ReactNode } from 'react';

interface LabelProps extends TextProps {
  children: ReactNode;
}

export function Label({ children, ...props }: LabelProps) {
  return (
    <Text component="label" size="sm" fw={500} {...props}>
      {children}
    </Text>
  );
}
