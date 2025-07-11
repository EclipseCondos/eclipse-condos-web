import styles from '@/styles/Home/aboutus.module.css';
import clsx from 'clsx';

const Cta = () => {
    return (
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
    );
}
export default Cta;