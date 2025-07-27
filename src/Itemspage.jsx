
import React, { Suspense ,lazy, useEffect, useState } from 'react'
import { FiDivideCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Card = lazy(()=> import('./Cards'))

function Itemspage({Catagory,setCatagory,Love,setLove,text,men,settext,setSelectedItem}) {
  const [Count,setCount]=useState(25)
  const [slide , setslide] = useState(false)
  const [Color,setColor]=useState('')
  const [Rate, setRate] =useState('')
  const colors = [
    "Red",
    "Blue",
    
    "Yellow",
    "Green",
    
    
    "Brown",
    "Gray",
    "Black",
  ];
  const rates = [
    "1000-5000",
    "5000-10000",
    "10000-15000",
    "15000-20000",
    "20000-25000",
    "25000-30000",
    "30000-35000",
  ]
  

  
  const [Data ,SetData]=useState(men)  
            
              
          useEffect(()=>{ 
             let filtered = Data.filter((val)=>val.color == Color)
             SetData(filtered)
          },[Color])
      
      useEffect(()=>{
        if(Catagory == ''){
          SetData(men)
        }else{
       let filtered = men.filter((data)=>data.gender == Catagory)
        SetData(filtered)}
        
      },[Catagory,])

      const safeText = text || "";

      useEffect(() => {
        let filtered = Data.filter((data) => 
          data.description?.toLowerCase().includes(safeText.toLowerCase()) || 
          data.category?.toLowerCase().includes(safeText.toLowerCase()) || 
          data.color?.toLowerCase().includes(safeText.toLowerCase()) || 
          data.gender?.toLowerCase().includes(safeText.toLowerCase())
        );
        SetData(filtered);
             if (!text ) SetData(Data);

      }, [safeText]);



        
      
      

  return (
    <section className='w-full h-full bg-[#fbfbfb]'>
    <div className='max-w-[1400px] lg:m-auto bg-[#fbfbfb] '>
      <div className='flex justify-between items-center px-1 pt-3'>
           <div className='flex  gap-1 sm:gap-2 md:gap-4 lg:gap-6'>
           <button 
               value={''}
               onClick={(e)=> setCatagory(e.target.value) }
                
               
               className='px-3 py-1 border-[1px] text-sm md:text-lg font-inter border-[#D6BFA8] hover:text-[#fbfbfb] hover:bg-[#D6BFA8] rounded-[20px] flex items-center justify-center capitalize'>
              All
               </button>
               <button 
               value={'Men'}
               onClick={(e)=> setCatagory(e.target.value) }
               className='px-3 py-1 text-sm md:text-lg border-[1px] font-inter border-[#D6BFA8] hover:text-[#fbfbfb] hover:bg-[#D6BFA8] rounded-[20px] flex items-center justify-center capitalize'>
               men
               </button>
               <button 
               value={'Women'}
               onClick={(e)=> setCatagory(e.target.value) }
               className='px-3 py-1 border-[1px] text-sm md:text-lg  font-inter border-[#D6BFA8] hover:text-[#fbfbfb] hover:bg-[#D6BFA8]  rounded-[20px] flex items-center justify-center capitalize'>
               women
               </button>
               <button 
               value={'Kids'}
               onClick={(e)=> setCatagory(e.target.value) }
               className='px-3 py-1 font-inter text-sm md:text-lg  border-[1px] hover:bg-[#D6BFA8] hover:text-[#fbfbfb] border-[#D6BFA8] rounded-[20px] flex items-center justify-center capitalize'>
               kids
               </button>
           </div>
           <div onClick={()=>setslide(!slide)}>
                <button 
                className='flex justify-center font-inter items-center text-sm md:text-lg gap-1 capitalize'>
                
                filter 
                  <img  src="https://tse1.mm.bing.net/th?id=OIP.35Oax7j6MU5wUOcT3uceUwHaHa&pid=Api&P=0&h=220" 
                  className='2xl:w-4 cursor-pointer h-4 rotate-90' />
                </button>
                
               </div>
               
      </div>
      {/* slider */}
      <div className='relative my-1 hidden' >
            <div className='bg-slate-600 w-full relative grid grid-cols-4 gap-3 p-3'>
              {/* filter by colors */}
             <div >
                <h1 className='text-white pb-2 pt-1'>Colors</h1>
                {/* colors_div */}
                <div className='grid-cols-2 gap-1 grid'>

                  {colors.map((color,key)=> <div key={key} className='flex gap-2 '>
                  {/* circle */}
                      <div className='w-6  bg-black rounded-[20px]' style={{backgroundColor:color.toLowerCase()}}></div>
                      <button className=''value={color} onClick={(e)=>setColor(e.target.value)} >{color}</button>
                </div>)}
                
                

                </div>
             </div>

                {/* filter by rates */}
             <div>
              <h1 className='text-white pt-1 pb-2'>Rates</h1>
             <div className='grid grid-cols-2 gap-1'>
                
                {rates.map((data,key)=><h1 key={key}><button onClick={(e)=>setRate(e.target.value)} value={data}>{data}</button></h1>
)}

             </div></div>
             <div>
                <h1 className='text-white'>Category</h1>
             </div>
             <div>
                <h1 className='text-white'>Category</h1>
             </div>
            </div>
      </div>
      {/* main card divs */}
       
      <div
    className='max-w-full grid px-4 sm400:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid xl:grid-cols-5 bg-[#fbfbfb] mt- xl:gap-3'>
      
      {Data.slice(0,Count).map((item,key)=><Suspense key={key}  fallback={<h1 className='font-inter'>loading...</h1>}>
                                    <h1 onClick={()=>setSelectedItem(item)} >
                                      <Link to={`/item/:${item.category}/:${item.color}`}>
                                          <Card  item={item} Love={Love} setLove={setLove} />
                                      </Link>
                                    </h1>
                           </Suspense>)}
   
     
     
     
       





      </div>{
      Count < Data.length ?
      <div className='flex justify-center items-center gap-3 mt-3'>

        <button onClick={()=>setCount(Count+25)} className='px-6 py-2.5 rounded-[25px]  border-[2px] border-[#D6BFA8] capitalize text-[#141519]'>load more</button>
      </div>:''}
      </div>
      </section>
  )
}

export default Itemspage