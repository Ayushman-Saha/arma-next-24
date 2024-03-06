import React from 'react'
import { HoverEffect } from '@/components/effects/CardHover'

let members = [
    {
    "name": "person1",
    "href":"/",
    "image": "https://picsum.photos/500",
    },{
    "name": "person1",
    "href":"/",
    "image": "https://picsum.photos/500",
    },
    {"name": "person1",
    "href":"/",
    "image": "https://picsum.photos/500",
    },
    {"name": "person1",
    "href":"/",
    "image": "https://picsum.photos/500",
    },{
    "name": "person1",
    "href":"/",
    "image": "https://picsum.photos/500",
    }
]

function Teams(){
    return(
        <>
        <HoverEffect items={members}/>
        </>
    )
}

export default Teams