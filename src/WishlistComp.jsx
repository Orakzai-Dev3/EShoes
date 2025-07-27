import React from 'react';
import { IoCloseOutline } from "react-icons/io5"; // Icon for remove action
import { useDispatch } from 'react-redux';
import { removeLiked } from './redux/likedSlice';
function WishlistComp({data}) {
    const Dispatch = useDispatch()
  return (
    <div className="bg-gray-100 grid w-[100%] grid-cols-2 gap-1 mb-2 rounded-md shadow-sm p-2">
      {/* Item Image */}
      <img
        src= {data.image}// Placeholder if no image is provided
        alt="Wishlist item"
        className="rounded-lg w-[80%] h-[100px] object-cover"
      />

      {/* Item Details */}
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-sm font-inter text-gray-600">{ data.description.slice(0,20) +'...'}</p>
          <h1 className="font-bold text-lg truncate font-cinzel">{data.category}</h1>
          <h2 className="text-sm font-medium font-cinzel"> {data.color}</h2>
        </div>

        {/* Remove Button */}
        <div className="self-end">
          <button
          onClick={()=>Dispatch(removeLiked(data))}
             // Callback for removing item
            className="flex items-center font-inter text-red-600 text-sm gap-1 hover:underline"
          >
            <IoCloseOutline className="text-lg" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistComp;
