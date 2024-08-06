import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter: React.FC = () => (
  <footer className="site-footer bg-gray-800 text-white p-4">
    <div className="container mx-auto">
      <p>© 2024 Your Company. All rights reserved.</p>
      <nav>
        <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
        {' | '}
        <Link to="/terms-of-service" className="text-white">Terms of Service</Link>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
