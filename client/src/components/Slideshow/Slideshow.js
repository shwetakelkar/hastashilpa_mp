import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./Slideshow.css"



const properties = {
  duration: 50000,
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
          <a className="link-ad1" href="https://arthiatsr.github.io/Project_1/">click me</a>
          </div>
        </div>
        <div className="each-slide">
          <div className="slide2">
            <a className="link-ad2" href="https://levelupmoney.herokuapp.com/">click me</a>
          </div>
        </div>
      </Slide>
    )
}
export default Slideshow