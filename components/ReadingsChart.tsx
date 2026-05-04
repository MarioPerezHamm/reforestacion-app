'use client'
import {
  LineChart, Line, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'

type Reading = {
  humedad: number
  temperatura: number
  created_at: string
  sensor_id: string
}

type Props = {
  data: Reading[]
}

export default function ReadingsChart({ data }: Props) {
  const formatted = data.map(d => ({
    humedad: d.humedad,
    temperatura: d.temperatura,
    hora: new Date(d.created_at).toLocaleTimeString('es-CO', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }))

  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={formatted} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="gradientHumedad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="gradientTemperatura" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fb923c" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fb923c" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="hora" 
          stroke="#4ade80" 
          tick={{ fontSize: 12 }}
          style={{ opacity: 0.7 }}
        />
        <YAxis 
          stroke="#4ade80" 
          tick={{ fontSize: 12 }}
          style={{ opacity: 0.7 }}
        />
        <Tooltip
          contentStyle={{
            background: 'rgba(5, 46, 22, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: 12,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
          labelStyle={{ color: '#86efac' }}
          formatter={(value) => {
            if (typeof value === 'number') {
              return value.toFixed(1)
            }
            return value
          }}
        />
        <Legend 
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="line"
        />
        <Line
          type="monotone"
          dataKey="humedad"
          stroke="#60a5fa"
          name="Humedad %"
          strokeWidth={3}
          dot={false}
          isAnimationActive={true}
          fillOpacity={1}
          fill="url(#gradientHumedad)"
        />
        <Line
          type="monotone"
          dataKey="temperatura"
          stroke="#fb923c"
          name="Temperatura °C"
          strokeWidth={3}
          dot={false}
          isAnimationActive={true}
          fillOpacity={1}
          fill="url(#gradientTemperatura)"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
