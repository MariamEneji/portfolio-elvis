'use client'
import React from 'react'
import memoji from "../../../public/assets/elvis.jpeg";
import Navbar from '../Navbar'
import Image from "next/image";

const PortfolioComponent
 = () => {
  return (
    <div className='experience'>
      <div> <h1>Hi, I'm Elvis</h1>
      <Image src={memoji} alt='alt' width={200} height={200} className='rounded-full'/>
       <p>.... and Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quasi iusto dignissimos dolore doloremque saepe laboriosam nemo, numquam harum commodi?</p></div>

       <div>
        <a href="">
          Published Articles
        </a>

        <a href="">
          Unpublished Articles
        </a>
       </div>
      
   
    </div>
  )
}

export default PortfolioComponent

