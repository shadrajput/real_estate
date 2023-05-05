import React from 'react'
import "../../App.css"
import "react-slideshow-image/dist/styles.css"
import {BsFillBuildingsFill} from "react-icons/bs"
import {AiFillHome} from "react-icons/ai"

function Service() {
  return (
    <>
      <div className='py-16 ' id='Services'>
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
            <div className='py-7 flex justify-between w-full space-x-10'>
              <div className='flex flex-col  items-center justify-center w-full h-full  space-y-3 group hover:bg-[#06112a] duration-200 hover:cursor-pointer py-14 shadow-lg shadow-[#06112a6b] rounded-lg'>
               <BsFillBuildingsFill className='text-5xl group-hover:text-white'/>
                <h1 className='text-2xl  font-semibold group-hover:text-white'>Land</h1>
              </div>
              <div className='flex flex-col  items-center justify-center w-full h-full  space-y-3 group hover:bg-[#06112a] duration-200 hover:cursor-pointer py-14 shadow-lg shadow-[#06112a6b] rounded-lg'>
               <AiFillHome className='text-5xl group-hover:text-white'/>
                <h1 className='text-2xl  font-semibold group-hover:text-white'>Residential</h1>
              </div>
              <div className='flex flex-col  items-center justify-center w-full h-full  space-y-3 group hover:bg-[#06112a] duration-200 hover:cursor-pointer py-14 shadow-lg shadow-[#06112a6b] rounded-lg'>
               <BsFillBuildingsFill className='text-5xl group-hover:text-white'/>
                <h1 className='text-2xl  font-semibold group-hover:text-white'>Commercial</h1>
              </div>
              <div className='flex flex-col  items-center justify-center w-full h-full  space-y-3 group hover:bg-[#06112a] duration-200 hover:cursor-pointer py-14 shadow-lg shadow-[#06112a6b] rounded-lg'>
               <BsFillBuildingsFill className='text-5xl group-hover:text-white'/>
                <h1 className='text-2xl  font-semibold group-hover:text-white'>Industrial</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
