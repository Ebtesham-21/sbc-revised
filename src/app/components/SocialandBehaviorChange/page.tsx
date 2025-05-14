import React from 'react'

const page = () => {
  return (
    <>
        {/* social and behavior change */}
        <button className="relative w-[90vw] max-w-[588px] h-96 rounded-3xl focus:outline-none active:scale-95 transition group">
        {/* Outer layer */}
        <div className="absolute inset-0 bg-sky-200 rounded-3xl group-hover:bg-sky-300"></div>

        {/* Inner layer */}
        <div className="absolute inset-[2%] m-[12px] bg-sky-500 rounded-3xl group-hover:bg-sky-600"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold text-xs md:text-xl text-center gap-8 px-4">
            <span>Social and Behavior Change (SBC) is a <br /> strategic process that aims to change <br/> peoples attitudes, beliefs, and practices to <br/> promote positive social change. </span>
            <span>Through this digital diary, we can make our <br /> enviornment easier where people <br/> in out community will be able to adapt positive <br/> practices through animations, musics, videos, <br/> photos, documents, quizzes etc.</span>
            
        </div>
        </button>
    </>
  )
}

export default page