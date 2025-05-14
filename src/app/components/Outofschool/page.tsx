import React from 'react'

const page = () => {
  return (
    <>
    {/* Out of school children protection */}
    <button className="relative group focus:outline-none active:scale-95 transition w-[80vw] max-w-96 aspect-square m-4">
        {/* Outer circle */}
        <div className="absolute inset-0 bg-sky-200 rounded-full group-hover:bg-sky-300"></div>

        {/* Inner circle */}
        <div className="absolute inset-0 m-auto w-[90%] aspect-square bg-sky-500 rounded-full border-[6px] border-white group-hover:bg-sky-600 flex flex-col items-center justify-center text-white font-semibold space-y-2">
        {/* Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        {/* Text */}
        <span className="text-xl md:text-2xl">Out of school <br></br> Children</span>
        </div>
    </button>
    
    </>
  )
}

export default page