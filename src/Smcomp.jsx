import React from 'react'
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { addCart, removeCart } from './redux/Cart';

function Smcomp({data}) {
  const Dispatch = useDispatch()
  const handleRemoveToCart = () => {
    Dispatch(removeCart(data));
  };
  return (
     <div className='bg-gray-300 grid w-[100%] grid-cols-2 gap-1 mb-2'>
                <img src={data?.image} alt="" className='rounded-2xl  px-3 py-2' />
                <div className='flex flex-col justify-between py-1'>
                       <div className='flex flex-col font-cinzel gap-1'>
                       <h1>
                        {data?.description}
                       </h1>
                       <h2 className='font-cinzel'>color: {data?.color}</h2>
                      </div>
                       <div className='flex text-lg justify-center items-center self-end justify-self-end pr-1 '>
                             <div className='px-1 py-1 cursor-pointer rounded-s-full border-[1px] border-black '>
                            <HiOutlineMinusSm className='' onClick={handleRemoveToCart}/>
                            </div>
    
                            <h1 className='px-1 py-[-1]  border-y-[1px] border-x-[.4px] border-black'>1</h1>
                            <div className='px-1 cursor-pointer py-1 rounded-e-full border-[1px] border-black '>
                            <HiOutlinePlus/>
                           </div>
                       </div>
                       </div>
    
              </div>
  )
}

export default Smcomp