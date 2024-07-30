import { ReactNode } from 'react';
import { Menu } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

interface MenubarProps {
  children: ReactNode;
  className?: string;
  checked?: boolean;
}

export function Menubar({ children, ...props }: MenubarProps) {
  return <Menu {...props}>{children}</Menu>;
}

export function MenubarMenu({ children, ...props }: MenubarProps) {
  return <Menu.Dropdown {...props}>{children}</Menu.Dropdown>;
}

export function MenubarTrigger({ children, ...props }: MenubarProps) {
  return <Menu.Target {...props}>{children}</Menu.Target>;
}

export function MenubarItem({ children, ...props }: MenubarProps) {
  return <Menu.Item {...props}>{children}</Menu.Item>;
}

export function MenubarSubTrigger({ children, ...props }: MenubarProps) {
  return (
    <Menu.Item rightSection={<IconChevronRight size={14} />} {...props}>
      {children}
    </Menu.Item>
  );
}

export function MenubarSubContent({ children, ...props }: MenubarProps) {
  return <Menu.Dropdown {...props}>{children}</Menu.Dropdown>;
}

export function MenubarCheckboxItem({ children, checked, ...props }: MenubarProps) {
  return (
    <Menu.Item {...props}>
      {children}
    </Menu.Item>
  );
}

export function MenubarRadioItem({ children, ...props }: MenubarProps) {
  return <Menu.Item {...props}>{children}</Menu.Item>;
}

export function MenubarLabel({ children, ...props }: MenubarProps) {
  return <Menu.Label {...props}>{children}</Menu.Label>;
}

export function MenubarSeparator(props: Omit<MenubarProps, 'children'>) {
  return <Menu.Divider {...props} />;
}

export { Menu as MenubarGroup, Menu as MenubarSub };
