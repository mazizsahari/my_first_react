import React, { useEffect, useRef, useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleNav = () => {
        setOpen(!open);
    };

    const navbarRef = useRef();

    useEffect( () => {
        const handler =  (e) => {
            if (!navbarRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);
    });
    
    return (
    <div className="text-white flex items-center h-24 px-4">

        {/* Logo */}
        <h1 className="text-[#2fbaff] w-full text-3xl font-bold">REACT</h1>

        {/* Desktop navbar */}
        <ul className={ open ? 'hidden' : 'hidden md:flex' }>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4 w-28'>Contact Us</li>
        </ul>

        {/* Change menu icon */}
        <div onClick={handleNav} className={ open ? 'block hover:scale-125 ease-in duration-300' : 'block md:hidden hover:scale-125 ease-in duration-300' }>
            { open ? <AiOutlineClose size="20"/> : <AiOutlineMenu size="20"/> }
        </div>

        {/* Mobile navbar */}
        <div ref={navbarRef} className={ open ? 'bg-black fixed left-0 top-0 border-r border-r-gray-600 w-[40%] h-full ease-in-out duration-500' : 'bg-black fixed left-[-100%]' }>
            <ul className="mt-24 uppercase">
                <li className='p-4 border-b border-b-gray-600'>Home</li>
                <li className='p-4 border-b border-b-gray-600'>Company</li>
                <li className='p-4 border-b border-b-gray-600'>Resources</li>
                <li className='p-4 border-b border-b-gray-600'>About</li>
                <li className='p-4'>Contact Us</li>
            </ul>
        </div>
        
    </div>
    )
}

export default Navbar