import { useState } from 'react';
import { Menu, Button, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon, IconDeviceLaptop } from '@tabler/icons-react';

export function ModeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);

  return (
    <Menu opened={opened} onChange={setOpened}>
      <Menu.Target>
        <Button variant="subtle" size="sm" px={0} w={32} h={32}>
          {colorScheme === 'dark' ? <IconMoon size={16} /> : <IconSun size={16} />}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item 
          icon={<IconSun size={14} />} 
          onClick={() => setColorScheme('light')}
        >
          Light
        </Menu.Item>
        <Menu.Item 
          icon={<IconMoon size={14} />} 
          onClick={() => setColorScheme('dark')}
        >
          Dark
        </Menu.Item>
        <Menu.Item 
          icon={<IconDeviceLaptop size={14} />} 
          onClick={() => setColorScheme('auto')}
        >
          System
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}