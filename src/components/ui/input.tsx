import React from 'react';
import { Input as MantineInput, InputProps as MantineInputProps } from '@mantine/core';

export const Input = React.forwardRef<HTMLInputElement, MantineInputProps>(
  (props, ref) => <MantineInput ref={ref} {...props} />
);

Input.displayName = 'Input';
