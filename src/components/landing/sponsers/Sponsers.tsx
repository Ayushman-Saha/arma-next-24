import React from 'react'
import { SparklesCore } from '../../effects/Sparkles'
import data from "../../../app/data.json"
import { SponsorCard } from './SponCard'

const sponsors = data.sponsors

export function Sponsors(){
    return(
    <>
    {/* <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      
      <div className="w-[40rem] h-40 relative">

        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      
      <div className='grid grid-cols-1 grid-rows-1 gap-3 sm:grid-cols-3 md:mt-4 sm:gap-x-12'>
            {sponsors.map((item, idx) => (
                <sponsorCard 
                key={idx}
                spondisc={item.spondisc}
                sponsorName={item.sponsorName}
                href={item.href}
                sponsorImg={item.sponsorImg}
                />
             
            ))}
            
            
        </div> */}

<h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20 my-16">
        Our Sponsors
      </h1>

<div className=" relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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

      <div className='grid grid-cols-1 grid-rows-1 gap-3 sm:grid-cols-3 md:mt-4 sm:gap-x-12'>
            {sponsors.map((item, idx) => (
                <SponsorCard 
                key={idx}
                sponsorDesc={item.sponsorDesc}
                sponsorName={item.sponsorName}
                href={item.href}
                sponsorImg={item.sponsorImg}
                />
             
            ))}   
        </div>
      
      </div>

        </>
        
    )
   
    
    
}