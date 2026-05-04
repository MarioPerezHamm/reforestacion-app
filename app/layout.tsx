import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reforestación — Fondo Álvaro Ulcué Chocué',
  description: 'Monitoreo de avances del proyecto de reforestación',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-green-950 min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}