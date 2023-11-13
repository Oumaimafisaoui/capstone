import React from 'react'
import lemon from '../assets/Logo .svg'
import '../index'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='nav'>
      <div className='image'>
        <img alt="" src={lemon} />
      </div>
        <ul className='list'>
            <Link to="/">Home</Link>
            <Link to="/booking">Booking a Table</Link>
        </ul>
    </nav>
  )
}

export default Nav