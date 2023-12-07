"use client";
import { usePathname, useRouter } from "next/navigation";
import { PRODUCT_INFO } from '../../../data/productDetailsData'; 
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
    <div className="flex justify-around mt-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="h-48 w-full relative">
          <Image 
            src={product.imageUrl}
            alt={`${product.brand} ${product.model}`}
            layout="fill"
            objectFit="cover"
            unoptimized
          />
        </div>
        <div className='p-6'>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${product.price.toFixed(2)}
          </span>
          <div className="font-bold text-black text-xl mb-2">{product.model} by {product.brand}</div>
          <p className="text-gray-700 text-base pb-4">
            Lens: {product.lensMaterial}, Frame: {product.frameMaterial}
          </p>
          <div className="h-48 w-full relative flex items-center justify-around">
        <button>
                <h1 className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:text-lg">
                  Add to cart
                </h1>
              </button>
        </div>
        </div>
      </div>
      
      
      <div className="w-96 rounded overflow-hidden shadow-lg bg-white overflow-scroll">
        <div className="h-48 w-full relative p-4 rounded-sm">
          <input className="box-border text-black p-2 w-full border border-black rounded-sm" type="text" placeholder="New comment" /> {/* Added padding, width full and border */}
        </div>
      </div>
    </div>

  );
}