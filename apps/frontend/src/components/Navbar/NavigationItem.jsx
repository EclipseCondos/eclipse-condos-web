'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Navbar.module.css';
import DropdownMenu from './DropdownMenu';

const NavigationItem = ({ link, openDropdowns, onToggleDropdown, onLinkClick }) => {
  const pathname = usePathname();
  
  // Check if the current path matches this link or any of its dropdown items
  const isActiveLink = (link) => {
    if (pathname === link.href) return true;
    if (link.hasDropdown && link.dropdownItems) {
      return link.dropdownItems.some((item) => pathname === item.href);
    }
    return false;
  };

  if (link.hasDropdown) {
    return (
      <div
        className={styles.dropdownContainer}
        onMouseEnter={() => onToggleDropdown(link.name, true)}
        onMouseLeave={() => onToggleDropdown(link.name, false)}
      >
        {/* Main dropdown button navigates to all items */}
        <Link
          href={link.href}
          className={`${styles.navButton} ${isActiveLink(link) ? styles.active : ''}`}
          onClick={onLinkClick}
        >
          <span>{link.name}</span>
          <div className={`${styles.chevron} ${openDropdowns[link.name] ? styles.open : ''}`}>
            ▼
          </div>
        </Link>

        <DropdownMenu
          items={link.dropdownItems}
          isOpen={openDropdowns[link.name]}
          onLinkClick={onLinkClick}
        />
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
      onClick={onLinkClick}
    >
      {link.name}
    </Link>
  );
};

export default NavigationItem;
