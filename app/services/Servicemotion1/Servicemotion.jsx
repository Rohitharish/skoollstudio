"use client";
import React, { useRef } from 'react';
import { useTransform, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import useSlideInAnimation from '@/app/motion';
function Servicemotion() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const SlideInComponent = useSlideInAnimation();
  return (
    <SlideInComponent>
    <main className="gallery h-full flex items-center justify-center  ">
      <section ref={container} className="flex w-full h-[150vh] overflow-hidden rounded-lg bg-blue-600">
        <div className="hidden  md:flex lg:flex top-[20%] left-[100px] text-[160px] font-extrabold text-white  absolute">RESPONSIVE<br/>DESIGN </div>
        <div className="hidden  md:flex lg:flex top-[60%] left-[70%] text-sm font-normal text-white  absolute w-[300px]">Responsive development and design is a crucial approach in web and app development that ensures a seamless and optimized user experience across a variety of devices and screen sizes.</div>
        <motion.div style={{ y }} className="w-full h-screen relative  ">
          <img
          
            src="/images/GZ.png"
            alt="image"
            className="w-full h-[250vh] pr-0 md:pr-28 lg:pr-28 object-cover "
          />
        </motion.div>
      </section>
    </main>
    </SlideInComponent>
  );
}

export default Servicemotion;
