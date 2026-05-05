import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import SensorCard from '@/components/SensorCard'
import ReadingsChart from '@/components/ReadingsChart'
import { AlertTriangle, Activity, Gauge } from 'lucide-react'

export const revalidate = 60

export default async function Dashboard() {
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

  const { data: sensors } = await supabase
    .from('sensors')
    .select('*, readings(humedad, temperatura, created_at)')
    .order('created_at', { foreignTable: 'readings', ascending: false })

  const { data: history } = await supabase
    .from('readings')
    .select('humedad, temperatura, created_at, sensor_id')
    .gte('created_at', new Date(Date.now() - 48 * 3600000).toISOString())
    .order('created_at', { ascending: true })
    .limit(200)

  const lastReadings = sensors?.map(s => ({
    ...s,
    lastReading: s.readings?.[0] ?? null
  })) ?? []

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl">
                <Activity size={20} className="text-primary" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  Panel de Monitoreo
                </h1>
                <p className="text-sm text-muted-foreground">
                  Condiciones del suelo en tiempo real
                </p>
              </div>
            </div>
          </div>

          {/* Sensor Cards */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <Gauge size={18} className="text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground">Sensores Activos</h2>
              <span className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-full">
                {lastReadings.length} {lastReadings.length === 1 ? 'sensor' : 'sensores'}
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {lastReadings.map(sensor => (
                <SensorCard key={sensor.id} sensor={sensor} />
              ))}
            </div>
            {lastReadings.length === 0 && (
              <div className="bg-card border border-border rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gauge size={32} className="text-muted-foreground/50" />
                </div>
                <p className="text-muted-foreground">No hay sensores registrados</p>
              </div>
            )}
          </div>

          {/* History Chart */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  Historial de Lecturas
                </h2>
                <p className="text-sm text-muted-foreground">
                  Ultimas 48 horas
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-muted-foreground hidden sm:inline">Humedad</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                  <span className="text-muted-foreground hidden sm:inline">Temperatura</span>
                </div>
              </div>
            </div>
            <div className="bg-background/50 rounded-xl p-4">
              <ReadingsChart data={history ?? []} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
