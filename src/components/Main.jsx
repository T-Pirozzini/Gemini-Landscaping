import React from 'react'
import "./Main.css"
import Grass from "../images/justin-schwartfigure.jpg"
import { Parallax } from 'react-parallax';

export default function Main() {
  return (
    <Parallax bgImage={'/vanIsle.jpg'} strength={500}>
    <div className='main'>      
      <img src={Grass} alt="grass" />
    </div>
    </Parallax>
  )
}
