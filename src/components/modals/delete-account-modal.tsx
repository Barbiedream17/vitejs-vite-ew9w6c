import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { UserAvatar } from "@/components/shared/user-avatar";

function DeleteAccountModal({
  showDeleteAccountModal,
  setShowDeleteAccountModal,
}: {
  showDeleteAccountModal: boolean;
  setShowDeleteAccountModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [deleting, setDeleting] = useState(false);

  async function deleteAccount() {
    setDeleting(true);
    try {
      const res = await fetch(`/api/user`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        // Simulate route change and sign out
        await new Promise((resolve) =>
          setTimeout(() => {
            // Replace this with your actual sign out logic
            window.location.href = '/';
            resolve(null);
          }, 500)
        );
      } else {
        const error = await res.text();
        throw error;
      }
    } catch (error) {
      setDeleting(false);
      throw error;
    }
  }

  return (
    <Modal
      showModal={showDeleteAccountModal}
      setShowModal={setShowDeleteAccountModal}
      className="gap-0"
    >
      <div className="flex flex-col items-center justify-center space-y-3 border-b p-4 pt-8 sm:px-16">
        <UserAvatar
          user={{
            name: "User Name", // Replace with actual user data
            image: null,
          }}
        />
        <h3 className="text-lg font-semibold">Delete Account</h3>
        <p className="text-center text-sm text-muted-foreground">
          <b>Warning:</b> This will permanently delete your account and your
          active subscription!
        </p>
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          toast.promise(deleteAccount(), {
            loading: "Deleting account...",
            success: "Account deleted successfully!",
            error: (err) => err,
          });
        }}
        className="flex flex-col space-y-6 bg-accent px-4 py-8 text-left sm:px-16"
      >
        <div>
          <label htmlFor="verification" className="block text-sm">
            To verify, type{" "}
            <span className="font-semibold text-black dark:text-white">
              confirm delete account
            </span>{" "}
            below
          </label>
          <Input
            type="text"
            name="verification"
            id="verification"
            pattern="confirm delete account"
            required
            autoFocus={false}
            autoComplete="off"
            className="mt-1 w-full border bg-background"
          />
        </div>

        <Button
          variant={deleting ? "disable" : "destructive"}
          disabled={deleting}
        >
          Confirm delete account
        </Button>
      </form>
    </Modal>
  );
}

export function useDeleteAccountModal() {
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  const DeleteAccountModalCallback = () => (
    <DeleteAccountModal
      showDeleteAccountModal={showDeleteAccountModal}
      setShowDeleteAccountModal={setShowDeleteAccountModal}
    />
  );

  return {
    setShowDeleteAccountModal,
    DeleteAccountModal: DeleteAccountModalCallback,
  };
}