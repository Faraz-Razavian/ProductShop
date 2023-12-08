"use client";
import { usePathname, useRouter } from "next/navigation";
import { PRODUCT_INFO } from '../../../data/productDetailsData'; 
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  interface Comment {
    id: number;
    text: string;
    timestamp: Date;
  }
  const [selectedColor,setSelectedColor]=useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
   const pathName = usePathname()
   const productId=pathName?.split("/")[2]
   const product=PRODUCT_INFO.find((row)=>row.id===+productId!)
   
  
   useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${product?.id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [product?.id]);
   if(!product){
    return(
        <></>
    )
   }
   const commentSubmitHandler=()=>{
    
    if (!comment) return;
      const comments = JSON.parse(localStorage.getItem(`comments_${product.id}`)|| "[]");
      const newComment = {
        id: new Date().getTime(),
        text: comment,
        timestamp: new Date(),
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    // Save the updated comments array to localStorage
    localStorage.setItem(`comments_${product.id}`, JSON.stringify([...comments, newComment]));

    // Optionally, clear the comment input after submission
    setComment("");
   }
   const handleAddToCart = () => {
    const cartItem = {
      fId:new Date().getTime(),
      id: product.id,
      model: product.model,
      brand: product.brand,
      price: product.price,
      imageUrl:product.imageUrl,
      color: selectedColor||product.color
    };
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")!)||[];

    // Add the new item to the cart
    const updatedCartItems = [...existingCartItems, cartItem];

    // Store the updated cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    window.location.reload()
  };
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
        </div>
      </div>
      
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
        <div className="h-48 w-full relative flex items-center justify-around">
        <div
              style={{ backgroundColor: product.color }}
              className="w-16 h-16 rounded-full cursor-pointer"
              onClick={() => setSelectedColor(product.color)}
            ></div>
          {product.changeColors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="w-16 h-16 rounded-full cursor-pointer"
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
        </div>
        <div className='p-6'>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {`Color: ${selectedColor||product.color}`}
          </span>
      </div>
      <div className="h-48 w-full relative flex items-center justify-around">
        <button onClick={handleAddToCart}>
                <h1 className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:text-lg">
                  Add to cart
                </h1>
              </button>
        </div>
      </div>
      <div className="max-w-full rounded overflow-hidden shadow-lg bg-white">
  <div className="flex flex-col md:flex-row items-center p-4 md:space-x-4 space-y-4 md:space-y-0">
    <input
      className="flex-grow py-2 px-4 border border-gray-300 rounded-md text-lg w-full md:w-auto"
      type="text"
      placeholder="New comment"
      value={comment} // Use the comment state
      onChange={(e) => setComment(e.target.value)} // Update the comment state on change
    />
    <button onClick={commentSubmitHandler}
      className="py-2 px-4 w-full md:w-auto border border-transparent rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors"
    >Submit</button>
  </div>
  <div className="h-80 overflow-auto mt-4 space-y-2">
    <ul className="space-y-2">
        {comments.map((commentData) => (
          <li key={commentData.id} className="bg-gray-100 p-3 rounded-md">
            <p className="text-gray-700">{commentData.text}</p>
            <p className="text-gray-500 text-sm">{(new Date(commentData.timestamp)).toLocaleString()}</p>
          </li>
        ))}
    </ul>
  </div>
</div>
</div>
  );
}