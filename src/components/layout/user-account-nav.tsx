import React from 'react';
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';
import { CreditCard, Settings, LogOut } from 'lucide-react';

const UserAccountNav: React.FC = () => {
  const handleSignOut = () => {
    // Handle sign out
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="btn">Account</button>
      </DropdownMenuTrigger>
      <DropdownMenuItem>
        <Link to="/profile" className="flex items-center">
          <CreditCard size={16} className="mr-2" /> Profile
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/settings" className="flex items-center">
          <Settings size={16} className="mr-2" /> Settings
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleSignOut} className="flex items-center">
        <LogOut size={16} className="mr-2" /> Sign Out
      </DropdownMenuItem>
    </DropdownMenu>
  );
};

export default UserAccountNav;
