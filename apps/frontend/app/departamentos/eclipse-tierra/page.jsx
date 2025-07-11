"use client";
import React, { useState } from 'react';
import styles from '../Departamento.module.css';

const EclipseTierraPage = () => {
  const [currentSection, setCurrentSection] = useState('cocina');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Datos específicos del Departamento Tierra
  const departmentData = {
    name: "Eclipse Tierra",
    icon: "🌱",
    description: "Conexión auténtica con la naturaleza en un ambiente sereno",
    capacity: "2-4 personas",
    bedrooms: 2,
    bathrooms: 2,
    features: [
      "Jardín privado y terraza",
      "Decoración eco-friendly",
      "Cocina completamente equipada",
      "WiFi de alta velocidad",
      "Aire acondicionado",
      "Productos de limpieza ecológicos"
    ],
    sections: {
      cocina: {
        title: "Cocina",
        description: "Cocina moderna con acabados naturales y vista al jardín interior.",
        images: [
          "/images/condos/tierra/cocina/cocina-1.jpg",
          "/images/condos/tierra/cocina/cocina-2.jpg",
          "/images/condos/tierra/cocina/cocina-3.jpg",
          "/images/condos/tierra/cocina/cocina-4.jpg"
        ]
      },
      recibidor: {
        title: "Recibidor",
        description: "Amplio recibidor con elementos naturales y acceso directo al jardín.",
        images: [
          "/images/condos/tierra/recibidor/recibidor-1.jpg",
          "/images/condos/tierra/recibidor/recibidor-2.jpg",
          "/images/condos/tierra/recibidor/recibidor-3.jpg"
        ]
      },
      habitacion1: {
        title: "Habitación Principal",
        description: "Habitación principal con cama king size rodeada de elementos naturales.",
        images: [
          "/images/condos/tierra/habitacion1/habitacion1-1.jpg",
          "/images/condos/tierra/habitacion1/habitacion1-2.jpg",
          "/images/condos/tierra/habitacion1/habitacion1-3.jpg"
        ]
      },
      bano1: {
        title: "Baño Principal",
        description: "Baño principal con ducha de lluvia y acabados de piedra natural.",
        images: [
          "/images/condos/tierra/bano1/bano1-1.jpg",
          "/images/condos/tierra/bano1/bano1-2.jpg"
        ]
      },
      habitacion2: {
        title: "Habitación Secundaria",
        description: "Segunda habitación con camas individuales y vista al jardín.",
        images: [
          "/images/condos/tierra/habitacion2/habitacion2-1.jpg",
          "/images/condos/tierra/habitacion2/habitacion2-2.jpg"
        ]
      },
      bano2: {
        title: "Baño Secundario",
        description: "Baño completo con acabados naturales y ducha ecológica.",
        images: [
          "/images/condos/tierra/bano2/bano2-1.jpg",
          "/images/condos/tierra/bano2/bano2-2.jpg"
        ]
      },
      balcon: {
        title: "Terraza y Jardín",
        description: "Terraza privada con jardín tropical y área de relajación.",
        images: [
          "/images/condos/tierra/balcon/balcon-1.jpg",
          "/images/condos/tierra/balcon/balcon-2.jpg",
          "/images/condos/tierra/balcon/balcon-3.jpg",
          "/images/condos/tierra/balcon/balcon-4.jpg"
        ]
      },
      lavanderia: {
        title: "Lavandería",
        description: "Área de lavandería con productos ecológicos y espacio de almacenamiento.",
        images: [
          "/images/condos/tierra/lavanderia/lavanderia-1.jpg",
          "/images/condos/tierra/lavanderia/lavanderia-2.jpg"
        ]
      }
    }
  };

  const sectionKeys = Object.keys(departmentData.sections);
  const currentSectionData = departmentData.sections[currentSection];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === currentSectionData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentSectionData.images.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const selectSection = (section) => {
    setCurrentSection(section);
    setCurrentImageIndex(0);
  };

  return (
    <div className={styles.departmentPage}>
      <div className={styles.container}>
        {/* Header */}
        <section className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.titleSection}>
              <span className={styles.departmentIcon}>{departmentData.icon}</span>
              <h1 className={styles.title}>{departmentData.name}</h1>
            </div>
            <p className={styles.description}>{departmentData.description}</p>
            <div className={styles.specs}>
              <div className={styles.spec}>
                <span className={styles.specIcon}>👥</span>
                <span>{departmentData.capacity}</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specIcon}>🛏️</span>
                <span>{departmentData.bedrooms} habitaciones</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specIcon}>🚿</span>
                <span>{departmentData.bathrooms} baños</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Menu */}
        <nav className={styles.sectionNav}>
          {sectionKeys.map((section) => (
            <button
              key={section}
              className={`${styles.navButton} ${currentSection === section ? styles.active : ''}`}
              onClick={() => selectSection(section)}
            >
              {departmentData.sections[section].title}
            </button>
          ))}
        </nav>

        {/* Gallery Section */}
        <section className={styles.gallerySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{currentSectionData.title}</h2>
            <p className={styles.sectionDescription}>{currentSectionData.description}</p>
          </div>

          <div className={styles.gallery}>
            {/* Main Image */}
            <div className={styles.mainImageContainer}>
              <img
                src={currentSectionData.images[currentImageIndex]}
                alt={`${currentSectionData.title} - Imagen ${currentImageIndex + 1}`}
                className={styles.mainImage}
              />
              
              {/* Navigation Arrows */}
              {currentSectionData.images.length > 1 && (
                <>
                  <button className={styles.prevButton} onClick={prevImage}>
                    ‹
                  </button>
                  <button className={styles.nextButton} onClick={nextImage}>
                    ›
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className={styles.imageCounter}>
                {currentImageIndex + 1} / {currentSectionData.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {currentSectionData.images.length > 1 && (
              <div className={styles.thumbnails}>
                {currentSectionData.images.map((image, index) => (
                  <button
                    key={index}
                    className={`${styles.thumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                    onClick={() => selectImage(index)}
                  >
                    <img src={image} alt={`Miniatura ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Características Incluidas</h3>
          <div className={styles.featuresList}>
            {departmentData.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>¿Listo para Reservar?</h3>
            <p className={styles.ctaDescription}>
              Vive la experiencia {departmentData.name} en armonía con la naturaleza
            </p>
            <div className={styles.ctaButtons}>
              <a 
                href="https://www.airbnb.com/rooms/tierra-placeholder" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                <span>Reservar en Airbnb</span>
                <span className={styles.buttonIcon}>🏠</span>
              </a>
              <a 
                href="https://wa.me/5215551234567?text=Hola, me interesa el Departamento Tierra" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                <span>Contactar por WhatsApp</span>
                <span className={styles.buttonIcon}>💬</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EclipseTierraPage;