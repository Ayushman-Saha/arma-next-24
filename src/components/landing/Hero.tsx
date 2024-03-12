'use client';
import React from 'react'
import { WavyBackground } from "../effects/WavyBackground";
import localFont from 'next/font/local'
const JoystickFont = localFont({ src: './joystix monospace.otf' })

function Hero() {
  return (
    <WavyBackground className="mx-auto pb-40">
      <p style={{ textShadow: '10px 10px 2px #3fa8c7' }} className={JoystickFont.className +" text-4xl md:text-6xl lg:text-8xl text-white font-bold inter-var text-center tracking-wider "}>
        Armageddon
        <br/>
        <span>2024</span>
      </p>
    </WavyBackground>
   
  )
}

export default Hero