import React from 'react'
import lemon from '../assets/Logo .svg'
import '../index'
import { Link } from 'react-router-dom';
import Booking from './Booking';
const Nav = () => {
  return (
    <nav className='nav'>
      <div className='image'>
        <img alt="" src={lemon} />
      </div>
        <ul className='list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Booking a Table</Link></li>
        </ul>
    </nav>
  )
}

export default Nav