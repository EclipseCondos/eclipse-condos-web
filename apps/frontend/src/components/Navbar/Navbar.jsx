"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Navbar.module.css';
import { navLinks } from './navigation-data';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import NavigationItem from './NavigationItem';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Toggle or set dropdown state (click or hover)
  const toggleDropdown = (name, force) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [name]: typeof force === 'boolean' ? force : !prev[name]
    }));
  };

  // Check if dropdown should be open by default (when a child is active)
  const isDropdownOpenByDefault = (link) => {
    if (!link.hasDropdown || !link.dropdownItems) return false;
    return link.dropdownItems.some((item) => pathname === item.href);
  };

  // Initialize dropdowns that should be open
  useEffect(() => {
    const initialDropdowns = {};
    navLinks.forEach(link => {
      if (isDropdownOpenByDefault(link)) {
        initialDropdowns[link.name] = true;
      }
    });
    setOpenDropdowns(initialDropdowns);
  }, [pathname]);

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Logo Component */}
      <Logo />

      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          {/* Hamburger Menu Component */}
          <HamburgerMenu isOpen={menuOpen} onToggle={toggleMenu} />

          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            {/* Botón de cerrar para móvil */}
            <div className={styles.closeButton} onClick={toggleMenu}>
              <div></div>
              <div></div>
            </div>
            
            {navLinks.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <NavigationItem 
                  link={link}
                  openDropdowns={openDropdowns}
                  onToggleDropdown={toggleDropdown}
                  onLinkClick={handleLinkClick}
                />
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
