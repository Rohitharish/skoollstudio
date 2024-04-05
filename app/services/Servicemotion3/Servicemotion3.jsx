"use client";
import React, { useRef } from 'react';
import { useTransform, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import useSlideInAnimation from '@/app/motion';
function Servicemotion3() {
  const My2SlideInComponent = useSlideInAnimation({
    threshold: 0.2,
    duration: 2,
    
  });
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <My2SlideInComponent>
    <main className="gallery h-full flex ">
      <section ref={container} className="flex w-full h-screen overflow-hidden rounded-lg">
        <motion.div style={{ y }} className="w-full h-screen  relative  ">
          <img
          
            src="/images/002.jpg"
            alt="image"
            className="w-full h-[120vh] object-cover "
          />
        </motion.div>
      </section>
    </main>
    </My2SlideInComponent>
  );
}

export default Servicemotion3;
