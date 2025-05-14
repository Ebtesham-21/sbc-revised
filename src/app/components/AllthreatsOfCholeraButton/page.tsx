import React from 'react'

const page = () => {
  return (
    <>
    {/* all the threats of cholera button */}
<button className="relative w-[90vw] max-w-[632px] aspect-[3/4] rounded-[156px] focus:outline-none active:scale-95 transition group overflow-hidden">
  {/* Outer Layer */}
  <div className="absolute inset-0 bg-white rounded-[156px] group-hover:bg-gray-100"></div>

  {/* Middle Layer */}
  <div className="absolute top-[2%] left-[3%] w-[94%] h-[71%] bg-sky-500 rounded-[147px] group-hover:bg-sky-600"></div>

  {/* Icon */}
  <div className="absolute top-[23%] left-[15%] w-64 h-64 rounded-md flex justify-center items-center">
    {/* Example SVG */}
    
  </div>

  {/* Text */}
  <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 text-center text-sky-500 text-lg sm:text-2xl md:text-3xl font-bold font-sans">
    All the threats<br /> of Cholera
  </div>
</button>
</>
  )
}

export default page