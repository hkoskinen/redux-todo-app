import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div style={{ textAlign: 'center' }}>
    <nav>
      <NavLink to="/" exact>home</NavLink>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/dashboard">dashboard</NavLink>
    </nav>
    <hr />
  </div>
);

export default Header;
