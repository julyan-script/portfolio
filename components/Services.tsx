import Image from "next/image";

const Services = () => {
  return (
    <div className="w-screen bg-white py-20 pt-50">
      <div className="flex justify-center items-center gap-5">
        <div className="w-full h-0.5 bg-black"></div>
        <h2 className="uppercase font-bold helvetica text-black">Services</h2>
        <div className="w-full h-0.5 bg-black"></div>
      </div>
      <div className="flex pt-20 uppercase font-bold helvetica px-5 text-black/50 justify-between items-center">
        <p>recent project</p>
        <p>2024 - 2025</p>
      </div>
      <div className="py-2 flex flex-col md:flex-row px-5 justify-center items-center gap-5 ">
        <div className="md:w-[50%] shadow-lg w-full h-100 text-black rounded-xl">
          <div className="relative rounded-xl w-full h-100 overflow-hidden">
            <Image className="object-center rounded-xl hover:scale-[110%] duration-800 ease-in-out transform transition-all" src={'/desain.png'} fill alt="me"/>
          </div>
          <p className="helvetica text-xl mt-3">Travel Bali UI/UX Design</p>
        </div>
        <div className="md:w-[50%] shadow-lg w-full  h-100 text-black rounded-xl">
          <div className="relative rounded-xl  w-full overflow-hidden h-100">
             <Image className="object-cover rounded-xl hover:scale-[110%] duration-800 ease-in-out transform transition-all" src={'/travel.png'} fill alt="me"/>
          </div>
          <p className="helvetica text-xl mt-3">Travel Bali UI/UX Design</p>
        </div>
      </div>
      <div className="py-10 flex flex-col md:flex-row px-5 justify-center items-center gap-5 ">
        <div className="md:w-[50%] w-full shadow-lg  h-100 text-black rounded-xl">
          <div className="relative rounded-xl w-full overflow-hidden h-100">
            <Image className="object-cover rounded-xl hover:scale-[110%] duration-800 ease-in-out transform transition-all" src={'/portfolio.jpeg'} fill alt="personal portfolio website"/>
          </div>
          <p className="helvetica text-xl mt-3">Personal Portfolio Website</p>
        </div>
        <div className="md:w-[50%] shadow-lg w-full h-100 text-black rounded-xl">
          <div className="relative rounded-xl w-full overflow-hidden h-100">
            <Image className="object-center rounded-xl hover:scale-[110%] duration-800 ease-in-out transform transition-all" src={'/tamara.jpeg'} fill alt="tamara hotel website"/>
          </div>
          <p className="helvetica text-xl mt-3">Tamara Hotel</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
