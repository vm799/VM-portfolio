import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";


function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Portfolio />
     <Testimonials />
     <Contact />

    </div>
  );
}

export default App;
