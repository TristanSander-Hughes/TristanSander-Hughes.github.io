import React from 'react';

import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { makeClass } from '../../utils';

const Nav = ({ isHome }) => {
  const className = makeClass(
    styles.Nav,
    isHome ? styles.HomeWidth : null
  );

  return (
    <div className={className}>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <div className={styles.Logo}>
        <img src="/images/logo.png" alt="Aporcypha Logo" />
      </div>
      <NavLink to="/team">Team</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
  );
}

export default Nav;