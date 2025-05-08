import Image from "next/image";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 space-y-8 p-6  space-x-6">

{/* sbc button */}
<button className="relative w-[90vw] max-w-[900px] aspect-[8/1] rounded-full focus:outline-none active:scale-95 transition group">
  {/* Outer Layer */}
  <div className="absolute inset-0 bg-amber-400 rounded-full group-hover:bg-amber-300"></div>

  {/* Middle Layer */}
  <div className="absolute inset-x-[3%] inset-y-[6%] bg-white rounded-full"></div>

  {/* Inner Layer */}
  <div className="absolute inset-x-[5%] inset-y-[10%] bg-sky-500 rounded-full group-hover:bg-sky-600"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-xl lg:text-2xl text-center px-2">
    <span>What is SBC ? </span>
  </div>
</button>


{/* video button */}

<button className="relative w-[90vw] max-w-[900px] aspect-[1/1] rounded-[222px] focus:outline-none active:scale-95 transition group overflow-hidden">
  {/* Outer Layer */}
  <div className="absolute inset-0 bg-white rounded-[222px] group-hover:bg-gray-100"></div>

  {/* Middle Layer */}
  <div className="absolute top-[3%] left-[2.5%] w-[95%] h-[94%] bg-sky-500 rounded-[196px] group-hover:bg-sky-600 transition" />

  {/* Large Image */}
  <img
    src="https://placehold.co/1184x1131"
    alt="Main visual"
    className="absolute top-[9%] left-[8%] w-[84%] h-[82%] object-cover rounded-[196px]"
  />

  {/* Inner Image */}
  <img
    src="https://placehold.co/532x532"
    alt="Overlay icon"
    className="absolute top-[31%] left-[31%] w-[38%] h-[38%] object-contain"
  />
</button>


{/* Are you ready button? */}
<button className="relative w-[90vw] max-w-[588px] h-96 rounded-3xl focus:outline-none active:scale-95 transition group">
  {/* Outer layer */}
  <div className="absolute inset-0 bg-sky-200 rounded-3xl group-hover:bg-sky-300"></div>

  {/* Inner layer */}
  <div className="absolute inset-[2%] m-[12px] bg-sky-500 rounded-3xl group-hover:bg-sky-600"></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold text-xl md:text-4xl text-center gap-8 px-4">
    <span>Time to test your <br /> knowledge about Cholera.</span>
    <span>Answer these multiple <br /> choice questions.</span>
  </div>
</button>


{/* Congratulations button */}
<button className="relative w-[90vw] max-w-[588px] h-96 rounded-3xl focus:outline-none active:scale-95 transition group">
  {/* Outer layer */}
  <div className="absolute inset-0 bg-sky-200 rounded-3xl group-hover:bg-sky-300"></div>

  {/* Inner layer */}
  <div className="absolute inset-[2%] m-[12px] bg-sky-500 rounded-3xl group-hover:bg-sky-600"></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold text-xl md:text-4xl text-center gap-8 px-4">
    <span>Congratulations! <br /> You've done a good job!</span>
    <span>You will have fun in the next <br /> topics too.</span>
    <span>Let's move on then!</span>
  </div>
</button>



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



  {/* social and behavior change */}
<button className="relative w-[90vw] max-w-[588px] h-96 rounded-3xl focus:outline-none active:scale-95 transition group">
  {/* Outer layer */}
  <div className="absolute inset-0 bg-sky-200 rounded-3xl group-hover:bg-sky-300"></div>

  {/* Inner layer */}
  <div className="absolute inset-[2%] m-[12px] bg-sky-500 rounded-3xl group-hover:bg-sky-600"></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold text-xl md:text-xl text-center gap-8 px-4">
    <span>Social and Behavior Change (SBC) is a <br /> strategic process that aims to change <br/> peoples attitudes, beliefs, and practices to <br/> promote positive social change. </span>
    <span>Through this digital diary, we can make our <br /> enviornment easier where people <br/> in out community will be able to adapt positive <br/> practices through animations, musics, videos, <br/> photos, documents, quizzes etc.</span>
    
  </div>
</button>


{/* quiz button */}

