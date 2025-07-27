import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiHeart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { addCart , removeCart } from './redux/Cart';
import { useDispatch } from 'react-redux';

import Smcomp from './Smcomp';
import WishlistComp from './WishlistComp';
import { Link } from 'react-router-dom';

function Navbar({ text, settext }) {
  const Dispatch = useDispatch()
  const love_data = useSelector((state) => state.liked.liked || []); // Adjust to your state slice
  const [openSlider, setOpenSlider] = useState(null);
  const Cart_data = useSelector((state)=>state.cart.cart)

  const toggleSlider = (slider) => {
    setOpenSlider(openSlider === slider ? null : slider);
  };

  return (
    <div className='w-[100%] bg-[#fbfbfb]'>
      <div className="max-w-[1400px] bg-[#Fbfbfb] flex py-5 gap-1 m-auto justify-between">
        <RiMenu3Line className="rotate-180 pl-[4px] md:hidden text-[30px]" />
        <h1 className="basis-[10%] flex self-start pl-2 text-2xl font-cinzel font-bold ">
          <img src="/logo.png" alt="" />
          <Link to="/">
          eShoes
          </Link>
        </h1>
        
        {/* Search Bar */}
        <div className="md:flex basis-[80%] relative items-center hidden">
          <div className="relative w-full">
            <input
              type="text"
              value={text}
              onChange={(e) => settext(e.target.value)}
              
              className="w-full py-1 border-black border-[1px] rounded-[20px] px-2"
            />
            <IoSearchOutline  className="absolute right-3 top-[50%] translate-y-[-50%]" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex basis-[10%] gap-1 items-center justify-end md:gap-2 text-xl pr-2">
          <FiHeart onClick={() => toggleSlider('wishlist')} className="cursor-pointer" />
         <Link to="/signup"> <MdOutlineAccountCircle className="cursor-pointer" /></Link>
          <div className="flex relative gap-[0.1px]">
            <HiOutlineShoppingBag onClick={() => toggleSlider('cart')} className="cursor-pointer" />
            <sup className="inline-block text-red-600">{(Cart_data.length)}</sup>
          </div>
        </div>
      </div>

      {/* Responsive Search Bar */}
      <div className="flex items-center md:hidden">
        <div className="relative w-full">
          <input
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            className="w-[95%] m-auto py-1 mx-1 border-black border-[1px] rounded-[20px] px-2"
          />
          <IoSearchOutline className="absolute right-6 top-[50%] translate-y-[-50%]" />
        </div>
      </div>

      {/* Sliders */}
      {openSlider === 'wishlist' && (
        <div  className="fixed top-0 right-0 w-[300px] h-full overflow-y-auto bg-white shadow-lg z-50 p-4 animate-slideIn">
          <IoCloseOutline onClick={() => setOpenSlider(null)} className="absolute cursor-pointer right-3 text-xl" />
          <h2 className="text-2xl py-2 font-bold">Your Wishlist</h2>
         {love_data.length > 0 ? (love_data.map((data ,k)=>< WishlistComp key={k} data={data}/>)) : <p>Your wishlist is empty!</p>}
         
          
        </div>
      )}

      {openSlider === 'cart' && (
        <div className="fixed top-0 right-0 w-[300px] h-full overflow-y-auto bg-white shadow-lg z-50 py-3 animate-slideIn">
          <IoCloseOutline onClick={() => setOpenSlider(null)} className="absolute cursor-pointer right-3 text-xl" />
          <h2 className="text-2xl pb-2 pl-2 font-inter font-bold">Your Cart</h2>
          {Cart_data.length > 0 ? (Cart_data.map((data, k) => <Smcomp key={k} data={data} />)) : <p className='font-cinzel'>Your cart is empty!</p>}
        </div>
      )}

      <style>
        {`
          @keyframes slideIn {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0); }
          }
          .animate-slideIn {
            animation: slideIn 0.4s ease-out;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
