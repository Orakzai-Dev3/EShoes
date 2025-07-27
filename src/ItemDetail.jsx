import React from 'react'
import { addCart } from './redux/Cart'
import {addLiked} from './redux/likedSlice'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux';
function ItemDetail({selectedItem}) {
  const Dispatch = useDispatch()
  const navigate = useNavigate();
  function handleAddToCart() {
    Dispatch(addCart(selectedItem))
    toast.success("Item added to cart!");

  }
  function handleAddToLiked() {
    Dispatch(addLiked(selectedItem))
    toast.success("Item added to wishlist!");
  }
  const Cart_data = useSelector((state)=>state.cart.cart)
  console.log(Cart_data)
  return (<>
            <div class="flex flex-col w-[95vw] sm:w-[80vw] mx-auto my-8 sm:flex-row p-6">
  {/* <!-- Left Side: Image --> */}
  <div class="sm:w-11/20 basis-[40%]  items-center justify-center flex mb-4 sm:mb-0">
    <img className=' w-[95%] lg:w-[80%] hover:scale-125 duration-500' src={selectedItem?.image} alt="Product Image" class="w-full h-auto rounded-lg shadow-lg"/>
  </div>

    {/* <!-- Right Side: Product Description --> */}
  <div class="sm:w-9/20 basis-[60%] pl-0 sm:pl-6">
    <h1 class="text-2xl font-bold mb-4 font-inter">{selectedItem?.category}</h1>
    <p class="text-lg text-gray-700 mb-6 font-cinzel">{selectedItem?.description}</p>
    <p class="text-sm text-gray-500 mb-4 font-inter">SKU: 12345 | Category: Joggers</p>
    <p class="text-sm text-gray-500 mb-4 font-inter">Color: {selectedItem?.color}</p>
    <p class="text-xl font-semibold text-green-500 font-inter ">Rs. {selectedItem?.newRate}</p>
    <p className='text-sm pb-6 text-gray-500 font-inter'>Shipping calculated at checkout. </p>

    <div class="mb-6">
      <h2 class="text-lg font-medium mb-2 font-inter">Available Sizes</h2>
      <div class="flex space-x-4">
        <button class="px-4 py-2  font-inter border rounded-full text-sm font-semibold bg-gray-100 hover:bg-gray-200">S</button>
        <button class="px-4 py-2 font-inter  border rounded-full text-sm font-semibold bg-gray-100 hover:bg-gray-200">M</button>
        <button class="px-4 py-2  font-inter border rounded-full text-sm font-semibold bg-gray-100 hover:bg-gray-200">L</button>
        <button class="px-4 py-2  font-inter border rounded-full text-sm font-semibold bg-gray-100 hover:bg-gray-200">XL</button>
      </div>
    </div>
      <div>
          <div class="flex items-center justify-between gap-1">
            <button class="basis-[50%] py-2 bg-[#141519] text-sm md:text-lg text-white font-inter font-semibold rounded-lg hover:bg-[#D6BFA8]" onClick={handleAddToLiked}>Add to Whishlist</button>
            <button class="basis-[50%] py-2 bg-[#141519] text-sm md:text-lg text-white font-inter font-semibold rounded-lg hover:bg-[#D6BFA8]" onClick={handleAddToCart}>Add to Cart</button>
           </div> 
            <button class="w-full py-2 mt-2 bg-gray-200 text-gray-800 font-inter font-semibold rounded-lg hover:bg-gray-300" onClick={()=>navigate('/item/place-order')}>Buy Now</button>

      </div>
  </div>
            </div>
            <div className='w-[95vw] p-6 sm:w-[90vw] mx-auto my-8'>
                <div className=' w-[90%] sm:pl-20 rounded-lg '>
                    <h1 className='text-2xl font-inter font-semibold mb-4'>Engineered for the Game – Built for the Grind</h1>
                    <p className='text-gray-700 font-cinzel'>Meet the <span>{selectedItem?.category}</span>, the ultimate fusion of comfort, agility, and style made for the modern gamer. Designed for competitive play and built to last, this shoe adapts to your every move—whether you're on stage, at a LAN party, or gaming deep into the night at home.

                    Crafted with breathable mesh uppers, adaptive cushioning, and reinforced grip zones, the <span>{selectedItem?.category}</span> gives you the edge you need—without sacrificing comfort. Every detail is engineered to reduce fatigue and keep                  your focus locked in.</p>
                </div>
                <div className='w-[90%] sm:pl-20 mt-6'>
                  <h1 className='text-xl font-inter font-semibold mb-4'>Key Features</h1>
                  <ul className='list-disc list-inside'>
                    <li className='text-gray-700 font-cinzel'> <span className='font-semibold'>ProGrip™ Outsole:</span> Custom-molded rubber sole with multidirectional traction, built for quick pivots and smooth transitions between standing and seated positions.</li>
                    <li className='text-gray-700 font-cinzel'> <span className='font-semibold'>CoolCore™ Uppers:</span> Breathable, sweat-resistant mesh with micro-vent technology keeps your feet cool during long sessions.</li>
                    <li className='text-gray-700 font-cinzel'> <span className='font-semibold'>Reinforced Grip Zones:</span> Strategically placed for superior traction during intense gaming.</li>
                    <li className='text-gray-700 font-cinzel'> <span className='font-semibold'>Lightweight Design:</span> Engineered for agility and speed, allowing for quick movements without weighing you down.</li>
                  </ul>
                </div>
                <div className='w-[90%] sm:pl-20 mt-6'>
                  <h1 className='text-xl font-inter font-semibold mb-4'>Why Gamers Choose <span>{selectedItem?.category} Pro</span></h1>
                  <ul className='list-disc list-inside'>
                    <li className='text-gray-700 font-cinzel'>Unmatched comfort for long gaming sessions</li>
                    <li className='text-gray-700 font-cinzel'>Responsive design that adapts to your playstyle</li>
                    <li className='text-gray-700 font-cinzel'>Durable materials that withstand intense use</li>
                    <li className='text-gray-700 font-cinzel'>Sleek aesthetics that look great on and off the stage</li>
                  </ul>
                </div>
                
            </div>
        </>
  )
}

export default ItemDetail



