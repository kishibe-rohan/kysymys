import React from 'react'

import {TimelineOutlined,LibraryMusicOutlined,BusinessCenterOutlined,OutdoorGrillOutlined,ComputerOutlined,SportsBasketballOutlined} from '@material-ui/icons'

const SidebarOptions = () => {
  return (
    <div className='flex flex-col'>
       <div className="sideBarOption">
         <TimelineOutlined className="sideBarIcon"/>
         <p className="sideBarText">History</p>
       </div>
       <div className="sideBarOption">
         <LibraryMusicOutlined className="sideBarIcon"/>
         <p className="sideBarText">Music</p>
       </div>
       <div className="sideBarOption">
         <BusinessCenterOutlined className="sideBarIcon"/>
         <p className="sideBarText">Business</p>
       </div>
       <div className="sideBarOption">
         <OutdoorGrillOutlined className="sideBarIcon"/>
         <p className="sideBarText">Cooking</p>
       </div>
       <div className="sideBarOption">
         <ComputerOutlined className="sideBarIcon"/>
         <p className="sideBarText">Technology</p>
       </div>
       <div className="sideBarOption">
         <SportsBasketballOutlined className="sideBarIcon"/>
         <p className="sideBarText">Sports</p>
       </div>
    </div>
  )
}

export default SidebarOptions
