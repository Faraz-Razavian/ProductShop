"use client"
import { usePathname, useRouter } from "next/navigation";
import { PRODUCT_INFO } from '../../../data/productDetailsData'; // Adjust the import path as needed
import Link from "next/link";
import Image from "next/image";

export default function ProductDetail() {
   const pathName = usePathname()
   const productId=pathName.split("/")[2]
   const product=PRODUCT_INFO.find((row)=>row.id===+productId)
   if(!product){
    return(
        <></>
    )
   }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="h-48 w-full relative"> {/* Wrap the Image in a div with set dimensions */}
        <Image 
          src={product?.imageUrl} // Assume the 'assets' directory is in the 'public' folder for a Next.js project
          alt={`${product.brand} ${product.model}`}
          layout="fill" // Use 'fill' to comply with the div size
          objectFit="cover" // Maintain aspect ratio but fill the div space
          unoptimized // This should be removed in production for image optimization
        />
      </div>
      <div className='p-6'>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${product.price.toFixed(2)}
        </span>
      </div>
      <div className="px-6 pb-4 flex flex-col justify-between items-start">
        <div className="font-bold text-black text-xl mb-2">{product.model} by {product.brand}</div>
        <p className="text-gray-700 text-base pb-4">
          Lens: {product.lensMaterial}, Frame: {product.frameMaterial}
        </p>
      </div>
    </div>
  );
}