import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/LogoApp.png'; 

export const HeaderNav = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Imagen del logo" />
        <h3>Biblioteca de Raül Bocache</h3>
      </div>

      <nav>
        <ul>
          <li><NavLink to="/mediateca" className={({isActive}) => isActive ? "active" : ""}>Mediateca</NavLink></li>
          <li><NavLink to="/musica" className={({isActive}) => isActive ? "active" : ""}>Música</NavLink></li>
          <li><NavLink to="/peliculas" className={({isActive}) => isActive ? "active" : ""}>Películas</NavLink></li>
          <li><NavLink to="/series" className={({isActive}) => isActive ? "active" : ""}>Series</NavLink></li>
          <li><NavLink to="/documentales" className={({isActive}) => isActive ? "active" : ""}>Docus</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};
