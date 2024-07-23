import { useEffect } from 'react';
import { notifications, NotificationProps } from '@mantine/notifications';

type ToasterProps = {
  toasts: NotificationProps[];
};

export function Toaster({ toasts }: ToasterProps) {
  useEffect(() => {
    toasts.forEach((toast) => {
      notifications.show(toast);
    });
  }, [toasts]);

  return null;
}