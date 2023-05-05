import React from 'react'
import "../../App.css"
import "react-slideshow-image/dist/styles.css"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function About() {
  return (
    <>
      {/* <div className='min-h-screen  py-16 ' id='AboutUs'>
        <div>
          <div className='heading flex-col '>
            <h1 className='text-center text-[40px] '>
              About Us
            </h1>
          </div>
          <p className='text-gray-400 text-center mt-6'>High Performance Services For Multiple Insdustries</p>
        </div>
      </div> */}
      <section className="main-section bg-yellow-600 xl:h-screen h-full  flex justify-center px-9 sm:px-10 md:px-12 xl:px-20 " id='Aboutus'>
        <div className="flex justify-between items-center w-full bg-red-600 ">
          <div className=' ml-0 sm:ml-0 md:ml-0 xl:ml-0 lg:ml-10 w-[40%]'>
            <h3 className="text-3xl sm:text-3xl  md:text-4xl lg:text-5xl font-semibold text-[#571217] text-center xl:text-left lg:text-left">About Us</h3>
            <p className="text-base  lg:text-lg xl:text-lg font-medium text-gray-700 text-justify mt-5">
              We are provided mostly 4 category in mehndi and our all category we provide regnable price and Mehendi will be applied at our place as per your choice and you will start to feel more beautiful with the mehndi applied on your hands.and you want to know more about my category so please click on know more button
            </p>
            <Link className='Link' to="Card" spy={true} smooth={true} offset={-50} duration={500} >

              <div className='mt-5 flex justify-center xl:justify-start lg:justify-start '>
                <div>
                  <span className="relative inline-flex items-center justify-center px-6 py-2 md:py-2  md:px-10 md:text-base text-sm   xl:px-10 xl:py-3 xl:text-base mx overflow-hidden font-semibold tracking-tighter hover:text-[#571217] hover:shadow-xl  bg-[#571217] text-white rounded-full cursor-pointer group">
                    <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-[#e9dac7] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="relative">Know More</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-20 py-10 w-[60%] ">
            <div className="flex justify-center">
              <img src='./image/pexels-vlad-chețan-3195644.jpg' className="group w-2/4 sm:w-1/2 lg:w-1/3 xl:w-[100%] xl:ml-52 xl:mt-[-50px] hover:scale-110 hover:z-30 rounded-lg" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} id="main-img" alt="" />
            </div>
            <div className='space-y-5'>
              <img src='./image/pexels-max-rahubovskiy-8082332.jpg' className="rounded-lg  w-1/3 lg:w-1/5 xl:w-[30%]  cursor-pointer hover:scale-110 hover:z-30 " alt="" style={{ boxShadow: "rgba(0, 0, 0, 0.5) 0px 10px 15px", transition: "all ease-in-out .3s" }} id="image-1" />

              <img src='./image/pexels-pixabay-210617.jpg' sr className="rounded-lg w-1/3 lg:w-1/5 xl:w-[30%]  cursor-pointer hover:scale-110 hover:z-30" id="image-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} alt="" />

              <img src='./image/pexels-pixabay-280222.jpg' sr className=" w-1/3 lg:w-1/5 xl:w-[30%]  cursor-pointer rounded-lg  hover:scale-110  hover:z-50 " id="image-3" style={{ transition: "all ease-in-out .3s", boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About


{/* <div className='flex justify-center py-10 '>
<div className=' w-full shadow-xl shadow-[#06112a56]  sm:flex md:flex lg:flex xl:flex justify-center mx-10 sm:mx-5 md:mx-14 lg:mx-14 xl:mx-20 drop-shadow-2xl rounded-xl  '>
  <div className='sm:w-[50%] xl:w-[55%] h-full  flex justify-center py-5 xl:py-5 px-5'>
    <div className='left  w-full xl:mx-20  text-black mt-10 '>
      <div className='space-y-5'>
        <h1 className='about_sub_heading  uppercase text-start text-4xl '>Wellcome to</h1>
        <h2 className='about_sub_heading  uppercase text-start text-4xl  text-[#06112a] font-bold  '>fabode</h2>
        <p className='text-sm  text-gray-400 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa cumque assumenda id expedita illum praesentium repellendus aliquid similique dolore aliquam repellat rerum labore dolorum quasi mollitia a, ipsum maiores.</p>
      </div>
      <div className='py-7 space-y-5'>
        <div className='flex items-center justify-start space-x-7'>
          <img src="icons/about1.webp" alt="" srcset="" className='w-8' />
          <div className='flex flex-col space-y-2'>
            <h1 className='text-lg  font-semibold'>Find your future home</h1>
            <p className='text-gray-400 text-sm'>We help you find a new home by offering a smart real estate.</p>
          </div>
        </div>
        <div className='flex items-center justify-start space-x-7'>
          <img src="icons/about2.webp" alt="" srcset="" className='w-8' />
          <div className='flex flex-col space-y-2'>
            <h1 className='text-lg  font-semibold'>Experienced agents</h1>
            <p className='text-gray-400 text-sm'>We help you find a new home by offering a smart real estate.</p>
          </div>
        </div>
        <div className='flex items-center justify-start space-x-7'>
          <img src="icons/about3.webp" alt="" srcset="" className='w-8' />
          <div className='flex flex-col space-y-2'>
            <h1 className='text-lg  font-semibold'>Buy or rent homes</h1>
            <p className='text-gray-400 text-sm'>We help you find a new home by offering a smart real estate.</p>
          </div>
        </div>
        <div className='flex items-center justify-start space-x-7'>
          <img src="icons/about4.webp" alt="" srcset="" className='w-8' />
          <div className='flex flex-col space-y-2'>
            <h1 className='text-lg  font-semibold'>List your own property</h1>
            <p className='text-gray-400 text-sm'>We help you find a new home by offering a smart real estate.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='sm:w-[50%] xl:w-[60%] group xl:justify-end flex'>
    <img src="/image/pexels-jessica-bryant-1370704.jpg" alt="" className='xl:rounded-r-lg bg-center w-full' />

  </div>
</div>

</div> */}