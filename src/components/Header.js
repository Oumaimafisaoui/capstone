import React from 'react'
import '../index.css'
import food from '../assets/restauranfood.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='section'>
      <div className='part'> 
      <div>
        <div className='title'>Little Lemon</div>
        <div className='subtitle'>Chicago</div>
      </div>
        <div>
        <p className='paragraph'>
        We are a family owned Mediterranean restaurent, focused on traditional recipes served with a modern twist.
        </p>
        <button className='button'>Reserve a Table</button>
        </div>
      </div>

      <div className='img'>
        <img src={food} alt="" width={320} height={360} className="food"/>
      </div>
      </div>

    </div>
  )
}

export default Header