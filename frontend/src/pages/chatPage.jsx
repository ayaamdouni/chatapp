import React from 'react'
import Side from '../components/side'
import ChatMessages from '../components/chatMessages'
import { logoutIcon } from '../components/logoutIcon'

const ChatPage = () => {
  return (
        <div className='flex flex-col sm:h-[450px] md:h-[500px] p-3
        rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Chat with 
          <span className='text-blue-500'> Others</span>
          </h1>
          {/* <div className='sm:h-[450px] md:h-[550px] '>             */}
              <div className="flex h-full pb-5">
                  <Side />
                  <div className="divider px-4">
                  </div>
                  <ChatMessages />
              </div>
          {/* </div> */}
        </div>
  )
}

export default ChatPage