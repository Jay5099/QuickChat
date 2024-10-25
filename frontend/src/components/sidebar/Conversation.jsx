import React from 'react'
import useConversations from '../../zustand/useConversations';
import { useSocketContext } from '../../context/SocketContext';
import { useAuthContext } from '../../context/AuthContext';

const Conversation = ({conversation,lastIdx,emoji}) => {
console.log(conversation)
    const {selectedConversation,setSelectedConversation} = useConversations();
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    const {authUser}= useAuthContext();
    const user= {...authUser,fullName:authUser.fullName}
    console.log(user)
  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
            ${isSelected && 'bg-gray-300'}
        `}
            onClick={()=>setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline ? "online" : ""} `}>
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilePic} alt='user avatar' />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-800'>{conversation.fullName.concat(conversation.fullName==user.fullName?"(YOU)":"")}</p>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
        </div> 

     {!lastIdx && <div className='divider my-0 py-0 h-1 ' /> }
    </>
  )
}

export default Conversation
