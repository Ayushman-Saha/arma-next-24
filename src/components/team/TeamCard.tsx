"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../effects/3dcard";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export  default function TeamCard({
  name,
  pic,
  linkedin,
  insta,
  desc

} : {
  name : String,
  pic : any,
  linkedin : Url,
  insta : Url,
  desc : String
}){
  return (
   

    
    <CardContainer className="inter-var p-4">
   
      <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-900 dark:border-white/[0.2] border-2 border-zinc-50  w-auto sm:min-w-[30rem] md:min-w-[22rem] lg:min-w-[20rem] h-fit rounded-xl p-6 ">
    
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 p-2 dark:text-white"
        >
          {name}
        </CardItem>
       
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm p-2 mt-2 dark:text-neutral-300"
        >
        {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={pic}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="profile picture"
          />
        </CardItem>
        <div className="flex relative justify-between p-2 items-center mt-20"> */
        
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold relative z-50"
          >
          Visit Now -&gt;
          </CardItem> 
      
        </div>
      </CardBody>

    </CardContainer>

   
  );
}
