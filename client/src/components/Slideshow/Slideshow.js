import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./Slideshow.css"



const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div className="slide1">
            
          </div>
        </div>
        <div className="each-slide">
          <div className="slide2">
           
          </div>
        </div>
      </Slide>
    )
}
export default Slideshow