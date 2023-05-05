import { React, useEffect, useState } from 'react';


const realEstateData = [
    {
        id: 1,
        type: "House",
        address: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zipcode: "94103",
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 2000,
        price: 1500000,
        images: "image/pexels-jessica-bryant-1370704.jpg",
        propertyType: "Single Family Residential",
        builder: {
            name: "ABC Builders",
            website: "https://www.abcbuilder.com",
            contact: {
                email: "info@abcbuilder.com",
                phone: "555-555-5555",
            },
        },
        amenities: ["Swimming pool", "Gym", "Garage"],
        agentId: 123,
    },
    {
        id: 2,
        type: "Condo",
        address: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        zipcode: "90012",
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1200,
        price: 800000,
        images: "image/pexels-max-rahubovskiy-8082332.jpg",
        propertyType: "Multi-Family Residential",
        builder: {
            name: "XYZ Developers",
            website: "https://www.xyzdevelopers.com",
            contact: {
                email: "info@xyzdevelopers.com",
                phone: "555-555-5555",
            },
        },
        amenities: ["Security", "Roof deck", "BBQ area"],
        agentId: 456,
    },
];


const Hero = () => {
    console.log(realEstateData)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progressBar, setProgressBar] = useState(0);

    const autoScroll = true
    let slideInterval;
    let intervalTime = 5000

    const nextSlide = () => {
        const isLastSlide = currentIndex === realEstateData?.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setProgressBar(0)
        setCurrentIndex(newIndex);
    };

    // function auto() {
    //     slideInterval = setInterval(nextSlide, intervalTime)
    // }
    // useEffect(() => {
    //     if (autoScroll) {
    //         auto();
    //     }
    //     return () => clearInterval(slideInterval)
    // }, [currentIndex])

    // useEffect(() => {
    //     setInterval(() => { setProgressBar((value) => (value + 1) % 67) }, 125)
    // }, [])

    // const goToSlide = (slideIndex) => {
    //     setProgressBar(0)
    //     setCurrentIndex(slideIndex);
    // };

    return (
        <>
            <div className='min-h-screen bg-yellow-700 relative' id='/'>
                <img src="/image/pexels-max-rahubovskiy-8082332.jpg " alt="" className='absolute h-[700px] w-full' />
                <div className='bg-gradient-to-t from-black min-h-screen w-full absolute '>
                </div>
                <div  className='bg-white absolute left-[25%] top-[50%] w-[50%] py-5 rounded-lg shadow-xl px-5'>
                    <h2>Details</h2>
                </div>
            </div>
        </>
        // <div className=' min-h-screen bg-yellow-600'>
        //     {
        //         realEstateData?.map((item, index) => {
        //             console.log(item.images)
        //             return (
        //                 <div className={index === currentIndex ? 'slide active ' : 'slide'}
        //                     key={index}>
        //                     <img src={item.images} alt="" className='' />
        //                     {/* {index == currentIndex && (
        //                             <div className='bg-gradient-to-t from-black absolute  '>

        //                             </div>
        //                         )} */}
        //                 </div>
        //             )
        //         })
        //     }

        //     {/* {
        //             slides?.length > 0
        //                 ?
        //                 (
        //                     // <div className='flex  absolute bottom-3 sm:bottom-4 2xl:bottom-10 lg:space-x-8 space-x-7 left-[33%] sm:left-[37%] lg:left-[25%] xl:left-[26%] 2xl:left-[30%]  lg:px-40 '>
        //                     //   {slides.map((slide, slideIndex) => (
        //                     //     <div
        //                     //       key={slideIndex}
        //                     //       onClick={() => goToSlide(slideIndex)}
        //                     //       className={slideIndex === currentIndex ? ' text-white lg:border-4 border-2  h-8 w-8 lg:w-12 lg:h-12 border-[#ee6630] rounded-full flex cursor-pointer justify-center items-center hover:text-[#ee6730] duration-300 ' : ' text-gray-500 h-8 w-8  lg:w-12 lg:h-12 flex border-none justify-center items-center hover:text-[#ee6730] cursor-pointer duration-300 font-bold'}
        //                     //     >
        //                     //       {slideIndex + 1}
        //                     //     </div>
        //                     //   ))}
        //                     // </div>
        //                     <div
        //                         className=" absolute  w-full flex justify-center items-center bottom-3 sm:bottom-4 2xl:bottom-10 lg:space-x-6 space-x-5  "
        //                     >
        //                         {
        //                             slides.map((slide, slideIndex) => {
        //                                 return (
        //                                     <div key={slideIndex} className="relative cursor-pointer flex justify-center items-center" onClick={() => goToSlide(slideIndex)}>
        //                                         <svg className="w-12 h-12 relative rotate-[-90deg] flex justify-center items-center">
        //                                             <circle
        //                                                 className="text-gray-500"
        //                                                 strokeWidth="2"
        //                                                 stroke="currentColor"
        //                                                 fill="transparent"
        //                                                 r="20"
        //                                                 cx="24"
        //                                                 cy="24"
        //                                             />
        //                                             <circle
        //                                                 className={`${slideIndex === currentIndex ? 'text-[#ee6730]' : 'text-gray-500'} transition-all`}
        //                                                 strokeWidth="1.5"
        //                                                 strokeDasharray={0}
        //                                                 strokeDashoffset={0}
        //                                                 strokeLinecap="round"
        //                                                 stroke="currentColor"
        //                                                 fill="transparent"
        //                                                 r="20"
        //                                                 cx="24"
        //                                                 cy="24"
        //                                             />
        //                                         </svg>
        //                                         <span className="w-10 absolute text-sm text-white text-center">{slideIndex + 1}</span>
        //                                     </div>
        //                                 )
        //                             })
        //                         }
        //                     </div>

        //                 )
        //                 :
        //                 null
        //         } */}

        // </div>
    )
}


export default Hero



