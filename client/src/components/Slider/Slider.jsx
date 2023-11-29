import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    // Automatically move to the next slide after 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    // Clear the interval when the component unmounts or when currentSlide changes
    return () => clearInterval(interval);
  }, [currentSlide]);

  const resetTimer = () => {
    // Reset the timer when the user clicks on the icons
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
  };

  const intervalRef = React.useRef();


  
    return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          <img src="img\slider\slider_1.png" alt="" />
          <img src="img\slider\slider_2.png" alt="" />
          <img src="img\slider\slider_3.png" alt="" />
        </div>
        <div className="icons">
          <div className="icon" onClick={() => {prevSlide();resetTimer();}}>
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