import React from 'react';
import styles from '@/styles/aboutus.module.css';
import clsx from 'clsx'
import FloatingLogo from '@/components/animations/FloatingLogo';
import TeamMember from '@/components/TeamMember/TeamMember';

const AboutUs = () => {
    return (
        <div className={styles.aboutContainer}>
            {/* Hero Section with Parallax Effect */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.heroAnimation}>
                        <div className={styles.heroIntro}>
                            <h1 className={styles.heroTitle}>
                                <span className={styles.titleWord}>SOBRE</span>
                                <FloatingLogo 
                                    size="large" 
                                    enableRotation={false}
                                    showGlow={true}
                                    animationSpeed="normal"
                                    className={styles.titleLogo} 
                                />
                                <span className={styles.titleWord}>NOSOTROS</span>
                            </h1>
                            <p className={styles.heroSubtitle}>
                                Conoce al equipo detrás de Eclipse Condos
                            </p>
                        </div>
                        
                        {/* Team Members Grid in Hero */}
                        <div className={styles.heroTeamGrid}>
                            <div className={styles.heroTeamCard}>
                                <div className={styles.teamMemberIcon}>🏢</div>
                                <h3 className={styles.teamMemberTitle}>Propietarios</h3>
                                <p className={styles.teamMemberDescription}>
                                    Visionarios que crearon Eclipse Condos con pasión por la hospitalidad
                                </p>
                            </div>
                            
                            <div className={styles.heroTeamCard}>
                                <div className={styles.teamMemberIcon}>📊</div>
                                <h3 className={styles.teamMemberTitle}>Gestión</h3>
                                <p className={styles.teamMemberDescription}>
                                    Expertos en administración y operaciones de hospedaje de lujo
                                </p>
                            </div>
                            
                            <div className={styles.heroTeamCard}>
                                <div className={styles.teamMemberIcon}>🎨</div>
                                <h3 className={styles.teamMemberTitle}>Diseñadores</h3>
                                <p className={styles.teamMemberDescription}>
                                    Creativos que transforman espacios en experiencias memorables
                                </p>
                            </div>
                            
                            <div className={styles.heroTeamCard}>
                                <div className={styles.teamMemberIcon}>🛎️</div>
                                <h3 className={styles.teamMemberTitle}>Atención al Cliente</h3>
                                <p className={styles.teamMemberDescription}>
                                    Dedicados a crear momentos especiales para cada huésped
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.scrollIndicator}>
                    <span className={styles.scrollText}>Descubre más</span>
                    <div className={styles.scrollArrow}>
                        <div className={styles.arrowLine}></div>
                        <div className={styles.arrowHead}></div>
                    </div>
                </div>
            </section>
            <section className={clsx(styles.sectionBlur)}>
                

                {/* Story Timeline Section with Overlay */}
                <section className={clsx(styles.philosophySection)}>
                    <div className={styles.sectionOverlay}></div>
                    <div className={styles.container}>
                        <div className={styles.philosophyContent}>
                            <div className={styles.philosophyText}>
                                <div className={styles.sectionTag}>
                                    <span className={styles.tagIcon}>✨</span>
                                    <span>Nuestra Filosofía</span>
                                </div>
                                <h2 className={styles.philosophyTitle}>
                                    Donde la <span className={styles.gradient}>hospitalidad</span> encuentra 
                                    el <span className={styles.gradient}>lujo</span>
                                </h2>
                                <p className={styles.philosophyDescription}>
                                    En Eclipse Condos, creemos que cada estancia debe ser una experiencia única que inspire 
                                    y transforme momentos. Nuestro enfoque va más allá del hospedaje: creamos 
                                    experiencias vacacionales que conectan el confort de casa con 
                                    la emoción de descubrir un lugar excepcional.
                                </p>
                                <div className={styles.philosophyQuote}>
                                    <div className={styles.quoteIcon}>"</div>
                                    <p className={styles.quoteText}>
                                        No ofrecemos departamentos, creamos experiencias memorables que perduran en el corazón.
                                    </p>
                                    <div className={styles.quoteAuthor}>- Equipo Eclipse Condos</div>
                                </div>
                            </div>
                            <div className={styles.philosophyVisual}>
                                <div className={styles.visualGrid}>
                                    <div className={styles.visualCard}>
                                        <div className={styles.cardIcon}>�</div>
                                        <h4>Hospedaje Premium</h4>
                                    </div>
                                    <div className={styles.visualCard}>
                                        <div className={styles.cardIcon}>🌿</div>
                                        <h4>Experiencias Únicas</h4>
                                    </div>
                                    <div className={styles.visualCard}>
                                        <div className={styles.cardIcon}>💎</div>
                                        <h4>Servicio Excepcional</h4>
                                    </div>
                                    <div className={styles.visualCard}>
                                        <div className={styles.cardIcon}>🏖️</div>
                                        <h4>Ubicación Privilegiada</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Timeline Section with Overlay */}
                <section className={clsx(styles.timelineSection)}>
                    <div className={styles.sectionOverlay}></div>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionTag}>
                                <span className={styles.tagIcon}>📖</span>
                                <span>Nuestra Historia</span>
                            </div>
                            <h2 className={styles.sectionTitle}>
                                Un viaje de <span className={styles.gradient}>transformación</span> 
                                y <span className={styles.gradient}>crecimiento</span>
                            </h2>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineYear}>2021</div>
                                <div className={styles.timelineContent}>
                                    <h3 className={styles.timelineTitle}>Los Inicios</h3>
                                    <p className={styles.timelineText}>
                                        Fundamos Eclipse Condos con la visión de ofrecer experiencias de hospedaje 
                                        excepcionales, combinando el confort de casa con el lujo de unas vacaciones memorables.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineYear}>2022</div>
                                <div className={styles.timelineContent}>
                                    <h3 className={styles.timelineTitle}>Primer Departamento</h3>
                                    <p className={styles.timelineText}>
                                        Lanzamos nuestro primer departamento de lujo en Mareazul, estableciendo 
                                        nuevos estándares en hospedaje vacacional y atención personalizada.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineYear}>2023</div>
                                <div className={styles.timelineContent}>
                                    <h3 className={styles.timelineTitle}>Expansión de Servicios</h3>
                                    <p className={styles.timelineText}>
                                        Ampliamos nuestra oferta con servicios concierge y experiencias personalizadas, 
                                        llevando la hospitalidad a un nivel superior.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineYear}>2024</div>
                                <div className={styles.timelineContent}>
                                    <h3 className={styles.timelineTitle}>Tecnología y Comodidad</h3>
                                    <p className={styles.timelineText}>
                                        Integramos tecnología inteligente y sistemas automatizados para brindar 
                                        mayor comodidad y una experiencia de hospedaje verdaderamente moderna.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section with Interactive Cards and Overlay */}
                <section className={clsx(styles.valuesSection)}>
                    <div className={styles.sectionOverlay}></div>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionTag}>
                                <span className={styles.tagIcon}>🎯</span>
                                <span>Nuestros Valores</span>
                            </div>
                            <h2 className={styles.sectionTitle}>
                                Los principios que <span className={styles.gradient}>nos guían</span>
                            </h2>
                        </div>
                        <div className={styles.valuesGrid}>
                            <div className={styles.valueCard}>
                                <div className={styles.cardBackground}></div>
                                <div className={styles.valueIcon}>
                                    <span>💎</span>
                                    <div className={styles.iconRing}></div>
                                </div>
                                <h3 className={styles.valueTitle}>Excelencia</h3>
                                <p className={styles.valueDescription}>
                                    Compromiso inquebrantable con la calidad superior en cada detalle de la experiencia, 
                                    desde la llegada hasta la despedida de nuestros huéspedes.
                                </p>
                                <div className={styles.valueFeatures}>
                                    <span>• Departamentos de lujo</span>
                                    <span>• Amenidades premium</span>
                                    <span>• Atención personalizada</span>
                                </div>
                            </div>
                            
                            <div className={styles.valueCard}>
                                <div className={styles.cardBackground}></div>
                                <div className={styles.valueIcon}>
                                    <span>🛎️</span>
                                    <div className={styles.iconRing}></div>
                                </div>
                                <h3 className={styles.valueTitle}>Hospitalidad</h3>
                                <p className={styles.valueDescription}>
                                    Servicio excepcional que anticipa y supera las expectativas, 
                                    creando momentos especiales durante cada estancia.
                                </p>
                                <div className={styles.valueFeatures}>
                                    <span>• Servicio concierge</span>
                                    <span>• Atención 24/7</span>
                                    <span>• Experiencias personalizadas</span>
                                </div>
                            </div>
                            
                            <div className={styles.valueCard}>
                                <div className={styles.cardBackground}></div>
                                <div className={styles.valueIcon}>
                                    <span>🏖️</span>
                                    <div className={styles.iconRing}></div>
                                </div>
                                <h3 className={styles.valueTitle}>Experiencia</h3>
                                <p className={styles.valueDescription}>
                                    Creamos memorias inolvidables combinando comodidad excepcional 
                                    con experiencias únicas en un entorno paradisíaco.
                                </p>
                                <div className={styles.valueFeatures}>
                                    <span>• Ubicación privilegiada</span>
                                    <span>• Actividades exclusivas</span>
                                    <span>• Conexión con la naturaleza</span>
                                </div>
                            </div>
                            
                            <div className={styles.valueCard}>
                                <div className={styles.cardBackground}></div>
                                <div className={styles.valueIcon}>
                                    <span>🤝</span>
                                    <div className={styles.iconRing}></div>
                                </div>
                                <h3 className={styles.valueTitle}>Confianza</h3>
                                <p className={styles.valueDescription}>
                                    Relaciones duraderas basadas en transparencia, integridad 
                                    y un compromiso genuino con la satisfacción del huésped.
                                </p>
                                <div className={styles.valueFeatures}>
                                    <span>• Comunicación clara</span>
                                    <span>• Transparencia total</span>
                                    <span>• Seguimiento post-estancia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section with Overlay */}
                <section className={clsx(styles.ctaSection)}>
                    <div className={styles.sectionOverlay}></div>
                    <div className={styles.container}>
                        <div className={styles.ctaContent}>
                            <div className={styles.ctaBackground}></div>
                            <div className={styles.ctaText}>
                                <h2 className={styles.ctaTitle}>
                                    ¿Listo para vivir una experiencia <span className={styles.gradient}>única</span>?
                                </h2>
                                <p className={styles.ctaSubtitle}>
                                    Descubre cómo Eclipse Condos puede hacer realidad tus vacaciones perfectas. 
                                    Explora nuestros departamentos exclusivos y únete a una experiencia de hospedaje excepcional.
                                </p>
                            </div>
                            <div className={styles.ctaActions}>
                                <button className={styles.primaryButton}>
                                    <span className={styles.buttonText}>Explorar Departamentos</span>
                                    <div className={styles.buttonIcon}>
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div className={styles.buttonGlow}></div>
                                </button>
                                <button className={styles.secondaryButton}>
                                    <span className={styles.buttonText}>Contactar Ahora</span>
                                    <div className={styles.buttonRipple}></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </div>
    );
};

export default AboutUs;