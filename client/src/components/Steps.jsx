import React from 'react'
import {UploadIcon, DownloadIcon, Delete} from 'lucide-react'


const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-zinc-900 to-zinc-400 bg-clip-text text-transparent'>Steps to remove background <br /> image in seconds</h1>
        <div className='flex item-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

          <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <UploadIcon width={39} height={39} color='white' className='bg-gradient-to-r from-blue-600 to-sky-500 py-1 rounded' />
            <div>
                <p className='text-xl font-medium'>Upload image</p>
                <p className='text-sm text-zinc-500 mt-1'>This is a demo text, will replace it later. <br />This is demo...</p>
            </div>
          </div>

          <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <Delete width={39} height={39} color='white' className='bg-gradient-to-r from-blue-600 to-sky-500 py-1 rounded' />
            <div>
                <p className='text-xl font-medium'>Remove background</p>
                <p className='text-sm text-zinc-500 mt-1'>This is a demo text, will replace it later. <br />This is demo...</p>
            </div>
          </div>

          <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <DownloadIcon width={39} height={39} color='white' className='bg-gradient-to-r from-blue-600 to-sky-500 py-1 rounded' />
            <div>
                <p className='text-xl font-medium'>Download image</p>
                <p className='text-sm text-zinc-500 mt-1'>This is a demo text, will replace it later. <br />This is demo...</p>
            </div>
          </div>


        </div>
    </div>
  )
}

export default Steps