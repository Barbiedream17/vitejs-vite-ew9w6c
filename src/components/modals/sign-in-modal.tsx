import React, { useState } from "react";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { siteConfig } from "@/config/site";

function SignInModal({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [signInClicked, setSignInClicked] = useState(false);

  const handleSignIn = () => {
    setSignInClicked(true);
    // Replace this with your actual sign-in logic
    setTimeout(() => {
      setShowSignInModal(false);
      setSignInClicked(false);
    }, 1000);
  };

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center space-y-3 border-b bg-background px-4 py-6 pt-8 text-center md:px-16">
          <a href={siteConfig.url}>
            <Icons.logo className="size-10" />
          </a>
          <h3 className="font-urban text-2xl font-bold">Sign In</h3>
          <p className="text-sm text-gray-500">
            This is strictly for demo purposes - only your email and profile
            picture will be stored.
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-secondary/50 px-4 py-8 md:px-16">
          <Button
            variant="default"
            disabled={signInClicked}
            onClick={handleSignIn}
          >
            {signInClicked ? (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            ) : (
              <Icons.google className="mr-2 size-4" />
            )}{" "}
            Sign In with Google
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = () => (
    <SignInModal
      showSignInModal={showSignInModal}
      setShowSignInModal={setShowSignInModal}
    />
  );

  return {
    setShowSignInModal,
    SignInModal: SignInModalCallback,
  };
}