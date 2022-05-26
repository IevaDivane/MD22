import React from 'react';
import { NavLink } from 'react-router-dom';

const getActiveLinkClassName = (isActive:boolean) => (isActive ? 'link link-active' : 'link');

const Header = () => (
  <header>
    <nav className="navigation">
      <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/pokemons"
      >
        Pokemons
      </NavLink>
    </nav>
  </header>
);

export default Header;
