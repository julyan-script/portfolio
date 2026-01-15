"use client";

import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Horizontal from "@/components/Horizontal";
import Expertise from "@/components/Expertise";
import Testimoni from "@/components/Testimoni";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Quote />
      <Horizontal />
      <Expertise />  
      <Testimoni />
      <Footer />
    </div>
  );
}
