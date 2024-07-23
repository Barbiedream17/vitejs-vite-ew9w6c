import React from 'react';
import { Modal, Button, Text, Group } from '@mantine/core';

export const AlertDialog = Modal;
export const AlertDialogTrigger = Modal.Trigger;
export const AlertDialogContent = Modal.Content;

export const AlertDialogHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div className={className} {...props} />
);

export const AlertDialogFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <Group justify="flex-end" className={className} {...props} />
);

export const AlertDialogTitle = Modal.Title;

export const AlertDialogDescription = ({ className, ...props }: React.ComponentProps<typeof Text>) => (
  <Text size="sm" className={className} {...props} />
);

export const AlertDialogAction = ({ className, ...props }: React.ComponentProps<typeof Button>) => (
  <Button className={className} {...props} />
);

export const AlertDialogCancel = ({ className, ...props }: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" className={className} {...props} />
);