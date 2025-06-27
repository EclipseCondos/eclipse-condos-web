import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import styles from '@/styles/home.module.css';

export default function App({ Component, pageProps }) {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  );
}