<button className="relative w-[90vw] max-w-[600px] aspect-[3/1] rounded-[251.5px] focus:outline-none active:scale-95 transition group">
  {/* Outer Layer */}
  <div className="absolute inset-0 bg-white rounded-[251.5px] group-hover:bg-gray-100"></div>

  {/* Middle Layer */}
  <div className="absolute inset-x-[2.6%] inset-y-[3%] bg-amber-400 rounded-[251.5px] group-hover:bg-amber-300"></div>

  {/* Inner Layer */}
  <div className="absolute inset-x-[5.6%] inset-y-[8%] bg-sky-500 rounded-[251.5px] group-hover:bg-sky-600"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-lg md:text-3xl lg:text-6xl text-center px-4">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-30 md:w-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    <span>Quiz</span>
   
  </div>
</button>

{/* Photos button */}
 
<button className="relative w-[90vw] max-w-[1090px] aspect-[4/1] rounded-[203px] focus:outline-none active:scale-95 transition group m-2">
  {/* Outer layer */}
  <div className="absolute inset-0 bg-sky-200 rounded-[203px] group-hover:bg-sky-300"></div>

  {/* Middle layer */}
  <div className="absolute inset-[8%] bg-white rounded-[203px]"></div>

  {/* Inner layer */}
  <div className="absolute inset-[12%] bg-sky-500 rounded-[203px] group-hover:bg-sky-600"></div>

  {/* Text */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl md:text-3xl text-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-40 md:w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    <span>Photos</span>
  </div>
</button>


  {/* Out of school children protection */}
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
      <span className="text-sm md:text-2xl">Out of school <br></br> Children</span>
    </div>
  </button>


  {/* Music button */}

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
    Cholera Prevention<br /> at School
  </div>
</button>

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
    Outbreak of <br /> Cholera
  </div>
</button>



{/* Multimedia button */}

<button className="relative w-[90vw] max-w-[600px] aspect-[3/1] rounded-[251.5px] focus:outline-none active:scale-95 transition group">
  {/* Outer Layer */}
  <div className="absolute inset-0 bg-white rounded-[251.5px] group-hover:bg-gray-100"></div>

  {/* Middle Layer */}
  <div className="absolute inset-x-[2.6%] inset-y-[3%] bg-amber-400 rounded-[251.5px] group-hover:bg-amber-300"></div>

  {/* Inner Layer */}
  <div className="absolute inset-x-[5.6%] inset-y-[8%] bg-sky-500 rounded-[251.5px] group-hover:bg-sky-600"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-lg md:text-3xl lg:text-6xl text-center px-4">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-30 md:w-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    <span>Multimedia</span>
   
  </div>
</button>



  {/* Menstrual Hygiene */}
  <button className="relative group focus:outline-none active:scale-95 transition w-[80vw] max-w-96 aspect-square m-4">
    {/* Outer circle */}
    <div className="absolute inset-0 bg-sky-200 rounded-full group-hover:bg-sky-300"></div>

    {/* Inner circle */}
    <div className="absolute inset-0 m-auto w-[90%] aspect-square bg-sky-500 rounded-full border-[6px] border-white group-hover:bg-sky-600 flex flex-col items-center justify-center text-white font-semibold space-y-2">
    
      {/* Text */}
      <span className="text-sm md:text-4xl">Menstrual <br></br> Hygiene</span>
    </div>
  </button>

  {/* Measles */}
  <button className="relative group focus:outline-none active:scale-95 transition w-[80vw] max-w-96 aspect-square m-4">
    {/* Outer circle */}
    <div className="absolute inset-0 bg-sky-200 rounded-full group-hover:bg-sky-300"></div>

    {/* Inner circle */}
    <div className="absolute inset-0 m-auto w-[90%] aspect-square bg-sky-500 rounded-full border-[6px] border-white group-hover:bg-sky-600 flex flex-col items-center justify-center text-white font-semibold space-y-2">
     
      {/* Text */}
      <span className="text-sm md:text-4xl">Measles <br></br> </span>
    </div>
  </button>


  {/* let's learn about */}

  <button className="relative w-[90vw] max-w-[900px] aspect-[8/1] rounded-full focus:outline-none active:scale-95 transition group">
  {/* Outer Layer */}
  <div className="absolute inset-0 bg-amber-400 rounded-full group-hover:bg-amber-300"></div>

  {/* Middle Layer */}
  <div className="absolute inset-x-[3%] inset-y-[6%] bg-white rounded-full"></div>

  {/* Inner Layer */}
  <div className="absolute inset-x-[5%] inset-y-[10%] bg-sky-500 rounded-full group-hover:bg-sky-600"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-xl lg:text-2xl text-center px-2">
    <span>Let's learn about : </span>
  </div>
</button>

{/* learn more about sbc button */}

<button className="relative w-[90vw] max-w-[900px] aspect-[8/1] rounded-full focus:outline-none active:scale-95 transition group">
  {/* Outer Layer */}
  <div className="absolute inset-0 bg-sky-500 rounded-full group-hover:bg-sky-400"></div>

  {/* Middle Layer */}
  <div className="absolute inset-x-[2.7%] inset-y-[10%] bg-white rounded-full"></div>

  {/* Inner Layer */}
  <div className="absolute inset-x-[3.6%] inset-y-[14%] bg-[#50716C] rounded-full group-hover:bg-slate-700"></div>

  {/* Optional Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-xl lg:text-2xl text-center px-4">
    <span>Learn more about sbc</span>
  </div>
</button>


{/* Music button */}

<button className="relative w-[80vw] max-w-[700px] aspect-[1/1] focus:outline-none active:scale-95 transition group">
    {/* Outer rectangle */}
    <div className="absolute inset-0 bg-sky-500 rounded-[7%] group-hover:bg-sky-400"></div>

    {/* Inner rectangle */}
    <div className="absolute left-[4%] top-[4%] w-[92%] h-[92%] bg-blue-800 rounded-[7%] group-hover:bg-blue-700"></div>

    {/* Outer circle */}
    <div className="absolute left-[12%] top-[11%] w-[76%] h-[78%] bg-sky-500 rounded-full group-hover:bg-sky-400"></div>

    {/* Inner circle with content */}
    <div className="absolute left-[16%] top-[15%] w-[68%] h-[70%] bg-blue-800 rounded-full group-hover:bg-blue-700 flex flex-col items-center justify-center text-white text-base md:text-xl font-semibold space-y-2">
      
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-xl lg:text-9xl text-center px-4">
    <span>ENG</span>
  </div>
      
      
    </div>
  </button>

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
      
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-xl lg:text-9xl text-center px-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-56 md:w-56" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V14H9v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" />
      </svg>

    </div>
      
      
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
  
    <span>Explore</span>
  </div>
</button>


{/* Early Childhood Development */}
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
      <span className="text-sm md:text-2xl">Early Childhood <br></br> Development </span>
    </div>
  </button>



{/* !  Icon */}

<button className="relative w-[80vw] max-w-[700px] aspect-[1/1] focus:outline-none active:scale-95 transition group">
    {/* Outer rectangle */}
    <div className="absolute inset-0 bg-sky-500 rounded-[7%] group-hover:bg-sky-400"></div>

    {/* Inner rectangle */}
    <div className="absolute left-[4%] top-[4%] w-[92%] h-[92%] bg-blue-800 rounded-[7%] group-hover:bg-blue-700"></div>

    {/* Outer circle */}
    <div className="absolute left-[12%] top-[11%] w-[76%] h-[78%] bg-sky-500 rounded-full group-hover:bg-sky-400"></div>

    {/* Inner circle with content */}
    <div className="absolute left-[16%] top-[15%] w-[68%] h-[70%] bg-blue-800 rounded-full group-hover:bg-blue-700 flex flex-col items-center justify-center text-white text-base md:text-xl font-semibold space-y-2">
      
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-xl lg:text-9xl text-center px-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-80 md:w-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v4m0 4h.01" />
      </svg>


    </div>
      
      
    </div>
  </button>


{/* Early Childhood Development */}
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
      <span className="text-sm md:text-2xl">Climate <br></br> Change </span>
    </div>
  </button>


{/* Measles */}
  <button className="relative group focus:outline-none active:scale-95 transition w-[80vw] max-w-96 aspect-square m-4">
    {/* Outer circle */}
    <div className="absolute inset-0 bg-sky-200 rounded-full group-hover:bg-sky-300"></div>

    {/* Inner circle */}
    <div className="absolute inset-0 m-auto w-[90%] aspect-square bg-sky-500 rounded-full border-[6px] border-white group-hover:bg-sky-600 flex flex-col items-center justify-center text-white font-semibold space-y-2">
     
      {/* Text */}
      <span className="text-sm md:text-4xl">Cholera<br></br> </span>
    </div>
  </button>


  {/* Child Survival and Development */}
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
      <span className="text-sm md:text-2xl">Child Survival <br></br> And <br></br> Development </span>
    </div>
  </button>

  {/* Child Rights */}
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
      <span className="text-sm md:text-2xl">Child  <br></br> Rights <br></br>  </span>
    </div>
  </button>


{/* !  Left Arrow */}

<button className="relative w-[80vw] max-w-[700px] aspect-[1/1] focus:outline-none active:scale-95 transition group">
    {/* Outer rectangle */}
    <div className="absolute inset-0 bg-sky-500 rounded-[7%] group-hover:bg-sky-400"></div>

    {/* Inner rectangle */}
    <div className="absolute left-[4%] top-[4%] w-[92%] h-[92%] bg-blue-800 rounded-[7%] group-hover:bg-blue-700"></div>

    {/* Outer circle */}
    <div className="absolute left-[12%] top-[11%] w-[76%] h-[78%] bg-sky-500 rounded-full group-hover:bg-sky-400"></div>

    {/* Inner circle with content */}
    <div className="absolute left-[16%] top-[15%] w-[68%] h-[70%] bg-blue-800 rounded-full group-hover:bg-blue-700 flex flex-col items-center justify-center text-white text-base md:text-xl font-semibold space-y-2">
      
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-xl lg:text-9xl text-center px-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-80 md:w-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>



    </div>
      
      
    </div>
  </button>


  {/* Audio  Files */}
 
<button className="relative w-[90vw] max-w-[1090px] aspect-[4/1] rounded-[203px] focus:outline-none active:scale-95 transition group m-2">
  {/* Outer layer */}
  <div className="absolute inset-0 bg-sky-200 rounded-[203px] group-hover:bg-sky-300"></div>

  {/* Middle layer */}
  <div className="absolute inset-[8%] bg-white rounded-[203px]"></div>

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


{/* Animation  Files */}
 
<button className="relative w-[90vw] max-w-[1090px] aspect-[4/1] rounded-[203px] focus:outline-none active:scale-95 transition group m-2">
  {/* Outer layer */}
  <div className="absolute inset-0 bg-sky-200 rounded-[203px] group-hover:bg-sky-300"></div>

  {/* Middle layer */}
  <div className="absolute inset-[8%] bg-white rounded-[203px]"></div>

  {/* Inner layer */}
  <div className="absolute inset-[12%] bg-sky-500 rounded-[203px] group-hover:bg-sky-600"></div>

  {/* Text */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl md:text-3xl text-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-40 md:w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h2l2-3h10l2 3h2a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z" />
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>


    <span>Animation</span>
  </div>
</button>




{/* Additional Videos */}
 
<button className="relative w-[90vw] max-w-[1090px] aspect-[4/1] rounded-[203px] focus:outline-none active:scale-95 transition group m-2">
  {/* Outer layer */}
  <div className="absolute inset-0 bg-sky-200 rounded-[203px] group-hover:bg-sky-300"></div>

  {/* Middle layer */}
  <div className="absolute inset-[8%] bg-white rounded-[203px]"></div>

  {/* Inner layer */}
  <div className="absolute inset-[12%] bg-sky-500 rounded-[203px] group-hover:bg-sky-600"></div>

  {/* Text */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl md:text-3xl text-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-40 md:w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v6h6" />
      <polygon points="10,10 16,13 10,16 10,10" fill="currentColor" />
    </svg>



    <span>Additional Videos</span>
  </div>
</button>


{/* Additional Resources button */}

<button className="relative w-[90vw] max-w-[600px] aspect-[3/1] rounded-[251.5px] focus:outline-none active:scale-95 transition group">
  {/* Outer Layer */}
  <div className="absolute inset-0 bg-white rounded-[251.5px] group-hover:bg-gray-100"></div>

  {/* Middle Layer */}
  <div className="absolute inset-x-[2.6%] inset-y-[3%] bg-amber-400 rounded-[251.5px] group-hover:bg-amber-300"></div>

  {/* Inner Layer */}
  <div className="absolute inset-x-[5.6%] inset-y-[8%] bg-sky-500 rounded-[251.5px] group-hover:bg-sky-600"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-lg md:text-3xl lg:text-4xl text-center px-4">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-30 md:w-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    <span>Additional <br /> Resources</span>
   
  </div>
</button>


{/* Add video button */}

<button className="relative w-[90vw] max-w-[900px] aspect-[1/1] rounded-[100px] focus:outline-none active:scale-95 transition group overflow-hidden">
  {/* Outer Layer */}
  <div className="absolute inset-0 bg-white rounded-[222px] group-hover:bg-gray-100"></div>

  {/* Middle Layer */}
  <div className="absolute top-[3%] left-[2.5%] w-[95%] h-[94%] bg-sky-500 rounded-[196px] group-hover:bg-sky-600 transition" />

  {/* Large Image */}
  <img
    src="https://placehold.co/1184x1131"
    alt="Main visual"
    className="absolute top-[9%] left-[8%] w-[84%] h-[82%] object-cover rounded-[196px]"
  />

  {/* Inner Image */}
  <img
    src="https://placehold.co/532x532"
    alt="Overlay icon"
    className="absolute top-[31%] left-[31%] w-[38%] h-[38%] object-contain"
  />
</button>


{/* document files */}
<button className="relative w-[90vw] max-w-[655px] h-[655px] focus:outline-none active:scale-95 transition group">
  {/* White Layer */}
  <div className="absolute w-96 h-[475.62px] top-[317.45px] left-0 rotate-[-44.75deg] origin-top-left bg-white rounded-[45px]" />

  {/* Slate Layer */}
  <div className="absolute w-96 h-96 top-[319.45px] left-[28px] rotate-[-44.75deg] origin-top-left bg-[#50716C] rounded-[43px]" />

  {/* Sky Layer */}
  <div className="absolute w-96 h-96 top-[320.18px] left-[55.15px] rotate-[-44.75deg] origin-top-left bg-sky-500 rounded-[38px] group-hover:bg-sky-600" />

  {/* Optional Content (centered) */}
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-white text-xl font-semibold">Click Me</span>
  </div>
</button>







{/* learn more about sbc button */}

<button className="relative w-[90vw] max-w-[900px] aspect-[8/1] rounded-full focus:outline-none active:scale-95 transition group">
  {/* Outer Layer */}
  <div className="absolute inset-0 bg-sky-500 rounded-full group-hover:bg-sky-400"></div>

  {/* Middle Layer */}
  <div className="absolute inset-x-[2.7%] inset-y-[10%] bg-white rounded-full"></div>

  {/* Inner Layer */}
  <div className="absolute inset-x-[3.6%] inset-y-[14%] bg-slate-600 rounded-full group-hover:bg-slate-700"></div>

  {/* Optional Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-xl lg:text-2xl text-center px-4">
    <span>Learn more about sbc</span>
  </div>
</button>


{/* Document Files Button */}
<button className="relative w-[90vw] max-w-[655px] h-[655px] focus:outline-none active:scale-95 transition group overflow-hidden">
  

  {/* Slate Layer (Middle) */}
  <div className="absolute top-1/2 left-1/2 w-[440px] h-[440px] -translate-x-1/2 -translate-y-1/2 rotate-[-44.75deg] origin-center bg-[#ffffff] rounded-[43px] z-10" />
  {/* Slate Layer (Middle) */}
  <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rotate-[-44.75deg] origin-center bg-[#50716C] rounded-[43px] z-20" />

  {/* Sky Layer (Top) */}
  <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rotate-[-44.75deg] origin-center bg-sky-500 rounded-[38px] z-30 group-hover:bg-sky-600" />

  {/* Centered Content */}
  <div className="absolute inset-0 flex items-center justify-center z-40">
    <span className="text-white text-xl font-semibold text-center">Click Me 2</span>
  </div>
  
</button>


















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



















</main>



  );
}
