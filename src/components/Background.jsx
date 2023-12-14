import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
    <div className=' absolute w-full py-10 top-[5%] justify-center text-zinc-600 font-semibold text-xl'>Documents</div>
    <h1 className=' font-semibold text-zinc-900  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter'>Docs</h1>
    </div>
    </>
  )
}

export default Background