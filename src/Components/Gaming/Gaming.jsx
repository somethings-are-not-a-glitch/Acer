import React from 'react'
import LoremSec3 from '../../assets/midsection3.jpeg'
import './Gaming.css'
import Imagecrop from '../../assets/Coppedimg.jpeg'
import Imagecrop2 from '../../assets/midsection2.jpeg'

export default function Gaming() {
  return (
<>
    <div className='gaming'>
        <div className='left'>
          <div className='box'/>
<h3>pure Gaming <br/>stuff with Lorem ipsum<br/> at the Islands</h3>
<p>-Something is here?</p>
<p>-Something is here?</p>
<p>-Something is here?</p>
<a href='#'>more Gaming is here? →</a>
        </div>
        <div className='right'>
<img src={LoremSec3}></img>
        </div>
    </div>
            <div className='gaming-center'>
          <div className='center-left'>
            <img width={300} src={Imagecrop} alt='Lorem'/>
            <p>Red is very dead and his deception caused a depresion</p>
          </div>
          <div className='center-right'>
            <p>Blue is not violets!</p>
            <img width={300} src={Imagecrop2} alt='Lorem'/>
            <p>the color purple is not hollow</p>
          </div>
        </div>
</>
  )
}
