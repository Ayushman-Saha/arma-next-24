"use client";
import React from "react";
import { PinContainer } from "../../effects/PinEffect"; 
import { Url } from "next/dist/shared/lib/router/router";

<<<<<<< HEAD
export function SponsorsCard({
    sponsorsName,
    sponsorsImg,
=======
export function SponsorCard({
    sponsorName,
    sponsorImg,
>>>>>>> ba368e4c2239e6b631102aaaa98935d0a2959d44
    href,
    sponsorDesc,
}:{
<<<<<<< HEAD
    sponsorsName : String
    sponsorsImg : String
=======
    sponsorName : String
    sponsorImg : String
>>>>>>> ba368e4c2239e6b631102aaaa98935d0a2959d44
    href : Url
    sponsorDesc: String
}) {
    return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}


