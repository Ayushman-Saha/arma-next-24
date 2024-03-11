import React from 'react'
import { SparklesCore } from '../../effects/Sparkles'
import data from "../../../app/data.json"
import { SponsorCard } from './SponCard'

const sponsors = data.sponsors

export function Sponsors(){
    return(
    <>
    <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        Our Sponsors
      </h1>
      <div className="w-[40rem] h-40 relative">

        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        <SparklesCore
         id="tsparticlesfullpage"
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
      
      <div className='"mt-8 grid grid-cols-1 grid-rows-1 gap-3 sm:grid-cols-3 md:mt-4 sm:gap-x-12"'>
            {sponsors.map((item, idx) => (
                <SponsorCard
                sponsorDesc={item.sponsorDesc}
                sponsorName={item.sponsorName}
                href={item.href}
                sponsorImg={item.sponsorImg}
                />
             
            ))}
            
            
        </div>



        </>
        
    )
   
    
    
}