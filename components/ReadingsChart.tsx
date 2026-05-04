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
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={formatted}>
        <XAxis dataKey="hora" stroke="#4ade80" tick={{ fontSize: 11 }} />
        <YAxis stroke="#4ade80" tick={{ fontSize: 11 }} />
        <Tooltip
          contentStyle={{
            background: '#052e16',
            border: '1px solid #166534',
            borderRadius: 8
          }}
          labelStyle={{ color: '#86efac' }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="humedad"
          stroke="#60a5fa"
          name="Humedad %"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="temperatura"
          stroke="#fb923c"
          name="Temperatura °C"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}