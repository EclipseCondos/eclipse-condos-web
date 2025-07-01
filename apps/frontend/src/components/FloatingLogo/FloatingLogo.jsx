import React from 'react';
import styles from './FloatingLogo.module.css';

const FloatingLogo = ({ size = 'medium', className = '' }) => {
  return (
    <div className={`${styles.logoContainer} ${styles[size]} ${className}`}>
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
