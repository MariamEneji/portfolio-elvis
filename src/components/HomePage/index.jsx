"use client"

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Navbar from "@/components/Navbar";

import Skills from "@/components/Skills";

import React from 'react'


const HomePage = () => {
  return (
    <div>
       <Navbar />
    <Hero />
    <Experience />
    <Skills />
    <Footer />
    </div>
  )
}

export default HomePage
