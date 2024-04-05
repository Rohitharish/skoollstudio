import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <main className="z-10 fixed text-white flex flex-row bottom-4 top-[80%] md:top-[80%] lg:top-[80%] space-x-2 
   right-[5%]
    sm:right-[28%]
    md:right-[40%]
    lg:right-[40%] ">
     <section className="flex flex-row space-x-2 h-[60px] md:h-[80px] lg:h-[80px]">
      <div className="bg-neutral-600 bg-opacity-10 rounded-[2px] border border-white border-opacity-5 backdrop-blur-[12.10px] transition-transform transform hover:scale-110 hover:bg-green-700 hover:text-white cursor-pointer p-4">
    
        <Link href="/intro">
        <img
              src="/images/Home.png"
              alt="image"
              className="
             h-[30px]
            md:h-[40px]
             lg:h-[40px]
               rounded-lg object-contain"
            />
        </Link>
      </div>
      <div className="bg-neutral-600 bg-opacity-10 rounded-[2px] border border-white border-opacity-5 backdrop-blur-[12.10px] transition-transform transform hover:scale-110 hover:bg-green-400 hover:text-white cursor-pointer p-4">
        <Link href="/services">
        <img
              src="/images/Service.png"
              alt="image"
              className="
            
              h-[30px]
              md:h-[40px]
               lg:h-[40px]
               rounded-lg object-contain"
            />
        </Link>
      </div>
      </section>
      <section className="flex flex-row space-x-2 h-[60px] md:h-[80px] lg:h-[80px]">
      <div className="bg-neutral-600 bg-opacity-10 rounded-[2px] border border-white border-opacity-5 backdrop-blur-[12.10px] transition-transform transform hover:scale-110 hover:bg-green-700 hover:text-white cursor-pointer p-4 ">
        <Link href="/workslide"> <img
              src="/images/Business.png"
              alt="image"
              className="
            
              h-[30px]
              md:h-[40px]
               lg:h-[40px]
               rounded-lg object-contain"
            /></Link>
      </div>
      <div className="bg-neutral-600 bg-opacity-10 rounded-[2px] border border-white border-opacity-5 backdrop-blur-[12.10px] transition-transform transform hover:scale-110 hover:bg-green-700 hover:text-white cursor-pointer p-4">
        <Link href="/About"> <img
              src="/images/Customer.png"
              alt="image"
              className="
            
              h-[30px]
              md:h-[40px]
               lg:h-[40px]
               rounded-lg object-contain"
            /></Link>
      </div>
      <div className="bg-neutral-600 bg-opacity-10 rounded-[2px] border border-white border-opacity-5 backdrop-blur-[12.10px] transition-transform transform hover:scale-110 hover:bg-green-700 hover:text-white cursor-pointer p-4">
        <Link href="/Contact"> <img
              src="/images/Envelope.png"
              alt="image"
              className="
                       
              h-[30px]
              md:h-[40px]
               lg:h-[40px]
               rounded-lg object-contain"
            /></Link>
      </div>
      </section>
    </main>
  
  );
};

export default Nav;
