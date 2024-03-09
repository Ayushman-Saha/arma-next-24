import React from 'react'
import { HoverEffect } from '@/components/effects/CardHover'
import { SparklesCore } from '../effects/Sparkles'

let members = [
    {
    "name": "person1",
    "href":"/",
    "image": "https://picsum.photos/500",
    },{
    "name": "person1",
    "href":"/",
    "image": "https://picsum.photos/500",
    },
    {"name": "person1",
    "href":"/",
    "image": "https://picsum.photos/500",
    },
    {"name": "person1",
    "href":"/",
    "image": "https://picsum.photos/500",
    },{
    "name": "person1",
    "href":"/",
    "image": "https://picsum.photos/500",
    }
]

function Teams(){
    return(
        <>
        <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        Meet the Team! 
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      

        <HoverEffect items={members}/>
        </>
        

    )
}

export default Teams