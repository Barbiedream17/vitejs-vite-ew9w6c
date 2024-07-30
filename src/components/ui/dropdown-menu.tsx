import { Menu, MenuItem, MenuDropdown } from '@mantine/core';

export const DropdownMenu = () => (
  <Menu>
    <Menu.Target>
      <button>Actions</button>
    </Menu.Target>
    <MenuDropdown>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </MenuDropdown>
  </Menu>
);
