// Ejemplo de cómo usar assets en componentes React

import Image from 'next/image'

export default function ExampleComponent() {
  return (
    <div>
      {/* Hero Image */}
      <Image
        src="/images/hero/main-building.jpg"
        alt="Eclipse Condos - Edificio Principal"
        width={1920}
        height={1080}
        priority
      />

      {/* Logo */}
      <Image
        src="/images/logo/eclipse-condos-logo.svg"
        alt="Eclipse Condos Logo"
        width={200}
        height={80}
      />

      {/* Video Hero */}
      <video
        autoPlay
        muted
        loop
        className="w-full h-auto"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>

      {/* Galería de Condos */}
      <div className="grid grid-cols-3 gap-4">
        <Image
          src="/images/condos/condo-1.jpg"
          alt="Condominio Tipo A"
          width={400}
          height={300}
        />
        <Image
          src="/images/condos/condo-2.jpg"
          alt="Condominio Tipo B"
          width={400}
          height={300}
        />
        <Image
          src="/images/condos/condo-3.jpg"
          alt="Condominio Tipo C"
          width={400}
          height={300}
        />
      </div>

      {/* Background con CSS */}
      <div 
        className="hero-section"
        style={{
          backgroundImage: "url('/images/hero/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1>Eclipse Condos</h1>
      </div>
    </div>
  )
}
