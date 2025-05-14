import React from 'react'

const page = () => {
  return (
    <>
    {/* House  Icon */}

<button className="relative w-[80vw] max-w-[700px] aspect-[1/1] focus:outline-none active:scale-95 transition group">
    {/* Outer rectangle */}
    <div className="absolute inset-0 bg-sky-500 rounded-[7%] group-hover:bg-sky-400"></div>

    {/* Inner rectangle */}
    <div className="absolute left-[4%] top-[4%] w-[92%] h-[92%] bg-blue-800 rounded-[7%] group-hover:bg-blue-700"></div>

    {/* Outer circle */}
    <div className="absolute left-[12%] top-[11%] w-[76%] h-[78%] bg-sky-500 rounded-full group-hover:bg-sky-400"></div>

    {/* Inner circle with content */}
    <div className="absolute left-[16%] top-[15%] w-[68%] h-[70%] bg-blue-800 rounded-full group-hover:bg-blue-700 flex flex-col items-center justify-center text-white text-base md:text-xl font-semibold space-y-2">
      
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-2xl sm:text-base md:text-xl lg:text-9xl text-center px-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-56 md:w-56" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V14H9v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" />
      </svg>

    </div>
      
      
    </div>
  </button>
  </>
  )
}

export default page