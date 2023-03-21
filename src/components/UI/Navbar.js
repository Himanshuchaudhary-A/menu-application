import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" href="#">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        < Link to='' class="nav-link" >Home</Link>
      </li>
      <li class="nav-item">
        <Link to='/menu' class="nav-link" >Menu</Link>
      </li>
      <li class="nav-item">
        <Link to='' class="nav-link" >Blog</Link>
      </li>
   </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar

