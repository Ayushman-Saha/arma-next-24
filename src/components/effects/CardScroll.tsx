'use client'
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
import React, { useEffect, useRef } from 'react'
import FeaturedEventCard from '../landing/events/FeaturedEventCard'
import { useScroll } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

function CardScroll() {
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    useEffect( () => {

        const lenis = new Lenis()
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
    
        }
        requestAnimationFrame(raf)
      })

  return (
    <div className='relative' ref={container}>
        {content.map((eventDetails, index) => {
            const targetScale = 1 - ((content.length - index) * 0.05)
            return <FeaturedEventCard key={index}
             i={index} {... eventDetails} range={[index*(1/content.length), 1]} targetScale={targetScale} progress={scrollYProgress} />
        } )}
    </div>
  )
} 

export default CardScroll