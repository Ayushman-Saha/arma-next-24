import { Spotlight } from '@/components/effects/Spotlight'
import Header from '@/components/header/Header'
import React from 'react'
import Image from 'next/image'
import { StickyScroll } from '@/components/effects/StickyScrollReveal';
import EventCard from '@/components/landing/events/EventCard';


const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <>
        <EventCard eventName="Hello World" eventDesc="Lorem Ipsum" eventImg="https://picsum.photos/500" href="/"/>
        </>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://picsum.photos/500"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        // <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        //   Running out of content
        // </div>
        <>
        <EventCard eventName="Hello World" eventDesc="Lorem Ipsum" eventImg="https://picsum.photos/500" href="/"/>
        </>
      ),
    },
    {
        title: "Version control",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
            Version control
          </div>
        ),
      }
  ];

function EventPage() {
  return (
    <div className='p-10 overflow-hidden'>
        <Header/>
        <div className="h-[500px] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="blue"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Armageddon <br /> where tech meets innovation.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Get hyped for Armageddon! Tech, vibes, and the future collide at IISER Bhopal. Let&apos;s level up together!
            </p>
        </div>
        </div>
        <div className='text-gray-200 text-center font-bold text-5xl underline mb-32'>
            Event List
        </div>
        <StickyScroll content={content}/>
    </div>
  )
}

export default EventPage