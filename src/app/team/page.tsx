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
    <div className="-z-10 h-screen relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
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
   
    </div>
    </>
  )
}

export default Team