import React from 'react';
import analytics_image from '../assets/analytics_image.svg';

const Analytics = () => {
  return (
    <div className='bg-white py-16 px-4'>
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='justify-self-center mr-2'>
                <img src={analytics_image} className='w-[450px]'/>
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-sky-400 font-bold text-4xl'>Data Analytics Dashboard</p>
                <p className='font-bold text-2xl mt-2'>Manage Data Analytics Centrally</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis, quia fugiat delectus esse beatae quisquam praesentium nostrum architecto, sunt hic voluptates odit ipsum placeat laboriosam laborum fugit adipisci quas!</p>
                <button className='bg-black px-4 py-2 w-[200px] text-sky-400 rounded mt-5 mx-auto md:mx-0'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics