import React from 'react'
import {UploadIcon} from 'lucide-react'
const Upload = () => {
  return (
    <div>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-zinc-900 to-zinc-400 bg-clip-text text-transparent py-5py-6 md:py-16'>See the magic. Try now</h1>

        <div className='text-center mb-24'>
            <input type="file" name="" id="upload2" hidden />
            <label htmlFor="upload2" className='inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl cursor-pointer bg-gradient-to-r from-blue-600 to-sky-500 m-auto hover:scale-105 transition-all duration-500'>
               <UploadIcon size={20} className='text-white' />
               <p className='text-white text-sm'>Upload your image</p>
            </label>
           </div>

    </div>
  )
}

export default Upload