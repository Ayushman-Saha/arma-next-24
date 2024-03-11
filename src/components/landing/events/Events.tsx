import React from 'react'
import { SparklesCore } from '../../effects/Sparkles'
import EventCard from './EventCard'
import { InfiniteCards } from '@/components/effects/InfiniteCards'
import { NavigateEvents } from './NavigateEvents'
import data from "../../../app/data.json"

const events = data.events

function Events() {
  return (
    <>
     <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        Events
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
    
    <div className='mx-16 grid grid-cols-1 md:grid-cols-3 lg:gap-16 gap-4 items-center justify-center'>

        {events.map((item) => (
          <li key={item.eventId}>
            <EventCard 
            eventDesc={item.eventDesc}
            eventName={item.eventName}
            href={`/events/${item.eventId}`}
            eventImg={item.eventImage}
            />
          </li>
        ))}
        
     
    </div>

    <div className='mt-32'>
        <NavigateEvents/>
    </div>
    </>
  )
}

export default Events