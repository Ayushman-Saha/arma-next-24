"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../effects/3dcard";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export  default function EventCard({
  eventName,
  eventImg,
  href,
  eventDesc

} : {
  eventName : String,
  eventImg : any,
  href : Url,
  eventDesc : String
}){
  return (
    <CardContainer className="inter-var p-4">
      <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 p-2 dark:text-white"
        >
          {eventName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm p-2 mt-2 dark:text-neutral-300"
        >
        {eventDesc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={eventImg}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between p-2 items-center mt-20">
        <Link href={href} >    
         <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
          Visit Now -&gt;
          </CardItem></Link>
      
        </div>
      </CardBody>
    </CardContainer>
  );
}
