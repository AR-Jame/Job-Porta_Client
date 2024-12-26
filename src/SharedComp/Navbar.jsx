import { IoIosLogOut } from "react-icons/io";
import { useContext, useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import logo from '../assets/logo.jpg'
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import profile from '../assets/5907.jpg'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const lgLiClass = 'hover:bg-[#f1f1ef] text-xl font-medium active:text-[#FD9810] cursor-pointer px-5 py-3 rounded-md transition-bg'
    const smLiClass = 'w-full active:text-[#FD9810] text-center hover:bg-[#f1f1ef] py-2 transition-all cursor-pointer text-xl font-medium'
    const lgLi = <>
        <NavLink to='/'><li className={lgLiClass}>Home</li></NavLink>
        <NavLink to='/aboutUs'><li className={lgLiClass}>About Us</li></NavLink>
    </>
    const smLi = <>
        <NavLink to='/'><li className={smLiClass}>Home</li></NavLink>
        <NavLink to='/aboutUs'><li className={smLiClass}>About Us</li></NavLink>
    </>

    const handleGoogle = () => {
        logOut()
        .then(() => {
            // user log out
        }).catch((err) => {
            console.log(err)
        });
    }

    const auth = <>
        {
            user ?
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-circle m-1">
                        <img src={user.photoURL? user.photoURL: profile } className="w-16 rounded-full"/>
                        </div>
                    <ul tabIndex={0} className="dropdown-content active:bg-white menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow">
                        <li className='text-lg text-center mb-2'>{user.email}</li>
                        {/* <li className="text-lg active:bg-white"><a className="bg-white"><IoIosLogOut />Log Out</a></li> */}
                        <p onClick={handleGoogle} className="flex items-center justify-center text-lg py-2 cursor-pointer transition-all active:bg-[#cfcfce] hover:bg-[#f1f1ef]"><IoIosLogOut />Log Out</p>
                    </ul>
                </div>
                :
                <NavLink to='/login'><li className={`${lgLiClass} list-none`}>Login</li></NavLink>
        }
        {/* <img src={logo} className='rounded-full w-20' /> */}
    </>

    return (
        <>
            {/* for lg device */}
            <div className='hidden justify-between items-center mx-[10%]  lg:flex'>
                <div>
                    <img src={logo} className='w-24' />
                </div>
                <ul className='flex gap-3'>
                    {lgLi}
                </ul>
                <div>
                    {auth}
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
                            {smLi}
                        </ul>
                    </Drawer>
                </div>
                <div>
                    <img src={logo} className='w-20' />
                </div>
                <div>
                    {auth}
                </div>
            </div>
        </>
    );
};

export default Navbar;