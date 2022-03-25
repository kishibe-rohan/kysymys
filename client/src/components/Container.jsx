import React from 'react'
import {Avatar} from '@material-ui/core'

const Container = () => {
  return (
    <div className='flex flex-col p-[10px] border-[1px] border-solid rounded-lg border-gray-200 bg-white cursor-pointer max-w-[700px] hover:border-gray-300 mt-2'>
      <div className='flex mt-2'>
        <Avatar/>
      </div>
      <div className='flex items-center'>
        <h5 className="font-bold ml-2 text-lg text-gray-500">Ask a question..</h5>
      </div>
    </div>
  )
}

export default Container
