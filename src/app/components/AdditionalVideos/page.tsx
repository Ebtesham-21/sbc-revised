import React from 'react'

const page = () => {
  return (
    <>
    {/* Additional Videos */}
 
<button className="relative w-[90vw] max-w-[1090px] aspect-[4/1] rounded-[203px] focus:outline-none active:scale-95 transition group m-2">
  {/* Outer layer */}
  <div className="absolute inset-x-[6%] inset-y-[-5%] bg-sky-200 rounded-[203px] group-hover:bg-sky-300"></div>

  {/* Middle layer */}
  <div className="absolute inset-x-[10%] inset-y-[7%] bg-white rounded-[203px]"></div>


  {/* Inner layer */}
  <div className="absolute inset-[12%] bg-sky-500 rounded-[203px] group-hover:bg-sky-600"></div>

  {/* Text */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl md:text-3xl text-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-40 md:w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v6h6" />
      <polygon points="10,10 16,13 10,16 10,10" fill="currentColor" />
    </svg>



    <span >Additional Videos</span>
  </div>
</button>

    </>
  )
}

export default page