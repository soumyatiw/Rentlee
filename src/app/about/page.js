import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import AboutPage from '@/components/AboutPage';
import TeamSection from '@/components/TeamSection';
function About() {
  return (
    <div>
      <Navbar/>
      <AboutPage />
      <TeamSection />
      <Footer/>
    </div>
  )
}

export default About