"use client";
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Casa.module.css';

// Recorrido por la casa: la foto del área activa y, en un panel, flechas para
// cambiar de área y la lista completa. En escritorio el panel va al lado; en el
// teléfono flota sobre la foto. La foto se puede ampliar en una ventana emergente.
export default function Recorrido({ areas, nombre }) {
  const [activo, setActivo] = useState(0);
  const [foto, setFoto] = useState(0);
  // En el teléfono la lista de áreas se abre dentro del panel flotante
  const [listaAbierta, setListaAbierta] = useState(false);
  const dialogo = useRef(null);

  const area = areas[activo];
  const total = area ? area.fotos.length : 0;

  const elegir = (index) => {
    setListaAbierta(false);
    if (index !== activo) {
      setActivo(index);
      setFoto(0);
    }
  };

  const cambiarArea = (paso) => elegir((activo + paso + areas.length) % areas.length);
  const mover = (paso) => setFoto((actual) => (actual + paso + total) % total);

  // Deslizar el dedo sobre la foto cambia de imagen (izquierda: siguiente)
  const toque = useRef(null);
  const deslizo = useRef(false);
  const empezarToque = (evento) => {
    const t = evento.touches[0];
    toque.current = { x: t.clientX, y: t.clientY };
    deslizo.current = false;
  };
  const terminarToque = (evento) => {
    if (!toque.current || total < 2) return;
    const t = evento.changedTouches[0];
    const dx = t.clientX - toque.current.x;
    const dy = t.clientY - toque.current.y;
    toque.current = null;
    // Solo cuenta como deslizamiento si es más horizontal que vertical
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      deslizo.current = true;
      mover(dx < 0 ? 1 : -1);
    }
  };
  const abrir = () => {
    if (deslizo.current) {
      deslizo.current = false;
      return;
    }
    dialogo.current?.showModal();
  };

  // Flechas del teclado dentro de la ventana emergente
  useEffect(() => {
    const el = dialogo.current;
    if (!el) {
      return;
    }
    const teclas = (evento) => {
      if (evento.key === 'ArrowLeft') mover(-1);
      if (evento.key === 'ArrowRight') mover(1);
    };
    el.addEventListener('keydown', teclas);
    return () => el.removeEventListener('keydown', teclas);
  });

  if (areas.length === 0) {
    return null;
  }

  const textoFoto = `${nombre}: ${area.titulo}, foto ${foto + 1} de ${total}`;

  return (
    <section className={styles.recorrido} aria-labelledby="recorrido-titulo">
      {/* De fondo, el video de Mareazul bajo el color de la casa */}
      <video className={styles.recorridoVideo} autoPlay muted loop playsInline preload="metadata" poster="/videos/mareazul-poster.webp" aria-hidden="true">
        <source src="/videos/mareazul-720.mp4" type="video/mp4" />
      </video>
      <div className={styles.cabeza}>
        <h2 id="recorrido-titulo" className={styles.recorridoTitulo} data-reveal>Recorre la casa</h2>
        <div className={styles.visor}>
          <button
            type="button"
            className={styles.visorAbrir}
            onClick={abrir}
            onTouchStart={empezarToque}
            onTouchEnd={terminarToque}
            aria-label={`Ampliar: ${textoFoto}`}
          >
            <img key={area.fotos[foto]} className={styles.visorFoto} src={area.fotos[foto]} alt={textoFoto} width="1200" height="1500" />
          </button>
          <div className={styles.visorControles}>
            {total > 1 && (
              <>
                <button type="button" onClick={() => mover(-1)} aria-label="Foto anterior">←</button>
                <span aria-live="polite">{foto + 1} de {total}</span>
                <button type="button" onClick={() => mover(1)} aria-label="Foto siguiente">→</button>
              </>
            )}
            <button type="button" className={styles.ampliar} onClick={() => dialogo.current?.showModal()}>Ampliar</button>
          </div>
        </div>
      </div>

      {/* En escritorio va al lado de la foto; en el teléfono flota encima de ella */}
      <div className={styles.panel}>
        <div className={styles.zona}>
          <button type="button" onClick={() => cambiarArea(-1)} aria-label="Área anterior">←</button>
          <div className={styles.zonaNombre}>
            <h3 aria-live="polite">{area.titulo}</h3>
            <span>Área {activo + 1} de {areas.length}</span>
          </div>
          <button type="button" onClick={() => cambiarArea(1)} aria-label="Área siguiente">→</button>
        </div>
        <p className={styles.zonaTexto}>{area.descripcion}</p>

        {/* Solo teléfono: abre la lista completa dentro del panel */}
        <button
          type="button"
          className={styles.verAreas}
          onClick={() => setListaAbierta((abierta) => !abierta)}
          aria-expanded={listaAbierta}
          aria-controls="lista-areas"
        >
          {listaAbierta ? 'Cerrar lista' : `Todas las áreas (${areas.length})`}
        </button>

        <ul id="lista-areas" className={styles.cuartos} data-abierta={listaAbierta || undefined}>
          {areas.map((item, index) => (
            <li key={item.titulo} className={index === activo ? styles.cuartoActivo : undefined}>
              <button type="button" className={styles.cuarto} onClick={() => elegir(index)} aria-pressed={index === activo}>
                <span>{item.titulo}</span>
                <span className={styles.cuartoFotos}>{item.fotos.length} {item.fotos.length === 1 ? 'foto' : 'fotos'}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Ventana emergente: la foto completa, sin recortes */}
      <dialog
        ref={dialogo}
        className={styles.emergente}
        aria-label={`${nombre}: ${area.titulo}`}
        onClick={(evento) => evento.target === dialogo.current && dialogo.current.close()}
      >
        <img src={area.fotos[foto]} alt={textoFoto} onTouchStart={empezarToque} onTouchEnd={terminarToque} />
        <div className={styles.emergenteBarra}>
          <span>{area.titulo} · {foto + 1} de {total}</span>
          <div>
            {total > 1 && (
              <>
                <button type="button" onClick={() => mover(-1)} aria-label="Foto anterior">←</button>
                <button type="button" onClick={() => mover(1)} aria-label="Foto siguiente">→</button>
              </>
            )}
            <button type="button" className={styles.cerrar} onClick={() => dialogo.current?.close()}>Cerrar</button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
