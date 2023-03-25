import { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'
import logo from './diviLogo.png'
import './NavBar.css'

import PerfilWidget from '../PerfilWidget';

const MenuNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };


  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-dark move fixed-top ${isScrolled ? 'bg-dark' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Divi Logo" className={`logo ${isScrolled ? 'consize' : ''}`} />
        </a>
         <ul className={`navbar-nav navbar-toggler ${isScrolled ? '' : 'd-none'}`}>
            <li className="nav-item ">
                <div className="nav-link"><NavLink className="nav-link" to='/cart'><CartWidget/></NavLink></div>
              </li>
          </ul>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <NavLink className="nav-link mx-2 active fs-4" to='/'>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/Contacto' className="nav-link mx-2 fs-4">Contacto</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link mx-2 dropdown-toggle fs-4" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a href="#inicio"><NavLink className="dropdown-item" to='/categoria/remera'>Remeras</NavLink></a></li>
                <li><NavLink className="dropdown-item" to='/categoria/chomba'>Chombas</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2 active fs-4" to='/Perfil'><PerfilWidget/></NavLink>
            </li>
            <li className="nav-item">
                <div className="nav-link"><NavLink className="nav-link d-none d-sm-block" to='/cart'><CartWidget/></NavLink></div>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div className={`bgNav ${isScrolled ? '' : ''}`}>
        <h1 className="display-3 text-center text-white greatVibesFont h1Nav">
          <br />
        </h1>
      </div>
    </>

  );
}

export default MenuNav



{/* <nav className="navbar navbar-expand navbar-light bg-light px-5">
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
</nav> */}