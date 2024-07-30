import { Menu, MenuItem, MenuDropdown } from '@mantine/core';

export const ContextMenu = () => (
  <Menu>
    <Menu.Target>
      <button>Open Menu</button>
    </Menu.Target>
    <MenuDropdown>
      <MenuItem>Option 1</MenuItem>
      <MenuItem>Option 2</MenuItem>
      <MenuItem>Option 3</MenuItem>
    </MenuDropdown>
  </Menu>
);
