import React from 'react'
import "./Menu.css"

export default function Menu( {menuOpen, setMenuOpen}) {
  return (
    <div className={ "menu  " + (menuOpen && "active" )}>
        <ul onClick={()=>setMenuOpen(false)}  >
            <li>
                <a href="https://www.canva.com/design/DAGmfSYJhDk/S-aoce0kY37t0WMyn2gs6Q/view?utm_content=DAGmfSYJhDk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h12da85989f"> my CV</a>
            </li>
            <li>
                <a href="#portfolio"> my portfolio</a>
            </li>
            {/* <li>
                <a href="#works"> my projects</a>
            </li> */}
            <li>
                <a href="#testimonials"> testimonials</a>
            </li>
            <li>
                <a href="#contact"> get in touch</a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/vaishali7/" className="linkedin">
            <img src="/assets/linkedin.svg" alt="clickable linkedin icon"/></a>
           
            </li>
        </ul>
         
    </div>
  );
}
