import React from 'react'
import "../../App.css"
import "react-slideshow-image/dist/styles.css"
import { Fade, Zoom, Slide } from 'react-slideshow-image'


const slideImages = [
  {
    url: "/image/pexels-jessica-bryant-1370704.jpg"
  },
  {
    url: "/image/pexels-pixabay-210617.jpg"
  },
  {
    url: "/image/pexels-pixabay-280222.jpg"
  }
]


function About() {
  return (
    <>
      <div className='min-h-screen  py-16 ' id='Services'>
        <div>
          <div className='heading flex-col '>
            <h1 className='text-center text-[40px] '>
              Services
            </h1>
          </div>
          <p className='text-gray-400 text-center mt-6'>High Performance Services For Multiple Insdustries</p>
        </div>
        <div className='flex justify-center py-10 '>
          <div className=' w-full sm:flex md:flex lg:flex xl:flex justify-center mx-10 sm:mx-5 md:mx-14 lg:mx-14 xl:mx-20 drop-shadow-2xl rounded-xl  '>
            <div className='py-7 flex justify-between w-full'>
              <div className='flex flex-col  items-center justify-center w-full space-x-7'>
                <img src="icons/about1.webp" alt="" srcset="" className='w-8' />
                <div className='flex flex-col text-center space-y-2'>
                  <h1 className='text-lg  font-semibold'>Find your future home</h1>
                  <p className='text-gray-400 text-sm'>We help you find a new home by offering a smart real estate.</p>
                </div>
              </div>
              <div className='flex flex-col  items-center justify-center w-full space-x-7'>
                <img src="icons/about2.webp" alt="" srcset="" className='w-8' />
                <div className='flex flex-col space-y-2 text-center'>
                  <h1 className='text-lg  font-semibold'>Experienced agents</h1>
                  <p className='text-gray-400 text-sm'>We help you find a new home by offering a smart real estate.</p>
                </div>
              </div>
              <div className='flex flex-col  items-center justify-center w-full space-x-7'>
                <img src="icons/about3.webp" alt="" srcset="" className='w-8' />
                <div className='flex flex-col space-y-2 text-center'>
                  <h1 className='text-lg  font-semibold'>Buy or rent homes</h1>
                  <p className='text-gray-400 text-sm'>We help you find a new home by offering a smart real estate.</p>
                </div>
              </div>
              <div className='flex flex-col  items-center justify-center w-full space-x-7'>
                <img src="icons/about4.webp" alt="" srcset="" className='w-8' />
                <div className='flex flex-col space-y-2 text-center'>
                  <h1 className='text-lg  font-semibold'>List your own property</h1>
                  <p className='text-gray-400 text-sm'>We help you find a new home by offering a smart real estate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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