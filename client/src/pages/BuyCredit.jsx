import React from 'react'
import { plans } from '../assets/assets'
import Logo from '../.././public/Logo.png'
const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-zinc-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-zinc-900 to-zinc-400 bg-clip-text text-transparent mb-6 sm:mb-10'>Choose the plan that's right for you</h1>
        <div className='flex flex-wrap justify-center gap-6 text-left'>
          {plans.map((item,index) => (
            <div className='bg-white drop-shadow-md border border-gray-300 rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500' key={index}>
              <img width={40} src={Logo} alt="" />
              <p className='font-semibold text-lg mt-6'>{item.id}</p>
              <p className='text-gray-700'>{item.desc}</p>
              <p className='mt-1.5'>
                <span className='text-2xl font-medium'>${item.price}</span>/ {item.credits} credits
              </p>
              <button className='mt-6 bg-black px-12 py-1.5 text-center text-white rounded'>Purchase</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default BuyCredit