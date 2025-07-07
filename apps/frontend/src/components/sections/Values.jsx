import clsx from 'clsx';
import styles from '@/styles/Home/aboutus.module.css';

const Values = () => {
 return (
    <div>
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
    </div>
 ); 
}

export default Values;