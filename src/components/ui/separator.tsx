import { Divider, DividerProps } from '@mantine/core';

interface SeparatorProps extends DividerProps {
  orientation?: 'horizontal' | 'vertical';
}

export function Separator({ orientation = 'horizontal', ...props }: SeparatorProps) {
  return <Divider orientation={orientation} {...props} />;
}