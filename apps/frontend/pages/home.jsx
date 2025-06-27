import React from 'react';
import styles from '@/styles/home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            {/* Video de fondo en su posición original */}
            

            {/* Overlay para mejorar legibilidad del texto */}
            <div className={styles.homeOverlay}></div>

            {/* Contenido principal */}
            <div className={styles.homeContent}>
                {/* Texto de bienvenida */}
                <h1 className={styles.homeTitle}>
                    BIENVENIDO A
                </h1>
                
                {/* Logo con texto Eclipse Condos */}
                <div className={styles.homeLogoContainer}>
                    <img 
                        src="/images/logo/Eclipse Condos logo (black) .png" 
                        alt="Eclipse Condos Logo" 
                        className={styles.homeLogo}
                    />
                </div>

                {/* Subtítulo */}
                <p className={styles.homeSubtitle}>
                    Tu lugar ideal te está esperando
                </p>

                {/* Iconos decorativos pequeños */}
                <div className={styles.homeDecorativeIcons}>
                    <img 
                        src="/images/logo/Eclipse Condos Icon (white).png" 
                        alt="Eclipse Condos" 
                        className={styles.homeDecorativeIcon}
                    />
                    <div className={styles.homeDecorativeLine}></div>
                    <img 
                        src="/images/logo/Eclipse Condos Icon (white).png" 
                        alt="Eclipse Condos" 
                        className={styles.homeDecorativeIcon}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;