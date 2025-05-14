import React from 'react'

const page = () => {
  return (
    <>
        {/* quiz button */}

        <button className="relative w-[90vw] max-w-[600px] aspect-[3/1] rounded-[251.5px] focus:outline-none active:scale-95 transition group">
        {/* Outer Layer */}
        <div className="absolute inset-0 bg-white rounded-[251.5px] group-hover:bg-gray-100"></div>

        {/* Middle Layer */}
        <div className="absolute inset-x-[2.6%] inset-y-[3%] bg-amber-400 rounded-[251.5px] group-hover:bg-amber-300"></div>

        {/* Inner Layer */}
        <div className="absolute inset-x-[5.6%] inset-y-[8%] bg-sky-500 rounded-[251.5px] group-hover:bg-sky-600"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-lg md:text-3xl lg:text-6xl text-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-30 md:w-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xl">Quiz</span>
        
        </div>
        </button>
    </>
  )
}

export default page