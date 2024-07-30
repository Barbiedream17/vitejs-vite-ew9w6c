import { ReactNode } from 'react';
import { Menu } from '@mantine/core';

interface NavigationMenuProps {
  children: ReactNode;
}

export function NavigationMenu({ children }: NavigationMenuProps) {
  return <Menu>{children}</Menu>;
}
