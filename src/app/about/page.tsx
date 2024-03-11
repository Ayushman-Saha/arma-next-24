// 'use client'
import type { Metadata } from "next";
import { Spotlight } from '@/components/effects/Spotlight'
import React from 'react' 
import Teams from '@/components/about/Team'

export const metadata: Metadata = {
  title: "Armageddon 2024",
  description: `ARMAGEDDON is hosted by the Indian Institute of Science Education and
  Research (IISER) Bhopal. ARMAGEDDON, as the name suggests, is not just an event;
  it's a battleground for the brightest minds, a place where intellect meets
  innovation, and creativity knows no bounds.`,
  openGraph: {
    title: 'Armageddon 2024',
    description: 'Armageddon is annual tech fest of IISER Bhopal',
  },
};

function AboutPage() {
  return (
    <div>
        
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            About Us
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Know more about us...
            </p>
        </div>
        </div>
        <div>
            <Teams/>

        </div>
    </div>
    
  )
}

export default AboutPage