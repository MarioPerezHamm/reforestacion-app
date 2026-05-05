import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Reforestacion | Fondo Alvaro Ulcue Chocue',
  description: 'Monitoreo de avances del proyecto de reforestacion con tecnologia IoT para garantizar el exito de cada arbol plantado',
  keywords: ['reforestacion', 'medio ambiente', 'sensores', 'IoT', 'sostenibilidad'],
}

export const viewport: Viewport = {
  themeColor: '#0a0f0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} bg-background`}>
      <body className="font-sans min-h-screen antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
