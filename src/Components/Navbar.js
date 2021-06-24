import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {

  const location = useLocation()
  console.log(location);

  return (
    <div className='navbar-div'>
      {location.pathname == '/' ? <Link to='/cart' className="menu">Cart</Link> : <Link to='/' className="menu">Products</Link>}
    </div>
  )
}

export default Navbar
