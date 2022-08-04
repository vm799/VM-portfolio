import "./Hero.css"
// import { useEffect, useRef } from "react";
import TypeWriterEffect from 'react-typewriter-effect';

 
export default function Hero (){

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
                <h3>
        <span>

        <TypeWriterEffect
        textStyle={{
          fontWeight: 300,
          fontSize: '1.5em',
          color: 'rgb(176, 3, 89)',
        }}
        startDelay={2000}
        cursorColor="rgb(176, 3, 89)"
        multiText={[
          'Software engineer',
          'Web designer',
          'UX Designer',
          'Clinical Optometrist',
          'Hockey & Cricket Coach',
          'Nutritional Therapist',
          'Software engineer'
        ]}
        multiTextDelay={1000}
        typeSpeed={100}
      />




            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
