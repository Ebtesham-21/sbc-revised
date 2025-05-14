import React from 'react'

const page = () => {
  return (
    <>
    <div>
    {/* Video Button */}
    <button className="relative w-[90vw] max-w-[900px] aspect-[1/1] rounded-[10%] focus:outline-none active:scale-95 transition group overflow-hidden">

  {/* Outer Layer */}
  <div className="absolute inset-0 bg-white rounded-[10%] group-hover:bg-gray-100 transition" />

  {/* Middle Layer */}
  <div className="absolute top-[3%] left-[2.5%] w-[95%] h-[94%] bg-sky-500 rounded-[10%] group-hover:bg-sky-600 transition" />

  {/* Large Image */}
  <img
    src="https://placehold.co/1184x1131"
    alt="Main visual"
    className="absolute top-[9%] left-[8%] w-[84%] h-[82%] object-cover rounded-[10%]"
  />

  {/* Inner Image */}
  <img
    src="https://placehold.co/532x532"
    alt="Overlay icon"
    className="absolute top-[31%] left-[31%] w-[38%] h-[38%] object-contain"
  />
</button>
</div>
</>
  )
}

export default page