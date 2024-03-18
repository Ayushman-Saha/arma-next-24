"use client";
import EventSchedule from '@/components/events/EventSchedule'
import { SparklesCore } from "@/components/effects/Sparkles"
import React, { useState, useEffect } from 'react';


 const data = {
  schedule :[
    {
      "day": "Day1",
      "events": [
        {
          "title": " Opening Ceramony",
          "startTime": "5:00PM",
          "endTime": "10:00PM",
          "venue":"L5" ,

          "description": " An evening full of entertainment"
        },
      ]
    },
    {
      "day": "Day 2",
      "events": [
        {
          "title": "Pranjal Kamra's Talk",
          "startTime": "2:00PM",
          "endTime": "4:3PM",
          "venue": "",
          "description": "Get answers to your project-related questions."
        },
        {
          "title": "Photography Workshop [Light Tutorial]",
          "startTime": "5:00PM",
          "endTime": "8:00PM",
          "description": "Put your skills to the test and collaborate on exciting projects."
        },
        {
          "title": "Photography Workshop [Light Tutorial]",
          "startTime": "5:00PM",
          "endTime": "8:00PM",
          "description": "Put your skills to the test and collaborate on exciting projects."
        },
      ]
    },
    {
      "day": "Day1",
      "events": [
        {
          "title": "ArmaCode Workshop",
          "startTime": "10:00AM",
          "endTime": "11:00AM",
          "description": "Learn the basics of ArmaCode development."
        },
        {
          "title": "Lunch Break",
          "startTime": "12:00PM",
          "endTime": "1:00PM",
          "description": "Enjoy a well-deserved break!"
        },
        {
          "title": "Advanced ArmaCode Techniques",
          "startTime": "1:00PM",
          "endTime": "2:00PM",
          "description": "Take your ArmaCode skills to the next level."
        }
      ]
    },
    
  ]

};



const SchedulePage = () => {
 
    const [events, setEvents] = useState(null);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
      fetch('https://arma-data.pages.dev/data.json')
        .then((res) => res.json())
        .then((data) => {
          setEvents(data)
          setLoading(false)
        })
    }, [])
   
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data </p>
 
  

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
  
<EventSchedule events={events} />

</div>


</div>
   
  )
}

export default SchedulePage