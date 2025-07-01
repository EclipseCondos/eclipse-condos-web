'use client';

import React from 'react';
import Image from 'next/image';
import styles from './FloatingLogo.module.css';

const FloatingLogo = ({ 
  size = 'medium', 
  className = '', 
  enableRotation = false,
  animationSpeed = 'normal',
  showGlow = true,
  alt = 'Eclipse Condos'
}) => {
  const getSizeClass = () => styles[size] || styles.medium;
  const getRotationClass = () => enableRotation ? styles.withRotation : styles.withoutRotation;
  const getSpeedClass = () => styles[`speed-${animationSpeed}`] || styles['speed-normal'];

  const containerClasses = [
    styles.logoContainer,
    getSizeClass(),
    className
  ].filter(Boolean).join(' ');

  const wrapperClasses = [
    styles.logoWrapper,
    getRotationClass(),
    getSpeedClass()
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <div className={wrapperClasses}>
        <div className={styles.imageContainer}>
          <Image 
            src="/images/logo/Eclipse Condos Icon (white).png" 
            alt={alt}
            fill
            sizes="(max-width: 768px) 40px, (max-width: 1024px) 60px, 80px"
            className={styles.logoImage}
            priority
          />
        </div>
        {showGlow && <div className={styles.logoGlow}></div>}
      </div>
    </div>
  );
};

export default FloatingLogo;
