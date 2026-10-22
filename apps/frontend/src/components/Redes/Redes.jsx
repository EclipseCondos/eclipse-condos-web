import BotonLiquido from '@/components/BotonLiquido/BotonLiquido';
import { contacto } from '@/data/contacto';
import styles from './Redes.module.css';

function IconoWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2.6a9.4 9.4 0 0 0-8.1 14.2L2.6 21.4l4.7-1.2A9.4 9.4 0 1 0 12 2.6z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.1 7.4c-.3 0-.7.1-.9.4-.4.5-.8 1.3-.6 2.3.4 2.3 2.9 4.9 5.2 5.4 1 .2 1.9-.1 2.4-.5.3-.2.4-.6.4-.9v-.7l-2.2-1-1 1.1c-1.2-.4-2.6-1.8-3-3l1.1-1-1-2.2h-.4z" fill="currentColor" />
    </svg>
  );
}

function IconoInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
    </svg>
  );
}

// WhatsApp e Instagram fijos en el lateral derecho de todas las páginas (#12).
// Abren en otra pestaña, como cualquier enlace que sale del sitio.
export default function Redes() {
  return (
    <nav className={styles.redes} aria-label="Contacto y redes">
      <BotonLiquido
        href={contacto.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp (se abre en otra pestaña)"
      >
        <IconoWhatsApp />
      </BotonLiquido>
      <BotonLiquido
        href={contacto.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de Eclipse Condos (se abre en otra pestaña)"
      >
        <IconoInstagram />
      </BotonLiquido>
    </nav>
  );
}
