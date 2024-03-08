'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import {MotionValue, motion, useScroll, useTransform} from 'framer-motion'
import { Button, MovingBorder } from '../effects/MovingBorder'

function FeaturedEventCard({i,eventName, eventDesc, eventImg, href, range, targetScale, progress} : 
    {
        i : number,
        eventName : string,
        eventDesc : string,
        eventImg : string,
        href : string,
        range: number[],
        targetScale: number,
        progress : MotionValue<number>
    }) {
        
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']

    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1,targetScale])


  return (
        <div className=' h-screen flex items-center justify-center sticky top-0' ref={container}>
        <motion.div className='mx-auto h-[500px] w-10/12 flex flex-col relative rounded-xl p-8 origin-top bg-zinc-900 m-4 border-y-2 border-x-2 border-white' style={{scale, top:`calc(-5vh + ${i * 25}px)`}}>
        <h2 className='m-0 text-4xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-white bg-opacity-50'>{eventName}</h2>
            <div className='flex h-full mt-8 items justify-around'>
                <div className='relative w-2/5 mt-12'>
                    <p className=' text-lg mb-8 text-gray-200'>{eventDesc}</p>
                    <span className='flex items-center gap-5'>
                        <a className='underline text-gray-50 font-bold' href={href} target="_blank">Read more</a>
                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="white"/>
                        </svg>
                    </span>
                </div>

            <div className='relative w-1/3 h-full rounded-xl overflow-hidden'>
                <motion.div className='w-full h-full' style={{scale: imageScale}}>
                <Image
                    fill
                    className='object-cover'
                    src={eventImg}
                    // style={{opacity: scrollYProgress.get()}}
                    alt="image" />
                </motion.div>
            </div>
        </div>
    </motion.div>
    </div>
    
  )
}

export default FeaturedEventCard
