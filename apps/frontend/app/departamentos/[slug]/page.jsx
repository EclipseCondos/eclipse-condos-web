import Link from 'next/link';
import { notFound } from 'next/navigation';
import { departamentos, getDepartamentoBySlug } from '@/data/departamentos';
import { areasConFotos } from '@/lib/fotos';
import Calendario from '@/components/Casa/Calendario';
import Collage from '@/components/Casa/Collage';
import Recorrido from '@/components/Casa/Recorrido';
import Movimiento from '@/components/Casa/Movimiento';
import styles from '@/styles/Casa.module.css';

// Foto del complejo: la misma para las cinco casas.
const COMPLEJO = { src: '/images/complejo/complejo-01.webp', texto: 'El complejo y su playa, desde el aire' };
const ATARDECER = '/images/complejo/complejo-23.webp';

// Orden del collage del inicio: primero la sala, luego terraza, recámaras y comedor.
const PREFERENCIA_COLLAGE = [/sala/i, /terraza/i, /principal/i, /comedor|cocina/i, /secundaria/i];

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

// Cinco fotos para el collage: una por área, en el orden de PREFERENCIA_COLLAGE.
function fotosDeCollage(areas) {
  const elegidas = [];
  for (const patron of PREFERENCIA_COLLAGE) {
    const area = areas.find((a) => patron.test(a.titulo) && !elegidas.includes(a));
    if (area) {
      elegidas.push(area);
    }
  }
  for (const area of areas) {
    if (elegidas.length < 5 && !elegidas.includes(area)) {
      elegidas.push(area);
    }
  }
  return elegidas.slice(0, 5);
}

// "4-8 personas" → "4 a 8 personas"
function personas(depto) {
  return depto.capacidad.replace(/^(\d+)-(\d+)/, '$1 a $2');
}

