import { Spotlight } from '@/components/effects/Spotlight'
import React from 'react'
import CardScroll from '@/components/effects/CardScroll'

function EventPage() {
  return (
    <div className='p-10'>
        <div className="h-[500px] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="blue"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Armageddon <br /> where tech meets innovation.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Get hyped for Armageddon! Tech, vibes, and the future collide at IISER Bhopal. Let&apos;s level up together!
            </p>
        </div>
        </div>
        <div className='text-gray-200 text-center font-bold text-5xl underline m-8'>
            Event List
        </div>
        <div >
            <CardScroll/>
        </div>
        
    </div>
  )
}

export default EventPage