import { Badge as MantineBadge, BadgeProps as MantineBadgeProps } from '@mantine/core';

export interface BadgeProps extends MantineBadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export function Badge({ variant = 'default', ...props }: BadgeProps) {
  const getColor = () => {
    switch (variant) {
      case 'secondary': return 'gray';
      case 'destructive': return 'red';
      case 'outline': return 'blue';
      default: return 'blue';
    }
  };

  return (
    <MantineBadge
      color={getColor()}
      variant={variant === 'outline' ? 'outline' : 'filled'}
      {...props}
    />
  );
}