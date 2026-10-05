import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { navbarConfig } from './navbar-config';

const Logo = ({ isMenuOpen = false }) => {
  const { logo } = navbarConfig;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return (
    <div className={`${styles.logoContainer} ${isMobile && isMenuOpen ? styles.logoExpanded : ''}`}>
      <Link href={logo.href} className={styles.logoLink}>
        <img 
          src={logo.src}
          alt={logo.alt}
          className={`${styles.logoImage} ${isMobile ? styles.logoMobile : ''}`}
        />
      </Link>
    </div>
  );
};

export default Logo;
