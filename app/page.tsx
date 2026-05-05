import Link from 'next/link'
import { Leaf, Droplets, Thermometer, TreePine, ArrowRight, Sprout, Target, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 lg:py-40">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <Sprout size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Proyecto Ambiental</span>
            </div>

            {/* Icon */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
              <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-card border border-primary/30 rounded-3xl">
                <TreePine size={40} className="text-primary" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mb-6">
              <span className="text-foreground">Reforestacion del</span>
              <br />
              <span className="text-primary">medio ambiente</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
              Un legado para las generaciones venideras
            </p>
            <p className="text-sm text-muted-foreground/70 mb-10">
              Fondo Alvaro Ulcue Chocue
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                Ver Dashboard
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/avances"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-card hover:bg-secondary/50 text-foreground font-semibold rounded-xl border border-border hover:border-primary/50 transition-all duration-200"
              >
                Ver Avances
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trees Planted */}
            <div className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 rounded-2xl p-8 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mb-4">
                  <TreePine size={24} className="text-primary" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">850+</p>
                <p className="text-muted-foreground">Arboles plantados</p>
              </div>
            </div>

            {/* Active Sensors */}
            <div className="group relative overflow-hidden bg-card border border-border hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-4">
                  <Droplets size={24} className="text-blue-400" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">2</p>
                <p className="text-muted-foreground">Sensores activos</p>
              </div>
            </div>

            {/* Hectares Monitored */}
            <div className="group relative overflow-hidden bg-card border border-border hover:border-amber-500/50 rounded-2xl p-8 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/10 transition-colors" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-4">
                  <Thermometer size={24} className="text-amber-400" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">5 ha</p>
                <p className="text-muted-foreground">Hectareas monitoreadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tecnologia al servicio de la naturaleza
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combinamos sensores IoT con analisis de datos para garantizar las mejores condiciones de crecimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl mb-6">
                <Zap size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Monitoreo en tiempo real</h3>
              <p className="text-muted-foreground">Sensores que miden humedad y temperatura del suelo cada minuto</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl mb-6">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Analisis predictivo</h3>
              <p className="text-muted-foreground">Identificamos zonas optimas y condiciones ideales para siembra</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl mb-6">
                <Leaf size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Especies nativas</h3>
              <p className="text-muted-foreground">Priorizamos flora endemica para restaurar ecosistemas originales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-card to-secondary/20 border border-border rounded-3xl p-8 md:p-12">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl mb-6">
                <Leaf size={32} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Nuestra mision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Recuperar ecosistemas degradados mediante la siembra de especies nativas, 
                usando tecnologia de sensores para garantizar condiciones optimas del suelo 
                y asegurar el exito de cada arbol plantado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>Fondo Alvaro Ulcue Chocue</p>
            <p>Proyecto de Reforestacion Ambiental</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
