'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Navbar.module.css';

const DropdownMenu = ({ items, isOpen, onLinkClick }) => {
  const pathname = usePathname();

  if (!isOpen || !items) return null;

  return (
    <div className={styles.dropdown}>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`${styles.dropdownItem} ${pathname === item.href ? styles.activeDropdownItem : ''}`}
          onClick={onLinkClick}
        >
          {pathname === item.href && (
            <span className={styles.activeIndicator}></span>
          )}
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
