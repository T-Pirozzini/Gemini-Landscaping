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
    <div className="pb-6 lg:flex lg:justify-center">
      <img src={GeminiLogo} className="relative inset-x-0 saturate-150 lg:w-1/3" alt="gemini-logo" />       
    </div>
  )
}
