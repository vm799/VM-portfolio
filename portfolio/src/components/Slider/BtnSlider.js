import React from 'react'
import './Slider.css'

// import leftArrow from './assets/arrowleft.png'
// import arrowright from './assets/arrowright.png'

export default function BtnSlider({ direction, moveSlide }){
  
    return (
 
    <button 
    onClick={moveSlide}
    className={direction === "next" ? 'btn-slide next' 
    : 'btn-slide prev'}
    >
        <img 
        src={direction === "next" ?  'VM-portfolio/assets/arrowright.png' : 'VM-portfolio/assets/arrowleft.png'} 
        alt="direction arrow" />
    </button>
    
  )
}
