import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { Calendar, CheckCircle2, AlertTriangle, Milestone, Clock, TreePine } from 'lucide-react'

export const revalidate = 3600

export default async function Avances() {
  if (!isSupabaseConfigured) {
    return (
      <main className="min-h-screen bg-background text-foreground p-4 sm:p-6 md:p-8">
        <div className="max-w-2xl mx-auto mt-12 md:mt-20">
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-2xl mb-6">
              <AlertTriangle size={32} className="text-amber-400" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Configuracion Requerida
            </h1>
            <p className="text-muted-foreground mb-8">
              Las variables de entorno de Supabase no estan configuradas.
            </p>
            <div className="bg-card rounded-xl p-6 text-left border border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Agrega estas variables en <span className="text-foreground font-medium">Settings &gt; Vars</span>:
              </p>
              <div className="space-y-3">
                <code className="block text-sm text-primary bg-primary/5 border border-primary/10 px-4 py-3 rounded-lg font-mono">
                  NEXT_PUBLIC_SUPABASE_URL
                </code>
                <code className="block text-sm text-primary bg-primary/5 border border-primary/10 px-4 py-3 rounded-lg font-mono">
                  NEXT_PUBLIC_SUPABASE_ANON_KEY
                </code>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  const { data: updates } = await supabase
    .from('updates')
    .select('*')
    .order('fecha', { ascending: false })

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Blurred forest background */}
      <div 
        className="fixed inset-0 bg-cover bg-center blur-sm opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(\'https://xvowblgvqmlfzjgvfbip.supabase.co/storage/v1/object/public/Imagenes_FAUC/bosque.jpg\')',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl">
                <Milestone size={20} className="text-primary" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  Avances del Proyecto
                </h1>
                <p className="text-sm text-muted-foreground">
                  Fondo Alvaro Ulcue Chocue
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          {updates && updates.length > 0 ? (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-border" />

              <div className="space-y-8">
                {updates.map((update, index) => (
                  <div key={update.id} className="relative pl-14 md:pl-16">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/30 rounded-full blur-md" />
                        <div className="relative w-10 h-10 md:w-12 md:h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle2 size={18} className="text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Update Card */}
                    <div className="group relative bg-card border border-border hover:border-primary/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                      {/* Phase Badge */}
                      <div className="absolute top-3 right-3 z-10 text-xs font-semibold bg-green-600/90 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                        Fase {index + 1}
                      </div>

                      {/* Photo or Placeholder */}
                      {update.imagen_url ? (
                        <img
                          src={update.imagen_url}
                          className="w-full h-52 object-cover rounded-t-xl mb-0"
                          alt={update.titulo}
                          style={{ display: 'block' }}
                        />
                      ) : (
                        <div className="w-full h-32 bg-green-900/60 rounded-t-xl flex items-center justify-center">
                          <TreePine size={36} className="text-green-700" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        {/* Date Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
                          <Calendar size={14} className="text-primary" />
                          <span className="text-xs font-medium text-primary">
                            {new Date(update.fecha).toLocaleDateString('es-CO', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {update.titulo}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {update.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-muted-foreground/50" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No hay avances registrados</h3>
              <p className="text-muted-foreground text-sm">Los avances del proyecto apareceran aqui</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
