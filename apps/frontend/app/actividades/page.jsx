import React from 'react';
import styles from '@/styles/aboutus.module.css';

const AboutUs = () => {
    return (
        <div className={styles.aboutContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>SOBRE NOSOTROS</h1>
                    <div className={styles.heroSubtitle}>
                        <img 
                            src="/images/logo/Eclipse Condos Icon (white).png" 
                            alt="Eclipse Condos" 
                            className={styles.heroIcon}
                        />
                        <span>Eclipse Condos</span>
                        <img 
                            src="/images/logo/Eclipse Condos Icon (white).png" 
                            alt="Eclipse Condos" 
                            className={styles.heroIcon}
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.mainContent}>
                
                {/* Story Section */}
                <div className={styles.storySection}>
                    <div className={styles.glassCard}>
                        <div className={styles.cardHeader}>
                            <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
                        </div>
                        <div className={styles.cardContent}>
                            <p className={styles.storyText}>
                                Eclipse Condos nació de una visión: crear espacios únicos donde la modernidad 
                                se encuentra con el confort, y donde cada residente puede experimentar un estilo 
                                de vida excepcional. Desde nuestros inicios, nos hemos comprometido a desarrollar 
                                proyectos que no solo transformen paisajes urbanos, sino que también enriquezcan 
                                las vidas de quienes los habitan.
                            </p>
                            <p className={styles.storyText}>
                                Con años de experiencia en el sector inmobiliario, hemos perfeccionado el arte 
                                de combinar diseño innovador, tecnología de vanguardia y sostenibilidad ambiental 
                                en cada uno de nuestros desarrollos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className={styles.valuesSection}>
                    <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🏗️</div>
                            <h3 className={styles.valueTitle}>Excelencia</h3>
                            <p className={styles.valueText}>
                                Nos comprometemos con los más altos estándares de calidad en cada proyecto.
                            </p>
                        </div>
                        
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🌱</div>
                            <h3 className={styles.valueTitle}>Sostenibilidad</h3>
                            <p className={styles.valueText}>
                                Desarrollamos con respeto al medio ambiente y pensando en el futuro.
                            </p>
                        </div>
                        
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>💎</div>
                            <h3 className={styles.valueTitle}>Innovación</h3>
                            <p className={styles.valueText}>
                                Implementamos las últimas tendencias en diseño y tecnología residencial.
                            </p>
                        </div>
                        
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🤝</div>
                            <h3 className={styles.valueTitle}>Confianza</h3>
                            <p className={styles.valueText}>
                                Construimos relaciones duraderas basadas en transparencia y compromiso.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className={styles.missionVisionSection}>
                    <div className={styles.missionVisionGrid}>
                        <div className={styles.glassCard}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.sectionTitle}>Nuestra Misión</h2>
                            </div>
                            <div className={styles.cardContent}>
                                <p className={styles.missionText}>
                                    Crear espacios residenciales excepcionales que superen las expectativas 
                                    de nuestros clientes, combinando diseño innovador, calidad superior y 
                                    un servicio personalizado que transforme la experiencia de vivir.
                                </p>
                            </div>
                        </div>
                        
                        <div className={styles.glassCard}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.sectionTitle}>Nuestra Visión</h2>
                            </div>
                            <div className={styles.cardContent}>
                                <p className={styles.visionText}>
                                    Ser reconocidos como la desarrolladora líder en proyectos residenciales 
                                    de lujo, estableciendo nuevos estándares en diseño, sostenibilidad y 
                                    calidad de vida urbana en cada comunidad donde tenemos presencia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className={styles.teamSection}>
                    <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
                    <div className={styles.teamIntro}>
                        <p className={styles.teamText}>
                            Contamos con un equipo multidisciplinario de profesionales apasionados por la 
                            arquitectura, el diseño y la construcción. Cada miembro aporta experiencia única 
                            y visión innovadora para hacer realidad proyectos extraordinarios.
                        </p>
                    </div>
                </div>

                {/* Contact CTA Section */}
                <div className={styles.ctaSection}>
                    <div className={styles.glassCard}>
                        <div className={styles.cardContent}>
                            <h2 className={styles.ctaTitle}>¿Listo para conocer más?</h2>
                            <p className={styles.ctaText}>
                                Descubre cómo Eclipse Condos puede hacer realidad tu próximo hogar ideal.
                            </p>
                            <div className={styles.ctaButtons}>
                                <button className={styles.primaryButton}>
                                    Ver Departamentos
                                </button>
                                <button className={styles.secondaryButton}>
                                    Contactanos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default AboutUs;