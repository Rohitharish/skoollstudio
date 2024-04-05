"use client";
import React, { useRef, useEffect } from "react";

import Intro from "./intro/page";

function Home() {


  return (
    <main className="flex flex-col mx-2 relative">
      <section className="bg-zinc-800 bg-opacity-60 h-screen rounded-lg my-1 relative">
        <Intro />
      </section>
    </main>
  );
}

export default Home;
