import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex h-full  rounded-lg overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70'>
        <Sidebar />
        <MessageContainer />
      
    </div>
  )
}

export default Home
