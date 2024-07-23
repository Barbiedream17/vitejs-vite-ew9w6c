import React from 'react';
import { Checkbox as MantineCheckbox, CheckboxProps } from '@mantine/core';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => <MantineCheckbox ref={ref} {...props} />
);

Checkbox.displayName = 'Checkbox';