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
          <li><NavLink to="/mediateca">Mediateca</NavLink></li>
          <li><NavLink to="/musica">Música</NavLink></li>
          <li><NavLink to="/peliculas">Películas</NavLink></li>
          <li><NavLink to="/series">Series</NavLink></li>
          <li><NavLink to="/documentales">Docus</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};
