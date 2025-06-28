import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import styles from '@/styles/home.module.css';

export const metadata = {
  title: 'Eclipse Condos',
  description: 'Condominios de lujo en Mareazul, Playa del Carmen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={styles.homeVideo}
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
