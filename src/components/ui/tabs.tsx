import { Tabs as MantineTabs, TabsProps, TabsListProps, TabProps, TabPanelProps } from '@mantine/core';

export function Tabs(props: TabsProps) {
  return <MantineTabs {...props} />;
}

export function TabsList(props: TabsListProps) {
  return <MantineTabs.List {...props} />;
}

export function TabsTrigger(props: TabProps) {
  return <MantineTabs.Tab {...props} />;
}

export function TabsContent(props: TabPanelProps) {
  return <MantineTabs.Panel {...props} />;
}