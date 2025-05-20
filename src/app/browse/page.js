import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import BrowseHero from '@/components/BrowseHero';
function Browse() {
  return (
    <div>
      <Navbar/>
      <BrowseHero/>
      <Footer/>
    </div>
  )
}

export default Browse