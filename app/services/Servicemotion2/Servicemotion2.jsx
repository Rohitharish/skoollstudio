"use client";
import React, { useRef } from 'react';
import { useTransform, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import useSlideInAnimation from '@/app/motion';

function Servicemotion2() {
  const MySlideInComponent = useSlideInAnimation({
    threshold: 0.2,
    duration: 2,
    
  });
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <MySlideInComponent>
    <main className="gallery h-full lg:h-screen flex
    flex-col
    md:flex-row
    lg:flex-row gap-2 ">
      <section ref={container} className="flex 
      w-full h-[400px]
      md:w-[60%] md:h-screen
      lg:w-[60%] lg:h-screen  overflow-hidden rounded-lg">
        <motion.div style={{ y }} className="w-full h-screen  relative  ">
          <img
            src="/images/ABS.jpg"
            alt="image"
            className="w-full h-[140vh] object-cover "
          />
        </motion.div>
      </section>
      <section ref={container} className="flex  bg-orange-500 flex-col
        w-full h-[400px]
      md:w-[40%] md:h-screen
      lg:w-[40%] lg:h-screen
      overflow-hidden rounded-lg">
         <div className="flex text-6xl font-bold text-white  relative p-4">BRAND<br/> IDENTITY</div>
        <div className="flex  text-sm font-thin text-white  relative w-[350px] p-4">Responsive development and design is a crucial approach in web and app development that ensures a seamless and optimized user experience across a variety of devices and screen sizes.</div>
        <motion.div style={{ y }} className="w-full h-screen  relative  ">
          <img
          
            src="/images/LT.png"
            alt="image"
            className="w-full h-[100vh] object-cover "
          />
        </motion.div>
      </section>
    </main>
    </MySlideInComponent>
  );
}

export default Servicemotion2;
