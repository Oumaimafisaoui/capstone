import React from 'react'
import '../index.css'
import food from '../assets/restauranfood.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='section'>
      <div className='part'> 
      <div className='part1'> 
        <div className='title'>Little Lemon</div>
        <div className='subtitle'>Chicago</div>
      </div>
        <div className='part2'>
        <p className='paragraph'>
        We are a family owned Mediterranean restaurent, focused on traditional recipes served with a modern twist.
        </p>
        <button className='button'>Reserve a Table</button>
        </div>
      </div>

      <div className='img'>
        <img src={food} alt="" className="food"/>
      </div>
      </div>

    </div>
  )
}

export default Header