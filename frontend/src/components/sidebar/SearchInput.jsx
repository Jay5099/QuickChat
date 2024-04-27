import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversations from '../../zustand/useConversations';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search,setSearch]=useState("");
  const {setSelectedConversation} = useConversations(); 
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {return toast.error('Search query must be at least 3 characters long')}
    
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else toast.error('No user found');
  }
  return (
    <form onSubmit={handleSubmit} className='flex gap-2 items-center'>
        <input type="text" 
            placeholder="Search..." 
            className="input input-bordered rounded-full" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        <button type="submit" className='btn btn-circle text-white bg-sky-500'>
            <IoSearchSharp className='w-6 h-6 outline-none' />

        </button>
    </form>
  )
}

export default SearchInput
