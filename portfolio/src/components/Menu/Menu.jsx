import React from 'react'
import "./Menu.css"

export default function Menu( {menuOpen, setMenuOpen}) {
  return (
    <div className={ "menu  " + (menuOpen && "active" )}>
        <ul onClick={()=>setMenuOpen(false)}  >
            <li>
                <a href="#hero">me</a>
            </li>
            <li>
                <a href="#portfolio"> my portfolio</a>
            </li>
            <li>
                <a href="#works"> my projects</a>
            </li>
            <li>
                <a href="#testimonials"> testimonials</a>
            </li>
            <li>
                <a href="#contact"> get in touch</a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/vaishali7/" className="linkedin">
            <img src="/VM-portfolio/assets/linkedin.svg" alt="clickable linkedin icon"/></a>
           
            </li>
        </ul>
         
    </div>
  );
}
