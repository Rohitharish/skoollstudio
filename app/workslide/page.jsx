"use client";
import React, { useEffect, useState } from "react";
import Contact from "../Contact/page";
import { Animatedsentence } from "../Animatetext";

function Slide() {
  const [isHovered, setIsHovered] = useState(false);
  const [urbanIsHovered, setUrbanIsHovered] = useState(false);
  return (
    <main className=" relative space-y-10 mx-6 my-6 ">
      <div className="bg-zinc-800 bg-opacity-60 h-14 flex items-center justify-center rounded-lg">
        <p className="text-white text-xl font-light  uppercase tracking-[0.2rem]">
          Work
        </p>
      </div>

      <div
        className="w-full  bg-white rounded-lg relative  lg:h-screen md:h-screen sm:h-screen h-[60vh]"
        onMouseEnter={() => setUrbanIsHovered(true)}
        onMouseLeave={() => setUrbanIsHovered(false)}
      >
        <div className=" text-black text-4xl font-light flex flex-col justify-center items-center h-full w-full  rounded-lg  ">
          <img
            src="/images/URBAN.png"
            alt="image"
            className="object-contain lg:px-0 md:px-10 sm:px-6 px-6"
          />

          {urbanIsHovered && (
            <Animatedsentence
              className="text-base p-4"
              text={"E-commerce-[clothing website]"}
            />
          )}
        </div>
      </div>

      <div
        className="w-full  bg-purple-400 rounded-lg lg:h-screen md:h-screen sm:h-screen h-[60vh]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className=" text-white text-4xl font-light flex flex-col  justify-center items-center h-full   w-full  rounded-lg ">
          <img
            src="/images/SPIKO.png"
            alt="image"
            className="object-contain lg:px-0 md:px-10 sm:px-6 px-6"
          />
          {isHovered && (
            <Animatedsentence
              className="text-base text-white"
              text={"AI website-[Image generator]"}
            />
          )}
        </div>
      </div>

      <Contact />
    </main>
  );
}

export default Slide;
