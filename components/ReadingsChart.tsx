'use client'
import {
  LineChart, Line, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer, Area, AreaChart
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

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card/95 backdrop-blur-xl border border-border rounded-xl p-4 shadow-xl">
          <p className="text-xs text-muted-foreground mb-2">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-muted-foreground">{entry.name}:</span>
              <span className="font-semibold text-foreground">
                {typeof entry.value === 'number' ? entry.value.toFixed(1) : entry.value}
                {entry.name.includes('Humedad') ? '%' : '°C'}
              </span>
            </div>
          ))}
        </div>
      )
    }
    return null
  }

  if (formatted.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-80 text-center">
        <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <p className="text-muted-foreground">No hay datos disponibles</p>
        <p className="text-sm text-muted-foreground/70">Los datos apareceran cuando los sensores envien lecturas</p>
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={360}>
      <AreaChart data={formatted} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
        <defs>
          <linearGradient id="gradientHumedad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gradientTemperatura" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="hora" 
          stroke="#86efac"
          tick={{ fontSize: 11, fill: '#86efac' }}
          tickLine={false}
          axisLine={{ stroke: '#166534', strokeWidth: 1 }}
        />
        <YAxis 
          stroke="#86efac"
          tick={{ fontSize: 11, fill: '#86efac' }}
          tickLine={false}
          axisLine={{ stroke: '#166534', strokeWidth: 1 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="circle"
          formatter={(value) => <span className="text-muted-foreground text-sm">{value}</span>}
        />
        <Area
          type="monotone"
          dataKey="humedad"
          stroke="#3b82f6"
          strokeWidth={2}
          fill="url(#gradientHumedad)"
          name="Humedad %"
          dot={false}
          activeDot={{ r: 4, fill: '#3b82f6', stroke: '#0d1a0d', strokeWidth: 2 }}
        />
        <Area
          type="monotone"
          dataKey="temperatura"
          stroke="#f59e0b"
          strokeWidth={2}
          fill="url(#gradientTemperatura)"
          name="Temperatura °C"
          dot={false}
          activeDot={{ r: 4, fill: '#f59e0b', stroke: '#0d1a0d', strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
