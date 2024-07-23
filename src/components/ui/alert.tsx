import React from 'react';
import { Alert as MantineAlert, AlertProps as MantineAlertProps, Text } from '@mantine/core';

interface AlertProps extends Omit<MantineAlertProps, 'variant'> {
  variant?: 'default' | 'destructive';
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'default', children, ...props }, ref) => (
    <MantineAlert
      ref={ref}
      color={variant === 'destructive' ? 'red' : 'blue'}
      {...props}
    >
      {children}
    </MantineAlert>
  )
);

export const AlertTitle = Text;
export const AlertDescription = Text;