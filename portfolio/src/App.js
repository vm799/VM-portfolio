import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import TestimonialSlider from "./components/Testimonial_Slider/Testimonial_Slider"
import "./App.css"
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Slider from "./components/Slider/Slider";

function App() {
  const [menuOpen, setMenuOpen] =useState(false)
  return (
    <div className="App">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
     <Hero />
     <Portfolio />
     {/* <Works /> */}
   <TestimonialSlider />
     {/* <Testimonials /> */}
     <Slider />
     <Contact />
     </div>
    </div>
  );
}

export default App;
