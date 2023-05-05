import React from "react";
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Footer = () => {
  return (
    <>
      <div className=" pt-16 ">
        <div className=" relative ">
          <div className="absolute top-[-60px] lg:left-[23%] xl:left-[14%] left-[5%] md:left-[14%] ">
            <div className="bg-white rounded-lg   xl:flex items-center sm:flex  xl:w-[100%] xl:py-10 xl:px-20 xl:space-x-96 px-14 sm:px-10 sm:space-x-32 py-5 ">
              <div className=" space-y-2 text-center">
                <h3 className="text-lg xl:text-3xl font-bold text-[rgb(87,18,23)]">Ready to drowing Mehndi?</h3>
                <h3 className="text-lg font-semibold  text-[rgba(87,18,23,0.71)]">Talk to us today</h3>
              </div>

              <div className="contact-short-btn flex justify-center mt-3">
                <Link className='Link' to="Contact" spy={true} smooth={true} offset={-50} duration={500} >
                  <button>
                    <span className="relative inline-flex items-center cursor-pointer justify-center px-5 py-1 xl:px-8 xl:py-2 overflow-hidden font-mono font-medium tracking-tighter text-white border-2 border-[#571217] hover:border-[#571217] hover:text-[#571217] bg-[#571217]  rounded-full group">
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white  rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span className="relative font-bold uppercase">Get Started</span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

          </div>
          <div className="bg-[#e9dac7] w-full pt-20 sm:pt-12 xl:pt-24 ">
            <div className="py-10 xl:py-16">
              <div className="xl:flex lg:flex justify-between items-center mx-5 xl:mx-52 pb-5 sm:space-y-5 space-y-7 lg:space-y-0">
                <div className="footer-about xl:space-y-5 lg:space-x-7  sm:space-y-3 space-y-3  ">
                  <div className="xl:mx-10  sm:mx-20 md:mx-44 lg:mx-10 ">
                    <div className='w-40'>
                      <img src="/logo.jpg" alt="" srcset="" className='rounded-lg shadow-xl' />
                    </div>
                  </div>
                  <p className="xl:pt-3 text-[rgba(87,18,23,0.68)] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>



                {/* 2rs column  */}
                <div className="footer-social xl:space-y-5 space-y-3 text-center">
                  <h3 className="text-xl font-bold text-[rgb(87,18,23)]">Follows Us</h3>
                  <div className='flex justify-center items-center   space-x-5 '>
                    <AiOutlineInstagram className='hover:text-[#e9dac7] hover:bg-[#571217] border-2  border-[#571217] text-[#571217] duration-300 hover:scale-110 w-10 h-10 p-[9px] shadow-2xl rounded-full hover:cursor-pointer text-2xl' />
                    <FiFacebook className='hover:text-[#e9dac7] hover:bg-[#571217] border-2  border-[#571217] text-[#571217] duration-300 hover:scale-110 w-10 h-10 p-[9px] shadow-2xl rounded-full hover:cursor-pointer text-2xl' />
                    <AiOutlineYoutube className='hover:text-[#e9dac7] hover:bg-[#571217] border-2  border-[#571217] text-[#571217] duration-300 hover:scale-110 w-10 h-10 p-[9px] shadow-2xl rounded-full hover:cursor-pointer text-2xl' />
                  </div>

                </div>

                {/* 3th column  */}
                <div className="footer-contact xl:space-y-5 space-y-3 text-center">
                  <h3 className="text-xl font-bold text-[rgb(87,18,23)]">Address</h3>
                  <h3 className="xl:pt-3 text-[rgba(87,18,23,0.68)] text-center">Ajit Mill Char rasta , Rakhial road , Ahmedabad</h3>
                </div>
              </div>

              {/* bottom section  */}
              <div className="">
                <div className="h-[1px] bg-[rgb(87,18,23)] w-full " >
                </div>

                <div className="xl:mx-52 sm:mx-20 pt-5">
                  <div className="xl:flex sm:flex justify-between items-center space-y-3">
                    <p className="pt-3 text-[rgb(87,18,23)] text-center">
                      alshifamehndi. All Rights Reserved
                    </p>
                    <div className="pt-3 text-[rgb(87,18,23)] text-center">
                      <p>PRIVACY POLICY</p>
                      <p>TERMS & CONDITIONS</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>


    </>
  );
};



export default Footer;

