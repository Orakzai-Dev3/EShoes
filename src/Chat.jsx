import React from 'react'
import { useState } from 'react'
import { FaRobot } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { AiOutlineSend } from "react-icons/ai";
function Chat() {
  const [message, setMessage] = useState('');
    const [Chat ,SetChat] = useState([
        {role:'ai',
         message:'we are here to asist you'
        },
        {role:'user',
         message:'tell me about my vacation'
        },
        {role:'ai',
         message:'whats your dream loaction'
        },
        {role:'user',
         message:'whats saudia arabia'
        }
    ])
    const arr = [
        {role:'ai',
         message:'we are here to asist you'
        },
        {role:'user',
         message:'tell me about my vacation'
        },
        {role:'ai',
         message:'whats your dream loaction'
        },
        {role:'user',
         message:'whats saudia arabia'
        }
    ]
  return (
   <div>
  <h1 className="font-inter text-4xl pt-4 text-center">this is chat</h1>
  <div className='w-[40%] mx-auto  flex flex-col justify-between h-[90vh]  gap-2 mt-4'>
    <div>
      {
    Chat.map((data, index) => {
      if (data.role === 'ai') {
        return (<div className='flex gap-2 items-center pl-2 '>
          <FaRobot className='text-2xl basis-[10%] text-blue-500 mt-1' />
          <h1 key={index} className=" w- text-wrap basis-[90%] font-inter  px-4 py-2 my-2 rounded">
            {data.message}
          </h1>
        </div>);
      } else {
        return (<div className='flex gap-2 items-center pl-2 flex-row-reverse pr-2'>
          <FaUserLarge className='text-2xl basis-[10%]  mt-1' />
          <h1 key={index} className=" w- text-wrap basis-[90%] bg-gray-300 font-inter px-4 py-2 my-2 rounded">
            {data.message}
          </h1>
        </div>);
      }
    })
  } 
    </div>

 
  <div className='w-[100%] flex items-center self-end justify-self-end justify-center m-auto px-8  bottom-3'>
    <input className='basis-[90%] py-2 px-2 border-gray-600 border-[1px] rounded' value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='type messeage here' />
    <button className=' text-black text-xl basis-[10%] px-4 py-2 rounded-xl' onClick={() => {
      if (message.trim() === '') return; 
      SetChat([...Chat, { role: 'ai', message },{role: 'user', message}]);
      
      setMessage('');
    }}><AiOutlineSend/></button>
  </div>
  </div>
   
</div> 

  )
}

export default Chat