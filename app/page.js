"use client"
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Nav from './Navbar';
import Intro from './intro/page';
import Lenis from '@studio-freight/lenis';




function Home() {
 
  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    
   
  }, []); 
  
  return (
    <main className="flex flex-col mx-2 relative">
      
      <section  className="bg-zinc-800 bg-opacity-60 h-screen rounded-lg my-1 relative">
        <Intro />
      </section>

      
    </main>
  );
}

export default Home;
