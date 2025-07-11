'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getFullPageTitle } from '../components/Navbar/navigation-data';

export const usePageTitle = (customTitle = null) => {
  const pathname = usePathname();
  
  useEffect(() => {
    // Si se proporciona un título personalizado, usarlo
    if (customTitle) {
      document.title = customTitle.includes('|') ? customTitle : `${customTitle} | Eclipse Condos`;
      return;
    }
    
    // Obtener el título basado en la ruta actual
    const title = getFullPageTitle(pathname);
    document.title = title;
    
    // Limpiar títulos duplicados si existen
    const existingTitles = document.querySelectorAll('title');
    if (existingTitles.length > 1) {
      existingTitles.forEach((titleEl, index) => {
        if (index > 0) {
          titleEl.remove();
        }
      });
    }
  }, [pathname, customTitle]);
  
  return pathname;
};
