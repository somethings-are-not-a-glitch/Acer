import React from 'react'
import laptop from '../../assets/topmost.png'
import './Intro.css'

export default function Intro() {
  return (
    <div className='intro'>
      < div className='bgImage'>
        <img src={laptop} alt='laptop acer'/>
        <div className='box'></div>
        <h3>Gaming Laptop</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, maiores.</p>
      </div>
    </div>
  )
}
