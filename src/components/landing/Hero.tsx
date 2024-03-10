'use client';
import React from 'react'
import { WavyBackground } from "../effects/WavyBackground";
import localFont from 'next/font/local'
const JoystickFont = localFont({ src: './joystix monospace.otf' })

function Hero() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p style={{ textShadow: '10px 10px 2px #3fa8c7' }} className={JoystickFont.className +" text-2xl md:text-4xl lg:text-9xl text-white font-bold inter-var text-center tracking-wider "}>
        Armageddon 2024
      </p>
    </WavyBackground>
   
  )
}

export default Hero