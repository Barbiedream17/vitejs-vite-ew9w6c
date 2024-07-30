import { Dispatch, SetStateAction } from "react";
import { Drawer, Modal as MantineModal } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  showModal: boolean; // ensure showModal is always boolean
  setShowModal: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  desktopOnly?: boolean;
  preventDefaultClose?: boolean;
}

export function Modal({
  children,
  className,
  showModal,
  setShowModal,
  onClose,
  desktopOnly,
  preventDefaultClose,
}: ModalProps) {
  const closeModal = ({ dragged }: { dragged?: boolean } = {}) => {
    if (preventDefaultClose && !dragged) {
      return;
    }
    onClose && onClose();
    setShowModal(false);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile && !desktopOnly) {
    return (
      <Drawer
        opened={showModal}
        onClose={() => closeModal({ dragged: true })}
        position="bottom"
        size="100%"
        className={className}
      >
        {children}
      </Drawer>
    );
  }

  return (
    <MantineModal
      opened={showModal}
      onClose={() => closeModal()}
      centered
      className={className}
    >
      {children}
    </MantineModal>
  );
}
