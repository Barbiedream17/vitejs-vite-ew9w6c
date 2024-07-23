import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';

export interface ButtonProps extends MantineButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'disable';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'sm', ...props }, ref) => {
    const getVariant = (): MantineButtonProps['variant'] => {
      switch (variant) {
        case 'destructive': return 'filled';
        case 'outline': return 'outline';
        case 'secondary': return 'light';
        case 'ghost': return 'subtle';
        case 'link': return 'subtle';
        case 'disable': return 'default';
        default: return 'filled';
      }
    };

    return (
      <MantineButton
        ref={ref}
        variant={getVariant()}
        size={size}
        disabled={variant === 'disable'}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';