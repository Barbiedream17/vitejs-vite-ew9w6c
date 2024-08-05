import { Tabs, TabsProps, TabsPanelProps } from '@mantine/core';

export interface CustomTabsProps extends TabsProps {}
export interface CustomTabsPanelProps extends TabsPanelProps {}

export const CustomTabs: React.FC<CustomTabsProps> = (props) => {
  return <Tabs {...props} />;
};

export const CustomTabsPanel: React.FC<CustomTabsPanelProps> = (props) => {
  return <Tabs.Panel {...props} />;
};
