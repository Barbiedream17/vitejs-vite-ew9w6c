import { DeleteAccountModal } from '@/components/modals/delete-account-modal.tsx';

const DeleteAccountModalPage = () => {{
  return (
    <div className="p-4">
      <DeleteAccountModal user={{
        name: '',
        image: undefined
      }} opened={false} onClose={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}};

export default DeleteAccountModalPage;
