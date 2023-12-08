"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const data = localStorage.getItem("cartItems");
    if (!data) localStorage.setItem("cartItems", JSON.stringify([]));
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/topBanner/topBanner.avif"
          alt="Stylish sunglasses on a bright background"
          layout="fill"
          objectFit="cover"
          objectPosition="center" // Ensure the image is centered
          quality={100}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-extrabold text-white tracking-tight text-center sm:text-5xl md:text-6xl">
          <span className="block">Discover Your Perfect Pair</span>
        </h1>
        <p className="mt-4 max-w-md mx-auto text-base text-gray-300 text-center sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
          Explore our exclusive collection of designer sunglasses
        </p>
        <div className="mt-8 sm:mt-12">
          <Link href="/product">
            <h1 className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:text-lg">
              Shop Now
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;