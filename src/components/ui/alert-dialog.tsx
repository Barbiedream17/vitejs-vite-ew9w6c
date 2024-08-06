import { Dialog, DialogProps } from '@mantine/core';

interface AlertDialogProps extends DialogProps {
  opened: boolean;
}

export const AlertDialog = ({ opened, ...props }: AlertDialogProps) => (
  <Dialog opened={opened} {...props} />
);
