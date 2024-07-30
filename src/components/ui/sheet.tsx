import { Drawer, DrawerProps } from '@mantine/core';

interface SheetProps extends Omit<DrawerProps, 'position'> {
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export function Sheet({ side = 'right', ...props }: SheetProps) {
  return <Drawer position={side} {...props} />;
}
