import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)
    const data = [
        {
            desc:"lorem epsum dolor sit amet consectetur adipisicing,",
            filesize:".9mb",
            close:true,
            tag:{isOpen:false,tagTitle:"Download Now",tagColor:"green"},
        },
        {
            desc:"lorem epsum dolor sit amet consectetur adipisicing,",
            filesize:".9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"upload",tagColor:"green"},
        },
        {
            desc:"lorem epsum dolor sit amet consectetur adipisicing,",
            filesize:".9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"},
        },
    ];
  return (
    <div ref ={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
    {
        data.map((item,index)=>(
            <Card data={item} refer = {ref}/>
        ))
    }
    </div>
  )
}

export default Foreground