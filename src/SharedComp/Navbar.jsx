import { IoIosLogOut } from "react-icons/io";
import { useContext, useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import logo from '../assets/logo.jpg'
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import profile from '../assets/5907.jpg'
import Spinner from "../Pages/spinner/Spinner";


const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const lgLiClass = 'hover:bg-[#f1f1ef] text-lg font-medium active:text-[#FD9810] cursor-pointer px-3 py-3 rounded-md transition-bg'
    const smLiClass = 'w-[250px] active:text-[#FD9810] text-center hover:bg-[#f1f1ef] py-2 transition-all cursor-pointer text-xl font-medium'

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // user log out
            }).catch((err) => {
                console.log(err)
            });
    }

    if (loading) {
        return <Spinner />
    }
    const auth = <>
        {
            user ?
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-circle m-1">
                        <img referrerPolicy="no-referrer" src={user.photoURL ? user.photoURL : profile} className="w-16 rounded-full" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content active:bg-white menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow">
                        <li className='text-lg text-center mb-2'>{user.email}</li>
                        {/* <li className="text-lg active:bg-white"><a className="bg-white"><IoIosLogOut />Log Out</a></li> */}
                        <p onClick={handleLogOut} className="flex items-center justify-center text-lg py-2 cursor-pointer transition-all active:bg-[#cfcfce] hover:bg-[#f1f1ef]"><IoIosLogOut />Log Out</p>
                    </ul>
                </div>
                :
                <NavLink to='/login'><li className={`${lgLiClass} list-none`}>Login</li></NavLink>
        }
    </>

    return (
        <>
            {/* for lg device */}
            <div className='hidden justify-between items-center mx-[10%]  lg:flex'>
                <div>
                    <img src={logo} className='w-24' />
                </div>
                <ul className='flex gap-3'>
                    {
                        user ?
                            <>
                                <NavLink to='/'><li className={lgLiClass}>Home</li></NavLink>
                                <NavLink to='/allJobs'><li className={lgLiClass}>All Jobs</li></NavLink>
                                <NavLink to='/addJob'><li className={lgLiClass}>Add Job</li></NavLink>
                                <NavLink to='/myApplication'><li className={lgLiClass}>My Application</li></NavLink>
                                <NavLink to='/myPost'><li className={lgLiClass}>My Job Post</li></NavLink>

                            </>
                            :
                            <>
                                <NavLink to='/'><li className={lgLiClass}>Home</li></NavLink>
                                <NavLink to='/allJobs'><li className={lgLiClass}>All Jobs</li></NavLink>
                            </>
                    }

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
                            {
                                user ?
                                    <>
                                        <NavLink to='/'><li className={`${smLiClass}`}><button>Home</button></li></NavLink>
                                        <NavLink to='/allJobs'><li className={smLiClass}>All Jobs</li></NavLink>
                                        <NavLink to='/addJob'><li className={smLiClass}>Add Job</li></NavLink>
                                        <NavLink to='/myApplication'><li className={smLiClass}>My Application</li></NavLink>
                                        <NavLink to='/myPost'><li className={smLiClass}>My Job Post</li></NavLink>

                                    </>
                                    :
                                    <>
                                        <NavLink to='/'><li className={smLiClass}>Home</li></NavLink>
                                        <NavLink to='/allJobs'><li className={smLiClass}>All Jobs</li></NavLink>
                                    </>
                            }
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