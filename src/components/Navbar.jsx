import React from 'react'
import GeminiLogo from '../images/gemini-logo.png'
// import VanIsle from '../images/lesly-derksen.jpg'

const focusAbout = () => {
  document.querySelector('.about-container').scrollIntoView({block:'center', behavior: "smooth"});
}
const focusServices = () => {
  document.querySelector('.items').scrollIntoView({block:'center', behavior: "smooth"});
}
const focusContact = () => {
  document.querySelector('.contact-container').scrollIntoView({block:'center', behavior: "smooth"});
}

export default function Navbar() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth perspective">
      <div className="absolute top-0 w-full object-cover brightness-50 grayscale -z-10">
          {/* <img className="background" src={VanIsle} /> */}
        </div> 
      <div className='relative flex -z-1 preserve-3d z-1'>      
        <img src={GeminiLogo} className="logo distance-1 saturate-150" alt="gemini-logo" />
        {/* <span  className="text-white self-center" onClick={focusAbout}>ABOUT</span>
        <span className="text-white" onClick={focusServices}>SERVICES</span>
        <span className="text-white" onClick={focusContact}>CONTACT</span> */}
      </div>
    </div>
  )
}
