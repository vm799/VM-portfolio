import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works"
import "./App.css"
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import ITyped from 'react-ityped'

function App() {
  const [menuOpen, setMenuOpen] =useState(false)
  const textRef = ["Developer", "UX Designer", "Content Creator"]
  
  return (
    <div className="App">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
     <Hero />
     <ITyped className="wrapper ityped-cursor"
    showCursor={true}
    strings={textRef}
    typeSpeed={100}
    backSpeed={100}
    startDelay={100}
    backDelay={250}
    />
     <Portfolio />
     <Works />
     <Testimonials />
     <Contact />
     </div>
    </div>
  );
}

export default App;
