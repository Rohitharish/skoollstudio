"use client"
import React from 'react'
import { Animatedsentence } from '../Animatetext';
import { Animatedword } from '../Animatetext';
import Slide from '../workslide/page';
function Work() {
  return (
    <main className="relative">
        <section className="h-full w-auto flex   my-20   flex-col">
        <div className=" flex  w-full ">
        <Animatedword text="Transforming Brands through Design" className="
            
          text-white  text-6xl flex items-center justify-center  font-['lato'] uppercase  "/>
            </div>
          <div className=" flex   w-full h-screen px-40">
            
            
            <Animatedsentence text={[
            "We led the development of a web",
            "application using modern technologies",
            
  ]}
           className=" flex items-center justify-center  text-white text-opacity-50 text-6xl font-light font-['Lato'] "  />
            
</div>
        </section>
     <section>
      <Slide/>
     </section>
    </main>
  )
}


export default Work;