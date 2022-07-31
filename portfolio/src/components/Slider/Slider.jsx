import { useState } from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

export default function Slider() {
  return (
    <div className='container-slider'>
{dataSlider.map((obj,index)=>{
    return (
        <div className='slider'>
            <img
            src={process.env.PUBLIC_URL + `/assets/img${index + 1}.png`} 
            alt="" />
        </div>
    )
})}

    </div>
    )}