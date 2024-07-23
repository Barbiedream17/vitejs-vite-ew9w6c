import React, { createContext, ReactNode, useState } from "react";
import { useSignInModal } from "@/components/modals/sign-in-modal";

export const ModalContext = createContext<{
  setShowSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  setShowSignInModal: () => {},
});

export default function ModalProvider({ children }: { children: ReactNode }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <ModalContext.Provider
      value={{
        setShowSignInModal,
      }}
    >
      <SignInModal />
      {children}
    </ModalContext.Provider>
  );
}