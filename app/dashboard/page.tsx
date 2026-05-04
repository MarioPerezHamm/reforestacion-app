import { supabase } from '@/lib/supabase'
import SensorCard from '@/components/SensorCard'
import ReadingsChart from '@/components/ReadingsChart'

export const revalidate = 60 // Refresca cada 60 segundos

export default async function Dashboard() {
  // Últimas lecturas por sensor
  const { data: sensors } = await supabase
    .from('sensors')
    .select('*, readings(humedad, temperatura, created_at)')
    .order('created_at', { foreignTable: 'readings', ascending: false })

  // Historial últimas 48 horas para gráfica
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
    <main className="min-h-screen bg-green-950 text-white p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-100 mb-2">
            Panel de Monitoreo
          </h1>
          <p className="text-green-400 text-sm md:text-base">
            Condiciones del suelo en tiempo real
          </p>
        </div>

        {/* Tarjetas de sensores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {lastReadings.map(sensor => (
            <SensorCard key={sensor.id} sensor={sensor} />
          ))}
        </div>

        {/* Gráfica de historial */}
        <div className="bg-green-900/30 backdrop-blur-md border border-green-700/50 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-green-100 mb-6">
            Historial — Últimas 48 horas
          </h2>
          <div className="bg-green-950/50 rounded-lg p-4 md:p-6">
            <ReadingsChart data={history ?? []} />
          </div>
        </div>
      </div>
    </main>
  )
}
