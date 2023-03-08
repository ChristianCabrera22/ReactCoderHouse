import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'
import './NavBar.css'
const MenuNav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
  <navLink class="navbar-brand" href='/'>LaLocura</navLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <div class="nav-link"><NavLink class="nav-link nav-link" to='/'>Inicio<span class="sr-only"></span></NavLink></div>
      </li>
      <li class="nav-item">
      <div class="nav-link text-dark">
        <NavLink to='/Contacto' class="nav-link">Contacto</NavLink></div>
      </li>
      <li class="nav-item">
      <div class="nav-link">
        <NavLink class="nav-link" to='/categoria/remera'>Remeras</NavLink>
      </div>
      </li>
      <li class="nav-item">
      <div class="nav-link"><NavLink class="nav-link" to='/categoria/chomba'>Chombas</NavLink></div>
      </li>
      <li class="nav-item">
      <div class="nav-link"><NavLink class="nav-link" to='/cart'><CartWidget/></NavLink></div>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default MenuNav