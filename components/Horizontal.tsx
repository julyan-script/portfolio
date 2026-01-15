import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <section ref={targetRef} id="project" className="relative  h-[300vh] bg-white py-10 md:py-30">
      <div className="flex sticky top-0 h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <div className="w-[1100vw] gap-10 flex md:w-[300vw] h-[100vh] bg-black py-15 md:py-10">
            <div className="">
              <h2 className="font-thunder text-8xl px-10 ">
                MY PROJECT
              </h2>
            </div>
            <div className="flex items-center md:justify-center gap-20 py-30">
              <div className="flex gap-5">
                <h2 className="text-8xl font-thunder">01</h2>
                <Link href={"https://github.com/julyan-script/NextJS-inventory-management-app.git"} className="w-[400px] shadow-lg  h-60 md:h-50 text-black rounded-xl">
                          <div className="relative rounded-xl w-full overflow-hidden h-60 md:h-60">
                             <Image className="border-2 border-white object-cover rounded-xl hover:scale-[110%] duration-800 ease-in-out transform transition-all" src={'/inventory-app.png'} fill alt=""/>
                          </div>
    
                        </Link>
                
              </div>
              <div className="flex gap-5">
                 <h2 className="text-8xl font-thunder">02</h2>
               <Link href={""} className="w-[400px] shadow-lg  h-60 md:h-50 text-black rounded-xl">
                          <div className="relative rounded-xl w-full overflow-hidden h-60 md:h-60">
                             <Image className="border-2 border-white object-cover rounded-xl hover:scale-[110%] duration-800 ease-in-out transform transition-all" src={'/hotel-app.png'} fill alt=""/>
                          </div>
    
                        </Link>
                
              </div>
               <div className="flex gap-5">
                 <h2 className="text-8xl font-thunder">03</h2>
                <Link href={"https://github.com/julyan-script/cashier-app.git"} className="w-[400px] shadow-lg  h-60 md:h-50 text-black rounded-xl">
                          <div className="relative rounded-xl w-full overflow-hidden h-60 md:h-60">
                             <Image className="object-cover border-2 border-white rounded-xl hover:scale-[110%] duration-300 ease-in-out transform transition-all" src={'/cashier-app.png'} fill alt=""/>
                          </div>
                         
                        </Link>
                
              </div>
               <div className="flex gap-5">
                 <h2 className="text-8xl font-thunder">04</h2>
               <div className="w-[400px] shadow-lg  h-60 md:h-50 text-black rounded-xl">
                          <div className="relative rounded-xl w-full overflow-hidden h-60 md:h-60">
                             <Image className="border-2 border-white object-cover rounded-xl hover:scale-[110%] duration-800 ease-in-out transform transition-all" src={'/figma.png'} fill alt=""/>
                          </div>
                          
                        </div>
                
              </div>
              

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
