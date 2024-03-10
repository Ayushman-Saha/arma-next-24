'use client';
import React from 'react'
import { WavyBackground } from "../effects/WavyBackground";
function Hero() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Armageddon 2024
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Annual Tech Fest of IISER Bhopal
      </p>
    </WavyBackground>
   
  )
}

export default Hero