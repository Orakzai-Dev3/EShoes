import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch ,useSelector } from 'react-redux';
import { addLiked,removeLiked } from './redux/likedSlice';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { addCart , removeCart } from './redux/Cart';
import Detail from './Detail'

function Cards({ item }) {
  const Dispatch = useDispatch()
  const Dispatch1 = useDispatch()
  
  
  
  const [Love ,setLove] = useState(false)
  const [num,setnum] = useState(1)
  const [slide , setslide] = useState(false)
  
  
  return ( <>
    <div onClick={()=> setslide(!slide)} className='px-2 mx-2 my-4 rounded-sm py-2  flex flex-col relative h-[80%]  shadow-xl bg-[#f2f2f2] '>
      {/* Heart Icon */}
     
      <div style={{pointerEvents:'none'}}
        className='absolute top-5 right-5  bg-[#eae1ff] px-5 text-[#fbfbfb] rounded-3xl py-3  z-10'
         
      >
        <AiOutlineHeart onClick={()=>{
          e.stopPropagation()
          setLove(!Love)
          if(num == 1){
            Dispatch(addLiked(item))
            
            setnum(num+1)
            
          }else{
            Dispatch(removeLiked(item))
            setnum(1)
          }
          
          
        
        }}  
        
          
          style={{pointerEvents:'all',
          color: Love ? 'red' : 'black'
        }} className='font-extrabold   z-11 cursor-pointer'  />
      </div>
      {/* Image Section */}
      <div className='basis-[60%] bg-cover overflow-hidden'>
        <img 
          className='rounded-md bg-cover w-[100%] h-[80%] hover:scale-110 duration-500'
          src={item.image} 
          alt="product image" 
        />
      </div>

      {/* Content Section */}
      <div className="p-2 basis-[40%]">
        <h3 className="text-lg font-inter  text-black leading-tight">{item.description}</h3>
        <p className="text-gray-400 inline-block pr-2 line-through">Price: {item.pastRate} PKR</p>
        <p className="text-white bg-[#FF4040] inline-block font-semibold">Price: {item.newRate} PKR</p>
        <p className=" text-lg text-yellow-400 pt-2 flex items-center ">
          <span ><MdOutlineStarPurple500 /></span>
          <span ><MdOutlineStarPurple500 /></span>
          <span ><MdOutlineStarPurple500 /></span>
          <span ><MdOutlineStarPurple500 /></span>
          <span ><MdOutlineStarPurple500 /></span>
           <span className='text-black text-sm font-inter'>({item.description.length})</span></p>
      </div>
    </div>
  </>)
}

export default Cards;
