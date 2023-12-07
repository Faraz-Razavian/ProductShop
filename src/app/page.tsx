"use client";
import Image from "next/image";
import Link from "next/link";

const Home = () => {  
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/topBanner/topBanner.avif" // Make sure to use a path to your new backdrop image
            alt="Stylish sunglasses on a bright background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 text-center">
            <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Discover Your Perfect Pair</span>
            </h1>
            <p className="mt-4 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
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
      </div>

      {/* Rest of the homepage content */}
    </div>
  );
};

export default Home;