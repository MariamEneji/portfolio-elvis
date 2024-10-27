import React from 'react'
import { FaLinkedinIn, FaGithub, FaMedium, FaHackerrank } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdWatch } from "react-icons/io";

const Footer = () => {
  return (
    <div id='footer' className='w-screen flex  justify-between items-center bg-black  px-4 py-6 md:px-8 backdrop-blur-md shadow-xl '>
        <div className='w-full text-2xl hidden md:flex'>
            <h1  >Contact Me:</h1>
        </div>
     <div className="flex  w-full items-center gap-8 py-4 justify-center  md:justify-end">
            <div className="animate-bounce rounded-full shadow-lg shadow-[#797a80] p-4 cursor-pointer hover:scale-105 duration-300">
              <a href="https://www.linkedin.com/in/elvisanselm" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="animate-bounce rounded-full shadow-lg shadow-[#797a80] p-4 cursor-pointer hover:scale-105 duration-300">
              <a href="https://medium.com/@anselmelvis62" target="_blank">
                <FaMedium />
              </a>
            </div>

            <div className="animate-bounce rounded-full shadow-lg shadow-[#797a80] p-4 cursor-pointer hover:scale-105 duration-300">
              <a href="https://hackernoon.com/u/theelvace" target="_blank">
                <IoMdWatch />
              </a>
            </div>


            <div className="animate-bounce rounded-full shadow-lg shadow-[#797a80] p-4 cursor-pointer hover:scale-105 duration-300">
              <a href="mailto:anselmelvis62@gmail.com" target="_blank">
                {" "}
                <BsFillPersonLinesFill />
              </a>
            </div>
           
          </div>
    </div>
  )
}

export default Footer
