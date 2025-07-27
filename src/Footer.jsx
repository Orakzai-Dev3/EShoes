import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";




function Footer() {
   
    const [isTrue ,setisTrue] = useState(false)
    const [isTrue1 ,setisTrue1] =useState(false)
    const [isTrue2 ,setisTrue2] =useState(false)
    const [isTrue3 ,setisTrue3] =useState(false)
  return (
    <section className='w-[100%] bg-[#fbfbfb] pt-6'>
    <div className=' lg:max-w-[1400px] h-[50vh] flex flex-col lg:flex lg:flex-row gap-2 pt-8 pb-4 border-t-[1px] bg-[#fbfbfb]  lg:h-[50vh]  border-[#141519] m-auto'>
       
        <div className='basis-[25%] pl-2 pt-2 flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
            <h1 className='capitalize font-inter font-semibold text-lg md:text-2xl'>
                my account
            </h1>
            <p onClick={()=>{setisTrue(!isTrue)}}>
                { isTrue ?
            <MdKeyboardArrowUp 
            className='pr-2 cursor-pointer lg:hidden text-4xl'/> 
            : <MdKeyboardArrowDown 
            className='pr-2 cursor-pointer lg:hidden text-4xl' />}</p>
                
            
            </div>
            <div className='hidden lg:block '  style={{
    display: isTrue ? "block" : "none",
    display: window.innerWidth >= 1024 ? "block" : isTrue ? "block" : "none",
   
  }}>
                <h3 className='capitalize font-cinzel'>sign in</h3>
                <h3 className='capitalize font-cinzel'> Create Account</h3>
            </div>
        </div>
        <div className='basis-[25%] pl-2 pt-2 flex flex-col gap-3'>
            <div className='flex justify-between items-center'>  
            <h1 className=' font-inter font-semibold text-lg md:text-2xl'>
                About <span>eShoes</span> 
            </h1>
            <p onClick={()=>{setisTrue1(!isTrue1)}}>
                { isTrue1 ?
            <MdKeyboardArrowUp 
            className='pr-2 cursor-pointer lg:hidden text-4xl'/> 
            : <MdKeyboardArrowDown 
            className='pr-2 cursor-pointer lg:hidden text-4xl' />}</p>
            </div >
            <div className='hidden lg:block' style={{
    display: isTrue1 ? "block" : "none",
    display: window.innerWidth >= 1024 ? "block" : isTrue1 ? "block" : "none",
   
  }}>
                <h3 className='capitalize font-cinzel'>about us</h3>
                <h3 className='capitalize font-cinzel'>contact us</h3>
                <h3 className='capitalize font-cinzel'>term & conditions</h3>
                <h3 className='capitalize font-cinzel'>privacy policy</h3>
                <h3 className='capitalize font-cinzel'>Cancellation, Return & Refund Policy</h3>

            </div>
        </div>
        <div className='basis-[25%] pl-2 pt-2 flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
            <h1 className='capitalize font-inter font-semibold text-lg md:text-2xl'>
            Customer Service

            </h1> 
            <p onClick={()=>{setisTrue2(!isTrue2)}}>
                { isTrue2 ?
            <MdKeyboardArrowUp 
            className='pr-2 cursor-pointer lg:hidden text-4xl'/> 
            : <MdKeyboardArrowDown 
            className='pr-2 cursor-pointer lg:hidden text-4xl' />}</p>
            </div>
            <div className='hidden lg:block' style={{
    display: isTrue2 ? "block" : "none",
    display: window.innerWidth >= 1024 ? "block" : isTrue2 ? "block" : "none",
   
  }}>
                <h3 className='capitalize font-cinzel'>About your order</h3>
                <h3 className='capitalize font-cinzel'>Wishlist</h3>
                <h3 className='capitalize font-cinzel'>Comparison list</h3>
                
            </div>
        </div>
        <div className='basis-[25%] pl-2 pt-2 flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
            <h1 className=' font-inter font-semibold text-lg md:text-2xl'>
            eShoes Contact Us
            </h1>
            <p onClick={()=>{setisTrue3(!isTrue3)}}>
                { isTrue3 ?
            <MdKeyboardArrowUp 
            className='pr-2 cursor-pointer lg:hidden text-4xl'/> 
            : <MdKeyboardArrowDown 
            className='pr-2 cursor-pointer lg:hidden text-4xl' />}</p>
            </div>
            <div className='hidden lg:block' style={{
    display: isTrue3 ? "block" : "none",
    display: window.innerWidth >= 1024 ? "block" : isTrue3 ? "block" : "none",
   
  }}>
                <h3 className='capitalize font-cinzel'>About your order</h3>
                <h3 className='capitalize font-cinzel'>1234 Elm Street 
                      California (CA)</h3>
                <h3 className='capitalize font-cinzel'>1 (555) 123-4567</h3>
                 <h3 className='capitalize font-cinzel'>Mon-Sun 9.00 - 18.00</h3>
                 <h3 className='capitalize font-cinzel'>support@walkarfootwear.co</h3>

            </div>
        </div>

        
    </div></section>
  )
}

export default Footer