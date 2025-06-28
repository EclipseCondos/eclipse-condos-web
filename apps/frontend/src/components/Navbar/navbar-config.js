// Navbar configuration file
export const navbarConfig = {
  // Logo configuration
  logo: {
    src: "/images/logo/Eclipse Condos logo (black) .png",
    alt: "Eclipse Condos",
    href: "/"
  },
  
  // Mobile menu configuration
  mobile: {
    overlay: true,
    closeOnLinkClick: true,
    animationDuration: "0.4s",
    animationEasing: "cubic-bezier(0.2, 0, 0.2, 1)"
  },
  
  // Desktop dropdown configuration
  desktop: {
    hoverDelay: 200,
    animationDuration: "0.3s"
  },
  
  // Z-index levels
  zIndex: {
    navbar: 1000,
    dropdown: 1003,
    logoContainer: 1002,
    mobileOverlay: 999,
    mobileMenu: 1001
  },
  
  // Style classes mapping
  styles: {
    glassmorphism: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px) saturate(180%)",
      border: "1px solid rgba(255, 255, 255, 0.2)"
    }
  }
};
