import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Login">Login</Link>
    </nav>
  )
}

export default Navbar
