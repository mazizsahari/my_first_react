import React from 'react';
import Single from '../assets/single.svg';
import Double from '../assets/double.svg';
import Triple from '../assets/triple.svg';

const Cards = () => {
  return (
    <div className='bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='text-center border rounded-lg shadow-xl my-8 hover:scale-105 duration-300'>
                <img src={Single} className='w-[80px] mx-auto mt-[-2.8rem]'/>
                <p className='mt-4 text-3xl font-bold'>Single User</p>
                <p className='mt-4 text-4xl font-bold'>$50</p>
                <p className='py-2 border-b mt-8'>500GB Storage</p>
                <p className='py-2 border-b'>1 User Allowed</p>
                <p className='py-2 border-b'>Send up to 2GB</p>
                <button className='my-8 px-4 py-2 w-[200px] rounded font-medium bg-sky-400'>Start Trial</button>
            </div>
            <div className='text-center border-2 border-sky-400 rounded-lg shadow-xl my-4 hover:scale-105 duration-300'>
                <img src={Double} className='w-[80px] mx-auto mt-[-2.8rem]'/>
                <p className='mt-4 text-3xl font-bold'>Double User</p>
                <p className='mt-4 text-4xl font-bold'>$80</p>
                <p className='py-2 border-b mt-8'>1TB Storage</p>
                <p className='py-2 border-b'>3 Users Allowed</p>
                <p className='py-2 border-b'>Send up to 10GB</p>
                <button className='my-8 px-4 py-2 w-[200px] rounded font-medium bg-black text-sky-400'>Start Trial</button>
            </div>
            <div className='text-center border rounded-lg shadow-xl my-8 hover:scale-105 duration-300'>
                <img src={Triple} className='w-[80px] mx-auto mt-[-2.8rem]'/>
                <p className='mt-4 text-3xl font-bold'>Triple User</p>
                <p className='mt-4 text-4xl font-bold'>$150</p>
                <p className='py-2 border-b mt-8'>2TB Storage</p>
                <p className='py-2 border-b'>6 User Allowed</p>
                <p className='py-2 border-b'>Send up to 20GB</p>
                <button className='my-8 px-4 py-2 w-[200px] rounded font-medium bg-sky-400'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards