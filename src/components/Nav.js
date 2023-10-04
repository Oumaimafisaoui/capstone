import React from 'react'
import lemon from '../assets/Logo .svg'
import '../index'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='image'>
        <img alt="" src={lemon} />
      </div>
        <ul className='list'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Order online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav