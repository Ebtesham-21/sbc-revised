import Image from "next/image";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 space-y-8 p-6  space-x-6">
  {/* social protection */}
  <button className="relative group focus:outline-none active:scale-95 transition w-[80vw] max-w-96 aspect-square m-4">
    {/* Outer circle */}
    <div className="absolute inset-0 bg-sky-200 rounded-full group-hover:bg-sky-300"></div>

    {/* Inner circle */}
    <div className="absolute inset-0 m-auto w-[90%] aspect-square bg-sky-500 rounded-full border-[6px] border-white group-hover:bg-sky-600 flex flex-col items-center justify-center text-white font-semibold space-y-2">
      {/* Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      {/* Text */}
      <span className="text-sm md:text-2xl">Social <br></br> Protection</span>
    </div>
  </button>


  {/* Home button */}

  <button className="relative w-[80vw] max-w-[700px] aspect-[1/1] focus:outline-none active:scale-95 transition group">
    {/* Outer rectangle */}
    <div className="absolute inset-0 bg-sky-500 rounded-[7%] group-hover:bg-sky-400"></div>

    {/* Inner rectangle */}
    <div className="absolute left-[4%] top-[4%] w-[92%] h-[92%] bg-blue-800 rounded-[7%] group-hover:bg-blue-700"></div>

    {/* Outer circle */}
    <div className="absolute left-[12%] top-[11%] w-[76%] h-[78%] bg-sky-500 rounded-full group-hover:bg-sky-400"></div>

    {/* Inner circle with content */}
    <div className="absolute left-[16%] top-[15%] w-[68%] h-[70%] bg-blue-800 rounded-full group-hover:bg-blue-700 flex flex-col items-center justify-center text-white text-base md:text-xl font-semibold space-y-2">
      {/* Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-56 md:w-56" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      
      
    </div>
  </button>


{/* Explore button */}
 
<button className="relative w-[90vw] max-w-[1090px] aspect-[4/1] rounded-[203px] focus:outline-none active:scale-95 transition group m-2">
  {/* Outer layer */}
  <div className="absolute inset-0 bg-sky-200 rounded-[203px] group-hover:bg-sky-300"></div>

  {/* Middle layer */}
  <div className="absolute inset-[8%] bg-white rounded-[203px]"></div>

  {/* Inner layer */}
  <div className="absolute inset-[12%] bg-sky-500 rounded-[203px] group-hover:bg-sky-600"></div>

  {/* Text */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl md:text-3xl text-center">
    <span>Click Me</span>
  </div>
</button>


{/* are you ready button? */}
<button className="relative w-[90vw] max-w-[588px] h-96 rounded-3xl focus:outline-none active:scale-95 transition group">
  {/* Outer layer */}
  <div className="absolute inset-0 bg-sky-200 rounded-3xl group-hover:bg-sky-300"></div>

  {/* Inner layer */}
  <div className="absolute inset-[2%] m-[12px] bg-sky-500 rounded-3xl group-hover:bg-sky-600"></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl md:text-4xl text-center">
    <span>Are you ready ?</span>
  </div>
</button>








</main>



  );
}
