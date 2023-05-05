import React from 'react'

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
          <p className='text-gray-400 text-lg text-center mt-6'>Testimonials</p>
        </div>
        <div className='flex justify-center py-10 '>
          <div className=' w-full grid grid-cols-3 justify-center mx-10 sm:mx-5 md:mx-14 lg:mx-14 xl:mx-20  gap-5'>
            <div className='flex justify-center flex-col py-5 rounded-lg hover:shadow-lg  px-5'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt quisquam repellendus temporibus earum accusamus debitis inventore maxime cum quos quod quasi dolore.</p>
              <div className='py-8 flex items-center space-x-8'>
                <img src="image/team-3.jpg.webp" alt="" className='rounded-full w-1/5 shadow-lg' />
                <div className='space-y-3'>
                  <h1 className='text-lg'>Bhavin Shah</h1>
                  <p className='uppercase text-sm text-[#0fb45f] font-semibold'>MARKETING MANAGER</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center flex-col py-5 rounded-lg hover:shadow-lg  px-5'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt quisquam repellendus temporibus earum accusamus debitis inventore maxime cum quos quod quasi dolore.</p>
              <div className='py-8 flex items-center space-x-8'>
                <img src="image/team-3.jpg.webp" alt="" className='rounded-full w-1/5 shadow-lg' />
                <div className='space-y-3'>
                  <h1 className='text-lg'>Bhavin Shah</h1>
                  <p className='uppercase text-sm text-[#0fb45f] font-semibold'>MARKETING MANAGER</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center flex-col py-5 rounded-lg hover:shadow-lg  px-5'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt quisquam repellendus temporibus earum accusamus debitis inventore maxime cum quos quod quasi dolore.</p>
              <div className='py-8 flex items-center space-x-8'>
                <img src="image/team-3.jpg.webp" alt="" className='rounded-full w-1/5 shadow-lg' />
                <div className='space-y-3'>
                  <h1 className='text-lg'>Bhavin Shah</h1>
                  <p className='uppercase text-sm text-[#0fb45f] font-semibold'>MARKETING MANAGER</p>
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
