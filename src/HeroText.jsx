import React from 'react'

function HeroText() {
  return (
    <>
    <section className='flex flex-col w-full gap-2 py-8 bg-[#fbfbfb]'>
         <h1 className="text-3xl font-inter text-center sm:text-5xl lg:text-7xl pt-4 font-extrabold text-[#141519] leading-tight">
          Stylish Shoes for Every Step
        </h1>
        <p className="mt-8 text-lg text-center font-cinzel sm:text-xl lg:text-2xl text-gray-600 w-[95%] md:w-[80%] mx-auto">
          Step into a world where fashion meets comfort. Whether you're heading to the office, out with friends, 
          or just enjoying a walk in the park — our shoe collection is designed to keep you looking sharp 
          and feeling great. Crafted with premium materials and built for all-day wear, our shoes offer the 
          perfect balance of durability, support, and timeless style. Elevate your everyday look with the pair 
          that fits your lifestyle.
        </p>
    </section>
    
    </>
  )
}

export default HeroText