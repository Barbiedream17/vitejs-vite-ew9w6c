import { Text } from "@mantine/core";

export function Label({ children, ...props }) {
  return (
    <Text component="label" size="sm" fw={500} {...props}>
      {children}
    </Text>
  );
}