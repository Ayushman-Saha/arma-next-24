"use client"
import Image from "next/image"
import data from "../../data.json"
import type { Metadata } from "next";
import { BackgroundBeams } from "@/components/effects/BackgroundBeams";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/effects/MovingBorder";

// export const metadata: Metadata = {
//     title: "Armageddon 2024",
//     description: `ARMAGEDDON is hosted by the Indian Institute of Science Education and
//     Research (IISER) Bhopal. ARMAGEDDON, as the name suggests, is not just an event;
//     it's a battleground for the brightest minds, a place where intellect meets
//     innovation, and creativity knows no bounds.`,
//     openGraph: {
//       title: 'Armageddon 2024',
//       description: 'Armageddon is annual tech fest of IISER Bhopal',
//     },
//   };


  type EventProps = {
    "eventId" : number,
    "eventName" : string,
    "eventDesc" : string,
    "eventImage" : string,
    "regDeadline" : string,
    "eventDate" : string,
    "venue" : string,
    "regLink" : string,
    "rulebook" : string
}

export default function EventDetailsPage({params} : {params : {eventId : number}}) {
    const event = data.events.filter((event) => event.eventId == params.eventId)[0]
    return(
      <>

    <div className="h-[80rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      <ProductOverviewOne event={event} />
    </div>
        
      </>
    )
}

function ProductOverviewOne({event} : {event: EventProps}) {
    const router = useRouter()
  let eventDate = new Date(event.eventDate)
  let regDeadline = new Date(event.regDeadline)
  let currentDate = new Date()
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-5 grid grid-cols-2 gap-2.5">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
              <Image
                height={800}
                width={800}
                src={event.eventImage}
                alt="Event Image"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl text-gray-50">
              {event.eventName}
            </h2>
            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8 text-gray-200">
              {event.eventDesc}
            </p>
          </div>
          <div className="border-b border-gray-300 pb-3 flex">
            <div className="mb-4 mx-6">
              <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg text-gray-50">
                Venue
              </h3>
              <p className="text-gray-300">{event.venue}</p>
            </div>
            <div className="mb-4 mx-6">
              <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg text-gray-50">
                Date
              </h3>
              <p className="text-gray-300">{`${eventDate.toLocaleDateString('en-IN')}`}</p>
            </div>
            <div className="mb-4 mx-6">
              <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg text-gray-50">
                Time
              </h3>
              <p className="text-gray-300">{`${eventDate.toLocaleTimeString('en-IN',{timeZoneName: "short"})}`}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
            <button
            type="submit"
              onClick={() => ((regDeadline.getTime() - currentDate.getTime()) > 0 ? router.push('/') : {})}
              className={cn("h-16 w-full rounded-md px-3 py-2 text-sm font-semibold text-black shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black", ((regDeadline.getTime() - currentDate.getTime()) > 0 ? "bg-gray-100" : "bg-gray-500"))}
            >
             {(regDeadline.getTime() - currentDate.getTime()) > 0 ? "Register" : "Registrations Closed"} 
            </button>
            <div className="w-full mx-8">
                <p className="text-gray-100">Registration Deadline : {regDeadline.toLocaleDateString('en-IN')}</p>
            </div>
          </div>
          <div className="py-6 ">
          <button
            type="submit"
              onClick={() => router.push("/#")}
              className={cn("h-16 w-full rounded-md px-3 py-2 text-sm font-semibold bg-white text-black shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black")}
            >
             Rulebook
            </button>
          </div>
         
        </div>
      </div>
    </div>
  )
}
