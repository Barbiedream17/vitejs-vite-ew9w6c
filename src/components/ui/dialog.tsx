import React from 'react';
import { Dialog as MantineDialog, DialogProps as MantineDialogProps } from '@mantine/core';

export const Dialog = React.forwardRef<HTMLDivElement, MantineDialogProps>(
  (props, ref) => <MantineDialog ref={ref} {...props} />
);

Dialog.displayName = 'Dialog';
