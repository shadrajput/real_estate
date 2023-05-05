import React from "react";
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Footer = () => {
  return (
    <>
        <div className="bg-[#06112a] w-full py-32 h-full  ">
            <div className="xl:flex lg:flex justify-between items-center mx-5 xl:mx-52 pb-5 sm:space-y-5 space-y-7 lg:space-y-0">
              <div className="footer-about xl:space-y-5 lg:space-x-7  sm:space-y-3 space-y-3  ">
                <div className="xl:mx-10  sm:mx-20 md:mx-44 lg:mx-10 ">
                  <div className='w-40'>
                    <img src="/image/logo.png" alt="" srcset="" className='' />
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
            </div>
    </>
  );
};



export default Footer;

