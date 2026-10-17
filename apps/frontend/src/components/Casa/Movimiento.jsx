"use client";
import { useEffect } from 'react';

// Entradas al hacer scroll. Sin JavaScript, todo se ve desde el principio:
// el contenido solo se oculta cuando este efecto marca la página con data-motion.
export default function Movimiento() {
  useEffect(() => {
    const raiz = document.querySelector('[data-casa]');
    if (!raiz) {
      return;
    }
    raiz.setAttribute('data-motion', '');

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.setAttribute('data-visible', '');
            observador.unobserve(entrada.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    raiz.querySelectorAll('[data-reveal]').forEach((el) => observador.observe(el));

    // En el teléfono el botón de reservar flota; se esconde cuando el cierre ya tiene el suyo.
    const cierre = raiz.querySelector('[data-cierre]');
    const vigia = new IntersectionObserver(([entrada]) => {
      raiz.toggleAttribute('data-en-cierre', entrada.isIntersecting || entrada.boundingClientRect.top < 0);
    });
    if (cierre) {
      vigia.observe(cierre);
    }

    return () => {
      observador.disconnect();
      vigia.disconnect();
    };
  }, []);

  return null;
}
