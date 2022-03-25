import React from 'react'
import WidgetContent from './WidgetContent'

const Widgets = () => {
  return (
    <div className="sticky top-20 hidden md:flex-[0.2] ml-5 md:flex flex-col mr-5 border-[1px] border-solid border-gray-300 h-fit rounded-sm bg-white mt-2">
      <div className="border-b-2 border-b-solid border-b-gray-100">
        <h5 className="p-2 text-gray-500 text-lg tracking-wide">Hotspots</h5>
      </div>
      <div className='flex flex-col'>
        <WidgetContent/>
      </div>
    </div>
  )
}

export default Widgets
