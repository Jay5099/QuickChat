import React from 'react'
import useConversations from '../../zustand/useConversations';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversations();
  const fromMe = message.senderId === authUser._id;
  const formatedTime =  extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-500';
  return (
    <div className={chatClassName}>
      <div className='chat-image avatar '>
        <div className='w-10 rounded-full'>
            <img src={profilePic} alt="Tailwind css chatbubble" />
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bubbleBgColor} pb-2`} >{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center" >{formatedTime}</div>
    </div>
  )
}

export default Message
