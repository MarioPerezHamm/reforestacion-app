import { supabase } from '@/lib/supabase'
import { Calendar } from 'lucide-react'

export const revalidate = 3600

export default async function Avances() {
  const { data: updates } = await supabase
    .from('updates')
    .select('*')
    .order('fecha', { ascending: false })

  return (
    <main className="min-h-screen bg-green-950 text-white p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-green-300">Avances del Proyecto</h1>
      <p className="text-green-400 text-sm mb-8">
        Registro de hitos — Fondo Álvaro Ulcué Chocué
      </p>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-800" />

        <div className="space-y-8">
          {updates?.map((u) => (
            <div key={u.id} className="pl-12 relative">
              <div className="absolute left-0 w-8 h-8 bg-green-700 rounded-full flex items-center justify-center border-2 border-green-500">
                <div className="w-2 h-2 bg-green-300 rounded-full" />
              </div>
              <div className="bg-green-900/40 border border-green-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={14} className="text-green-400" />
                  <span className="text-xs text-green-400">
                    {new Date(u.fecha).toLocaleDateString('es-CO', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="font-semibold text-green-100 mb-1">{u.titulo}</h3>
                <p className="text-green-300 text-sm leading-relaxed">{u.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}