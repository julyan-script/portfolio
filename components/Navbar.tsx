"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <div
      className="w-full flex justify-between items-center fixed top-0 px-3 md:px-5 py-2 z-50 
    transition-all duration-500"
    >
      <div className="text-center bg-white p-1 md:p-2 rounded-lg ">
        <h1 className="helvetica text-sm md:text-xl text-stone-900 font-bold ">
          julyan<span className="text-amber-600">Script</span>
        </h1>
      </div>
      <div
        className={`font-sans absolute inset-0 uppercase top-0 w-full h-[100vh] ${
          isOpen
            ? "left-0 transition-all transform duration-300 ease-in-out"
            : "left-[100%] transition-all transform duration-300 ease-in-out"
        } text-white/50 bg-black text-5xl md:text-5xl flex flex-col py-8 px-5  text-left gap-6 md:gap-12`}
      >
        <motion.div
          ref={ref}
          key={inView ? "visible" : "hidden"}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col gap-3 md:gap-1 "
        >
          <Link
            href={"/"}
            onClick={() => handleLinkClick("/")}
            className="relative hover:text-white transition-all transform duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:transform after:ease-in-out after:duration-300 after:h-[1px] hover:after:w-full after:bg-white/70 after:-my-2 "
          >
            Home
          </Link>
          <Link
            href={"#section-1"}
            onClick={() => handleLinkClick("section-1")}
            className="relative hover:text-white transition-all transform duration-800 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:transform after:ease-in-out after:duration-1000 after:h-[1px] hover:after:w-full after:bg-white/70 after:-my-2 "
          >
            About
          </Link>
          <Link
            href={"#section-1"}
            onClick={() => handleLinkClick("section-1")}
            className="relative hover:text-white transition-all transform duration-800 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:transform after:ease-in-out after:duration-1000 after:h-[1px] hover:after:w-full after:bg-white/70 after:-my-2 "
          >
            Project
          </Link>
          <Link
            href={"#section-1"}
            onClick={() => handleLinkClick("section-1")}
            className="relative hover:text-white transition-all transform duration-1000 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:transform after:ease-in-out after:duration-1000 after:h-[1px] hover:after:w-full after:bg-white/70 after:-my-2 "
          >
            Testimoni
          </Link>
          <Link
            href={"#section-1"}
            onClick={() => handleLinkClick("section-1")}
            className="relative hover:text-white transition-all transform duration-1000 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:transform after:ease-in-out after:duration-1000 after:h-[1px] hover:after:w-full after:bg-white/70 after:-my-2 "
          >
            Contact
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          className="flex flex-col gap-2 text-lg md:text-sm md:py-0 py-10 text-white/50 tracking-widest "
        >
          <Link
            className="tracking-widest hover:text-white transition-all transform duration-800 "
            href={"/"}
          >
            dimas javas cahya putra julyan
          </Link>
          <Link
            className="hover:text-white transition-all transform duration-800 "
            href={"/"}
          >
            Junior Front-End Developer | Design Graphic
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          className="flex flex-col gap-2 text-lg md:text-sm text-white/50 mt-auto"
        >
          <Link
            className="hover:text-white transition-all transform duration-800 "
            href={"https://www.linkedin.com/in/dimas-javas"}
          >
            Linkedin
          </Link>
          
          <Link
            className="hover:text-white transition-all transform duration-800 "
            href={"https://github.com/julyan-script"}
          >
            Github
          </Link>
          <Link
            className="hover:text-white transition-all transform duration-800 "
            href={"https://www.instagram.com/julyaan._?igsh=MWFrNGpzY2h6emg3Mw=="}
          >
            Instagram
          </Link>
          <Link
            className="hover:text-white transition-all transform duration-800 "
            href={"https://www.facebook.com/share/16qgv6JfLC/"}
          >
            Facebook
          </Link>
          <Link
            className="hover:text-white transition-all transform duration-800 "
            href={"https://wa.me/6283137483233"}
          >
            Whatsaap
          </Link>
        </motion.div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="hidden md:bg-stone-900 md:rounded-lg md:text-stone-200 md:py-2 md:px-4 md:font-bold md:cursor-pointer md:block md:text-center   border border-stone-900 ">
          <a href="https://wa.me/6283137483233" className="text-white">Contact me</a>
        </div>
        <div className="flex items-center justify-center bg-transparent cursor-pointer border border-stone-900 rounded-full w-[32] h-[32]">
          <div className="text-center mb-1 z-50 text-white">
            <button
              onClick={toggleMenu}
              className={`font-bold text-2xl ${
                isOpen
                  ? "text-white transform transition-all duration-300 ease-in-out"
                  : "text-stone-900 transform transition-all duration-300 ease-in-out"
              }`}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
