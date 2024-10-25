import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r  border-slate-500 p-4 flex flex-col w-[100px] sm:w-[300px] md:w-[450px] lg:w-[600px]'> 
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
