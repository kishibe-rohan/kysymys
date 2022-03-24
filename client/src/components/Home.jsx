import React from 'react'

import Feed from './Feed'
import Header from './Header'
import Sidebar from './Sidebar'
import Widgets from './Widgets'

const Home = () => {
  return (
    <div className="w-full min-w-fit">
       <Header/>
       <div className='flex justify-center px-[50] bg-black/5 w-full min-w-fit'>
         <div className='flex w-full py-[10] max-w-[1280]'>
           <Sidebar/>
           <Feed/>
           <Widgets/>
         </div>
       </div>
    </div>
  )
}

export default Home
