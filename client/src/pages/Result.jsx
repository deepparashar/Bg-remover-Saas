import React from 'react'
import { assets } from '../assets/assets'
import {Loader2} from 'lucide-react'
const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>

      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>

        {/* Image Container */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          {/* Left side */}
          <div >
            <p className='font-semibold text-zinc-600 mb-2'>Original</p>
            <img className='rounded-md border border-gray-300' src={assets.image_w_bg} alt="" />
          </div>

          {/* Right side */}
          <div className='flex flex-col'>
            <p className='font-semibold text-zinc-600 mb-2'>Background Removed</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              <img src={assets.image_wo_bg} alt="" />
              <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                {/* <div className='animate-spin'><Loader2 width={39} height={39} color='blue' /></div> */}
              </div>
            </div>
          </div>
        </div>
          
          {/* -----------Buttons------------ */}

          <div className='flex justify-center sm:justify-end items-center flex-wrap mt-6 gap-4'>
            <button className='px-8 py-2.5 text-blue-600 text-sm border border-blue-600 rounded-full hover:scale-105 transition-all duration-500'>Try another image</button>
            <a className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-blue-600 to-sky-500 rounded-full hover:scale-105 transition-all duration-500' href="">Download image</a>
          </div>
           
      </div>

    </div>
  )
}

export default Result