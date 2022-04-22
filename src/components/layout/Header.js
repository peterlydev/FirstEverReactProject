import React from 'react'

const Header = () => {
  return (
    <nav className="navbar">
    <h1>The Music Page</h1>
    <div className="links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/music">Music</a>
    </div>
    </nav>
  )
}

export default Header
