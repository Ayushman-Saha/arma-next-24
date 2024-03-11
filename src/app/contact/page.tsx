import { SparklesCore } from '@/components/effects/Sparkles'
import React from 'react'

function Contact() {
  return (
    <>
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
        For more details<br/> <a href='mailto:armageddon@iiserb.ac.in' className='underline'>Contact: armageddon@iiserb.ac.in</a>
      </h1>
    </div>
    </>
  )
}

export default Contact