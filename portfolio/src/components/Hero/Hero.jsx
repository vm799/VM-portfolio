import "./Hero.css"
// import { useEffect, useRef } from "react";


 
function Hero (){


return (
    <div className= "Hero" id="hero">
        <div className="left">
        <div className="imgContainer">
            <img src="assets/me.png" alt="vaishali smiling" />
        </div>
        </div>
        <div className="right">
<div className="wrapper">
    <h2> Hi there, I'm</h2>
    <h1> Vaishali Mehmi</h1>
    <h3>I'm a  <span>  </span>
    </h3>
</div>

<a href="#portfolio"> 
<img src="https://cdn-icons-png.flaticon.com/512/892/892498.png" 
alt="down arrow" /> 
</a>
        </div>
    </div>
   
  );
}


export default Hero;
// <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Pixel perfect - Flaticon</a>