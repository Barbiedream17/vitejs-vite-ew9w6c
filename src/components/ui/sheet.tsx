import { Drawer, DrawerProps } from '@mantine/core';

interface SheetProps extends Omit<DrawerProps, 'position'> {
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export function Sheet({ side = 'right', ...props }: SheetProps) {
  return <Drawer position={side} {...props} />;
}

// Mantine's Drawer component already includes most of the functionality
// that was split into separate components in the original implementation.
// If you need more granular control, you can create custom components as needed.

export const SheetTrigger = Drawer.Trigger;
export const SheetContent = Drawer.Content;
export const SheetHeader = Drawer.Header;
export const SheetFooter = Drawer.Footer;
export const SheetTitle = Drawer.Title;