import { SparklesCore } from '@/components/effects/Sparkles'
import { IconBrandGmail} from "@tabler/icons-react";
import Link from 'next/link';
import React from 'react'

function Contact() {
  return (
    <>
    <div className="h-[50rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
        Contact<br/> 
      </h1>
      <div className= "text-4xl text-center relative z-20 text-white m-8">
        <p>
          <em className='font-semibold text-center px-4'>
            Convenor :
          </em>
          Srutanik Bhaduri
          <Link href="mailto:srutanik21@iiserb.ac.in" className="">
          <IconBrandGmail className="h-8 w-8  text-white inline mx-2"/>
          </Link>
        </p>

        <p className='m-8'>
          <em className='font-semibold text-center px-4'>
            Co-Convenor :
          </em>
         Akshat Gudesar
          <Link href="mailto:akshat21@iiserb.ac.in" className="">
          <IconBrandGmail className="h-8 w-8  text-white inline mx-2"/>
          </Link>
        </p>
        <p className='mt-2 text-wrap'>
          Computing and Networking Council (CNC), Indian Institute of Science Education and Research Bhopal (IISERB), Bhopal Bypass Road, Bhauri Bhopal 462 066. Madhya Pradesh, INDIA.
        </p>
      </div>
    </div>
    </>
  )
}

export default Contact