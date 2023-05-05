import React, { useRef } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AiFillCloseCircle } from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { IoIosSend } from 'react-icons/io'

const Hero = () => {
    const [model, setModel] = React.useState(false);
    const form = useRef();
    const [isLoadingOnSubmit, setIsLoadingOnSubmit] = React.useState(false);
    const notify = () => toast("Message Send Success!!");
    const error = () => toast("Some Went Wrong");
    const navigate = useNavigate();

    const handleClick = () => {
        setModel(false)
    }
    const Sendmail = (e) => {
        e.preventDefault();
        setIsLoadingOnSubmit(true)
        emailjs.sendForm("service_36awf6s", "template_vbclm9k", form.current, "kNV5GbduK22MAn4rG")
            .then(res => {
                notify()
                navigate(`/`)
                setIsLoadingOnSubmit(false)
                setModel(false)
                document.getElementById('Name').value = ' '
                document.getElementById('email').value = ' '
                document.getElementById('message').value = ' '
            }).catch(err => {
                error()
                setIsLoadingOnSubmit(true)
            })
    }

    return (
        <div className="relative ">
            {model && (
                <div className='flex justify-center shadow-2xl  '>
                    <div className='absolute mx-10 sm:mx-14 opacity-100 shadow-2xl rounded top-16 xl:top-32 bg-white  z-50'>
                        <div className=''>
                            <div className='flex justify-end '>
                                <button onClick={handleClick} className='absolute translate-x-4 -translate-y-4 font-bold text-2xl p-2 text-[#571217] '>

                                    <AiFillCloseCircle />
                                </button>
                            </div>
                            <div className='py-10'>
                                <h1 className='text-3xl sm:text-3xl  text-center md:text-4xl lg:text-5xl font-semibold text-[#571217]  '>
                                    Contact Us
                                </h1>
                                <div className='xl:px-20 mt-10'>
                                    <form ref={form} className='xl:w-full mx-5 space-y-5 xl:space-y-10 ' onSubmit={Sendmail} >
                                        <input type="text" id='Name' name='Name' autoComplete='off' required placeholder='Name' className='w-full outline-none border-b-2 border-b-[#e9dac7]  py-1' />
                                        <input type="email" id='email' name="email" autoComplete='off' required placeholder='Email' className='w-full outline-none border-b-2 border-b-[#e9dac7]  py-1' />
                                        <input type="text" id='message' name='message' autoComplete='off' required placeholder='message' className='w-full outline-none border-b-2 border-b-[#e9dac7]  py-1' />
                                        <div className='flex justify-start items-center '>
                                            <button disabled={isLoadingOnSubmit} className={`con-btn  ${isLoadingOnSubmit ? "opacity-50 w-[145px]" : "opacity-100"} bg-[#e9dac7] text-[#571217] font-semibold rounded-full w-24 h-10 flex justify-center space-x-1 items-center duration-500 hover:shadow-2xl `}>
                                                {isLoadingOnSubmit ? 'Sending...' : 'Send'}
                                                <IoIosSend className='text-[#571217] text-2xl ml-1 ' />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
            <div className={`bg-slate-100 ${model && "opacity-78"}`}>
                <div className="banner w-full h-screen relative overflow-hidden" id='/' >
                    <video className="w-full h-full object-cover " src="/image/landing.mp4" autoPlay loop muted />
                    <div className="xl:absolute w-full h-full bottom-0 left-0 ">
                        <div className="absolute bottom-0  w-full h-full flex flex-col justify-center text-center  xl:p-4 space-y-5 px-3 xl:px-10">
                            <h1 className='text-5xl xl:text-6xl font-bold text-white'>Bright Mehndi Looks <span className=''>Awesome</span></h1>
                            <p className='text-white xl:mx-52'>Mehndi is temporary body art of skin. It is most popular in India, Bangladesh, Sri Lanka, and Pakistani women. Also, Indian women are wearing mehndi in Marriage, Vat Purnima, Diwali, Bhai Dooj, Fastible, and Durga Puja.Also, mehndi comes in many colors such as red, white, and black. Most women are wearing to like red color mehndi. Also, comment to us which color Mehendi is your favorite?.</p>
                            <div onClick={(e) => setModel(true)} >
                                <span className="relative inline-flex items-center cursor-pointer justify-center px-8 py-2  overflow-hidden 
                                font-mono font-medium tracking-tighter hover:text-white text-[#571217] bg-[#fff] rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#571217] rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="relative font-bold">Let's Get Inquiry</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default Hero



