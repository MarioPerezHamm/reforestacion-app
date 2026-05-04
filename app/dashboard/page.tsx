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
    <main className="min-h-screen bg-green-950 text-white p-6">
      <h1 className="text-2xl font-bold mb-2 text-green-300">
        Panel de Monitoreo
      </h1>
      <p className="text-green-400 mb-8 text-sm">
        Condiciones del suelo en tiempo real
      </p>

      {/* Tarjetas de sensores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {lastReadings.map(sensor => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
      </div>

      {/* Gráfica de historial */}
      <div className="bg-green-900/40 rounded-xl p-4 border border-green-800">
        <h2 className="text-lg font-semibold mb-4 text-green-300">
          Historial — Últimas 48 horas
        </h2>
        <ReadingsChart data={history ?? []} />
      </div>
    </main>
  )
}