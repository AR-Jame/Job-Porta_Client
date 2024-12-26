import { useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import logo from '../assets/logo.jpg'
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            {/* for lg device */}
            <div className='hidden justify-between items-center  lg:flex'>
                <div>
                    <img src={logo} className='w-24' />
                </div>
                <ul className='flex gap-3 text-xl font-medium'>
                    <li className='hover:bg-[#f1f1ef] active:text-[#FD9810] cursor-pointer px-5 py-3 rounded-md transition-bg'>Home</li>
                    <li className='hover:bg-[#f1f1ef] active:text-[#FD9810] cursor-pointer px-5 py-3 rounded-md transition-bg'>jfdkasjfl</li>
                </ul>
                <div>
                    <img src={logo} className='rounded-full w-20' />
                </div>
            </div>
            {/* for mobile device */}
            <div className='flex lg:hidden justify-between items-center mx-10'>
                <div>
                    <button onClick={toggleDrawer} className='text-2xl font-bold'><IoMenu /></button>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='left'
                        className='bla bla bla'
                    >
                        <ul className='flex flex-col justify-center items-center gap-3 h-1/2'>
                            <li className='w-full active:text-[#FD9810] text-center hover:bg-[#f1f1ef] py-2 transition-all cursor-pointer text-xl font-medium'>Home</li>
                            <li className='w-full active:text-[#FD9810] text-center hover:bg-[#f1f1ef] py-2 transition-all cursor-pointer text-xl font-medium'>jfdkasjfl</li>
                        </ul>
                    </Drawer>
                </div>
                <div>
                    <img src={logo} className='w-20' />
                </div>
                <div>
                    <img src={logo} className='w-20' />
                </div>
            </div>
        </>
    );
};

export default Navbar;