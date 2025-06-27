import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const navItems = [
    { name: 'INICIO', path: '/' },
    { name: 'NOSOTROS', path: '/About Us' },
    { name: 'ACTIVIDADES', path: '/Actividades' },
    { name: 'DEPARTAMENTOS', path: '/Departamentos' },
  ];

  return (
    <>
      {/* Logo independiente */}
      <div className={styles.logoContainer}>
        <Link href="/" legacyBehavior>
          <a className={styles.logoLink}>
            <img 
              src="/images/logo/Eclipse Condos logo (black) .png" 
              alt="Eclipse Condos" 
              className={styles.logoImage}
            />
          </a>
        </Link>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
            {/* Hamburger icon */}
            <div></div>
            <div></div>
            <div></div>
          </div>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            {/* Botón de cerrar para móvil */}
            <div className={styles.closeButton} onClick={toggleMenu}>
              <div></div>
              <div></div>
            </div>
            
            {navItems.map(item => (
              <li key={item.name} onClick={() => setMenuOpen(false)}>
                <Link href={item.path} legacyBehavior>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay para cerrar el menu en móvil */}
      {menuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
