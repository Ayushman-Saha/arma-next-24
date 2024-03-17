//"use client";
import React from 'react'

type Event = {
    title: string;
    startTime: string;
    endTime: string;
    description?: string;
  }

 
    type  EventScheduleProps = {
    schedule : [{ 
        day: string,
        events: [{
            title: string;
    startTime: string;
    endTime: string;
    description?: string;
        }]
     }];
  }
  
 type ScheduleCardProps = {
     day: string;
     events: [{
        title: string;
startTime: string;
endTime: string;
description?: string;
    }]

  }
  

// const EventSchedule = () => {
//   return (

//     <section className="mt-10">
       
//         <ul role="list" className='text-3xl'>
//             <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
//                 <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3">
//                     </div>
//                     <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950">
//                         </div>
                        
//                         <h3 className="mt-2 text-sm/2 font-semibold text-white">ArmaCode</h3>
//                         <p className="order-first font-display text-2xs/2 font-semibold tracking-[0.2em] text-sky-300">
//                             <time dateTime="2023-06-20T17:30-04:00">5:30PM</time> - 
//                              <time className='px-2' dateTime="2023-06-20T18:30-04:00">6:30PM</time>
//                              </p>
//                              <p className="mt-2 text-sm text-zinc-400">Lets code.
//                              </p>
//                  </li>

//              <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
//                 <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3">
//                     </div>
//                     <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950">
//                         </div>
                        
//                         <h3 className="mt-2 text-sm/6 font-semibold text-white">ArmaCode</h3>
//                         <p className="order-first font-display text-2xs/6 font-semibold tracking-[0.2em] text-sky-300">
//                             <time dateTime="2023-06-20T17:30-04:00">5:30PM</time> 
//                              <time className='px-2' dateTime="2023-06-20T18:30-04:00">6:30PM</time>
//                              </p>
//                              <p className="mt-0.5 text-sm/6 text-zinc-400">Lets code.
//                              </p>
//                  </li>

//                  <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
//                 <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3">
//                     </div>
//                     <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950">
//                         </div>
                        
//                         <h3 className="mt-2 text-sm/6 font-semibold text-white">ArmaCode</h3>
//                         <p className="order-first font-display text-2xs/6 font-semibold tracking-[0.2em] text-sky-300">
//                             <time className='' dateTime="2023-06-20T17:30-04:00">5:30PM</time> 
//                              <time className='px-2' dateTime="2023-06-20T18:30-04:00">6:30PM</time>
//                              </p>
//                              <p className="mt-0.5 text-sm/6 text-zinc-400">Lets code.
//                              </p>
//                  </li>     
                             
//             </ul>
//         </section>
//   )
// }

const ListItem = ({ event }:{event:Event}) => {
    return (
      <li
        className={`group relative flex flex-col pb-8 pl-7 last:pb-0`} >
          
        
        <h3 className="mt-2 text-sm font-semibold text-white">{event.title}</h3>
        <p className="order-first font-display text-xs font-semibold tracking-[0.2em] text-sky-300">
          <time dateTime={event.startTime}>{event.startTime}</time> -
          <time className="px-2" dateTime={event.endTime}>{event.endTime}</time>
        </p>
        
      </li>
    );
  };

  const ScheduleCard = ({ card }: {card: ScheduleCardProps}) => {
    return (
    //   <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
        
    //     <h3 className="mt-2 text-sm/6 font-semibold text-white">{event.title}</h3>
    //     <p className="order-first font-display text-2xs/6 font-semibold tracking-[0.2em] text-sky-300">
    //       <time dateTime={event.startTime}>{event.startTime}</time> -
    //       <time className="px-2" dateTime={event.endTime}>{event.endTime}</time>
    //     </p>
    //     <p className="mt-0.5 text-sm/6 text-zinc-400">{event.description}</p>
    //   </li>
    <>   
    <h1 className="md:text-4xl text-2xl lg:text-6xl font-bold  text-center text-white relative z-20">
  {card.day}
     </h1>
     <div className="w-[40rem] h-10 relative">
  {/* Gradients */}
  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />


  {/* Radial Gradient to prevent sharp edges */}
  <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
</div>
    <ul role="list" className="text-3xl text-center">
          
            {card.events.map((item)=>(
            
                <ListItem event={item} />
            ))};
            
     
        </ul> 
    </>
    );
  };
  
  const EventSchedule = ({ events }: {events: any}) => {
    return (
      
       <div className='mx-1  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 items-center justify-center'>
       {events.schedule.map((item:any)=>(
            <div className="mt-2">
            <ScheduleCard card={item}/>
            </div>
        ))};
  </div>
      
    );
  };

export default EventSchedule