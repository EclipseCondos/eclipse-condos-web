"use client";
import { useEffect, useRef, useState } from 'react';

const VIDEO = '/videos/mareazul-720-650k.mp4';
const POSTER = '/videos/mareazul-poster.webp';

// Video de Mareazul de fondo (sin pista de audio, ver #8). Safari de iPhone
// bloquea el autoplay de <video> en modo de bajo consumo aunque esté silenciado;
// en ese caso se cambia por un <img> con el mismo MP4, que Safari reproduce solo
// y en bucle como un GIF, sin que nadie toque la pantalla.

// En datos móviles (y en el <img> del modo de bajo consumo), reproducir mientras
// baja hace que se congele. Se descarga completo (1.2 MB, 650 kbps) a la caché del
// navegador una sola vez (lo comparten el layout y Recorrido) y solo entonces se
// reproduce desde ahí; mientras, el poster.
let descarga;
const videoCompleto = () => (descarga ??= fetch(VIDEO)
  .then((r) => {
    if (!r.ok) throw new Error(`video ${r.status}`);
    return r.blob(); // leerlo entero = terminar de bajarlo a la caché
  })
  .then(() => VIDEO));

export default function VideoFondo({ className, ...props }) {
  const video = useRef(null);
  const [comoImagen, setComoImagen] = useState(false);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    let vigente = true;
    v.muted = true;
    videoCompleto()
      .catch(() => VIDEO) // si la descarga falla, en streaming como antes
      .then((src) => {
        if (!vigente) return;
        v.src = src;
        return v.play();
      })
      .catch((error) => {
        if (vigente && error.name === 'NotAllowedError') setComoImagen(true);
      });
    return () => { vigente = false; };
  }, []);

  if (comoImagen) {
    return (
      <img
        src={VIDEO}
        alt=""
        aria-hidden="true"
        className={className}
        // El poster debajo mientras pinta el primer cuadro: sin hueco en el cambio
        style={{ background: `url(${POSTER}) center / cover` }}
        // Navegadores que no aceptan MP4 en <img>: se queda la imagen fija
        onError={(e) => { if (!e.currentTarget.src.endsWith(POSTER)) e.currentTarget.src = POSTER; }}
      />
    );
  }

  // Sin src ni autoPlay: el efecto le asigna el video ya descargado. H.264 a 720p y 650 kbps
  // sin audio, lo reproduce cualquier navegador (el original era HEVC de 31 MB).
  return (
    <video
      ref={video}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={POSTER}
      {...props}
    />
  );
}
