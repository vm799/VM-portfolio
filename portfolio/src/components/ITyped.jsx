import "./Hero.css"
import ITyped from 'react-ityped'
// import { useEffect, useRef } from "react";

export default function Hero() {

const textRef = ["Developer", "UX Designer", "Content Creator"]

return (
    <>
    <ITyped className="wrapper ityped-cursor"
    showCursor={true}
    strings={textRef}
    typeSpeed={100}
    backSpeed={100}
    startDelay={100}
    backDelay={250}
    />



    </>
  );
}