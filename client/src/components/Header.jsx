import React,{useState} from 'react'

import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  // Close,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";

import { Avatar, Button, Input } from "@material-ui/core";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const Header = () => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div className='flex items-center bg-white sticky z-50 shadow-sm top-0 justify-center p-[3px]'>
       
       <div className='flex items-center justify-between'>
         <div className='flex'>
           <span className="text-orange-500 text-lg font-semibold mr-5">Kysymys</span>
         </div>
         <div className="flex">
           <div className="headerIcon">
             <HomeIcon/>
           </div>
           <div className="headerIcon">
             <FeaturedPlayListOutlinedIcon/>
           </div>
           <div className="headerIcon">
             <AssignmentTurnedInOutlined/>
           </div>
           <div className="headerIcon">
             <PeopleAltOutlined />
           </div>
           <div className="headerIcon">
             <NotificationsOutlined />
           </div>
         </div>
         <div className='hidden md:flex items-center border-2 rounded-lg border-solid border-gray-300 p-[5px] ml-[5px]'>
           <Search/>
           <input className="bg-transparent outline-none border-none " type="text" placeholder='Search..'/>
         </div>

         <div className="flex items-center ml-[25px]">
           <span>
             <Avatar/>
           </span>

           <button className="px-2 py-1 rounded-lg ml-1 bg-orange-300 hover:bg-orange-500" onClick={() => setIsModalOpen(true)}>Add Question</button>
         </div>
       </div>
    </div>
  )
}

export default Header
