import React from 'react'
import {UploadIcon} from 'lucide-react'
import { assets } from '../assets/assets'
const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        {/* Left Side */}
        <div >
           <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-zinc-700 leading-tight'>
            Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent'>background</span> from <br className='max-md:hidden' /> images for free.</h1>
           <p className='my-6 text-[15px] text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit Minima nesciunt veritatis autem. <br className='max-sm:hidden'/>fuga non sit natus praesentium Lorem, ipsum dolor.</p>
           <div>
            <input type="file" name="" id="upload1" hidden />
            <label htmlFor="upload1" className='inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl cursor-pointer bg-gradient-to-r from-blue-600 to-sky-500 m-auto hover:scale-105 transition-all duration-500'>
               <UploadIcon size={20} className='text-white' />
               <p className='text-white text-sm'>Upload your image</p>
            </label>
           </div>
        </div>
        {/* Right Side */}
        <div className='w-full max-w-md'>
         <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header