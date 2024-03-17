import React from 'react'
import EventSchedule from '@/components/events/EventSchedule'
import { SparklesCore } from "@/components/effects/Sparkles"

 const data = {
  schedule :[
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
    {
      "day": "Day 2",
      "events": [
        {
          "title": "Project Q&A",
          "startTime": "9:00AM",
          "endTime": "10:00AM",
          "description": "Get answers to your project-related questions."
        },
        {
          "title": "ArmaCode Hackathon",
          "startTime": "10:00AM",
          "endTime": "4:00PM",
          "description": "Put your skills to the test and collaborate on exciting projects."
        }
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