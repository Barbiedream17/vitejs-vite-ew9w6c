import { Menu } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

export function Menubar({ children, ...props }) {
  return <Menu {...props}>{children}</Menu>;
}

export function MenubarMenu({ children, ...props }) {
  return <Menu.Dropdown {...props}>{children}</Menu.Dropdown>;
}

export function MenubarTrigger({ children, ...props }) {
  return <Menu.Target {...props}>{children}</Menu.Target>;
}

export function MenubarItem({ children, ...props }) {
  return <Menu.Item {...props}>{children}</Menu.Item>;
}

export function MenubarSubTrigger({ children, ...props }) {
  return (
    <Menu.Item rightSection={<IconChevronRight size={14} />} {...props}>
      {children}
    </Menu.Item>
  );
}

export function MenubarSubContent({ children, ...props }) {
  return <Menu.Dropdown {...props}>{children}</Menu.Dropdown>;
}

export function MenubarCheckboxItem({ children, checked, ...props }) {
  return (
    <Menu.Item checked={checked} {...props}>
      {children}
    </Menu.Item>
  );
}

export function MenubarRadioItem({ children, ...props }) {
  return <Menu.Item {...props}>{children}</Menu.Item>;
}

export function MenubarLabel({ children, ...props }) {
  return <Menu.Label {...props}>{children}</Menu.Label>;
}

export function MenubarSeparator(props) {
  return <Menu.Divider {...props} />;
}

export { Menu as MenubarGroup, Menu as MenubarSub };