export default async function Pagina({ params }) {
  const { slug } = await params;
  const depto = getDepartamentoBySlug(slug);
  if (!depto) {
    notFound();
  }

  const areas = areasConFotos(depto);
  const collage = fotosDeCollage(areas);
  const corto = depto.nombre.replace('Eclipse ', '');
  const resumen = `Para ${personas(depto)}: ${depto.recamaras} recámaras y ${depto.baños} baños en Mareazul, Playa del Carmen.`;
  const otras = departamentos.filter((otro) => otro.slug !== depto.slug);
  // Lo que se ve detrás de cada tarjeta del collage
  const otrasConResumen = otras.map((otra) => ({
    slug: otra.slug,
    nombre: otra.nombre,
    tono: otra.tono,
    resumen: `Para ${personas(otra)}, con ${otra.recamaras} recámaras y ${otra.baños} baños. También en Mareazul, con acceso a la playa del complejo.`,
  }));
  const whatsapp = `${depto.whatsapp}?text=${encodeURIComponent(`Hola, me interesa el departamento ${depto.nombre}`)}`;

  return (
    <div className={styles.casa} style={{ '--bg': depto.tono }} data-casa>
      <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
      <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap" precedence="default" />
      <Movimiento />

      {/* Inicio: collage con las fotos de esta casa y el nombre encima */}
      <section className={styles.inicio}>
        <Collage nombre={depto.nombre} fotos={collage} otras={otrasConResumen} />
        <div className={styles.inicioTexto}>
          <h1 className={styles.nombre} data-reveal>{corto}</h1>
          {/* Ficha: lo que tiene la casa, de un vistazo */}
          <div className={styles.ficha} data-reveal style={{ '--d': '100ms' }}>
            <dl className={styles.fichaDatos}>
              <div>
                <dt>Personas</dt>
                <dd>{depto.capacidad.replace(/^(\d+)-(\d+).*/, '$1–$2')}</dd>
              </div>
              <div>
                <dt>Recámaras</dt>
                <dd>{depto.recamaras}</dd>
              </div>
              <div>
                <dt>Baños</dt>
                <dd>{depto.baños}</dd>
              </div>
            </dl>
            <ul className={styles.fichaLista}>
              {depto.caracteristicas.map((caracteristica) => (
                <li key={caracteristica}>{caracteristica}</li>
              ))}
            </ul>
          </div>
          <div className={styles.acciones} data-reveal style={{ '--d': '200ms' }}>
            <a href={depto.airbnb} target="_blank" rel="noopener noreferrer" className={`${styles.boton} ${styles.botonFuerte} ${styles.reservar}`}>
              Reservar en Airbnb
            </a>
            {depto.whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={styles.boton}>
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Las cinco casas: esta resaltada, las demás como enlaces */}
      <section className={styles.familia} aria-labelledby="familia-texto">
        <p id="familia-texto" className={styles.familiaTexto} data-reveal>
          {corto} es una de las cinco casas de Eclipse Condos en Mareazul, Playa del Carmen. Todas tienen acceso
          a la playa exclusiva del complejo.
        </p>
        <ul className={styles.casas}>
          {departamentos.map((casa, i) => (
            <li key={casa.slug} data-reveal style={{ '--d': `${i * 70}ms`, '--tono': casa.tono }}>
              {casa.slug === depto.slug ? (
                <span className={styles.casaActual} aria-current="page">{casa.nombre}</span>
              ) : (
                <Link href={`/departamentos/${casa.slug}`}>{casa.nombre}</Link>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* El complejo: una foto que entra con borde de ola y, encima, la disponibilidad */}
      <section className={styles.complejo} aria-labelledby="disponibilidad-titulo">
        <figure className={styles.telon}>
          <img src={COMPLEJO.src} alt={COMPLEJO.texto} width="1920" height="1080" loading="lazy" />
          <figcaption className={styles.pieTelon}>{COMPLEJO.texto}</figcaption>
        </figure>
        <div className={styles.reserva}>
          {/* Maqueta: el calendario aún no está conectado a las reservas */}
          <div className={styles.disponibilidad} data-reveal>
            <h2 id="disponibilidad-titulo">Disponibilidad</h2>
            <p>Pronto verás aquí las fechas libres de {corto}. Por ahora, consulta y reserva en Airbnb.</p>
            <Calendario />
            <a href={depto.airbnb} target="_blank" rel="noopener noreferrer" className={`${styles.boton} ${styles.botonFuerte}`}>
              Ver fechas en Airbnb
            </a>
          </div>
          <Link href="/departamentos" className={styles.boton} data-reveal style={{ '--d': '120ms' }}>
            Ver los departamentos y el complejo
          </Link>
        </div>
      </section>

      {/* Recorrido cuarto por cuarto: lo que el visitante puede hacer */}
      <Recorrido areas={areas} nombre={depto.nombre} />

      {/* Cierre y pie. En el teléfono la foto del cierre se queda fija y el resto pasa encima */}
      <div className={styles.final} data-cierre>
      <section className={styles.cierre}>
        <img className={styles.cierreFoto} src={ATARDECER} alt="Atardecer sobre Mareazul" width="1920" height="1080" loading="lazy" />
        <div className={styles.cierreTexto}>
          <h2 className={styles.cierreTitulo} data-reveal>Quédate en {corto}</h2>
          <p data-reveal style={{ '--d': '80ms' }}>{resumen}</p>
          <a href={depto.airbnb} target="_blank" rel="noopener noreferrer" className={styles.boton} data-reveal style={{ '--d': '160ms' }}>
            Reservar en Airbnb
          </a>
        </div>
      </section>

      <footer className={styles.pieCasa}>
        <div className={styles.invitacion}>
          <h2 className={styles.invitacionTitulo} data-reveal>¿Dudas antes de reservar?</h2>
          {depto.whatsapp && (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={styles.boton} data-reveal style={{ '--d': '80ms' }}>
              Escríbenos por WhatsApp
            </a>
          )}
        </div>
        <nav className={styles.otras} aria-label="Las otras casas">
          {otras.map((otra, i) => (
            <Link key={otra.slug} href={`/departamentos/${otra.slug}`} data-reveal style={{ '--d': `${i * 70}ms` }}>
              {otra.nombre}
            </Link>
          ))}
        </nav>
        <div className={styles.legal}>
          <span>Mareazul, Playa del Carmen, Quintana Roo</span>
          <span>© {new Date().getFullYear()} Eclipse Condos</span>
        </div>
        <p className={styles.marca} aria-hidden="true">Eclipse</p>
      </footer>
      </div>
    </div>
  );
}
