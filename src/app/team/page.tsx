import React from 'react'
import { SparklesCore } from '@/components/effects/Sparkles'
import type { Metadata } from "next";
import data from "../data.json"
import TeamCard from '@/components/team/TeamCard';

const team = data.team;

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

const Team = () => {
  return (
    <>
    <div className="h-screen relative w-full flex flex-col items-center justify-center overflow-scroll rounded-md">
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
      <div className="h-full container w-full bg-black flex flex-col items-center justify-center overflow-scroll rounded-md">
      <h1 className="md:text-4xl text-2xl lg:text-6xl font-bold text-center text-white relative z-20 h-[40rem] mt-48">
        Team
      </h1>
     
      <div className='mx-1  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 items-center  overflow-y-scroll z-50 justify-center'>
        
      {team.map((item) => (
        
       
            <TeamCard key={item.name}
            name={item.name}
            desc={item.desc}
           pic={item.pic}
           linkedin={item.linkedin}
           insta={item.insta}
           desig={item.desig}

            />
          
      
        ))}
    </div>
      </div>
    </div>
    
    </>
  )
}

export default Team