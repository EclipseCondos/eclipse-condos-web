import React from 'react';
import styles from '@/styles/Navbar.module.css';

const HamburgerMenu = ({ isOpen, onToggle }) => {
  return (
    <div 
      className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} 
      onClick={onToggle}
      role="button"
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerMenu;
