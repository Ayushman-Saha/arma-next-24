import React from 'react'

const content = [
    {
        eventName : "Test Event",
        eventDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur nisi. Aenean volutpat tortor ut rutrum ultricies. Proin elementum, justo a facilisis pulvinar, lectus ex ultrices sapien, ultrices egestas nisl ipsum nec nisl. Nam tristique sem odio, vitae lobortis ligula molestie eget. Aenean iaculis massa vel elit pulvinar eleifend.",
        href : "/",
        eventImg : "https://picsum.photos/500"
    },
    {
        eventName : "Test",
        eventDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur nisi. Aenean volutpat tortor ut rutrum ultricies. Proin elementum, justo a facilisis pulvinar, lectus ex ultrices sapien, ultrices egestas nisl ipsum nec nisl. Nam tristique sem odio, vitae lobortis ligula molestie eget. Aenean iaculis massa vel elit pulvinar eleifend.",
        href : "/",
        eventImg : "https://picsum.photos/500"
    },
    {
        eventName : "Test Events",
        eventDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur nisi. Aenean volutpat tortor ut rutrum ultricies. Proin elementum, justo a facilisis pulvinar, lectus ex ultrices sapien, ultrices egestas nisl ipsum nec nisl. Nam tristique sem odio, vitae lobortis ligula molestie eget. Aenean iaculis massa vel elit pulvinar eleifend.",
        href : "/",
        eventImg : "https://picsum.photos/500"
    },
    {
        eventName : "Test R_Event",
        eventDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur nisi. Aenean volutpat tortor ut rutrum ultricies. Proin elementum, justo a facilisis pulvinar, lectus ex ultrices sapien, ultrices egestas nisl ipsum nec nisl. Nam tristique sem odio, vitae lobortis ligula molestie eget. Aenean iaculis massa vel elit pulvinar eleifend.",
        href : "/",
        eventImg : "https://picsum.photos/500"
    },
    {
        eventName : "Test Event",
        eventDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur nisi. Aenean volutpat tortor ut rutrum ultricies. Proin elementum, justo a facilisis pulvinar, lectus ex ultrices sapien, ultrices egestas nisl ipsum nec nisl. Nam tristique sem odio, vitae lobortis ligula molestie eget. Aenean iaculis massa vel elit pulvinar eleifend.",
        href : "/",
        eventImg : "https://picsum.photos/500"
    },
]

function ScrollReveal() {
  return (
    <div className='mx-auto max-w-6xl px-4'>
        <div className='flex w-full gap-20'>
            <div className='w-full'>
                <ul>
                     {content.map((eventDetails, index) => {
                        return <li key={index}>
                            <p className='py-16 font-heading text-5xl text-gray-300'>{eventDetails.eventName}</p>
                        </li>
                    })}
                </ul>
            </div>
            <div className='w-full sticky top-0'>
                <div className=' bg-gray-400 w-full aspect-square'></div>
            </div>
        </div>
    </div>
  )
}

export default ScrollReveal