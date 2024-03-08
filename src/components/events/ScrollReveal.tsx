"use client"
import React, { Children, useState } from 'react'
import FeatureTitle from './FeatureTitle'
import EventCard from '../landing/events/EventCard'
import { useFeatureStore } from '@/app/events/store'
import { cn } from '@/utils/cn'

const content = [
    {
        eventName : "Test Event",
        eventDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur nisi. Aenean volutpat tortor ut rutrum ultricies. Proin elementum, justo a facilisis pulvinar, lectus ex ultrices sapien, ultrices egestas nisl ipsum nec nisl. Nam tristique sem odio, vitae lobortis ligula molestie eget. Aenean iaculis massa vel elit pulvinar eleifend.",
        href : "/",
        eventImg : "https://picsum.photos/500"
    },
    {
        eventName : "Test",
        eventDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur nisi. Aenean volutpat tortor ut rutrum ultricies. Proin elementum, justo a facilisis pulvinar, lectus ex ultrices sapien, ultrices egestas nisl ipsum nec nisl. Nam tristique sem odio, vitae lobortis ligula molestie eget. Aenean iaculis massa vel elit pulvinar eleifend.",
        href : "/",
        eventImg : "https://picsum.photos/500"
    },
    {
        eventName : "Test Events",
        eventDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur nisi. Aenean volutpat tortor ut rutrum ultricies. Proin elementum, justo a facilisis pulvinar, lectus ex ultrices sapien, ultrices egestas nisl ipsum nec nisl. Nam tristique sem odio, vitae lobortis ligula molestie eget. Aenean iaculis massa vel elit pulvinar eleifend.",
        href : "/",
        eventImg : "https://picsum.photos/500"
    },
    {
        eventName : "Test R_Event",
        eventDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur nisi. Aenean volutpat tortor ut rutrum ultricies. Proin elementum, justo a facilisis pulvinar, lectus ex ultrices sapien, ultrices egestas nisl ipsum nec nisl. Nam tristique sem odio, vitae lobortis ligula molestie eget. Aenean iaculis massa vel elit pulvinar eleifend.",
        href : "/",
        eventImg : "https://picsum.photos/500"
    },
    {
        eventName : "Test Event",
        eventDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur nisi. Aenean volutpat tortor ut rutrum ultricies. Proin elementum, justo a facilisis pulvinar, lectus ex ultrices sapien, ultrices egestas nisl ipsum nec nisl. Nam tristique sem odio, vitae lobortis ligula molestie eget. Aenean iaculis massa vel elit pulvinar eleifend.",
        href : "/",
        eventImg : "https://picsum.photos/500"
    },
]

function ScrollReveal() {
  return (
    <div className='mx-auto max-w-7xl px-4 my-32'>
        <div className='flex w-full gap-20 items-start'>
            <div className='w-full py-[50vh]'>
                <ul>
                     {content.map((eventDetails, index) => {
                        return <li key={index}>
                            <FeatureTitle id={eventDetails.eventName}>{eventDetails.eventName}</FeatureTitle>
                        </li>
                    })}
                </ul>
            </div>
            <div className='w-full h-screen sticky flex -top-[5vh] items-center'>
                <div className='w-full relative aspect-square rounded-2xl bg-transparent'>
                {content.map((eventDetails, index) => { 
                    return (
                        <FeatureCard key={index} id={eventDetails.eventName}>
                            <EventCard eventName={eventDetails.eventName} eventDesc={eventDetails.eventDesc} eventImg={eventDetails.eventImg} href={eventDetails.href}/>
                        </FeatureCard>

                    )
                })}

                </div>
            </div>
        </div>
    </div>
  )
}

export function FeatureCard({children, id} : {children : React.ReactNode, id: string}) {

    const inViewFeature = useFeatureStore((state) => state.inViewFeature)

    return(
        <div className={cn('h-full w-full rounded-2x absolute inset-0 transition-opacity', inViewFeature === id ? "opacity-100" : "opacity-0")}>
            {children}
        </div>
    )
}

export default ScrollReveal