import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mantine/core';
import { UserAccountNav } from '@/components/layout/user-account-nav';

const Navbar: React.FC = () => (
  <nav className="navbar bg-blue-500 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="logo">
        <Link to="/" className="text-white text-lg font-bold">
          Your Company
        </Link>
      </div>
      <Menu>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/services">Services</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
        <UserAccountNav />
      </Menu>
    </div>
  </nav>
);

export default Navbar;
