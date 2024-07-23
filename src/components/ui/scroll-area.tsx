import { ScrollArea as MantineScrollArea, ScrollAreaProps } from '@mantine/core';

export function ScrollArea(props: ScrollAreaProps) {
  return <MantineScrollArea {...props} />;
}

// Mantine's ScrollArea doesn't have a separate ScrollBar component
// The scrollbars are handled internally by the ScrollArea component