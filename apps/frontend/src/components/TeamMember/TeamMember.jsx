'use client';

import React from 'react';
import Image from 'next/image';
import styles from './TeamMember.module.css';

const TeamMember = ({ 
  name, 
  profession, 
  image, 
  description,
  size = 'medium',
  className = '' 
}) => {
  return (
    <div className={`${styles.teamMember} ${styles[size]} ${className}`}>
      <div className={styles.memberImage}>
        <div className={styles.imageContainer}>
          <Image
            src={image || "/images/team/default-avatar.png"}
            alt={`${name} - ${profession}`}
            fill
            sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 250px"
            className={styles.avatar}
          />
        </div>
        <div className={styles.imageGlow}></div>
      </div>
      
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberProfession}>{profession}</p>
        {description && (
          <p className={styles.memberDescription}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
