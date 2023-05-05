import React from "react"
import { FaArrowUp } from "react-icons/fa";


const GoToTop = () => {
    const [isVisible, setisVisible] = React.useState(false)
    const gototop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const listentoscroll = () => {
        let heightToHidden = 750;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setisVisible(true)
        } else {
            setisVisible(false)
        }
    }


    React.useEffect(() => {
        window.addEventListener("scroll", listentoscroll)
    }, [])
    return (
        <div>

            {isVisible && (
                <div className='flex justify-end' onClick={gototop}>
                    <div className='flex justify-center fixed bottom-5 mr-5  w-10 h-10' >
                        <FaArrowUp className='animate-bounce h-9 w-9  duration-75  hover:bg-white hover:border hover:border-[#571217]  hover:text-[#571217]  rounded-full  p-2 cursor-pointer  text-white bg-[#571217] ' />
                    </div>
                </div>
            )}
        </div>
    )
};



export default GoToTop