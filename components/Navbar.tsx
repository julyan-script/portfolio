"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

const Navbar = () => {
  const scrollToSection = (id: string, duration = 2000) => {
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
      className="w-full flex justify-between items-center fixed top-0 px-5 py-2 z-50 
    transition-all duration-500 tracking-wides"
    >
      <div className="text-center ">
        <h1 className="uppercase helvetica tracking-widest text-xl text-stone-900 font-bold ">
          dimas javas
        </h1>
      </div>
      <div
        className={`rounded-l-full font-sans absolute inset-0 uppercase top-0 w-[200%] h-[100vh] ${
          isOpen
            ? "-left-90 transition-all transform duration-1000 ease-in-out"
            : "left-[100%] transition-all transform duration-1000 ease-in-out"
        } text-white/50 bg-black text-5xl flex flex-col py-6 px-100  text-left gap-12`}
      >
        <motion.div
          ref={ref}
          key={inView ? "visible" : "hidden"}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col gap-5 "
        >
          <Link
            href={"/"}
            onClick={() => handleLinkClick("/")}
            className="hover:tracking-widest  relative hover:text-white transition-all transform duration-800 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:transform after:ease-in-out after:duration-1000 after:h-[1px] hover:after:w-full after:bg-white/70 after:-my-2 "
          >
            Home
          </Link>
          <Link
            href={"#section-1"}
            onClick={() => handleLinkClick("section-1")}
            className="hover:tracking-widest  relative hover:text-white transition-all transform duration-1000 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:transform after:ease-in-out after:duration-1000 after:h-[1px] hover:after:w-full after:bg-white/70 after:-my-2 "
          >
            About
          </Link>
          <Link
            href={"#section-1"}
            onClick={() => handleLinkClick("section-1")}
            className="hover:tracking-widest  relative hover:text-white transition-all transform duration-1000 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:transform after:ease-in-out after:duration-1000 after:h-[1px] hover:after:w-full after:bg-white/70 after:-my-2 "
          >
            Project
          </Link>
          <Link
            href={"#section-1"}
            onClick={() => handleLinkClick("section-1")}
            className="hover:tracking-widest relative hover:text-white transition-all transform duration-1000 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:transform after:ease-in-out after:duration-1000 after:h-[1px] hover:after:w-full after:bg-white/70 after:-my-2 "
          >
            Testimoni
          </Link>
          <Link
            href={"#section-1"}
            onClick={() => handleLinkClick("section-1")}
            className="hover:tracking-widest  relative hover:text-white transition-all transform duration-1000 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:transform after:ease-in-out after:duration-1000 after:h-[1px] hover:after:w-full after:bg-white/70 after:-my-2 "
          >
            Contact
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          className="flex flex-col gap-2 text-sm text-white/50 tracking-widest "
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
          transition={{ duration: 2, delay: 1.4 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          className="flex flex-col gap-2 text-sm pb-20"
        >
          <Link
            className="hover:text-white transition-all transform duration-800 "
            href={"/"}
          >
            Linkedin
          </Link>
          <Link
            className="hover:text-white transition-all transform duration-800 "
            href={"/"}
          >
            Instagram
          </Link>
          <Link
            className="hover:text-white transition-all transform duration-800 "
            href={"/"}
          >
            Facebook
          </Link>
          <Link
            className="hover:text-white transition-all transform duration-800 "
            href={"/"}
          >
            whatsaap
          </Link>
        </motion.div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="hidden md:bg-stone-900 md:rounded-lg md:text-stone-200 md:py-2 md:px-4 md:font-bold md:cursor-pointer md:block md:text-center hover:bg-transparent hover:text-stone-900 border border-stone-900 transform transition-all duration-1000">
          <h1>Contact me</h1>
        </div>
        <div className="flex items-center justify-center bg-transparent cursor-pointer border border-stone-900 rounded-full w-[32] h-[32]">
          <div className="text-center mb-1 z-50 text-white">
            <button
              onClick={toggleMenu}
              className={`font-bold text-2xl ${
                isOpen
                  ? "text-white transform transition-all duration-1000 ease-in-out"
                  : "text-stone-900 transform transition-all duration-1000 ease-in-out"
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
