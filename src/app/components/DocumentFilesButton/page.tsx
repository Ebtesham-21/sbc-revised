import React from 'react'

const page = () => {
  return (
    <>
    {/* Document Files Button */}
<button className="relative w-[100vw] max-w-[500px] sm:max-w-[585px] h-[400px] sm:h-[555px] focus:outline-none active:scale-95 transition group overflow-hidden">
  {/* White Layer (Bottom) */}
  <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] -translate-x-1/2 -translate-y-1/2 rotate-[-44.75deg] origin-center bg-white rounded-[30px] sm:rounded-[43px] z-10" />

  {/* Slate Layer (Middle) */}
  <div className="absolute top-1/2 left-1/2 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] -translate-x-1/2 -translate-y-1/2 rotate-[-44.75deg] origin-center bg-[#50716C] rounded-[28px] sm:rounded-[43px] z-20" />

  {/* Sky Layer (Top) */}
  <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] sm:w-96 sm:h-96 -translate-x-1/2 -translate-y-1/2 rotate-[-44.75deg] origin-center bg-sky-500 rounded-[24px] sm:rounded-[38px] z-30 group-hover:bg-sky-600" />

  {/* Centered Content */}
  <div className="absolute inset-0 flex items-center justify-center z-40">
    <div className="flex flex-row items-center justify-center gap-x-2 sm:gap-x-4 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-10 sm:w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-base sm:text-xl font-semibold text-center">Document Files</span>
    </div>
  </div>
</button>

    
    </>
  )
}

export default page