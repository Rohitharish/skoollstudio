"use client"
import React, { useRef } from 'react'

import { inView, motion, useInView } from "framer-motion";


function Intro() {
  return (
    <main>
      <section className="h-[98vh] w-full flex items-center justify-center text-white ">
       
            <AnimatedText text="skool studio" className="
            text-6xl
            md:text-8xl
            lg:text-8xl font-bold  uppercase  
            w-[300px]
            md:w-[500px]
            lg:w-[500px]"/>
      

      </section>
    </main>
  )
}
const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}



export const AnimatedText = ({ text, className }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, {amount: 0.5 , once: true});
  
  return (
    <div className={className} >
        <span className="sr-only">{text}</span>
        <motion.span
        ref={ref}
        initial="hidden"
         animate={isInview ? "visible" : "hidden"} 
         transition={{staggerChildren: 0.2}}
          aria-hidden>
            {text.split(" ").map((word) => (
            <span className=" inline-block">
            {word.split("").map((char) =>(
                <motion.span className="inline-block" variants={defaultAnimations}>
                    {char}
                </motion.span>
            ) )}
            <span className=" inline-block">&nbsp;</span>
            </span>
            ))}
        </motion.span>
</div>
);
}

export default Intro
  


