import { Spotlight } from '@/components/effects/Spotlight'
import Header from '@/components/header/Header'
import Head from 'next/head'
import React from 'react'

function EventPage() {
  return (
    <div>
        <Header/>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Armageddon <br /> where tech meets innovation.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Get hyped for Armageddon! Tech, vibes, and the future collide at IISER Bhopal. Let&pos;s level up together!
            </p>
        </div>
        </div>
    </div>
  )
}

export default EventPage