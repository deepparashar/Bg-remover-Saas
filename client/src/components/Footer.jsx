import React from 'react'
import Logo from '../assets/Logo.png'
import {FacebookIcon, TwitterIcon, InstagramIcon} from 'lucide-react'
const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <img src={Logo} className='w-32 sm:w-38' alt="" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @DeepParashar.in | All right reserved.</p>
        <div className='flex gap-1.5'>
            <FacebookIcon width={40}/>
            <TwitterIcon width={40}/>
            <InstagramIcon width={40}/>
        </div>
    </div>
  )
}

export default Footer