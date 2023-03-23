import React from 'react';
import {AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='py-16 px-4 max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 text-white'>
        <div>
            <h1 className='text-4xl text-sky-400 font-bold'>REACT</h1>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda animi alias nesciunt fuga voluptas, eos aut corrupti dolorum earum ex. Dolorem molestias vitae rem quasi itaque reiciendis, asperiores aliquid a.</p>
            <div className='flex justify-between py-2'>
                <AiOutlineFacebook size={30}/>
                <AiOutlineInstagram size={30}/>
                <AiOutlineTwitter size={30}/>
                <AiOutlineGithub size={30}/>
            </div>
        </div>
        <div className='md:col-span-2 flex justify-between'>
            <div>
                <p className='text-2xl text-sky-400 font-bold'>Solutions</p>
                <ul>
                    <li className='py-2'>Analytics</li>
                    <li className='py-2'>Marketing</li>
                    <li className='py-2'>Commerce</li>
                    <li className='py-2'>Insights</li>
                </ul>
            </div>
            <div>
                <p className='text-2xl text-sky-400 font-bold'>Support</p>
                <ul>
                    <li className='py-2'>Analytics</li>
                    <li className='py-2'>Marketing</li>
                    <li className='py-2'>Commerce</li>
                    <li className='py-2'>Insights</li>
                </ul>
            </div>
            <div>
                <p className='text-2xl text-sky-400 font-bold'>Company</p>
                <ul>
                    <li className='py-2'>Analytics</li>
                    <li className='py-2'>Marketing</li>
                    <li className='py-2'>Commerce</li>
                    <li className='py-2'>Insights</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer