import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  );
}
