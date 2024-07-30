import React from 'react';
import { Modal, Button } from '@mantine/core';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner'; // Assuming you use the sonner library for toasts
import { UserAvatar } from '@/components/ui/user-avatar';

const DeleteAccountModal: React.FC<{ opened: boolean; onClose: () => void; onDelete: () => void }> = ({ opened, onClose, onDelete }) => {
  return (
    <Modal opened={opened} onClose={onClose} title="Delete Account">
      <div className="delete-account-modal p-4">
        <UserAvatar className="mb-4" />
        <p>Are you sure you want to delete your account? This action cannot be undone.</p>
        <Input placeholder="Type 'DELETE' to confirm" className="w-full p-2 border rounded mb-2" />
        <div className="flex justify-end mt-4">
          <Button variant="outline" color="gray" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="filled" color="red" onClick={() => { onDelete(); toast.success('Account deleted successfully!'); }} className="ml-2">
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
