import { Menu, MenuProps } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

export const ContextMenu = Menu;
export const ContextMenuTrigger = Menu.Target;
export const ContextMenuContent = Menu.Dropdown;
export const ContextMenuItem = Menu.Item;
export const ContextMenuCheckboxItem = Menu.Item;
export const ContextMenuRadioItem = Menu.Item;
export const ContextMenuLabel = Menu.Label;
export const ContextMenuSeparator = Menu.Divider;
export const ContextMenuShortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={className} {...props} />
);
export const ContextMenuGroup = Menu.Label;
export const ContextMenuPortal = Menu;
export const ContextMenuSub = Menu;
export const ContextMenuSubContent = Menu.Dropdown;
export const ContextMenuSubTrigger = ({ children, ...props }: MenuProps) => (
  <Menu.Item rightSection={<IconChevronRight size={14} />} {...props}>
    {children}
  </Menu.Item>
);
export const ContextMenuRadioGroup = Menu;