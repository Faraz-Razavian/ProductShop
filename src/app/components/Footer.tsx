import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="rounded-lg text-red-400 font-bold text-opacity-50 p-3 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} My Shopping Site. All rights reserved.</p>
    </div>
  );
};

export default Footer;