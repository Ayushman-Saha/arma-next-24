import Hero from "@/components/landing/Hero";
import Events from "@/components/landing/events/Events";
import { SponserCard } from "@/components/landing/sponsers/SponCard";
import { Sponsers } from "@/components/landing/sponsers/Sponsers";

export default function Home() {

  return (
    <>
    <Hero/>
    <Events/>
    <Sponsers/>
    </>
  );
}
