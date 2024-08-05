import React from 'react';
import { useToast } from '@/hooks/use-toast'; // Ensure this path is correct
import { Notification } from '@mantine/core';

const Toaster: React.FC = () => {
  const { toasts, dismissToast } = useToast();

  return (
    <div>
      {toasts.map(({ id, title, description }: { id: string, title: string, description: string }) => (
        <Notification key={id} onClose={() => dismissToast(id)}>
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </Notification>
      ))}
    </div>
  );
};

export default Toaster;