"use client";

import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Horizontal from "@/components/Horizontal";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Testimoni from "@/components/Testimoni";

export default function Home() {
  return (
    <div>
      <Hero />
      <Quote />
      <Horizontal />
      <Expertise />
      <Services />
      <Testimoni/>
    </div>
  );
}
