import { SegmentedControl, SegmentedControlProps } from '@mantine/core';

export function ToggleGroup(props: SegmentedControlProps) {
  return <SegmentedControl {...props} />;
}

// ToggleGroupItem is not needed as SegmentedControl handles items differently