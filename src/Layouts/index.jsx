import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Navbar.css'


const Layout = () => {
    const [color, setcolor] = React.useState(false)
    const changecolor = () => {
        if (window.scrollY >= 90) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }

    window.addEventListener("scroll", changecolor)

    const [click, setClick] = React.useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    return (
        <>
            <div className={color ? 'header header-bg bg-[#06112a]' : "header"}>
                <nav className='navbar xl:px-5 h-full xl:h-[100%] items-center flex justify-between '>
                    <div className='flex justify-center items-center '>
                        <div className='w-40'>
                            <img src="/image/logo.png" alt="" srcset="" className='' />
                        </div>
                        <div className='hamburger absolute right-4 top-4 md:hidden  xl:hidden t' onClick={handleClick}>
                            {click ? null
                                : (<FaBars className='text-2xl' style={{ color: '#ffffff' }} />)}

                        </div>

                    </div>
                    <ul className={click ? "nav-menu active " : "nav-menu"}>
                        <div className='text-white text-4xl flex justify-end m-5 md:hidden lg:hidden xl:hidden' onClick={closeMenu}>
                            <FaTimes />
                        </div>
                        <li className="nav-item px-3   ">
                            <Link className='Link' to="/" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    Home
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item  px-3  ">
                            <Link className='Link' to="Service" spy={true} smooth={true} offset={-70} duration={500} >
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    Services
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item  px-3  ">
                            <Link className='Link' to="AboutUs" spy={true} smooth={true} offset={-70} duration={500} >
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    About Us
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item  px-3 ">
                            <Link className='Link' to="Properties" spy={true} smooth={true} offset={-70} duration={500} >
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    Properties
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item  px-3  ">
                            <Link className='Link' to="Testimonials" spy={true} smooth={true} offset={-70} duration={500} >
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    Testimonials
                                </h1>
                            </Link>
                        </li>

                        <li className="nav-item  px-3  ">
                            <Link className='Link' to="Contact" spy={true} smooth={true} offset={-45} duration={500} >
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    Contact Us
                                </h1>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}




export default Layout