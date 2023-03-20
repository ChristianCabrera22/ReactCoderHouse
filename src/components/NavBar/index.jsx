import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'




const MenuNav = () => {
  return (
      <nav className="navbar navbar-expand navbar-light bg-light px-5">
  <NavLink className="navbar-brand" to='/'>LaLocura</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <div className="nav-link"><NavLink className="nav-link nav-link" to='/'>Inicio<span className="sr-only"></span></NavLink></div>
      </li>
      <li className="nav-item">
      <div className="nav-link text-dark">
        <NavLink to='/Contacto' className="nav-link">Contacto</NavLink></div>
      </li>
      <li className="nav-item">
      <div className="nav-link">
        <NavLink className="nav-link" to='/categoria/remera'>Remeras</NavLink>
      </div>
      </li>
      <li className="nav-item">
      <div className="nav-link"><NavLink className="nav-link" to='/categoria/chomba'>Chombas</NavLink></div>
      </li>
      <li className="nav-item">
      <div className="nav-link"><NavLink className="nav-link" to='/cart'><CartWidget/></NavLink></div>
      </li>
    </ul>
  </div>
</nav>)}

export default MenuNav