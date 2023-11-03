import React from 'react'
import GeminiLogo from '../images/gemini-icon-transparent.png'
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";
import './Navbar.css'

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
    <nav className="navbar sticky top-0 z-10 shadow-lg p-4 bg-[#2F3E46]" >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="logo flex items-center">
            <img src={GeminiLogo} alt="Logo" className="w-32 h-32" />
            <h1 id='title' className="text-4xl font-bold pl-4 text-white font-['Alegreya']">Gemini Landscaping</h1>
          </div>

          {/* Navigation Items */}
          <ul className="flex space-x-12">
            <li className="nav-item text-2xl text-[#CAD2C5]" onClick={focusAbout}>About us</li>
            <li className="nav-item text-2xl text-[#CAD2C5]" onClick={focusServices}>Services</li>            
            <li className="nav-item text-2xl text-[#CAD2C5]" onClick={focusContact}>Contact us</li>
          </ul>

          {/* Social Media Icons */}
          <ul className="flex space-x-4">
            <li className="social-icon" style={{ color: '#CAD2C5' }}>
              <a href="https://www.instagram.com/gemini_landscaping/" target="_blank" rel="noopener noreferrer">
                <FaInstagram alt="Instagram" className="w-6 h-6" />
              </a>
            </li>
            <li className="social-icon" style={{ color: '#CAD2C5' }}>
              <a href="mailto:andy@gemini-landscaping.com">
                <FaEnvelope alt="Email" className="w-6 h-6" />
              </a>
            </li>
            <li className="social-icon text-[#CAD2C5]">
              <a className='flex items-center' href="tel:+12508160038">
                <FaPhone alt="Phone" className="w-6 h-6" />
                <p className='font-white ml-2'>1-250-816-0038</p>
              </a>
              
            </li>
          </ul>
        </div>
      </nav>
  );
}
