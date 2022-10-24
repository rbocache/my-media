import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/LogoApp.png';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import ModeTwoToneIcon from '@mui/icons-material/ModeTwoTone';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DonutSmallTwoToneIcon from '@mui/icons-material/DonutSmallTwoTone';

export const HeaderNav = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Imagen del logo" />
        <h3>Biblioteca de Raül Bocache</h3>
      </div>

      <div className="actions">
      <AddCircleTwoToneIcon />
      <ModeTwoToneIcon />
      <HighlightOffTwoToneIcon />
      <SearchTwoToneIcon />
      <DonutSmallTwoToneIcon />

      </div>

      <nav className="medias">
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
