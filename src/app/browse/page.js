import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import BrowseHero from '@/components/BrowseHero';
import TagFilterSection from '@/components/TagFilterSection';

function Browse() {
  return (
    <div>
      <Navbar/>
      <BrowseHero/>
      <TagFilterSection/>
      <Footer/>
    </div>
  )
}

export default Browse