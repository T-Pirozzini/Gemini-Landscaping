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
    <div className='relative flex justify-center -z-1 preserve-3d z-1'>      
      <img src={GeminiLogo} className="logo w-4/5 drop-shadow-md distance-1 mb-20" alt="gemini-logo" />
      {/* <span  className="text-white self-center" onClick={focusAbout}>ABOUT</span>
      <span className="text-white" onClick={focusServices}>SERVICES</span>
      <span className="text-white" onClick={focusContact}>CONTACT</span> */}
    </div>
  )
}
