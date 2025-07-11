import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import styles from '@/styles/Home/home.module.css';

export const metadata = {
  title: 'Eclipse Condos',
  description: 'Condominios de lujo en Mareazul, Playa del Carmen',
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
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
