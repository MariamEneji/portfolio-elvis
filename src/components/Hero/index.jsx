import React from "react";
import Link from "next/link";
import memoji from "../../../public/assets/elvis.jpeg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" h-screen flex flex-col justify-center  p-4 md:p-10 text-center items-center hero-back ">
      <div className="md:w-2/3 transition-opacity">
        

        <h1 className="text-5xl md:text-7xl  py-4 border-b border-primary ">
          ELVIS ANSELM
         
        </h1>
        <h1 className="text-2xl md:2xl  py-2 tracking-wider ">
          BLOCKCHAIN WRITER & COMMUNITY MANAGER
        </h1>

        <div className="flex items-center justify-center gap-4 md:gap-6">
        <Link href={"/portfolio"}>
          <button className="animate-bounce text-secondary  bg-primary   cursor-pointer border-primary border font-bold hover:bg-transparent hover:text-primary rounded-full px-4 py-2 mt-4 ">
            My Articles -
          </button>
        </Link>
        <Link href="#footer">
          <button className=" animate-bounce text-primary hover:text-secondary   cursor-pointer border-primary border hover:bg-primary rounded-full px-4 py-2 mt-4 ">
            Let's Connect
          </button>
        </Link>
      </div>
      </div>

      

      {/* <Image src={memoji} alt="alt" width={500} height={500} className=" hidden lg:absolute lg:flex rounded-lg  right-0 bottom-0" /> */}

      <Image src={memoji} alt="alt" width={200} height={200} className=" lg:hidden rounded-full  absolute  right-0 bottom-0" />
    </div>
  );
};

export default Hero;
