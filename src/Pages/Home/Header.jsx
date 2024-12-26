import jobHunt from '../../assets/jobHunt2.png'
import Rocket from '../../assets/rocket.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  useEffect } from 'react';
const Header = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="bg-[#716bc5]">
            <div className='flex flex-col lg:flex-row pt-20 lg:mx-[10%] md:mx-[7%] mx-[10%]'>
                <div data-aos="fade-right"  data-aos-duration="2000" className='flex flex-col justify-center lg:pb-12 relative text-center lg:text-left'>
                    <img src={Rocket} className='top-36 right-52 opacity-80 w-24  absolute' />
                    <h1 className='md:text-8xl text-5xl font-medium text-black z-10'>Find Your Future <br /> From here</h1>
                    <p className='text-black text-lg z-10 mt-4 lg:mt-10 font-medium lg:max-w-[500px]'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit illo! adipisicing elit. Ea, aliquid?</p>
                    <div className='z-10'>
                        <button className=' text-white px-3 hover:scale-105 active:bg-[#f1f1ef41] transition-all py-2 border  text-lg rounded-sm mt-3 text-center  '>See All Jobs</button>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration='2000' className='lg:w-2/3 flex justify-center w-full'>
                    <img src={jobHunt} className='w-full' />
                </div>
            </div>
        </div>
    );
};
// animate__bounceInRight
export default Header;