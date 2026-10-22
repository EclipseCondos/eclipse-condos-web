"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Casa.module.css';

// Collage del inicio. En escritorio, las fotos chicas son tarjetas: con hover o
// click se voltean y detrás aparece otra de las cinco casas. La foto grande no
// se voltea porque lleva encima el nombre y los botones. En el teléfono no giran.
export default function Collage({ nombre, fotos, otras }) {
  const [volteada, setVolteada] = useState(null);

  // El click solo voltea en pantallas táctiles grandes (tablets). Con mouse, el hover
  // ya gira la tarjeta: si el click también la marcara, se quedaría trabada al salir.
  const voltear = (index) => {
    const tactilGrande = window.matchMedia('(min-width: 761px) and (hover: none)').matches;
    if (tactilGrande) {
      setVolteada((actual) => (actual === index ? null : index));
    }
  };

  return (
    <div className={styles.collage}>
      {fotos.map((area, i) => {
        const otra = i > 0 ? otras[i - 1] : null;
        const imagen = (
          <img
            className={styles.collageFoto}
            src={area.fotos[0]}
            alt={`${nombre}: ${area.titulo}`}
            width="1200"
            height="900"
            loading={i < 3 ? 'eager' : 'lazy'}
            style={{ '--d': `${i * 90}ms` }}
          />
        );

        if (!otra) {
          return <div key={area.titulo} className={styles.tarjeta}>{imagen}</div>;
        }

        return (
          <div key={area.titulo} className={styles.tarjeta} data-volteable data-volteada={volteada === i || undefined}>
            <div className={styles.giro}>
              <button type="button" className={styles.cara} onClick={() => voltear(i)} aria-label={`${area.titulo}. Voltear para ver ${otra.nombre}`}>
                {imagen}
              </button>
              <div className={`${styles.cara} ${styles.reverso}`} style={{ '--tono': otra.tono }} onClick={() => voltear(i)}>
                <h2>{otra.nombre}</h2>
                <p>{otra.resumen}</p>
                <Link href={`/departamentos/${otra.slug}`} className={styles.reversoEnlace} onClick={(evento) => evento.stopPropagation()}>
                  Conocer {otra.nombre.replace('Eclipse ', '')}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
