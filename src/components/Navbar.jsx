import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { FcReading } from "react-icons/fc";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-scroll';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]  = useState(false); 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Features", path: "features"},
        {link: "Activities", path: "activities"},
        {link: "About", path: "about"},
    ]
        return (
            <>
                <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
                    <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                        <div className='flex space-x-14 items-center'>
                            <a href='/' className='text-2xl font-semibold flex item-center space-x-3 text-primary'>
                                <img src={logo} alt="logo" className='w-32 h-10 inline-block items-center' />
                            </a> 


                            <ul className='md:flex space-x-12 hidden'>
                                {
                                    navItems.map(({link, path}) => <Link spy={true} smooth={true}  key={link} to={path} className='hover:text-gray-300 cursor-pointer'>{link}</Link>)
                                }
                            </ul>
                        </div>

                        <div className='space-x-12 hidden md:flex items-center'>
                            <a href="/" className=' lg:flex items-center hover:text-secondary'><FcReading />Lecture</a>
                            <button className='bg-primary text-white py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-secondary'>Livres</button>
                        </div>

                        <div className='md:hidden'>
                            <button onClick={toggleMenu} className='text-white focus:outline[-none focus:text-gray-300'>
                                {
                                    isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary'/>)
                                }
                            </button>
                        </div>
                    </div>
                </nav>


                <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                   
                    {
                        navItems.map(({link, path}) => <Link spy={true} smooth={true} offset={-100} key={link} to={path} className='block text-white hover:text-gray-300 cursor-pointer text-center'>{link}</Link>)
                    } 
                </div>
            </>
        );
}

export default Navbar;

