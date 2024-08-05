import * as React from "react";
import { Notification, Button } from '@mantine/core';
import { VariantProps, cva } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const toastVariants = cva(
  "fixed bottom-0 right-0 flex w-full items-center justify-between gap-4 p-4 pointer-events-auto",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ToastProps extends VariantProps<typeof toastVariants> {}

export const CustomToast: React.FC<ToastProps> = ({ variant }) => {
  const [visible, setVisible] = React.useState(false);

  const showToast = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <div>
      <Button onClick={showToast}>Show Toast</Button>
      {visible && (
        <Notification
          className={cn(toastVariants({ variant }))}
          icon={<X />}
          onClose={() => setVisible(false)}
        >
          This is a notification
        </Notification>
      )}
    </div>
  );
};
