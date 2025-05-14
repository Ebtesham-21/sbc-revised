import React from 'react'

const page = () => {
  return (
    <>
        {/* Explore button */}
 
<button className="relative w-[90vw] max-w-[900px] aspect-[4/1] rounded-[203px] focus:outline-none active:scale-95 transition group m-2">
  {/* Outer layer */}
  <div className="absolute inset-x-[7%] inset-y-[-4%] bg-sky-200 rounded-[203px] group-hover:bg-sky-300"></div>

  {/* Middle layer */}
  <div className="absolute inset-x-[11%] inset-y-[9%] bg-white rounded-[203px]"></div>

  {/* Inner layer */}
  <div className="absolute inset-[12%] bg-sky-500 rounded-[203px] group-hover:bg-sky-600"></div>

  {/* Text */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl md:text-8xl text-center">
  
    <span>Explore</span>
  </div>
</button>
    </>
  )
}

export default page