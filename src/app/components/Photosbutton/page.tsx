import React from 'react'

const page = () => {
  return (
    <>
    {/* Photos button */}
        
        <button className="relative w-[90vw] max-w-[800px] aspect-[4/1] rounded-[203px] focus:outline-none active:scale-95 transition group m-2">
        {/* Outer layer with spacing */}
        <div className="absolute inset-x-[5%] inset-y-[4%] bg-sky-200 rounded-[203px] group-hover:bg-sky-300"></div>

        {/* Middle layer */}
        <div className="absolute inset-x-[8%] inset-y-[14%] bg-white rounded-[203px]"></div>

        {/* Inner layer */}
        <div className="absolute inset-x-[10%] inset-y-[20%] bg-sky-500 rounded-[203px] group-hover:bg-sky-600"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 text-white font-semibold text-xl md:text-3xl text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-14 md:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Photos</span>
        </div>
        </button>
    </>
  )
}

export default page