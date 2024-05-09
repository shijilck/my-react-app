import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div class="header">
    <div class="container">
        <img class="logo" src="./img/logo.svg" alt="" />
        <div class="menu-icon">&#9776;</div> 
        <div class="nav-options">
            <ul class="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/">Service</a></li>
                <li><a href="/">Product</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    </div>
</div>

  )
}

export default Navbar
