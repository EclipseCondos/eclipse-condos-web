'use client';

import { useEffect } from 'react';

export function useTitleUpdate() {
  useEffect(() => {
    // Forzar actualización del título
    document.title = 'Eclipse Condos - Condominios de Lujo en Playa del Carmen';
    
    // Limpiar cualquier meta tag de título anterior
    const existingTitles = document.querySelectorAll('title');
    existingTitles.forEach((title, index) => {
      if (index > 0) { // Mantener solo el primer título
        title.remove();
      }
    });

    // Asegurar que el título sea correcto
    const titleElement = document.querySelector('title');
    if (titleElement) {
      titleElement.textContent = 'Eclipse Condos - Condominios de Lujo en Playa del Carmen';
    }
  }, []);
}
