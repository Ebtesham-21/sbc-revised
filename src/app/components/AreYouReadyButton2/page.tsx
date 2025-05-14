import React from 'react'

const page = () => {
  return (
    <>
    {/* Are you ready button*/}
<button className="relative w-[90vw] max-w-[588px] h-96 rounded-3xl focus:outline-none active:scale-95 transition group">
  {/* Outer layer */}
  <div className="absolute inset-0 bg-sky-200 rounded-3xl group-hover:bg-sky-300"></div>

  {/* Inner layer */}
  <div className="absolute inset-[2%] m-[12px] bg-sky-500 rounded-3xl group-hover:bg-sky-600"></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold text-xl md:text-4xl text-center gap-8 px-4">
    <span>Are you ready? <br /> </span>
    
  </div>
</button>
    </>
  )
}

export default page