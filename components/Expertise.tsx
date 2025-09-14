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
    <div className="h-screen w-full bg-white pt-20">
      <div className="flex justify-center items-center gap-5 py-10">
        <div className="bg-black w-full h-0.5"></div>
        <div>
          <h2 className="text-black uppercase helvetica font-black tracking-widest">
            Expertise
          </h2>
        </div>
        <div className="bg-black w-full h-0.5"></div>
      </div>
      <div ref={container} className="flex flex-col gap-5 text-stone-900 tracking-widest overflow-x-hidden">
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
      <Phrase src="/me.jpg" text="Qompany Profile Website" />
      <Phrase src="/me.jpg" text="Qompany Profile Website" />
      <Phrase src="/me.jpg" text="Qompany Profile Website" />
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
      <Phrase src="/me.jpg" text="Personal Portfolio Website" />
      <Phrase src="/me.jpg" text="Personal Portfolio Website" />
      <Phrase src="/me.jpg" text="Personal Portfolio Website" />
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
      <Phrase src="/me.jpg" text="E-Commerse Website" />
      <Phrase src="/me.jpg" text="E-Commerse Website" />
      <Phrase src="/me.jpg" text="E-Commerse Website" />
    </motion.div>
  );
};

type Props = {
  text: string;
  src: string;
};
const Phrase = ({ text, src }: Props) => {
  return (
    <div className="flex gap-5 justify-center items-center">
      <div className="text-black font-serif text-[6.5vw]">
        <p>{text}</p>
      </div>
      <div className="relative aspect-[4/2] h-[6.5vw] rounded-full">
        <Image className=" object-cover rounded-full" src={src} fill alt="me" />
      </div>
    </div>
  );
};
