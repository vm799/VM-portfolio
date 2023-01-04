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
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const [menuOpen, setMenuOpen] =useState(false)
  
  return (
    <div className="App">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

     <div className="sections">
     <Parallax 
     pages={5} 
     style={{ top: '0', left: '0', 
     background: "rgb(20, 20, 20)"
  }}
     >

  <ParallaxLayer
    offset={0}
    speed={-0.25}
    factor={1}
    
    // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Hero />

  </ParallaxLayer>



  <ParallaxLayer
    offset={1}
    speed={1}
    
    style={{
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // BackgroundColor: 'white',
    }}>
    
    <AboutMe />

  </ParallaxLayer>

  <ParallaxLayer
    offset={1.9}
    speed={1.5}
    style={{
 
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // color: 'white',
    }}>
    
    <Portfolio />

  </ParallaxLayer>

  <ParallaxLayer
    offset={2.3}
    speed={0.2}
    // sticky={{ start: 3, end: 3 }}
    style={{
     
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // color: 'white',
    }}>
    <TestimonialSlider />

  </ParallaxLayer>

  <ParallaxLayer
    offset={3.5}
    speed={0.3}
    // sticky={{ start:4, end: 4 }}
    style={{
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // color: 'white',
    }}>
    
    <Contact/>
  
  </ParallaxLayer>
 
  <ParallaxLayer
    offset={4.1}
    speed={0.75}
    
    style={{


      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      BackgroundColor: 'black',
    }}>
    
     <Footer />

  </ParallaxLayer>
</Parallax>


    {/* <ParticleBackground /> */}
     {/* <Hero />
     <AboutMe />
     <Portfolio /> */}
     {/* <Works />
   <TestimonialSlider /> */}
     {/* <Testimonials /> */}
     {/* <Slider /> */}
     {/* <Contact />
     <Footer /> */}
     </div>
    </div>
  );
}

export default App;
