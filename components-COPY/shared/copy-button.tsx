import React from 'react';
import { Button } from '@/components/ui/button';
import { Clipboard } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    alert('Text copied to clipboard!');
  };

  return (
    <Button onClick={handleCopy} leftIcon={<Clipboard />}>
      Copy
    </Button>
  );
};
