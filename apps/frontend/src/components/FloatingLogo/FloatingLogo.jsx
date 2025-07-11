import React from 'react';
import styles from './FloatingLogo.module.css';

const FloatingLogo = ({ 
  size = 'medium', 
  className = '', 
  isMenuOpen = false,
  isMobile = false 
}) => {
  // Determinar el tamaño basado en el estado del menú y el dispositivo
  const getEffectiveSize = () => {
    if (isMobile) {
      return isMenuOpen ? 'large' : 'small';
    }
    return size;
  };

  const effectiveSize = getEffectiveSize();

  return (
    <div className={`${styles.logoContainer} ${styles[effectiveSize]} ${className} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.logoWrapper}>
        <img 
          src="/images/logo/Eclipse Condos Icon (white).png" 
          alt="Eclipse Condos" 
          className={styles.logoImage}
        />
        <div className={styles.logoGlow}></div>
      </div>
    </div>
  );
};

export default FloatingLogo;
