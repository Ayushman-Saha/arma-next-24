import Image from "next/image";
import { IconCalendarEvent, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Header from "@/components/header/Header";
import Hero from "@/components/landing/Hero";
import Events from "@/components/landing/events/Events";

export default function Home() {

    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "About",
          link: "/About",
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Events",
          link: "/event",
          icon: (
            <IconCalendarEvent className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
        {
          name: "Contact",
          link: "/contact",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        }
      ];

  return (
    <>
    <Header navItems={navItems}/>
    <Hero/>
    <Events/>
    </>
  );
}
