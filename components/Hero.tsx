"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { MotionValue, useScroll } from "motion/react";

 const container = useRef<HTMLDivElement>(null);
  
    const { scrollYProgress } = useScroll({
      target: container,
    });
  
    useEffect(() => {}, []);

    interface Page1Props {
      scrollYProgress: MotionValue<number>;
    }

const Hero = ({scrollYProgress} : Page1Props) => {

   
  return (
    <div className="w-full min-h-screen overflow-clip bg-white text-stone-900">
      <div className="flex w-full items-center justify-center pt-15">
        <h1 className="font-extrabold font-serif tracking-wider text-9xl uppercase">
          web developer
        </h1>
      </div>
      <div className="pt-10 flex justify-center items-center cursor-pointer gap-20">
        <div className="flex flex-col text-sm mb-20  justify-end items-end helvetica uppercase text-black/60 ">
          <h2 className=" hover:text-black transition-all duration-500 ease-in-out transform">
            Front-end Developer
          </h2>
          <h2 className=" hover:text-black transition-all duration-500 ease-in-out transform">
            Fullstack Developer
          </h2>
          <h2 className=" hover:text-black transition-all duration-500 ease-in-out transform">
            UI/UX Designer
          </h2>
          <h2 className=" hover:text-black transition-all duration-500 ease-in-out transform">
            Design Graphic
          </h2>
        </div>
        <div className="relative w-55 h-65 ">
          <Image className="object-cover" src={"/julyan.jpg"} alt="me" fill />
        </div>
        <div className="flex mt-40 flex-col justify-start items-start text-sm helvetica uppercase text-black/60 gap-2">
          <h2 className=" hover:text-black transition-all duration-500 ease-in-out transform">
            You can call me :
          </h2>
          <h2 className="uppercas text-black font-bold font-serif text-5xl tracking-tighter  transition-all duration-500 ease-in-out transform">
            julyan
          </h2>
        </div>
        
      </div>
      <div className="flex justify-between items-center py-10 px-10">
          <div className="flex flex-col justify-center helvetica text-sm w-[33%] text-black/60 items-start text-left">
            <h2 className="hover:text-black transition-all transform duration-500 ease-in-out">available to work</h2>
            <h2 className="hover:text-black transition-all transform duration-500 ease-in-out">julyan300705@gmail.com</h2>
          </div>
          <div className="flex flex-col w-[33%] justify-center helvetica text-sm  text-black/60 items-center">
          <h2 className="text-center">I DEVELOP MODERN, RESPONSIVE WEB APPLICATIONS THAT DELIVER REAL VALUE TO USERS.
I BELIEVE THAT GREAT WEB EXPERIENCES START WITH CLEAN CODE, PERFORMANCE, AND PURPOSEFUL DESIGN.</h2>
          </div>
          <div className="w-[33.5%] flex justify-end helvetica text-sm  text-black/60  items-center">
            <h2> © {new Date().getFullYear()} JULYAN. All rights reserved.</h2>
          </div>
        </div>
    </div>
  );
};

export default Hero;
