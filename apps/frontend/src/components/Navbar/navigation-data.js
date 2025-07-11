// Define types for navigation items
export const navLinks = [
  {
    name: "INICIO",
    href: "/",
    hasDropdown: false,
    pageTitle: "Eclipse Condos - Condominios de Lujo en Playa del Carmen"
  },
  {
    name: "ACTIVIDADES",
    href: "/actividades",
    hasDropdown: false,
    pageTitle: "Actividades"
  },
  {
    name: "FAQ", 
    href: "/FAQ",
    hasDropdown: false,
    pageTitle: "Preguntas Frecuentes"
  },
  {
    name: "DEPARTAMENTOS",
    href: "/departamentos",
    hasDropdown: true,
    pageTitle: "Departamentos",
    dropdownItems: [
      { name: "Departamento Luna", href: "/departamentos/departamento-luna", pageTitle: "Departamentos" },
      { name: "Departamento Mar", href: "/departamentos/departamento-mar", pageTitle: "Departamentos" },
      { name: "Departamento Sol", href: "/departamentos/departamento-sol", pageTitle: "Departamentos" },
      { name: "Departamento Tierra", href: "/departamentos/departamento-tierra", pageTitle: "Departamentos" },
      { name: "Departamento Arena", href: "/departamentos/departamento-arena", pageTitle: "Departamentos" }
    ]
  }
];

// Mapeo completo de rutas a títulos - incluye rutas que no están en el navbar
export const pageTitles = {
  "/": "Eclipse Condos - Condominios de Lujo en Playa del Carmen",
  "/actividades": "Actividades",
  "/FAQ": "Preguntas Frecuentes",
  "/departamentos": "Departamentos",
  "/departamentos/departamento-luna": "Departamentos",
  "/departamentos/eclipse-luna": "Departamentos",
  "/departamentos/departamento-mar": "Departamentos", 
  "/departamentos/eclipse-mar": "Departamentos",
  "/departamentos/departamento-sol": "Departamentos",
  "/departamentos/eclipse-sol": "Departamentos", 
  "/departamentos/departamento-tierra": "Departamentos",
  "/departamentos/eclipse-tierra": "Departamentos",
  "/departamentos/departamento-arena": "Departamentos",
  "/departamentos/eclipse-arena": "Departamentos",
  "/about-us": "Nosotros"
};

// Función para obtener el título de una página basado en su ruta
export const getPageTitle = (pathname) => {
  // Buscar coincidencia exacta primero
  if (pageTitles[pathname]) {
    return pageTitles[pathname];
  }
  
  // Si no encuentra coincidencia exacta, buscar patrones
  if (pathname.startsWith('/departamentos/')) {
    return "Departamentos";
  }
  
  // Título por defecto
  return "Eclipse Condos";
};

// Función para obtener el título completo con template
export const getFullPageTitle = (pathname) => {
  const baseTitle = getPageTitle(pathname);
  
  // Si es la página principal, devolver el título completo
  if (pathname === "/") {
    return baseTitle;
  }
  
  // Para todas las demás páginas, aplicar el template
  return `${baseTitle} | Eclipse Condos`;
};
