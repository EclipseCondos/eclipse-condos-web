"use client";
import React, { useState } from 'react';
import styles from '@/styles/Departamentos.module.css';

// Galería por áreas: menú de áreas, imagen principal con flechas y miniaturas.
const Galeria = ({ areas, nombre }) => {
  const [currentArea, setCurrentArea] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (areas.length === 0) {
    return null;
  }

  const area = areas[currentArea];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === area.fotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? area.fotos.length - 1 : prevIndex - 1
    );
  };

  const selectArea = (index) => {
    setCurrentArea(index);
    setCurrentImageIndex(0);
  };

  const nextArea = () => {
    selectArea(currentArea === areas.length - 1 ? 0 : currentArea + 1);
  };

  const prevArea = () => {
    selectArea(currentArea === 0 ? areas.length - 1 : currentArea - 1);
  };

  return (
    <section className={styles.gallerySection}>
      <div className={styles.sectionHeader}>
        {/* Area Carousel */}
        <div className={styles.areaCarousel}>
          {areas.length > 1 && (
            <button className={styles.areaButton} onClick={prevArea} aria-label="Área anterior">
              ‹
            </button>
          )}
          <h2 className={styles.sectionTitle}>{area.titulo}</h2>
          {areas.length > 1 && (
            <button className={styles.areaButton} onClick={nextArea} aria-label="Área siguiente">
              ›
            </button>
          )}
        </div>
        <div className={styles.areaCounter}>
          {currentArea + 1} / {areas.length}
        </div>
        <p className={styles.sectionDescription}>{area.descripcion}</p>
      </div>

      <div className={styles.gallery}>
        {/* Main Image */}
        <div className={styles.mainImageContainer}>
          <img
            src={area.fotos[currentImageIndex]}
            alt={`${nombre} - ${area.titulo} - Imagen ${currentImageIndex + 1}`}
            className={styles.mainImage}
          />

          {/* Navigation Arrows */}
          {area.fotos.length > 1 && (
            <>
              <button className={styles.prevButton} onClick={prevImage} aria-label="Imagen anterior">
                ‹
              </button>
              <button className={styles.nextButton} onClick={nextImage} aria-label="Imagen siguiente">
                ›
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className={styles.imageCounter}>
            {currentImageIndex + 1} / {area.fotos.length}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        {area.fotos.length > 1 && (
          <div className={styles.thumbnails}>
            {area.fotos.map((foto, index) => (
              <button
                key={foto}
                className={`${styles.thumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={foto} alt={`Miniatura ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Galeria;
