import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {

  const {messages,loading} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(()=>{
     if (messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
       
       {!loading && messages.length > 0 && messages.map((message,idx) =>
       <div key={message._id} 
            ref={idx === messages.length - 1 ? lastMessageRef : null}
          >
        <Message  message={message} />
       </div>
       )}
       
       {loading &&  [...Array(3)].map((_,idx)=>
        <MessageSkeleton key={idx} />
       )}

       {
        !loading && messages.length === 0 && 
            <p className='text-center'> Send A Message To Start Conversation</p>
        
       }
    </div>

  )
}

export default Messages
