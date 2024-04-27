import React, { useState } from 'react'
import useConversations from '../zustand/useConversations';
import  toast  from 'react-hot-toast';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {messages,setMessages,selectedConversation}= useConversations();

    const SendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({message})
            })
            
            const data = await res.json();
            console.log(data);
            if(data.error ){
                throw new Error(data.message);
            }

            setMessages([...messages,data]);
        } catch (error) {
            toast.error(error.message);   
        }finally{
            setLoading(false);
        }
    }
    return {loading,SendMessage}
}

export default useSendMessage
