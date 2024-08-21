import React from 'react'
import {sendIcon} from './sendIcon'
import ChatMessage from './chatMessage'
const ChatMessages = () => {
  return (
    <div className='p-4 flex flex-col overflow-auto justify-between'>
        <div>
            <ChatMessage type="chat-start" message={"You were the Chosen One!"}/>
            <ChatMessage type="chat-end" message={"Yes I know"}/>            
        </div>
        <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Type..." />
            {sendIcon}
        </label>
    </div>
  )
}

export default ChatMessages