"use client";
import React from "react";
import { GradientCard } from "../../effects/GradientCard";
import Image from "next/image";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export default function EventCard({
    eventName,
    eventImg,
    href,
    eventDesc

} : {
    eventName : String,
    eventImg : any,
    href : Url,
    eventDesc : String
}) {
  return (
    <div className="px-16">
      <GradientCard className="rounded-[22px] max-w-sm p-6 bg-white dark:bg-zinc-900">
        <Image
          src={eventImg}
          alt="Event image"
          height="400"
          width="400"
          className="object-fit rounded-xl"
        />
        <p className="text-base sm:text-xl font-semibold text-black mt-4 mb-2 dark:text-gray-200">
          {eventName}
        </p>

        <p className="text-sm text-neutral-600 dark:text-gray-400 my-2">
          {eventDesc}
        </p>

        <Link
          href={href}
         className="rounded-full pl-4 px-4 py-4 w-1/3 mt-8 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
          <span>Visit Now -&gt;</span>
        </Link>
      </GradientCard>
    </div>
  );
}
