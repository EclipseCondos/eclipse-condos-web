import React from 'react';
import styles from '@/styles/aboutus.module.css';

const AboutUs = () => {
    return (
        <div className={styles.aboutContainer}>
            {/* Hero Section with Parallax Effect */}
            <section className={styles.heroSection}>
                <div className={styles.heroParallax}>
                    <div className={styles.heroBackground}></div>
                    <div className={styles.heroPattern}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.heroAnimation}>
                        <div className={styles.heroLogo}>
                            <img 
                                src="/images/logo/Eclipse Condos Icon (white).png" 
                                alt="Eclipse Condos" 
                                className={styles.heroIcon}
                            />
                            <div className={styles.logoGlow}></div>
                        </div>
                        <h1 className={styles.heroTitle}>
                            <span className={styles.titleWord}>ECLIPSE</span>
                            <span className={styles.titleConnector}>∞</span>
                            <span className={styles.titleWord}>CONDOS</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Redefiniendo el lujo residencial con diseño visionario y tecnología inteligente
                        </p>
                        <div className={styles.heroMetrics}>
                            <div className={styles.metric}>
                                <span className={styles.metricNumber}>15+</span>
                                <span className={styles.metricLabel}>Años Innovando</span>
                            </div>
                            <div className={styles.metricDivider}></div>
                            <div className={styles.metric}>
                                <span className={styles.metricNumber}>500+</span>
                                <span className={styles.metricLabel}>Hogares Creados</span>
                            </div>
                            <div className={styles.metricDivider}></div>
                            <div className={styles.metric}>
                                <span className={styles.metricNumber}>98%</span>
                                <span className={styles.metricLabel}>Satisfacción</span>
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

            {/* Philosophy Section */}
            <section className={styles.philosophySection}>
                <div className={styles.container}>
                    <div className={styles.philosophyContent}>
                        <div className={styles.philosophyText}>
                            <div className={styles.sectionTag}>
                                <span className={styles.tagIcon}>✨</span>
                                <span>Nuestra Filosofía</span>
                            </div>
                            <h2 className={styles.philosophyTitle}>
                                Donde la <span className={styles.gradient}>innovación</span> encuentra 
                                el <span className={styles.gradient}>hogar</span>
                            </h2>
                            <p className={styles.philosophyDescription}>
                                En Eclipse Condos, creemos que cada hogar debe ser una obra maestra que inspire 
                                y transforme vidas. Nuestro enfoque va más allá de la construcción: creamos 
                                experiencias habitacionales que conectan la arquitectura contemporánea con 
                                la calidez del hogar ideal.
                            </p>
                            <div className={styles.philosophyQuote}>
                                <div className={styles.quoteIcon}>"</div>
                                <p className={styles.quoteText}>
                                    No construimos edificios, construimos sueños tangibles que perduran en el tiempo.
                                </p>
                                <div className={styles.quoteAuthor}>- Equipo Eclipse Condos</div>
                            </div>
                        </div>
                        <div className={styles.philosophyVisual}>
                            <div className={styles.visualGrid}>
                                <div className={styles.visualCard}>
                                    <div className={styles.cardIcon}>🏗️</div>
                                    <h4>Diseño Inteligente</h4>
                                </div>
                                <div className={styles.visualCard}>
                                    <div className={styles.cardIcon}>🌿</div>
                                    <h4>Sustentabilidad</h4>
                                </div>
                                <div className={styles.visualCard}>
                                    <div className={styles.cardIcon}>💎</div>
                                    <h4>Calidad Premium</h4>
                                </div>
                                <div className={styles.visualCard}>
                                    <div className={styles.cardIcon}>🚀</div>
                                    <h4>Tecnología</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Timeline Section */}
            <section className={styles.timelineSection}>
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
                            <div className={styles.timelineYear}>2008</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>Los Cimientos</h3>
                                <p className={styles.timelineText}>
                                    Fundamos Eclipse Condos con la visión de revolucionar el sector inmobiliario, 
                                    combinando diseño arquitectónico excepcional con tecnología de vanguardia.
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2012</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>Pioneros Verdes</h3>
                                <p className={styles.timelineText}>
                                    Lanzamos nuestro primer proyecto con certificación LEED, estableciendo 
                                    nuevos estándares en construcción sustentable y eficiencia energética.
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2018</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>Expansión Nacional</h3>
                                <p className={styles.timelineText}>
                                    Expandimos nuestra presencia a nivel nacional, llevando nuestra filosofía 
                                    de diseño y calidad a múltiples ciudades del país.
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2024</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>Era Smart</h3>
                                <p className={styles.timelineText}>
                                    Integramos sistemas de domótica avanzada y IoT en todos nuestros proyectos, 
                                    creando hogares verdaderamente inteligentes y conectados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section with Interactive Cards */}
            <section className={styles.valuesSection}>
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
                                Compromiso inquebrantable con la calidad superior en cada detalle, 
                                desde el diseño inicial hasta los acabados finales.
                            </p>
                            <div className={styles.valueFeatures}>
                                <span>• Materiales premium</span>
                                <span>• Acabados de lujo</span>
                                <span>• Control de calidad riguroso</span>
                            </div>
                        </div>
                        
                        <div className={styles.valueCard}>
                            <div className={styles.cardBackground}></div>
                            <div className={styles.valueIcon}>
                                <span>🌱</span>
                                <div className={styles.iconRing}></div>
                            </div>
                            <h3 className={styles.valueTitle}>Sostenibilidad</h3>
                            <p className={styles.valueDescription}>
                                Construcción responsable que respeta el medio ambiente y 
                                maximiza la eficiencia energética para el futuro.
                            </p>
                            <div className={styles.valueFeatures}>
                                <span>• Certificaciones verdes</span>
                                <span>• Energías renovables</span>
                                <span>• Materiales eco-friendly</span>
                            </div>
                        </div>
                        
                        <div className={styles.valueCard}>
                            <div className={styles.cardBackground}></div>
                            <div className={styles.valueIcon}>
                                <span>🚀</span>
                                <div className={styles.iconRing}></div>
                            </div>
                            <h3 className={styles.valueTitle}>Innovación</h3>
                            <p className={styles.valueDescription}>
                                Adopción de tecnologías emergentes y tendencias de diseño 
                                que definen el futuro de la vida residencial.
                            </p>
                            <div className={styles.valueFeatures}>
                                <span>• Smart home technology</span>
                                <span>• Diseño adaptativo</span>
                                <span>• Realidad virtual</span>
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
                                y un servicio al cliente excepcional.
                            </p>
                            <div className={styles.valueFeatures}>
                                <span>• Atención personalizada</span>
                                <span>• Transparencia total</span>
                                <span>• Soporte post-venta</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.teamSection}>
                <div className={styles.container}>
                    <div className={styles.teamContent}>
                        <div className={styles.teamInfo}>
                            <div className={styles.sectionTag}>
                                <span className={styles.tagIcon}>👥</span>
                                <span>Nuestro Equipo</span>
                            </div>
                            <h2 className={styles.teamTitle}>
                                Expertos apasionados por la <span className={styles.gradient}>perfección</span>
                            </h2>
                            <p className={styles.teamDescription}>
                                Nuestro equipo multidisciplinario reúne a los mejores talentos en arquitectura, 
                                ingeniería, diseño de interiores y gestión de proyectos. Cada profesional aporta 
                                experiencia única y visión innovadora para materializar proyectos extraordinarios.
                            </p>
                            <div className={styles.teamSpecialties}>
                                <div className={styles.specialty}>
                                    <div className={styles.specialtyIcon}>🏛️</div>
                                    <span>Arquitectos</span>
                                </div>
                                <div className={styles.specialty}>
                                    <div className={styles.specialtyIcon}>⚙️</div>
                                    <span>Ingenieros</span>
                                </div>
                                <div className={styles.specialty}>
                                    <div className={styles.specialtyIcon}>🎨</div>
                                    <span>Diseñadores</span>
                                </div>
                                <div className={styles.specialty}>
                                    <div className={styles.specialtyIcon}>📊</div>
                                    <span>Project Managers</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamStats}>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>25+</div>
                                <div className={styles.statLabel}>Profesionales</div>
                                <div className={styles.statDescription}>Expertos especializados</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>8</div>
                                <div className={styles.statLabel}>Especialidades</div>
                                <div className={styles.statDescription}>Áreas de expertise</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>150+</div>
                                <div className={styles.statLabel}>Años Experiencia</div>
                                <div className={styles.statDescription}>Combinada del equipo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <div className={styles.ctaBackground}></div>
                        <div className={styles.ctaText}>
                            <h2 className={styles.ctaTitle}>
                                ¿Listo para vivir el <span className={styles.gradient}>futuro</span>?
                            </h2>
                            <p className={styles.ctaSubtitle}>
                                Descubre cómo Eclipse Condos puede hacer realidad tu hogar ideal. 
                                Explora nuestros proyectos exclusivos y únete a una nueva era del lujo residencial.
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
        </div>
    );
};

export default AboutUs;