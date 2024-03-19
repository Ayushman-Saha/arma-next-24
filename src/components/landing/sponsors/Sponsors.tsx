import React from 'react'
import { SparklesCore } from '../../effects/Sparkles'
import data from "../../../app/data.json"
import { SponsorCard } from './SponCard'

const sponsors = data.sponsors;
const FoodSponsors = sponsors.filter(item => item.type == "food")
const TechSponsors = sponsors.filter(item => item.type == "tech")
const ORSponsors = sponsors.filter(item => item.type == "outreach")

export function Sponsors(){ 
    return(
     
        <>
        <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-full">
            <SparklesCore
              id="tsparticlesfull"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full -z-10"
              particleColor="#FFFFFF"
            />
          </div>
          <div className="h-[10rem] my-2 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
            Our Sponsors
          </h1>
          <div className="w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
     
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>

        <div className="h-[10rem] w-full my-2 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-2xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
            Tech Sponsor
          </h1>
          <div className="w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
     
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        
        <div className="mx-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 items-center justify-center">
            {TechSponsors.map((item, idx) => (
                <SponsorCard
                key={idx}
                type={item.type}
                href={item.href}
                sponsorImg={item.sponsorImg}
                />
             
            ))}  
        </div>
        <div className="h-[10rem] w-full my-2 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-2xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
            Outreach Sponsor
          </h1>
          <div className="w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
     
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        
        <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-2 items-center justify-center">
            {ORSponsors.map((item, idx) => (
                <SponsorCard
                key={idx}
                type={item.type}
                href={item.href}
                sponsorImg={item.sponsorImg}
                />
             
            ))}  
        </div>

        <div className="h-[10rem] w-full my-2 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-2xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
            Food Partner
          </h1>
          <div className="w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
     
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        
        <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 items-center justify-center">
            {FoodSponsors.map((item, idx) => (
                <SponsorCard
                key={idx}
                type={item.type}
                href={item.href}
                sponsorImg={item.sponsorImg}
                />
             
            ))}  
        </div>
        </div>
        
         
        </>
      )
    }