import Link from 'next/link'
import { Leaf, Droplets, Thermometer, TreePine } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-green-950 text-white">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="flex items-center justify-center w-16 h-16 bg-green-800 rounded-full mb-6">
          <TreePine size={32} className="text-green-300" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-green-100 max-w-3xl leading-tight mb-4">
          Reforestación del medio ambiente
        </h1>
        <p className="text-green-400 text-lg mb-2">
          Un legado para las generaciones venideras
        </p>
        <p className="text-green-500 text-sm mb-10">
          Fondo Álvaro Ulcué Chocué
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/dashboard"
            className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Ver Dashboard
          </Link>
          <Link
            href="/avances"
            className="border border-green-700 hover:border-green-500 text-green-300 px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Ver Avances
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-green-900/40 border border-green-800 rounded-xl p-6 text-center">
          <TreePine size={28} className="text-green-400 mx-auto mb-3" />
          <p className="text-3xl font-bold text-green-200">850+</p>
          <p className="text-green-400 text-sm mt-1">Árboles plantados</p>
        </div>
        <div className="bg-green-900/40 border border-green-800 rounded-xl p-6 text-center">
          <Droplets size={28} className="text-blue-400 mx-auto mb-3" />
          <p className="text-3xl font-bold text-blue-200">2</p>
          <p className="text-green-400 text-sm mt-1">Sensores activos</p>
        </div>
        <div className="bg-green-900/40 border border-green-800 rounded-xl p-6 text-center">
          <Thermometer size={28} className="text-orange-400 mx-auto mb-3" />
          <p className="text-3xl font-bold text-orange-200">5 ha</p>
          <p className="text-green-400 text-sm mt-1">Hectáreas monitoreadas</p>
        </div>
      </section>

      {/* Misión */}
      <section className="max-w-2xl mx-auto px-6 pb-24 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf size={18} className="text-green-400" />
          <h2 className="text-xl font-semibold text-green-300">Nuestra misión</h2>
        </div>
        <p className="text-green-400 leading-relaxed">
          Recuperar ecosistemas degradados mediante la siembra de especies nativas,
          usando tecnología de sensores para garantizar condiciones óptimas del suelo
          y asegurar el éxito de cada árbol plantado.
        </p>
      </section>

    </main>
  )
}