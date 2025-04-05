import React from 'react'
import Logo from '../assets/Logo.png'
import {ArrowBigRightIcon} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
const Navbar = () => {
    
  const {openSignIn} = useClerk()
  const {isSignedIn, user} = useUser()

  return (
    <div className='flex justify-between items-center mx-4 py-3 lg:mx-44'>
       <Link to='/'><img  src={Logo} className='w-32 sm:w-44 cursor-pointer' alt="" /></Link> 

       { isSignedIn 
       ? <div>
        <UserButton/>
       </div>
        
        :<button onClick={()=> openSignIn({})} className='flex items-center bg-neutral-800 text-white gap-2 py-2 px-4 sm:px-8 sm:py-3 text-sm rounded-2xl cursor-pointer'>Get Started 
            <ArrowBigRightIcon className='w-3 sm:w-5 ' />
        </button>
      }

    </div>
  )
}

export default Navbar