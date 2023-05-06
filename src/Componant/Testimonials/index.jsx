import React from 'react'
import { AiFillStar } from "react-icons/ai"

function Testimonials() {
  return (
    <>
      <div className=' py-16  ' id='Properties'>
        <div>
          <div className='heading flex-col '>
            <h1 className='text-center text-[40px] '>
              What Say Our Clients
            </h1>
          </div>
          <p className='text-gray-400 text-center mt-6'>We honoured to have these amzaing Customers</p>
        </div>
        <div className='flex justify-center py-10 '>
          <div className=' w-full grid grid-cols-3 justify-center mx-10 sm:mx-5 md:mx-14 lg:mx-14 xl:mx-20  gap-5'>
            <div className='flex justify-center flex-col rounded-lg hover:shadow-lg px-5 '>
              <div className='pr-20 space-y-5 py-6'>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt quisquam repellendus temporibus earum accusamus debitis inventore maxime cum quos quod quasi dolore.</p>
                <div className='flex items-center space-x-3'>

                  <AiFillStar className='text-yellow-600' />
                  <AiFillStar className='text-yellow-600' />
                  <AiFillStar className='text-yellow-600' />
                  <AiFillStar className='text-yellow-600' />
                </div>
              </div>
              <div className='flex items-center space-x-3 px-2 pb-5'>
                <img src="image/team-3.jpg.webp" alt="" className='rounded-full w-1/6 shadow-lg' />
                <div className='space-y-1'>
                  <h1 className='text-lg font-medium'>Bhavin Shah</h1>
                  <p className='uppercase text-sm text-gray-500 font-semibold'>MARKETING MANAGER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
