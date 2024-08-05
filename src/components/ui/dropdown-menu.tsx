import React from 'react';
import { Menu } from '@mantine/core';

export const DropdownMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Menu>{children}</Menu>;
};

export const DropdownMenuTrigger: React.FC<{ asChild: boolean; children: React.ReactNode }> = ({ children }) => {
  return <Menu.Target>{children}</Menu.Target>;
};

export const DropdownMenuContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Menu.Dropdown>{children}</Menu.Dropdown>;
};

export const DropdownMenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Menu.Item>{children}</Menu.Item>;
};
