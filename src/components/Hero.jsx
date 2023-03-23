import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white text-center mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <p className='text-[#2fbaff] font-bold'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-6xl font-bold'>Grow with data</h1>
        <p className='text-2xl font-bold mt-5'>
            Fast, flexible financing for <Typed className='text-[#2fbaff]' strings={['BTC', 'ETH', 'LTC']} typeSpeed={200} loop/>
        </p>
        <p className='text-gray-500 text-lg font-bold mt-2'>Monitor your data analytics to increase revenue for BTC, ETH, & LTC platforms.</p>
        <button className='bg-[#2fbaff] hover:bg-[#88d7ff] px-4 py-2 rounded text-black font-bold border-b-[#1d7baa] border-b-4 mt-10'>Get Started</button>
    </div>

    // <div className='h-screen flex'>
    //     <div className='m-auto text-white text-center'>
    //         <p className='text-[#2fbaff] font-bold'>GROWING WITH DATA ANALYTICS</p>
    //         <h1 className='text-6xl font-bold'>Grow with data</h1>
    //         <p className='text-2xl font-bold mt-5'>Fast, flexible financing for <Typed className='text-[#2fbaff]' strings={['BTC', 'ETH' , 'LTC' ]} typeSpeed={200} loop /></p>
    //         <p className='text-gray-500 text-lg font-bold mt-2'>Monitor your data analytics to increase revenue for BTC, ETH, & LTC platforms.</p>
    //         <button className='bg-[#2fbaff] hover:bg-[#88d7ff] px-4 py-2 rounded text-black font-bold border-b-[#1d7baa] border-b-4 mt-10'>Get Started</button>
    //     </div>
    // </div>
  )
}

export default Hero