import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./ServiceCarousel.css"

export default function ServiceCarousel() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="carousel-container">
      <Carousel 
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      infinite={true}
      className="items" 
      >
        <div className="item1">Item 1</div>
        <div className="item2">Item 2</div>
        <div className="item3">Item 3</div>
        <div className="item4">Item 4</div>
        <div className="item5">Item 5</div>
      </Carousel>;
    </div>
  )
}

