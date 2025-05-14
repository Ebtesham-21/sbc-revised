import React from 'react'

const page = () => {
  return (
    <>
    {/* let's learn about */}

        <button className="relative w-[90vw] max-w-[900px] aspect-[8/1] rounded-full focus:outline-none active:scale-95 transition group">
        {/* Outer Layer */}
        <div className="absolute inset-x-[1%] inset-y-[-16%] bg-amber-400 rounded-full group-hover:bg-amber-300"></div>

        {/* Middle Layer */}
        <div className="absolute inset-x-[4%] inset-y-[4%] bg-white rounded-full"></div>

        {/* Inner Layer */}
        <div className="absolute inset-x-[5%] inset-y-[10%] bg-sky-500 rounded-full group-hover:bg-sky-600"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-xl lg:text-2xl text-center px-2">
            <span>Let's learn about : </span>
        </div>
        </button>
    </>
  )
}

export default page