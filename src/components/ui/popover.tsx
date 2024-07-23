import { Popover as MantinePopover, PopoverProps, PopoverDropdownProps } from '@mantine/core';

export function Popover(props: PopoverProps) {
  return <MantinePopover {...props} />;
}

export const PopoverTrigger = MantinePopover.Target;

export function PopoverContent(props: PopoverDropdownProps) {
  return <MantinePopover.Dropdown {...props} />;
}