// Define types for navigation items
export const navLinks = [
  {
    name: "INICIO",
    href: "/",
    hasDropdown: false
  },
  {
    name: "NOSOTROS", 
    href: "/about-us",
    hasDropdown: false
  },
  {
    name: "ACTIVIDADES",
    href: "/actividades",
    hasDropdown: false
  },
  {
    name: "DEPARTAMENTOS",
    href: "/departamentos",
    hasDropdown: true,
    dropdownItems: [
      { name: "Departamento Luna", href: "/departamentos/departamento-luna" },
      { name: "Departamento Mar", href: "/departamentos/departamento-mar" },
      { name: "Departamento Sol", href: "/departamentos/departamento-sol" },
      { name: "Departamento Tierra", href: "/departamentos/departamento-tierra" }
    ]
  }
];
