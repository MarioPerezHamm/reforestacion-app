import Link from 'next/link'
import { Leaf, Droplets, Thermometer, TreePine, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-green-950 text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 lg:py-40">
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl mb-8 shadow-lg">
          <TreePine size={40} className="text-green-200" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-100 max-w-4xl leading-tight mb-4">
          Reforestación del medio ambiente
        </h1>
        <p className="text-xl md:text-2xl text-green-300 mb-3 font-light">
          Un legado para las generaciones venideras
        </p>
        <p className="text-green-400 text-sm md:text-base mb-12">
          Fondo Álvaro Ulcué Chocué
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/dashboard"
            className="group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Ver Dashboard
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/avances"
            className="bg-green-900/60 backdrop-blur-sm border border-green-600 hover:border-green-400 text-green-200 hover:text-green-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
          >
            Ver Avances
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 pb-20 md:pb-32">
        <div className="group bg-green-900/40 backdrop-blur-md border border-green-700/50 hover:border-green-500/80 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-green-900/20">
          <TreePine size={32} className="text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <p className="text-4xl font-bold text-green-100 mb-1">850+</p>
          <p className="text-green-400 text-sm">Árboles plantados</p>
        </div>
        <div className="group bg-blue-900/30 backdrop-blur-md border border-blue-700/50 hover:border-blue-500/80 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20">
          <Droplets size={32} className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <p className="text-4xl font-bold text-blue-100 mb-1">2</p>
          <p className="text-blue-400 text-sm">Sensores activos</p>
        </div>
        <div className="group bg-orange-900/30 backdrop-blur-md border border-orange-700/50 hover:border-orange-500/80 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/20">
          <Thermometer size={32} className="text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <p className="text-4xl font-bold text-orange-100 mb-1">5 ha</p>
          <p className="text-orange-400 text-sm">Hectáreas monitoreadas</p>
        </div>
      </section>

      {/* Misión */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-green-900/40 backdrop-blur-md border border-green-700/50 rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-green-800/50 rounded-lg">
              <Leaf size={24} className="text-green-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-200">Nuestra misión</h2>
          </div>
          <p className="text-green-300 leading-relaxed text-lg">
            Recuperar ecosistemas degradados mediante la siembra de especies nativas,
            usando tecnología de sensores para garantizar condiciones óptimas del suelo
            y asegurar el éxito de cada árbol plantado.
          </p>
        </div>
      </section>
    </main>
  )
}
