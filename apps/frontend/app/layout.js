import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import TitleUpdater from '@/components/TitleUpdater';
import styles from '@/styles/Home/home.module.css';

export const metadata = {
  title: {
    default: 'Eclipse Condos - Condominios de Lujo en Playa del Carmen',
    template: '%s | Eclipse Condos'
  },
  description: 'Condominios de lujo en Mareazul, Playa del Carmen. Vive la experiencia única de Eclipse Condos con departamentos Luna, Mar, Sol y Tierra.',
  keywords: ['Eclipse Condos', 'condominios', 'Playa del Carmen', 'Mareazul', 'lujo', 'departamentos'],
  authors: [{ name: 'Eclipse Condos' }],
  creator: 'Eclipse Condos',
  publisher: 'Eclipse Condos',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/images/logo/Eclipse Condos Icon (white).png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo/Eclipse Condos Icon (white).png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/images/logo/Eclipse Condos Icon (white).png',
    apple: '/images/logo/Eclipse Condos Icon (white).png',
  },
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Eclipse Condos - Condominios de Lujo en Playa del Carmen',
    description: 'Condominios de lujo en Mareazul, Playa del Carmen',
    siteName: 'Eclipse Condos',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eclipse Condos - Condominios de Lujo en Playa del Carmen',
    description: 'Condominios de lujo en Mareazul, Playa del Carmen',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <TitleUpdater />
        <Navbar />
        {/* Video de fondo optimizado */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className={styles.homeVideo}
                poster="/images/condos/video-poster.jpg" // Imagen de respaldo
            >
                <source src="/videos/mareazulbackgroundvideo.mp4" type="video/mp4" />
                <source src="/videos/mareazulbackgroundvideo.MOV" type="video/quicktime" />
                Tu navegador no soporta el elemento video.
            </video>
        <main>{children}</main>
      </body>
    </html>
  )
}
