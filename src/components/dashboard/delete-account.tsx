import { useState } from 'react';
import { Button as MantineButton } from '@mantine/core';
import { siteConfig } from '@/config/site';
import { DeleteAccountModal } from '@/components/modals/delete-account-modal';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const CardHeader: React.FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const CardTitle: React.FC<CardProps> = ({ children, className }) => (
  <h2 className={className}>{children}</h2>
);

const CardDescription: React.FC<CardProps> = ({ children, className }) => (
  <p className={className}>{children}</p>
);

const CardFooter: React.FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

interface ButtonProps {
  variant: 'destructive';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => (
  <MantineButton variant={variant} onClick={onClick}>
    {children}
  </MantineButton>
);

export function DeleteAccountSection() {
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  return (
    <>
      <DeleteAccountModal 
        opened={showDeleteAccountModal} 
        onClose={() => setShowDeleteAccountModal(false)}
        user={{ name: "User Name" }}
      />
      <Card className="card">
        <CardHeader className="card-header">
          <CardTitle className="card-title">Delete Account</CardTitle>
          <CardDescription className="card-description">
            Permanently delete your {siteConfig.name} account and your subscription. This action cannot be undone - please proceed with caution.
          </CardDescription>
        </CardHeader>
        <CardFooter className="card-footer mt-2 flex justify-end border-t border-red-600 bg-red-500/5 py-2">
          <Button
            variant="destructive"
            onClick={() => setShowDeleteAccountModal(true)}
          >
            <span>Delete Account</span>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}