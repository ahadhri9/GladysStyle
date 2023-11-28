import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import "./Slider.scss"
const Slider = () => {

  const [currentSlide, setCurrentSlide]=useState(0)

  const prevSlide = () => {
    setCurrentSlide(currentSlide===0 ? 2 : (prev) => prev -1)
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide===2 ? 0 : (prev) => prev +1)

  };

  
    return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          <img src="img\slider\slider_1.png" alt="" />
          <img src="img\slider\slider_2.png" alt="" />
          <img src="img\slider\slider_3.png" alt="" />
        </div>
        <div className="icons">
          <div className="icon" onClick={prevSlide}>
          <KeyboardArrowLeftIcon/>
          </div>
          <div className="icon" onClick={nextSlide}>
          <KeyboardArrowRightIcon/>
          </div>
        </div>
    </div>
  )
}

export default Slider