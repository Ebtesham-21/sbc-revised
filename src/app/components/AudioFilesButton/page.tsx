import React from 'react'

const page = () => {
  return (
    <>
         {/* Audio  Files */}
 
<button className="relative w-[90vw] max-w-[1090px] aspect-[4/1] rounded-[203px] focus:outline-none active:scale-95 transition group m-2">
  {/* Outer layer */}
  <div className="absolute inset-x-[6%] inset-y-[-5%] bg-sky-200 rounded-[203px] group-hover:bg-sky-300"></div>

  {/* Middle layer */}
  <div className="absolute inset-x-[10%] inset-y-[7%] bg-white rounded-[203px]"></div>

  {/* Inner layer */}
  <div className="absolute inset-[12%] bg-sky-500 rounded-[203px] group-hover:bg-sky-600"></div>

  {/* Text */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl md:text-3xl text-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-40 md:w-40" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 17.5a2.5 2.5 0 1 1-2-2.45V6.09l10-2.18v10.14a2.5 2.5 0 1 1-2 2.45 2.5 2.5 0 0 1 2-2.45V6.91l-6 1.31v7.83a2.5 2.5 0 1 1-2 2.45z"/>
    </svg>

    <span>Audio Files</span>
  </div>
</button>
    </>
  )
}

export default page