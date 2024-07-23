import { Switch, SwitchProps } from '@mantine/core';

interface ToggleProps extends Omit<SwitchProps, 'size'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Toggle({ size = 'sm', ...props }: ToggleProps) {
  return <Switch size={size} {...props} />;
}