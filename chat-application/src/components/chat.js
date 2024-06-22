import React from 'react'
import { FiSend } from "react-icons/fi";

const Chat = () => {
  return (
   <div className='h-dvh bg-white flex justify-center items-center '>
    
    <div className='h-[95vh] w-[90vw] bg-orange-300 p-2 rounded-xl shadow-md shadow-black flex flex-col'>
      <div className='h-auto flex p-1 gap-2 bg-orange-200 rounded-md shadow-md '>
        <img src='chat-logo.png' className='w-12 h-12 drop-shadow-md shadow-black'/>
        <h2 className='mt-2 font-bold text-slate-600 text-xl'>Chat Application</h2>
      </div>
      <div className='bg-orange-100 min-h-[32rem] mt-5 m-2 p-2 rounded-md flex flex-col'>
        <div className=''>
          <p>hello</p>
        </div>
      </div>
      <div className='bg-gray-100 flex self-center min-h-12 w-3/5 p-1 rounded-lg space-x-2 sm:flex-shrink-0'>
        <input type='text' className=' rounded-sm focus:outline-none focus:ring-1 flex-1 '/>
        <button className='bg-orange-300 rounded-full w-10 h-10 flex justify-center items-center hover:bg-orange-400 hover:text-white'>
          <FiSend className='size-6'/></button>
      </div>
    </div>
    
   

   </div>
  )
}

export default Chat
