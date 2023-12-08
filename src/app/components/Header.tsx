"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
type CartItem = {
  id: string;
  name: string;
  quantity: number;
};

const Header: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartItemsFromStorage = localStorage.getItem('cartItems');
    setCartItems(cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : []);
  }, []);

  return (
    <header className="bg-gray-800 text-white relative">
      <nav className="flex items-center justify-between max-w-6xl mx-auto p-2">
        <div className="flex items-center">
          <Link href={"/selectCarts"} className="cursor-pointer">
            <span className="inline-block bg-red-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">
              {cartItems.length}
            </span>
          </Link>
          <Image src="/logo.png" alt="logo" width={50} height={50} layout="intrinsic" />
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/product" className="hover:underline">Products</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;