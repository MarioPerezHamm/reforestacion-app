'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sprout, TreePine } from 'lucide-react'

export default function HeroSection() {
  const router = useRouter()
  const [isZooming, setIsZooming] = useState(false)
  const [backgroundElement, setBackgroundElement] = useState<HTMLDivElement | null>(null)
  const [overlayElement, setOverlayElement] = useState<HTMLDivElement | null>(null)

  const handleNavigate = async (href: string) => {
    if (isZooming) return

    setIsZooming(true)

    // Trigger zoom animation on background
    if (backgroundElement) {
      backgroundElement.classList.add('zoom-in')
    }

    // Trigger darken animation on overlay
    if (overlayElement) {
      overlayElement.classList.add('overlay-darken')
    }

    // Wait for animation to complete, then navigate
    await new Promise(resolve => setTimeout(resolve, 550))
    router.push(href)
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Forest Background with zoom animation */}
      <div
        ref={setBackgroundElement}
        className="forest-background absolute inset-0"
      />

      {/* Gradient Overlay */}
      <div
        ref={setOverlayElement}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-950/75"
      />

      {/* Content */}
      <div className="hero-content relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-8">
          <Sprout size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">Proyecto Ambiental</span>
        </div>

        {/* Icon */}
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl w-24 h-24 mx-auto" />
          <div className="relative flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/30 to-card border border-primary/40 rounded-3xl">
            <TreePine size={48} className="text-primary drop-shadow-lg" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-3xl mx-auto mb-6 text-balance">
          <span className="text-white">Reforestacion del</span>
          <br />
          <span className="text-emerald-300">medio ambiente</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-4 leading-relaxed">
          Un legado para las generaciones venideras
        </p>
        <p className="text-sm text-gray-300/80 mb-10">
          Fondo Alvaro Ulcue Chocue
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleNavigate('/dashboard')}
            disabled={isZooming}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-75 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/75"
          >
            Ver Dashboard
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => handleNavigate('/avances')}
            disabled={isZooming}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 disabled:opacity-75 text-white font-semibold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
          >
            Ver Avances
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
