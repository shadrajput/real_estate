import React from 'react'
import "../../App.css"
import "react-slideshow-image/dist/styles.css"

function Service() {
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
              <div className='flex flex-col  items-center justify-center w-full space-x-7 group hover:bg-[#06112a] hover:cursor-pointer p-5 shadow-lg shadow-[#06112a6b] rounded-lg'>
                <img src="icons/about1.webp" alt="" srcset="" className='w-20 ' />
                <div className='flex flex-col text-center space-y-2'>
                  <h1 className='text-lg  font-semibold group-hover:text-white'>Find your future home</h1>
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

export default Service
