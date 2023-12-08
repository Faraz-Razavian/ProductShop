import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 p-3 text-center text-sm font-bold text-red-400 text-opacity-50">
      <p>&copy; {new Date().getFullYear()} My Shopping Site. All rights reserved.</p>
    </footer>
  );
};

export default Footer;