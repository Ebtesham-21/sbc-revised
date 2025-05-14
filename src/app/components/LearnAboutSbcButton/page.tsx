import React from 'react'

const page = () => {
  return (
    <>
        {/* learn more about sbc button */}

        <button className="relative  w-[90vw] max-w-[800px] aspect-[8/1]   rounded-full focus:outline-none active:scale-95 transition group">
        {/* Outer Layer */}
        <div className="absolute inset-x-[-1%] inset-y-[-16%] bg-sky-500 rounded-full group-hover:bg-sky-400"></div>

        {/* Middle Layer */}
        <div className="absolute inset-x-[2.7%] inset-y-[10%] bg-white rounded-full"></div>

        {/* Inner Layer */}
        <div className="absolute inset-x-[3.6%] inset-y-[14%] bg-[#50716C] rounded-full group-hover:bg-slate-700"></div>

        {/* Optional Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-xl lg:text-2xl text-center px-4">
            <span>Learn more about sbc</span>
        </div>
        </button>

    </>
  )
}

export default page