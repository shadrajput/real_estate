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
        <section className="py-10" id='Contact'>
            <h1 className='text-3xl sm:text-3xl  text-center md:text-4xl lg:text-5xl font-semibold text-[#571217]  '>
                Get In Touch
            </h1>
            <div className='flex justify-center py-10'>
                <div className='bg-[#571217] w-full h-full sm:flex md:flex lg:flex xl:flex justify-center mx-10 sm:mx-5 md:mx-14 lg:mx-14 xl:mx-20 drop-shadow-2xl rounded-xl  '>
                    <div className='sm:w-[50%] xl:w-[60%]  xl:justify-end flex  relative'>
                        <img src="/images/contact.jpg" alt="" className='xl:rounded-l-lg rounded-t-xl  w-full' />

                    </div>
                    <div className='sm:w-[50%] xl:w-[50%] h-full  flex justify-center py-5 xl:py-14 px-5'>
                        <div className='left w-full xl:mx-20 '>
                            <div className='space-y-5 xl:space-y-10'>
                                <div className='space-y-3 xl:space-y-7'>

                                    <h1 className='text-3xl font-bold text-[#e9dac7] '>Let's get in touch </h1>
                                    <p className=' text-white text-xs xl:text-base'>Feel free to contact us any time.We will get back to you as soon as we can!</p>
                                </div>
                                <div>
                                    <form ref={form} className='w-full space-y-5 xl:space-y-10 ' onSubmit={Sendmail} >
                                        <input type="text" id='Name' name='Name' autoComplete='off' required placeholder='Name' className='w-full outline-none border-b-2 border-b-[#e9dac7] text-[#e9dac7] bg-[#571217] py-1' />
                                        <input type="text" id='email' name='email' autoComplete='off' required placeholder='Email' className='w-full outline-none border-b-2 border-b-[#e9dac7] text-[#e9dac7] bg-[#571217] py-1' />
                                        <input type="text" id='message' name='message' autoComplete='off' required placeholder='Message' className='w-full outline-none border-b-2 border-b-[#e9dac7] text-[#e9dac7] bg-[#571217] py-1' />
                                        <div className='flex justify-start items-center '>
                                            <button disabled={isLoadingOnSubmit} className={`con-btn  ${isLoadingOnSubmit ? "opacity-50 w-36" : "opacity-100"} bg-[#e9dac7] text-[#571217] font-semibold rounded-full w-24 h-10 flex justify-center space-x-1 items-center duration-500 hover:shadow-2xl `}>
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

            </div>
        </section>
    )
}

export default Contact
