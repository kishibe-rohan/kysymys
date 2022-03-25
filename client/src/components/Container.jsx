import React from 'react'
import {Avatar} from '@material-ui/core'
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/userSlice";

const Container = () => {
  const user = useSelector(selectUser);
  return (
    <div className='flex flex-col p-[10px] border-[1px] border-solid rounded-lg border-gray-200 bg-white cursor-pointer max-w-[700px] hover:border-gray-300 mt-2'>
      <div className='flex mt-2'>
        <Avatar src={user?.photo}/>
      </div>
      <div className='flex items-center'>
        <h5 className="font-bold ml-2 text-lg text-gray-500">Ask a question..</h5>
      </div>
    </div>
  )
}

export default Container
