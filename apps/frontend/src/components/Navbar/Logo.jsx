import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { navbarConfig } from './navbar-config';

const Logo = () => {
  const { logo } = navbarConfig;
  
  return (
    <div className={styles.logoContainer}>
      <Link href={logo.href} className={styles.logoLink}>
        <img 
          src={logo.src}
          alt={logo.alt}
          className={styles.logoImage}
        />
      </Link>
    </div>
  );
};

export default Logo;
