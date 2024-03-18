"use client";
import EventSchedule from '@/components/events/EventSchedule'
import { SparklesCore } from "@/components/effects/Sparkles"
import React from 'react';
import Data from "../data.json";


 const data = Data.schedule;



const SchedulePage = () => {
 
    // const [events, setEvents] = useState(null);
    // const [isLoading, setLoading] = useState(true)
    // useEffect(() => {
    //   fetch('https://arma-data.pages.dev/data.json')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setEvents(data)
    //       setLoading(false)
    //     })
    // }, [])
   
    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No data </p>
 
  

  return (
    
<div className="h-screen relative -z-10  w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mt-[10rem]">
<div className="w-full absolute inset-0 h-full">
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

<div className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
  
<EventSchedule events={data} />

</div>


</div>
   
  )
}

export default SchedulePage