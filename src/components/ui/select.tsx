import { Select as MantineSelect, SelectProps } from '@mantine/core';

export function Select(props: SelectProps) {
  return <MantineSelect {...props} />;
}

// Note: Mantine's Select component handles most of the functionality 
// that was split into separate components in the original implementation.
// If you need more granular control, you might need to create custom components.