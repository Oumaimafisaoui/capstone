import React from 'react'
import food from '../assets/restauranfood.jpg'

const Chicago = () => {
  return (
    <div className='section1'>
    <div className='part'> 
    <div className='part1'> 
      <div className='title1'>Little Lemon</div>
      <div className='subtitle1'>Chicago</div>
    </div>
      <div className='part2'>
      <p className='paragraph1'>
      We are a family owned Mediterranean restaurent, focused on traditional recipes served with a modern twist.
      We are a family owned Mediterranean restaurent, focused on traditional recipes served with a modern twist.
      </p>
      </div>
    </div>

    <div className='img'>
      <img src={food} alt="" className="food"/>
      <img src={food} alt="" className="food1"/>
    </div>
    </div>
  )
}

export default Chicago