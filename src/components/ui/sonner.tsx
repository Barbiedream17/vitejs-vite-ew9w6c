import { useEffect } from 'react';
import { showNotification, NotificationsProps } from '@mantine/notifications';

type ToasterProps = {
  toasts: Array<NotificationsProps & { message: string }>;
};

export function Toaster({ toasts }: ToasterProps) {
  useEffect(() => {
    toasts.forEach((toast) => {
      showNotification({
        title: toast.title || 'Notification',
        message: toast.message,
        color: toast.color || 'blue',
      });
    });
  }, [toasts]);

  return null;
}
