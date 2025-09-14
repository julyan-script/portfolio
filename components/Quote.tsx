"use client";

import { MotionValue, useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Quote() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
  });

  useEffect(() => {}, []);

  return (
    <main ref={container} className="w-full min-h-screen h-[200vh]">
      <Page1 scrollYProgress={scrollYProgress} />
      <Page2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

interface Page1Props {
  scrollYProgress: MotionValue<number>;
}

const Page1 = ({ scrollYProgress }: Page1Props) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen z-10 overflow-x-clip"
    >
      <div className="h-full relative bg-stone-900  ">
        <p className="absolute inset-0 -top-45 w-full text-[460px] -tracking-wider -translate-x-25 text-black/30 uppercase text-center font-extrabold helvetica">
          quote
        </p>
        <h2 className="text-center px-5 text-4xl md:text-5xl uppercase pt-20 md:py-50 font-bold  ">
          I don’t just create work. I pour my soul into every detail. Every
          small idea holds the power to change the world. This is not just a
          portfolio—it’s a journey.
        </h2>
      </div>
    </motion.div>
  );
};

const Page2 = ({ scrollYProgress }: Page1Props) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      id="section-1"
      style={{ scale, rotate }}
      className="h-screen bg-white z-20 relative pt-15"
    >
      <h2 className="absolute helvetica w-full uppercase pl-5 border-y-1 border-black text-4xl text-stone-950">
        who i am ?
      </h2>
      <div className="h-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-[35%] h-auto md:h-full flex flex-col gap-1 md:justify-end justify-center items-center md:items-start px-10 pb-10">
          <div className=" w-60 font-bold flex gap-5">
            <h2 className="text-black/50 text-[11px]">a purpose</h2>
            <div className="flex flex-col">
              <h2 className="text-black/50 text-[11px]">
                growing throught every project
              </h2>
              <h2 className="text-black/50 text-[11px] ">
                grow with your company
              </h2>
            </div>
          </div>

          <div className="relative w-60 h-80 rounded-lg bg-black">
            <Image
              className="object-cover"
              fill
              src={"/julyan.jpg"}
              alt="my photo"
            />
          </div>
        </div>
        <div className="w-full md:w-[65%] h-auto md:h-full flex flex-col justify-center items-center md:justify-start md:items-start gap-5 ">
          <div className="text-stone-900 text-5xl  pt-23 font-bold font-serif pr-30">
            <h2>Before you know my work, know the person behind it.</h2>
          </div>
          <div className="text-stone-900 text-xl font-serif pr-30">
            <p>
              Hi there! I'm Dimas Javas Cahya Putra Julyan, a Junior Fullstack
              Developer currently studying Information Technology at STIKOM Bali
              Institute of Technology and Business.
            </p>
          </div>
          <div className="text-stone-900 text-xl font-serif pr-30">
            <p>
              I specialize in building fullstack web applications using
              React.js, Next.js, and Tailwind CSS on the frontend, and Node.js,
              Express, and MySQL on the backend. I'm also familiar with RESTful
              APIs, authentication systems, and database integration.
            </p>
          </div>
          <div className="text-stone-900 text-xl font-serif pr-30">
            <p>
              I'm a passionate learner who enjoys solving real-world problems
              through code. I'm always open to opportunities for internships,
              collaboration, or freelance projects related to web development
              and digital innovation.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
