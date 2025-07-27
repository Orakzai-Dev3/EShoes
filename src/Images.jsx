import React from 'react'

function Images() {
  return (
    
        <div className='max-w-full h-[80vh] relative'>
          
            <div className=' w-full h-full'>
                <img className='w-full h-full hidden md:block object-cover absolute ' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1084,c_limit/d755afbf-5f9b-4739-9fcb-0ca78e77a73e/nike-just-do-it.jpg" alt="" />
                <img className='w-full h-full block md:hidden object-cover absolute ' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_608,c_limit/730a5793-a44a-4ba2-bbe0-9ca94114dd4f/nike-just-do-it.jpg" alt="" />
                <div className='bg-mycolor w-full h-full '>
                
                </div>
            </div>
         </div>
       
    
  )
}

export default Images