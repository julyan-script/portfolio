import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Horizontal = () => {
  return (
    <div className="bg-neutral-800 min-h-screen">
     
      <HorizontalScrollCarousel />
    
    </div>
  );
};
export default Horizontal;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-blue-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <div className="w-[300vw] h-[100vh] bg-white">
            <div className="w-full border-y-1 border-black py-5">
q
            </div>
            <div className="absolute bottom-0 border-y-1 border-black w-full py-5"/>
            <div className="font-serif text-[200px] px-5 font-bold py-10 text-stone-900 text-left h-max w-[300vw]">
              <h2>Lets growing your bussines with</h2>
            </div>
            <div className="flex justify-start items-center gap-2 w-full -mt-40">
              <motion.div style={{width}} className="bg-stone-900 h-10" />
              <h2 className="font-bold font-serif text-[200px] mb-5 text-stone-900">
                me
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
