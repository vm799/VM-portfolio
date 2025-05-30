import { useState } from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
 if (slideIndex !== dataSlider.length) {
     setSlideIndex(slideIndex + 1)
}
else if (slideIndex === dataSlider.length){
    setSlideIndex(1)
    }
}

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
       }
       else if (slideIndex === 1){
           setSlideIndex(dataSlider.length)
           }
}

    const moveDot = (index) => {
        setSlideIndex(index )
    }

  return (
    <div className='container-slider'>

            {dataSlider.map((obj,index)=>{
            return (
             <div 
             key={obj.id}
             className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>

            <img
            src={process.env.PUBLIC_URL + `/assets/img${index + 1}.png`} 
            alt="" 
            />
            <p className='slider-title'>{obj.title}</p>
        </div>
    )
})}
<BtnSlider moveSlide={nextSlide} direction={"next"}/>
<BtnSlider moveSlide={prevSlide} direction={"prev"}/>

<div className="container-dots">
    {Array.from({length: dataSlider.length  }).map((item,index) => (
        <div 
        onClick={() => moveDot(index + 1)}
        className={slideIndex === index + 1 ? "dot active" : "dot"}
        ></div>
    ))}
    </div>
    </div>
  )
    }
