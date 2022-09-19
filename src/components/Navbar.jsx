import React from 'react'
import './Navbar.css'
import GeminiLogo from '../images/gemini-logo.png'

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
    <div className='navMain relative h-full width-screen flex flex-col justify-center items-center z-1 preserve-3d'>      
      <img src={GeminiLogo} className="logo w-96 distance-1" alt="gemini-logo" />
      {/* <span  className="text-white self-center" onClick={focusAbout}>ABOUT</span>
      <span className="text-white" onClick={focusServices}>SERVICES</span>
      <span className="text-white" onClick={focusContact}>CONTACT</span> */}
    </div>
  )
}
