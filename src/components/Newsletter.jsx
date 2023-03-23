import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3'>
            <div className='md:col-span-2'>
                <h1 className='text-4xl font-bold'>Want tips & tricks to optimize your flow?</h1>
                <p className='mt-2'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='mt-4'>
                <div className='flex flex-col sm:flex-row items-center'>
                    <input className='p-3 w-full rounded text-black' type='email' placeholder='Enter Email'/>
                    <button className='px-4 py-2 w-[200px] bg-sky-400 rounded ml-4 text-black font-medium mt-2 sm:mt-0'>Notify me</button>
                </div>
                <p className='mt-2'>We care about the protection of your data. Read our <a href="#" className='text-sky-400'>Privacy Policy</a></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter