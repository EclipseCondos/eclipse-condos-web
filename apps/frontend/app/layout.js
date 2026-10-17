import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import TitleUpdater from '@/components/TitleUpdater';
import styles from '@/styles/Home/home.module.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

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
                poster="/videos/mareazul-poster.webp"
                className={styles.homeVideo}
            >
                {/* H.264 a 720p sin audio: lo reproduce cualquier navegador (el original era HEVC de 31 MB) */}
                <source src="/videos/mareazul-720.mp4" type="video/mp4" />
            </video>
        <main>{children}</main>
      </body>
    </html>
  )
}
