import React from 'react';
import {HiArrowRight} from "react-icons/hi"

export default function Card({title, des, icon}) {
  return (
    <div className='"w-full h-80 p-5 rounded-lg shadow flex  bg-gray-800 group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
      <div className=''>
        <div className='flex h-full flex-col '>
        <div>
        <spam className="text-5xl text-designColor">{icon}</spam>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-2xl font-titleFont font-bold text-gray-300 py-3'>
            {title}
        </h2>
        <p className='base pb-3'>{des}</p>
        <span className='text-2xl text-designColor'>
            <HiArrowRight/>
        </span>
      </div>
      </div>
      </div>
    </div>
  )
}
