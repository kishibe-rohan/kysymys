import React from 'react'
import SidebarOptions from './SidebarOptions'

const Sidebar = () => {
  return (
    <div className="hidden md:inline-flex md:p-[5px] md:mr-[10px] md:flex-[0.2]">
      <SidebarOptions/>
    </div>
  )
}

export default Sidebar
