import { Menu, MenuProps, MenuItemProps, MenuDropdownProps } from '@mantine/core';

export function NavigationMenu(props: MenuProps) {
  return <Menu {...props} />;
}

export const NavigationMenuList = Menu.Dropdown;
export const NavigationMenuItem = Menu.Item;
export const NavigationMenuTrigger = Menu.Target;
export const NavigationMenuContent = Menu.Dropdown;

export function NavigationMenuLink({ children, ...props }: MenuItemProps) {
  return <Menu.Item {...props}>{children}</Menu.Item>;
}

// Mantine's Menu doesn't have direct equivalents for Viewport and Indicator
// You may need to create custom components if these are necessary for your use case