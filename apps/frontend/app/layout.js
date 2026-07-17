import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';

export const metadata = {
  title: 'Eclipse Condos',
  description: 'Condominios de lujo en Mareazul, Playa del Carmen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
