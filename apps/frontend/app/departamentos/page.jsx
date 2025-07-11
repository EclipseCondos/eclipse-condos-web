"use client";
import React from 'react';
import Link from 'next/link';
import { usePageTitle } from '../../src/hooks/usePageTitle';
import styles from '@/styles/Departamentos.module.css';

const DepartamentosPage = () => {
  // Usar el hook para manejar el título automáticamente
  usePageTitle();

  const departamentos = [
    {
      id: 'luna',
      name: 'Eclipse Luna',
      description: 'Elegancia nocturna con vistas espectaculares al mar',
      route: '/departamentos/eclipse-luna',
      icon: '🌙',
      color: 'linear-gradient(135deg, #1e293b, #334155)',
      accent: '#60a5fa'
    },
    {
      id: 'sol',
      name: 'Eclipse Sol',
      description: 'Energía radiante y espacios llenos de luz natural',
      route: '/departamentos/eclipse-sol',
      icon: '☀️',
      color: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      accent: '#f97316'
    },
    {
      id: 'mar',
      name: 'Eclipse Mar',
      description: 'Serenidad costera con acceso directo a la playa',
      route: '/departamentos/eclipse-mar',
      icon: '🌊',
      color: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
      accent: '#06b6d4'
    },
    {
      id: 'tierra',
      name: 'Eclipse Tierra',
      description: 'Conexión natural con jardines y espacios verdes',
      route: '/departamentos/eclipse-tierra',
      icon: '🌿',
      color: 'linear-gradient(135deg, #059669, #047857)',
      accent: '#10b981'
    },
    {
      id: 'arena',
      name: 'Eclipse Arena',
      description: 'Calidez y confort en armonía con la naturaleza',
      route: '/departamentos/eclipse-arena',
      icon: '🏖️',
      color: 'linear-gradient(135deg, #d97706, #b45309)',
      accent: '#ea580c'
    }
  ];

  return (
    <div className={styles.departamentosPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Nuestros <span className={styles.titleAccent}>Departamentos</span>
            </h1>
            <p className={styles.subtitle}>
              Descubre cinco experiencias únicas en el corazón de Mareazul, Playa del Carmen. 
              Cada departamento ha sido diseñado con una personalidad distintiva para ofrecerte 
              el hogar perfecto frente al mar Caribe.
            </p>
          </div>
        </section>

        {/* Location Section */}
        <section className={styles.locationSection}>
          <div className={styles.locationContent}>
            <div className={styles.locationInfo}>
              <h2 className={styles.sectionTitle}>Ubicación Privilegiada</h2>
              <div className={styles.locationDetails}>
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>📍</span>
                  <div>
                    <h3>Mareazul, Playa del Carmen</h3>
                    <p>Quintana Roo, México</p>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>🏖️</span>
                  <div>
                    <h3>Acceso Directo a la Playa</h3>
                    <p>Arena blanca y aguas cristalinas del Caribe</p>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>🌴</span>
                  <div>
                    <h3>Entorno Natural</h3>
                    <p>Rodeado de vegetación tropical y cenotes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1234567890123!2d-87.0739!3d20.6296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e59cf3b1a2345%3A0x123456789abcdef0!2sMareazul%2C%20Playa%20del%20Carmen%2C%20Q.R.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Eclipse Condos - Mareazul, Playa del Carmen"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className={styles.departmentsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Elige tu Departamento Ideal</h2>
            <p className={styles.sectionSubtitle}>
              Cada departamento ofrece una experiencia única con amenidades exclusivas y diseños personalizados
            </p>
          </div>
          
          <div className={styles.departmentsGrid}>
            {departamentos.map((depto) => (
              <Link href={depto.route} key={depto.id} className={styles.departmentCard}>
                <div 
                  className={styles.cardBackground}
                  style={{ background: depto.color }}
                ></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardIcon}>{depto.icon}</div>
                  <h3 className={styles.cardTitle}>{depto.name}</h3>
                  <p className={styles.cardDescription}>{depto.description}</p>
                  <div className={styles.cardButton}>
                    <span>Explorar</span>
                    <span className={styles.arrow}>→</span>
                  </div>
                </div>
                <div className={styles.cardHover}></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Amenidades Incluidas</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏊‍♀️</div>
              <h3>Piscina Infinity</h3>
              <p>Vista panorámica al mar Caribe</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚗</div>
              <h3>Estacionamiento</h3>
              <p>Plaza de garaje privada incluida</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3>Seguridad 24/7</h3>
              <p>Acceso controlado y vigilancia</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌐</div>
              <h3>WiFi de Alta Velocidad</h3>
              <p>Internet fibra óptica incluido</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🧹</div>
              <h3>Servicio de Limpieza</h3>
              <p>Mantenimiento y limpieza semanal</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏋️‍♂️</div>
              <h3>Gimnasio</h3>
              <p>Equipamiento completo con vista al mar</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>¿Listo para tu Próxima Aventura?</h2>
            <p className={styles.ctaSubtitle}>
              Reserva ahora y vive la experiencia Eclipse Condos en el paraíso del Caribe Mexicano
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/FAQ" className={styles.primaryButton}>
                <span>Ver Preguntas Frecuentes</span>
                <span className={styles.buttonIcon}>❓</span>
              </Link>
              <Link href="/about-us" className={styles.secondaryButton}>
                <span>Conocer el Equipo</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DepartamentosPage;
