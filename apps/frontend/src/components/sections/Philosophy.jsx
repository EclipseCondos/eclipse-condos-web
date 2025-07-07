import styles from '@/styles/Home/aboutus.module.css';
import clsx from 'clsx'; 

const Philosophy = () => {
    return (
        <div>
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
                            <div className={clsx(styles.philosophyQuote, 'glass')}>
                                <div className={styles.quoteIcon}>"</div>
                                <p className={styles.quoteText}>
                                    No ofrecemos departamentos, creamos experiencias memorables que perduran en el corazón.
                                </p>
                                <div className={styles.quoteAuthor}>- Equipo Eclipse Condos</div>
                            </div>
                        </div>
                        <div className={styles.philosophyVisual}>
                            <div className={styles.visualGrid}>
                                <div className={clsx(styles.visualCard, 'glass')}>
                                    <div className={styles.cardIcon}>�</div>
                                    <h4>Hospedaje Premium</h4>
                                </div>
                                <div className={clsx(styles.visualCard, 'glass')}>
                                    <div className={styles.cardIcon}>🌿</div>
                                    <h4>Experiencias Únicas</h4>
                                </div>
                                <div className={clsx(styles.visualCard, 'glass')}>
                                    <div className={styles.cardIcon}>💎</div>
                                    <h4>Servicio Excepcional</h4>
                                </div>
                                <div className={clsx(styles.visualCard, 'glass')}>
                                    <div className={styles.cardIcon}>🏖️</div>
                                    <h4>Ubicación Privilegiada</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    ); 
}

export default Philosophy;