// src/components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>TechEdu</h1>
      <ul className={styles.navLinks}>
        <li><a href="/ambientes">Ambientes</a></li>
        <li><a href="/sensores">Sensores</a></li>
        <li><a href="/historicos">Históricos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
