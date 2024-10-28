'use client'
import React from 'react'
import memoji from "../../../public/assets/elvis3.jpeg";
import Navbar from '../Navbar'
import Image from "next/image";
import Published from '../Published';
import Unplished from '../Unpublished';
import Footer from '../Footer';
import { FaArrowLeft } from "react-icons/fa";


const PortfolioComponent
 = () => {
  return (

    <div className='portfolio-back  '>
     <a href="/"><FaArrowLeft className='text-4xl fixed border border-white top-10 left-10'/></a>
    <div className='flex flex-col justify-center items-center text-center '>
    <div className='h-screen w-1/2 flex flex-col justify-center gap-4 items-center text-center '>  
       

       <h1 className='text-center text-4xl'>Hi, I'm Elvis</h1>
       <div className='w-20 h-1 bg-white' />
       
       <p>.... and Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quasi iusto dignissimos dolore doloremque saepe laboriosam nemo, numquam harum commodi?</p>
   
   
       <div className='flex gap-4 mt-4'>
         <a href="#published" className="animate-bounce text-center  text-primary hover:text-secondary   cursor-pointer border-primary border hover:bg-primary rounded px-3 py-1 ">
           Published Articles
         </a>
   
         <a href="#unpublished" className="animate-bounce text-center  text-primary hover:text-secondary   cursor-pointer border-primary border hover:bg-primary rounded px-3 py-1 ">
           Unpublished Articles
         </a>
        </div>
    
       </div>
    </div>
   
      <Published />
      <Unplished />
      <Footer />

     
    
 
      

      
      
   
    </div>
  )
}

export default PortfolioComponent

