import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="flex justify-center">
      <div className="relative about w-11/12 tracking-wide rounded-md p-2 bg-slate-700 md:text-center md:text-xl md:p-4 lg:text-2xl lg:w-1/2">
        <h1 className="text-center border-b-2 border-green-600 text-2xl lg:text-5xl">ABOUT US</h1>
        <p className="py-2">Serving Strata and Commercial clients across Vancouver Island.</p> 
        <p>We provide full-service landscaping packages year-round and are currently looking to expand our portfolio for the 2023 season.</p>
      </div>
    </div>
  )
}
