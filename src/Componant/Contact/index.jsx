import React, { useRef } from 'react';
import { IoIosSend } from 'react-icons/io'
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



const Contact = () => {
    const [isLoadingOnSubmit, setIsLoadingOnSubmit] = React.useState(false);
    const form = useRef()
    const navigate = useNavigate();
    const notify = () => toast("Message Send Success!!");

    const Sendmail = (e) => {
        e.preventDefault();
        setIsLoadingOnSubmit(true)
        emailjs.sendForm("service_36awf6s", "template_vbclm9k", form.current, "kNV5GbduK22MAn4rG")
            .then(res => {
                console.log(res, res)
                notify()
                navigate(`/`)
                setIsLoadingOnSubmit(false)
                document.getElementById('Name').value = ' '
                document.getElementById('email').value = ' '
                document.getElementById('message').value = ' '
            }).catch(err => {
                console.log("error", err)
                setIsLoadingOnSubmit(true)
            })
    }
    return (
        <section className="py-10 " id='Contact'>
            <div className='heading flex-col '>
                <h1 className='text-center text-[40px] '>
                    Contact Us
                </h1>
            </div>
            <div className='flex justify-center py-16'>
                <div className='w-full  h-full sm:flex md:flex lg:flex xl:flex justify-center mx-10 sm:mx-5 items-center md:mx-14 lg:mx-14 xl:mx-20 drop-shadow-2xl rounded-xl  '>
                    <div className='sm:w-[50%] xl:w-[50%] xl:justify-end flex  relative'>
                        <img src="/image/pexels-julia-kuzenkov-1974596.jpg" alt="" className='xl:rounded-l-lg rounded-t-xl  w-full' />
                    </div>
                    <div className='sm:w-[50%] xl:w-[50%] h-full  flex justify-center py-5 xl:py-14 px-5'>
                        <div className='left w-full xl:mx-20 '>
                            <div className='space-y-5 xl:space-y-10'>
                                <div className='space-y-3 xl:space-y-7'>

                                    <h1 className='text-3xl font-bold text-[#06112a] '>Let's get in touch </h1>
                                    <p className=' text-xs xl:text-base'>Feel free to contact us any time.We will get back to you as soon as we can!</p>
                                </div>
                                <div>
                                    <form ref={form} className='w-full space-y-5 xl:space-y-10 ' onSubmit={Sendmail} >
                                        <input type="text" id='Name' name='Name' autoComplete='off' required placeholder='Name' className='w-full outline-none border-b-2 border-b-[#06112a] py-1' />
                                        <input type="text" id='email' name='email' autoComplete='off' required placeholder='Email' className='w-full outline-none border-b-2 border-b-[#06112a] py-1' />
                                        <input type="text" id='message' name='message' autoComplete='off' required placeholder='Message' className='w-full outline-none border-b-2 border-b-[#06112a] py-1' />
                                        <div className='flex justify-start items-center '>
                                            <button disabled={isLoadingOnSubmit} className={`con-btn  ${isLoadingOnSubmit ? "opacity-50 w-50" : "opacity-100"} bg-[#06112a0e] group hover:bg-[#06112a] hover:text-white text-[#06112a] font-semibold rounded-full w-40 h-10 flex justify-center space-x-1 items-center duration-500 hover:shadow-2xl `}>
                                                {isLoadingOnSubmit ? 'Sending...' : 'Send'}
                                                <IoIosSend className='text-[#06112a] text-2xl ml-1 group-hover:text-white ' />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
