import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex items-center justify-between max-w-6xl mx-auto p-2">
      <div className="rounded-lg overflow-hidden">  {/* Set your desired border-radius here */}
      <Image 
        src="/logo.png"
        alt="logo"
        width={50}  // The width of your logo in pixels
        height={50}  // The height of your logo in pixels
        layout="intrinsic"  // This could be fixed, intrinsic, responsive etc.
      />
</div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/product" className="hover:underline">Products</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contanct" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;