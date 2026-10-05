'use client';

import { usePageTitle } from '../../hooks/usePageTitle';

export default function TitleUpdater() {
  // El hook maneja toda la lógica de títulos automáticamente
  usePageTitle();
  
  return null; // No renderiza nada, solo maneja títulos
}
