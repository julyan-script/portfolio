"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "motion/react";

const Hero = () => {
  // ✅ Hooks inside component
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  useEffect(() => {
  
  }, [scrollYProgress]);

  return (
    <div
      ref={container}
      className="-z-1 w-full min-h-screen overflow-clip bg-white text-stone-900 sticky top-0"
    >
      <div className="flex w-full items-center justify-center pt-15 md:pt-12">
        <h1 className="font-thunder text-6xl md:text-8xl lg:text-[160px] tracking-wider uppercase text-center px-2" style={{ lineHeight: '1' }}>
          web developer
        </h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
      className="pt-2 flex flex-col md:flex-row justify-center items-center cursor-pointer gap-5 md:gap-20">
        <div className="flex flex-col text-xs md:text-sm mb-10 md:mb-20 justify-end items-center md:items-end helvetica uppercase text-black/60 text-center md:text-right">
          {[
            "Front-end Developer",
            "Fullstack Developer",
            "UI/UX Designer",
            "Design Graphic",
          ].map((role) => (
            <h2
              key={role}
              className="hover:text-black text-2xl md:text-sm transition-all duration-500 ease-in-out transform"
            >
              {role}
            </h2>
          ))}
        </div>

        <div className="relative w-80 h-60 md:w-55 md:h-65">
          <Image className="object-cover" src="/julyan.jpg" alt="me" sizes="(max-width: 768px) 100vw, 400px" fill/>
        </div>

        <div className="flex items-center justify-center md:flex mt-10 md:mt-40 flex-col md:justify-start md:items-start text-xs md:text-sm helvetica uppercase text-black/60 gap-2">
          <h2 className="hover:text-black transition-all duration-500 ease-in-out transform">
            You can call me :
          </h2>
          <h2 className="uppercase text-black font-bold font-serif text-2xl md:text-5xl tracking-tighter transition-all duration-500 ease-in-out transform">
            julyan
          </h2>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0 py-5 px-5 md:px-10">
        <div className="flex flex-col justify-center helvetica text-xs md:text-sm w-full md:w-[33%] text-black/60 items-start text-left">
          <h2 className="hover:text-black transition-all transform duration-500 ease-in-out">
            available to work
          </h2>
          <h2 className="hover:text-black transition-all transform duration-500 ease-in-out break-words">
            julyan300705@gmail.com
          </h2>
        </div>

        <div className="flex flex-col w-full md:w-[33%] justify-center helvetica text-xs md:text-sm text-black/60 items-start md:items-center">
          <h2 className="hidden md:block md:text-center">
            I DEVELOP MODERN, RESPONSIVE WEB APPLICATIONS THAT DELIVER REAL
            VALUE TO USERS. I BELIEVE THAT GREAT WEB EXPERIENCES START WITH
            CLEAN CODE, PERFORMANCE, AND PURPOSEFUL DESIGN.
          </h2>
        </div>

        <div className="w-full md:w-[33.5%] flex justify-start md:justify-end helvetica text-xs md:text-sm text-black/60 items-center">
          <h2>© {new Date().getFullYear()} JULYAN. All rights reserved.</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
