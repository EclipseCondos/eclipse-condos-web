import React from 'react';
import styles from '@/styles/Home/home.module.css';
import infoStyles from '@/styles/Home/aboutus.module.css'
import clsx from 'clsx';
import {Cta, Values, Timeline, Philosophy} from '@/components/sections'; // Importar las secciones necesarias

const Home = () => {
    return (
        <div className={infoStyles.aboutContainer}>
            <section className={infoStyles.heroSection}>
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
                {/* Descubre mas */}
                <div className={infoStyles.scrollIndicator}>
                    <span className={infoStyles.scrollText}>Descubre más</span>
                    <div className={infoStyles.scrollArrow}>
                        <div className={infoStyles.arrowLine}></div>
                        <div className={infoStyles.arrowHead}></div>
                    </div>
                </div>
            </section>
            <section className={clsx(infoStyles.sectionBlur)}>
                {/* Info Sections */}
                <Philosophy/>
                <Values />
                <Timeline /> 
                <Cta />
            </section>
        </div>

    );
};

export default Home;