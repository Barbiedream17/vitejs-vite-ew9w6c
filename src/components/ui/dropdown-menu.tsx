import { Menu, MenuProps } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

export const DropdownMenu = Menu;
export const DropdownMenuTrigger = Menu.Target;
export const DropdownMenuContent = Menu.Dropdown;
export const DropdownMenuItem = Menu.Item;
export const DropdownMenuCheckboxItem = Menu.Item;
export const DropdownMenuRadioItem = Menu.Item;
export const DropdownMenuLabel = Menu.Label;
export const DropdownMenuSeparator = Menu.Divider;
export const DropdownMenuShortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={className} {...props} />
);
export const DropdownMenuGroup = Menu.Label;
export const DropdownMenuPortal = Menu;
export const DropdownMenuSub = Menu;
export const DropdownMenuSubContent = Menu.Dropdown;
export const DropdownMenuSubTrigger = ({ children, ...props }: MenuProps) => (
  <Menu.Item rightSection={<IconChevronRight size={14} />} {...props}>
    {children}
  </Menu.Item>
);
export const DropdownMenuRadioGroup = Menu;