import React from 'react'

const page = () => {
  return (
    <>
    {/* Cholera Button */}
  <button className="relative group focus:outline-none active:scale-95 transition w-[80vw] max-w-96 aspect-square m-4">
    {/* Outer circle */}
    <div className="absolute inset-0 bg-sky-200 rounded-full group-hover:bg-sky-300"></div>

    {/* Inner circle */}
    <div className="absolute inset-0 m-auto w-[90%] aspect-square bg-sky-500 rounded-full border-[6px] border-white group-hover:bg-sky-600 flex flex-col items-center justify-center text-white font-semibold space-y-2">
     
      {/* Text */}
      <span className="text-3xl md:text-4xl">Cholera<br></br> </span>
    </div>
  </button>
    
    </>
  )
}

export default page