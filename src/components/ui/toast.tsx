import { notifications, NotificationProps } from '@mantine/notifications';

export const toast = {
  show: (props: NotificationProps) => notifications.show(props),
  error: (props: Omit<NotificationProps, 'color'>) => notifications.show({ color: 'red', ...props }),
  success: (props: Omit<NotificationProps, 'color'>) => notifications.show({ color: 'green', ...props }),
  warning: (props: Omit<NotificationProps, 'color'>) => notifications.show({ color: 'yellow', ...props }),
};

// The following exports are not needed with Mantine's Notifications
// export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction };