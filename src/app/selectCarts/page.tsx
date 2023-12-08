"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '../../data/productDetailsData';

const SelectedCards: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    // Retrieve and parse your products from `localStorage`
    const storedCartItems = localStorage.getItem('cartItems');
    const items: Product[] = storedCartItems ? JSON.parse(storedCartItems) : [];
    setCartItems(items);
  }, []);

  const handleRemoveItem = (id: number) => {
    const updatedCartItems = cartItems.filter(item => item.fId !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    window.location.reload()
};
  if (cartItems.length === 0) {
    return (
      <div className="text-center text-gray-500 text-xl my-20">
       
      </div>
    );
  }
  return (
    <div className="container mx-auto my-6 p-4">
      <div className="flex flex-wrap -mx-4">
        {cartItems.map((item) => (
          <div key={item.fId} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md overflow-hidden h-full flex flex-col">
              <div className="relative h-64 flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.model}
                  layout='fill'
                  objectFit='contain'
                  className="w-full h-full" 
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold truncate">{item.model}</h3>
                <p className="text-lg text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <p className="text-md text-gray-500">Brand: {item.brand}</p>
                <p className="text-md text-gray-500">Color: {item.color}</p>

              </div>
              <button 
                className="text-gray-600 border border-gray-300 hover:text-gray-500 px-3 py-1 rounded mb-4 mx-4 self-end"
                onClick={() => handleRemoveItem(item.fId)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedCards;