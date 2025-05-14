import React from 'react'

const page = () => {
  return (
    <>
    {/* folder button */}

<button className="relative w-[90vw] max-w-[812px] aspect-[4/3] focus:outline-none active:scale-95 transition group">
  {/* Back Layer */}
  <div className="absolute inset-0 bg-blue-800 outline outline-1 outline-offset-[-0.5px] outline-slate-500 group-hover:bg-blue-900 rounded-xl"></div>

  {/* Front Layer */}
  <div className="absolute inset-y-[3.5%] inset-x-0 bg-sky-500 outline outline-1 outline-offset-[-0.5px] outline-slate-500 group-hover:bg-sky-600 rounded-xl"></div>

  {/* Optional Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl text-center px-4">
    <span>Click Me</span>
  </div>
</button>
    
    </>
  )
}

export default page