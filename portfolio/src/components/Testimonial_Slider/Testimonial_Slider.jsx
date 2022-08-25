import { useState } from 'react'
import './Testimonial_Slider.css'
import Testimonial_dataSlider from './Testimonial_dataSlider'
import BtnSlider from '../Slider/BtnSlider'

export default function TestimonialSlider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
 if (slideIndex !== Testimonial_dataSlider.length) {
     setSlideIndex(slideIndex + 1)
}
else if (slideIndex === Testimonial_dataSlider.length){
    setSlideIndex(1)
    }
}

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
       }
       else if (slideIndex === 1){
           setSlideIndex(Testimonial_dataSlider.length)
           }
}

    const moveDot = (index) => {
        setSlideIndex(index )
    }

  return (

    <div className='Testimonials' id="testimonials">
    <h1>Testimonials</h1> 

        <div className='container-slider'>

            {Testimonial_dataSlider.map(( obj, index )=>{
                return (
< div 
key={obj.id}
className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                
                <div className="card">

                <div className="top">
                    <img className="user"
                        src={obj.img}
                        alt="profile pic" />
 </div>
 <div className="center">
   {obj.desc}</div>

 <div className="bottom">
   <h3>{obj.name}</h3>
   <h4>{obj.title}</h4>
 </div>
</div>
</div>



    )
})}

<BtnSlider moveSlide={nextSlide} direction={"next"}/>
<BtnSlider moveSlide={prevSlide} direction={"prev"}/>

<div className="container-dots">
    {Array.from({length: Testimonial_dataSlider.length  }).map((item,index) => (
        <div 
        onClick={() => moveDot(index + 1)}
        className={slideIndex === index + 1 ? "dot active" : "dot"}
        ></div>
    ))}
    </div>
    </div>
    </div>

  )
    }
