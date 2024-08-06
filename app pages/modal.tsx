import { Modal } from '@/components/ui/modal.tsx';
import { SetStateAction } from 'react';

const ModalPage = () => {{
  return (
    <div className="p-4">
      <Modal children={undefined} showModal={false} setShowModal={function (_value: SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}};

export default ModalPage;
