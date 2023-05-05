import React from 'react'
import Layout from '../Layouts'
import Hero from "../Componant/Hero/index"
import { Link } from 'react-scroll'
import { FaArrowDown } from "react-icons/fa"
import Service from '../Componant/Services'
import GoToTop from '../Componant/GoToTop'
import About from "../Componant/About"
import Testimonials from "../Componant/Testimonials"
import Contact from '../Componant/Contact'
import Footer from '../Componant/Footer'
import Properties from '../Componant/Properties'


function Home() {
    return (
        <>
            <Layout />
            <Hero />
            <Link activeClass="active" to="Service" spy={true} smooth={true} offset={-72} duration={500} >
                <div className='flex justify-center relative bottom-16 xl:bottom-16 '>
                    <div className='flex justify-center w-10 h-10' >
                        <FaArrowDown className=' animate-bounce h-9 w-9  duration-200  border-2 border-[#fff] hover:text-[#571217]  rounded-full  p-2 cursor-pointer  text-white hover:border-white hover:bg-white  ' />
                    </div>
                </div>
            </Link>
            <Service/>
            <About/>
            <Properties/>
            <Testimonials/>
            <Contact/>
            <Footer/>
            <GoToTop/>
        </>
    )
}

export default Home
