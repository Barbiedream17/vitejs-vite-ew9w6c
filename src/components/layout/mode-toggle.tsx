import React from 'react';
import { Menu, Button } from '@mantine/core';
import { IconSun, IconMoon, IconDeviceLaptop } from '@tabler/icons-react';

const ModeToggle: React.FC = () => {
  const setColorScheme = (scheme: 'light' | 'dark' | 'auto') => {
    console.log(`Color scheme set to: ${scheme}`);
    // Implement your color scheme logic here
  };

  return (
    <Menu>
      <Menu.Target>
        <Button variant="subtle" size="sm" px={0} w={32} h={32}>
          <IconSun size={16} />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item 
          leftSection={<IconSun size={14} />} 
          onClick={() => setColorScheme('light')}
        >
          Light
        </Menu.Item>
        <Menu.Item 
          leftSection={<IconMoon size={14} />} 
          onClick={() => setColorScheme('dark')}
        >
          Dark
        </Menu.Item>
        <Menu.Item 
          leftSection={<IconDeviceLaptop size={14} />} 
          onClick={() => setColorScheme('auto')}
        >
          System
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ModeToggle;