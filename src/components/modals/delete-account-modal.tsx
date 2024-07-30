import React from 'react';
import { Dialog } from '@mantine/core';
import { UserAvatar } from '@/components/shared/user-avatar'; // Adjusted the import path
import { toast } from 'sonner'; // Use toast directly from Sonner library

interface DeleteAccountModalProps {
  user: { name: string; image?: string }; // Define the user object
  opened: boolean;
  onClose: () => void;
  className?: string;
}

export const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({ user, opened, onClose, className }) => {
  const handleDelete = () => {
    toast('Account deleted!');
  };

  return (
    <Dialog opened={opened} onClose={onClose} className={className}>
      <UserAvatar user={user} className="mb-4" />
      <p>Are you sure you want to delete your account?</p>
      <button onClick={handleDelete} className="mt-4">
        Confirm
      </button>
    </Dialog>
  );
};
