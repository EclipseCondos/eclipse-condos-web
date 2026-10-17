"use client";
import { useEffect, useState } from 'react';
import styles from '@/styles/Casa.module.css';

const DIAS = ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'];

// Maqueta del calendario de disponibilidad: dibuja el mes actual sin marcar
// fechas libres ni ocupadas. Cuando exista la fuente de reservas, se marcan aquí.
// El mes se calcula en el navegador para que no se quede fijo en el de la compilación.
export default function Calendario() {
  const [hoy, setHoy] = useState(null);

  useEffect(() => {
    setHoy(new Date());
  }, []);

  if (!hoy) {
    return <div className={styles.mes} aria-hidden="true" />;
  }

  const primero = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
  const diasDelMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
  const huecos = (primero.getDay() + 6) % 7; // la semana empieza en lunes
  const mes = primero.toLocaleDateString('es-MX', { month: 'long', year: 'numeric' });
  const titulo = mes.charAt(0).toUpperCase() + mes.slice(1); // "octubre de 2026" → "Octubre de 2026"

  return (
    <div className={styles.mes} aria-hidden="true">
      <p className={styles.mesTitulo}>{titulo}</p>
      <div className={styles.mesDias}>
        {DIAS.map((dia) => (
          <span key={dia} className={styles.mesSemana}>{dia}</span>
        ))}
        {Array.from({ length: huecos }, (_, i) => (
          <span key={`hueco-${i}`} />
        ))}
        {Array.from({ length: diasDelMes }, (_, i) => (
          <span key={i} data-hoy={i + 1 === hoy.getDate() || undefined}>{i + 1}</span>
        ))}
      </div>
    </div>
  );
}
