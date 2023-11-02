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
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <div className="carousel-container mb-4 text-2xl md:text-3xl">
      <Carousel 
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      infinite={true}      
      className="items" 
      >
        <div className="lawn service-card flex items-center justify-center">
  <div className="text-container w-3/5 text-center">
    <h1 className="p-2 text-black">Landscape Maintenance</h1>
    <p className="text-base">Lawn care, pruning, weeding, and seasonal clean-up.</p>
  </div>
  <button className="btn-book-now" onClick={handleClick}>
    Book Now
  </button>
</div>
<div className="lawn service-card flex items-center justify-center">
  <div className="text-container w-3/5 text-center">
          <h1 className="p-2">Garden Care & Pruning</h1>
          <p className="text-base">Flower bed management, mulching, and plant health assessments.</p>
          </div>
          <button className="btn-book-now" onClick={handleClick}>Book Now</button>
        </div>
        <div className="lawn service-card flex items-center justify-center">
  <div className="text-container w-3/5 text-center">
          <h1 className="p-2">Tree and Shrub Care</h1>
          <p className="text-base">Trimming, shaping, and health maintenance.</p>
          </div>
          <button className="btn-book-now" onClick={handleClick}>Book Now</button>
        </div>
        <div className="lawn service-card flex items-center justify-center">
  <div className="text-container w-3/5 text-center">
          <h1 className="p-2">Lawn Treatment</h1>
          <p className="text-base">Fertilization, aeration, lime and weed control.</p>
          </div>
          <button className="btn-book-now" onClick={handleClick}>Book Now</button>
        </div>
        <div className="lawn service-card flex items-center justify-center">
  <div className="text-container w-3/5 text-center">
          <h1 className="p-2">Irrigation Services</h1>
          <p className="text-base">System installation, maintenance, and seasonal adjustments.</p> 
          </div>         
          <button className="btn-book-now text-xl md:border-2 md:border-green-600" onClick={handleClick}>Book Now</button>
        </div>
        <div className="lawn service-card flex items-center justify-center">
  <div className="text-container w-3/5 text-center">
          <h1 className="p-2">Pressure Washing Service</h1>
          <p className="text-base">Driveways, parking lots, walkways and building entrances.</p>
          </div>
          <button className="btn-book-now" onClick={handleClick}>Book Now</button>
        </div>
        <div className="lawn service-card flex items-center justify-center">
  <div className="text-container w-3/5 text-center">
          <h1 className="p-2">Hardscape Maintenance</h1>
          <p className="text-base">Pathway, deck, and patio upkeep.</p>
          </div>
          <button className="btn-book-now" onClick={handleClick}>Book Now</button>
        </div>
        <div className="lawn service-card flex items-center justify-center">
  <div className="text-container w-3/5 text-center">
          <h1 className="p-2">Seasonal Planting</h1>
          <p className="text-base">Annuals and perennials</p>
          </div>
          <button className="btn-book-now" onClick={handleClick}>Book Now</button>
        </div>
        <div className="lawn service-card flex items-center justify-center">
  <div className="text-container w-3/5 text-center">
          <h1 className="p-2">Landscape Design</h1>
          <p className="text-base">Custom designs to enhance property aesthetics and functionality.</p>
          </div>
          <button className="btn-book-now" onClick={handleClick}>Book Now</button>
        </div>
        <div className="lawn service-card flex items-center justify-center">
  <div className="text-container w-3/5 text-center">
          <h1 className="p-2">Snow Removal and Winter Services</h1>
          <p className="text-base">Snow and ice management services.</p>
          </div>
          <button className="btn-book-now" onClick={handleClick}>Book Now</button>
        </div>
        
        
      </Carousel>
    </div>
  )
}

