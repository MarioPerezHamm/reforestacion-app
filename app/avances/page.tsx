import { supabase } from '@/lib/supabase'
import { Calendar, CheckCircle2 } from 'lucide-react'

export const revalidate = 3600

export default async function Avances() {
  const { data: updates } = await supabase
    .from('updates')
    .select('*')
    .order('fecha', { ascending: false })

  return (
    <main className="min-h-screen bg-green-950 text-white p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-100 mb-2">
            Avances del Proyecto
          </h1>
          <p className="text-green-400 text-sm md:text-base">
            Registro de hitos — Fondo Álvaro Ulcué Chocué
          </p>
        </div>

        <div className="space-y-6 relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-600 to-green-800" />

          {updates?.map((update, index) => (
            <div key={update.id} className="relative pl-20 md:pl-24">
              {/* Timeline dot */}
              <div className="absolute -left-3 md:-left-4 top-1 w-7 h-7 bg-green-900 border-2 border-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-900/50">
                <CheckCircle2 size={16} className="text-green-300" />
              </div>

              {/* Update card */}
              <div className="group bg-green-900/30 backdrop-blur-md border border-green-700/50 hover:border-green-600/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30">
                {/* Date badge */}
                <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-800/50 backdrop-blur-sm rounded-lg mb-3">
                  <Calendar size={14} className="text-green-400" />
                  <span className="text-xs font-medium text-green-300">
                    {new Date(update.fecha).toLocaleDateString('es-CO', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                {/* Title and description */}
                <h3 className="text-lg md:text-xl font-bold text-green-100 mb-2 group-hover:text-green-50 transition-colors">
                  {update.titulo}
                </h3>
                <p className="text-green-300 text-sm md:text-base leading-relaxed">
                  {update.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {(!updates || updates.length === 0) && (
          <div className="bg-green-900/30 backdrop-blur-md border border-green-700/50 rounded-2xl p-8 text-center">
            <Calendar size={32} className="text-green-600 mx-auto mb-4" />
            <p className="text-green-400">No hay avances registrados aún</p>
          </div>
        )}
      </div>
    </main>
  )
}
