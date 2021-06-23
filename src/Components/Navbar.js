import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-div'>
      <Link to='/cart' className="menu">Cart</Link>
    </div>
  )
}

export default Navbar
