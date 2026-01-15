"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

const Testimoni = () => {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div id="testimonials" className="min-h-screen w-full bg-white py-10 md:py-20">
      <div className="flex justify-center items-center gap-3 md:gap-5 flex-wrap">
        <div className="w-full h-0.5 bg-black hidden md:block"></div>
        <h2 className="uppercase font-bold helvetica text-black text-sm md:text-base">
          testimonials
        </h2>
        <div className="w-full h-0.5 bg-black hidden md:block"></div>
      </div>
      <div className="min-h-screen px-3 md:px-10 py-8 md:py-15">
        <div
          ref={container}
          className="w-full bg-stone-200 min-h-screen rounded-2xl px-2 md:px-4 flex flex-col md:flex-row justify-center gap-5 md:gap-10 py-5 md:py-10 items-center overflow-hidden"
        >
          <div className="hidden md:block">
            <ColCard />
          </div>
          <ColCard1 scrollYProgress={scrollYProgress} />
          <div className="hidden md:block">
            <ColCard2 />
          </div>
          <div className="md:hidden w-full gap-5">
            <ColCard />
            <ColCard2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;

import { FaStar } from "react-icons/fa";

type CardsProps = {
  comment: string;
  name: string;
  status: string;
};

const ColCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <Card
        comment="We needed someone who could lead the technical side of our product from scratch — and they delivered, brilliantly. APIs were built cleanly, database schemas made sense, and every feature was thoughtfully integrated. They even added fallback UX in case of error, something we hadn’t requested but appreciated deeply. If you’re looking for a developer who treats your product like their own, you’ve found them."
        name="Agus Satria"
        status="IT Student"
      />
      <Card
        comment="From performance optimization to pixel-perfect layouts, every element was handled with incredible attention to detail. I’ve rarely seen a frontend developer so passionate about both design and implementation. Whether it's responsiveness, accessibility, or fine-tuning interactions, they get it done. Working with them elevated our whole product."
        name="reynaldi sumarjaya"
        status="Barista & Bartender"
      />
      <Card
        comment="UI/UX was something we always struggled with — until we partnered with them. Their approach was not only strategic but empathetic. They guided us from wireframes to polished prototypes, explaining every choice and ensuring our vision stayed intact. Today, our platform is not only easier to use, but far more aligned with our users’ needs. I’ve recommended their services to several colleagues already — and I’ll keep doing so."
        name="Ello Ganendra"
        status="IT Student"
      />
    </div>
  );
};

type Props = {
  scrollYProgress: MotionValue<number>;
};

const ColCard1 = ({ scrollYProgress }: Props) => {
  const container = useRef<HTMLDivElement | null>(null);

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  return (
    <motion.div
      ref={container}
      style={{ y }}
      className="relative flex flex-col justify-center items-center gap-5 "
    >
      <Card
        comment="Working with Julyan on my personal portfolio website was an
            absolute pleasure. They understood exactly what I envisioned and
            brought it to life with clean, responsive design and smooth
            animations. Communication was clear, and deadlines were always met.
            I'm truly impressed with the professionalism and attention to
            detail. Highly recommended!"
        name="Adi Perdanna"
        status="IT Student"
      />
      <Card
        comment="They took our vision and translated it into a fast, responsive, and visually striking website. Every scroll, animation, and interaction felt purposeful. If you want a frontend that not only looks great but works flawlessly — look no further."
        name="Mahendra"
        status="IT Student"
      />
      <Card
        comment="From backend logic to the frontend interface, everything was handled professionally. They communicated clearly, delivered on time, and the result was a full-fledged web app that works seamlessly. If you need someone who can own the whole stack — this is the person."
        name="tamara hotel"
        status="Hotel"
      />
    </motion.div>
  );
};

const ColCard2 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <Card
        comment="From performance optimization to pixel-perfect layouts, every element was handled with incredible attention to detail. I’ve rarely seen a frontend developer so passionate about both design and implementation. Whether it's responsiveness, accessibility, or fine-tuning interactions, they get it done. Working with them elevated our whole product."
        name="bagus wide"
        status="IT Lecturer"
      />
      <Card
        comment="You took our Figma mockups and turned them into a live, breathing website that works beautifully across all devices. The animations are smooth, the navigation is fast, and everything just feels right. But more than just delivering code, you brought a creative eye and a collaborative spirit that made the whole process truly enjoyable. With you, we didn’t just hire a developer — we partnered with someone who genuinely cares about our project’s success."
        name="budhi prasetya"
        status="IT Student"
      />
      <Card
        comment="Our SaaS platform is up and running, thanks to their fullstack expertise. The backend is stable and well-structured, while the frontend delights our users. Beyond technical skill, their communication and project management were stellar. They kept us updated at every stage, suggested improvements we hadn’t considered, and always delivered ahead of time. Highly recommended."
        name="Varial Ananta"
        status="Student"
      />
    </div>
  );
};

const Card = ({ comment, name, status }: CardsProps) => {
  return (
    <div className="relative shadow-2xl rounded-2xl top-0 flex-col flex justify-center items-center gap-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full md:w-80 bg-white text-black h-max py-3 md:py-5 rounded-2xl px-3 md:px-5 "
      >
        <div className="flex justify-start items-start gap-1 md:gap-0">
          <FaStar size={14} className="md:w-4 md:h-4" />
          <FaStar size={14} className="md:w-4 md:h-4" />
          <FaStar size={14} className="md:w-4 md:h-4" />
          <FaStar size={14} className="md:w-4 md:h-4" />
          <FaStar size={14} className="md:w-4 md:h-4" />
        </div>
        <div className="py-3 md:py-5">
          <p className="text-xs md:text-base">{comment}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="tracking-widest font-bold uppercase helvetica text-xs md:text-base">
            {name}
          </p>
          <p className="text-black/50 text-xs md:text-sm">{status}</p>
        </div>
      </motion.div>
    </div>
  );
};
