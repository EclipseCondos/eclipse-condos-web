import { notFound } from 'next/navigation';
import { departamentos, getDepartamentoBySlug } from '@/data/departamentos';
import { areasConFotos } from '@/lib/fotos';
import Galeria from '@/components/Galeria/Galeria';
import styles from '@/styles/Departamentos.module.css';

export function generateStaticParams() {
  return departamentos.map((depto) => ({ slug: depto.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const depto = getDepartamentoBySlug(slug);
  if (!depto) {
    return {};
  }
  return { title: depto.nombre, description: depto.descripcion };
}

export default async function Pagina({ params }) {
  const { slug } = await params;
  const depto = getDepartamentoBySlug(slug);
  if (!depto) {
    notFound();
  }

  const areas = areasConFotos(depto);

  return (
    <div className={styles.departmentPage}>
      <div className={styles.container}>
        {/* Header */}
        <section className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.titleSection}>
              <span className={styles.departmentIcon}>{depto.icono}</span>
              <h1 className={styles.title}>{depto.nombre}</h1>
            </div>
            <p className={styles.description}>{depto.descripcion}</p>
            <div className={styles.specs}>
              {depto.capacidad && (
                <div className={styles.spec}>
                  <span className={styles.specIcon}>👥</span>
                  <span>{depto.capacidad}</span>
                </div>
              )}
              {depto.recamaras && (
                <div className={styles.spec}>
                  <span className={styles.specIcon}>🛏️</span>
                  <span>{depto.recamaras} recámaras</span>
                </div>
              )}
              {depto.baños && (
                <div className={styles.spec}>
                  <span className={styles.specIcon}>🚿</span>
                  <span>{depto.baños} baños</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <Galeria areas={areas} nombre={depto.nombre} />

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Características Incluidas</h3>
          <div className={styles.featuresList}>
            {depto.caracteristicas.map((caracteristica) => (
              <div key={caracteristica} className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>{caracteristica}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>¿Listo para Reservar?</h3>
            <div className={styles.ctaButtons}>
              <a
                href={depto.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                <span>Reservar en Airbnb</span>
                <span className={styles.buttonIcon}>🏠</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
