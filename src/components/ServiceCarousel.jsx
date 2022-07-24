import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./ServiceCarousel.css"

export default function ServiceCarousel() {

  const handleClick = () => {
    document.querySelector('.contact-container').scrollIntoView({block:'center', behavior: "smooth"});
  }

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
        <div className="lawn">
          <h2>Lawn Care</h2>
          <button className="btn-book-now">Book Now</button>
        </div>
        <div className="garden">
          <h2>Garden Care & Pruning</h2>
          <button className="btn-book-now">Book Now</button>
        </div>
        <div className="all-services">
          <h2>All Services</h2>
          <button className="btn-book-now">Book Now</button>
        </div>
        <div className="pressure-washing">
          <h2>Pressure Washing</h2>
          <button className="btn-book-now">Book Now</button>
        </div>
        <div className="other-services">
          <h2>Other Services Available</h2>
          <div className="other-services-list">
            <p>Retaining walls</p>
            <p>Irrigation</p>
            <p>Light construction</p>
            <p>Bark mulch application</p>
            <p>River rock themed landscapes</p>
          </div>          
          <button className="btn-book-now" onClick={handleClick}>Book Now</button>
        </div>
      </Carousel>;
    </div>
  )
}

