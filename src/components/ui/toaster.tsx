import { useEffect } from 'react';
import { notifications } from '@mantine/notifications';
import { useToast } from '@/hooks/use-toast'; // You'll need to adapt this hook

export function Toaster() {
  const { toasts } = useToast();

  useEffect(() => {
    toasts.forEach(({ id, title, description, ...props }) => {
      notifications.show({
        id,
        title,
        message: description,
        ...props,
      });
    });
  }, [toasts]);

  return null; // Mantine's notifications don't require a component to be rendered
}