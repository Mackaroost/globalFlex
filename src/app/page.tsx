import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Servicios } from "@/components/sections/Servicios";
import Tarifas from "@/components/sections/Tarifas";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
    <Nav/>
      <Hero />
      <Servicios/>
      <Tarifas/>
      <Footer/>
    
    </>
  );
}