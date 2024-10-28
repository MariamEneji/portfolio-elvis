import React, { useState, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaMedium, FaHackerrank } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdWatch } from "react-icons/io";
import Link from "next/link";



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="fixed w-screen z-10  flex  justify-between items-center border-b border-[#371d33] px-4 py-6 md:px-10 backdrop-blur-md shadow-xl ">
        <Link href={"/"}>
          {" "}
          <h1 className="text-4xl hover:text-primary cursor-pointer ">
            LOGO
          </h1>
        </Link>

        <ul className="hidden md:flex gap-12 items-center">
          <Link href={"/"}>
            <li className="hover:text-primary  cursor-pointer">Home</li>
          </Link>

          <Link href={"/portfolio"}>
            <li className=" hover:text-primary  cursor-pointer">Portfolio</li>
          </Link>

          <a href="#skills">
            <li className="hover:text-primary  cursor-pointer">Skills</li>
          </a>
          <a href="#experience">
            <li className="hover:text-primary  cursor-pointer">Experience</li>
          </a>
        </ul>
        <Link href="#footer">
            <button className=" hidden md:flex text-primary hover:text-secondary   cursor-pointer border-primary border hover:bg-primary rounded px-3 py-1 ">Let's Connect</button>
          </Link>

        <button
          onClick={handleNav}
          className={nav ? "hidden" : "flex md:hidden"}
        >
          <AiOutlineMenu size={30} />
        </button>

        <button onClick={handleNav} className={!nav ? "hidden" : "flex"}>
          <AiOutlineClose size={30} />
        </button>

        <div
          className={
            nav
              ? "fixed left-0 right-0 top-20  md:hidden text-xl bg-support text-right  flex flex-col  p-4 ease-in duration-1000 "
              : "hidden"
          }
          onClick={handleNav}
        >
          <ul className="gap-8">
            <li
              onClick={handleNav}
              className="hover:text-primary cursor-pointer"
            >
              Home
            </li>

            <Link href={'/portfolio'}>
            <li
              onClick={handleNav}
              className="hover:text-primary cursor-pointer"
            >
              Portfolio
            </li></Link>
            
            <a href="#skills">
              <li
                onClick={handleNav}
                className="hover:text-primary cursor-pointer"
              >
                Skills
              </li>
            </a>
            <a href="#experience">
              <li
                onClick={handleNav}
                className="hover:text-primary cursor-pointer"
              >
                Experience
              </li>
            </a>
          </ul>

          <div className=" flex  w-full items-center gap-4 py-4 justify-end">
            <div className="animate-bounce rounded-full shadow-lg shadow-[#161925] p-2 cursor-pointer hover:scale-105 duration-300">
              <a href="https://www.linkedin.com/in/elvisanselm" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="animate-bounce rounded-full shadow-lg shadow-[#161925] p-2 cursor-pointer hover:scale-105 duration-300">
              <a href="https://medium.com/@anselmelvis62" target="_blank">
                <FaMedium />
              </a>
            </div>

            <div className="animate-bounce rounded-full shadow-lg shadow-[#161925] p-2 cursor-pointer hover:scale-105 duration-300">
              <a href="https://hackernoon.com/u/theelvace" target="_blank">
                <IoMdWatch />
              </a>
            </div>

            <div className=" animate-bounce rounded-full shadow-lg shadow-[#161925] p-2 cursor-pointer hover:scale-105 duration-300">
              <a href="mailto:anselmelvis62@gmail.com" target="_blank">
                {" "}
                <BsFillPersonLinesFill />
              </a>
            </div>
           
          </div>
        </div>

        {/* <h1 className='hidden md:flex border border-[#d39ec1] px-3 py-1 hover:bg-[#d39ec1] hover:text-[#161925] rounded'>Contact Me</h1> */}
      </div>
    </div>
  );
};

export default Navbar;
