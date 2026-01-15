"use client"

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const Expertise = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div className="h-auto md:h-screen w-full bg-white md:pt-20">
      <div className="flex justify-center items-center gap-3 md:gap-5 py-5 md:py-10 px-5">
        <div className="bg-black w-full h-0.5 md:flex"></div>
        <div>
          <h2 className="text-black uppercase helvetica font-black tracking-widest text-sm md:text-base">
            Expertise
          </h2>
        </div>
        <div className="bg-black w-full h-0.5 flex md:flex"></div>
      </div>
      <div ref={container} className="flex md:flex flex-col gap-5 text-stone-900 tracking-widest overflow-x-hidden">
        <Slider
          left="-20%"
          scrollYProgress={scrollYProgress}
          direction="left"
        />
        <Slider1
          left="-55%"
          scrollYProgress={scrollYProgress}
          direction="right"
        />
        <Slider2
          left="-34%"
          scrollYProgress={scrollYProgress}
          direction="left"
        />
      </div>
      
      {/* Mobile version */}
      
    </div>
  );
};

export default Expertise;

type SliderProps = {
  left: string;
  scrollYProgress: MotionValue<number>;
  direction: string;
};

const Slider = ({ left, scrollYProgress, direction }: SliderProps) => {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div
      style={{ left, x }}
      className="relative flex justify-center items-center gap-5 whitespace-nowrap"
    >
      <Phrase src="/hotel-app.png" text="Qompany Profile Website" />
      <Phrase src="/hotel-app.png" text="Qompany Profile Website" />
      <Phrase src="/hotel-app.png" text="Qompany Profile Website" />
      <Phrase src="/hotel-app.png" text="Qompany Profile Website" />
      <Phrase src="/hotel-app.png" text="Qompany Profile Website" />
      <Phrase src="/hotel-app.png" text="Qompany Profile Website" />
    </motion.div>
  );
};

const Slider1 = ({ left, scrollYProgress, direction }: SliderProps) => {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div
      style={{ left, x }}
      className="relative flex justify-center items-center gap-5 whitespace-nowrap"
    >
      <Phrase src="/inventory-app.png" text="Personal Portfolio Website" />
      <Phrase src="/inventory-app.png" text="Personal Portfolio Website" />
      <Phrase src="/inventory-app.png" text="Personal Portfolio Website" />
      <Phrase src="/inventory-app.png" text="Personal Portfolio Website" />
      <Phrase src="/inventory-app.png" text="Personal Portfolio Website" />
      <Phrase src="/inventory-app.png" text="Personal Portfolio Website" />
    </motion.div>
  );
};

const Slider2 = ({ left, scrollYProgress, direction }: SliderProps) => {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div
      style={{ left, x }}
      className="relative flex justify-center items-center gap-5 whitespace-nowrap"
    >
      <Phrase src="/figma.png" text="E-Commerse Website" />
      <Phrase src="/figma.png" text="E-Commerse Website" />
      <Phrase src="/figma.png" text="E-Commerse Website" />
       <Phrase src="/figma.png" text="E-Commerse Website" />
      <Phrase src="/figma.png" text="E-Commerse Website" />
      <Phrase src="/figma.png" text="E-Commerse Website" />
    </motion.div>
  );
};

type Props = {
  text: string;
  src: string;
};
const Phrase = ({ text, src }: Props) => {
  return (
    <div className="flex gap-2 md:gap-5 justify-center items-center">
      <div className="text-black font-serif text-8xl md:text-4xl lg:text-[6.5vw]">
        <p className="text-xs md:text-base lg:text-[6.5vw]">{text}</p>
      </div>
      <div className="relative aspect-[4/2] h-[3vw] md:h-[4vw] lg:h-[6.5vw] rounded-full">
        <Image className=" object-cover rounded-full" src={src} fill alt="me" sizes="(max-width: 768px) 100vw, 400px" />
      </div>
    </div>
  );
};
