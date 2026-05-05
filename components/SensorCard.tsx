'use client'
import { Droplets, Thermometer, MapPin, Clock, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react'

type Reading = {
  humedad: number
  temperatura: number
  created_at: string
}

type SensorWithReading = {
  id: string
  ubicacion: string
  descripcion: string
  lastReading: Reading | null
}

type Props = {
  sensor: SensorWithReading
}

function getAptitud(humedad: number, temp: number) {
  if (humedad >= 40 && humedad <= 80 && temp >= 10 && temp <= 30) {
    return {
      label: 'Apto para reforestacion',
      icon: CheckCircle,
      color: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary/20'
    }
  }
  if (humedad < 40) {
    return {
      label: 'Suelo muy seco',
      icon: AlertTriangle,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20'
    }
  }
  return {
    label: 'Condiciones irregulares',
    icon: AlertCircle,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20'
  }
}

export default function SensorCard({ sensor }: Props) {
  const r = sensor.lastReading
  const aptitud = r ? getAptitud(r.humedad, r.temperatura) : null
  const AptitudIcon = aptitud?.icon

  return (
    <div className="group relative overflow-hidden bg-card border border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-300">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="flex items-center justify-center w-11 h-11 bg-primary/10 border border-primary/20 rounded-xl shrink-0">
            <MapPin size={20} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate">{sensor.ubicacion}</p>
            <p className="text-sm text-muted-foreground truncate">{sensor.descripcion}</p>
          </div>
        </div>

        {r ? (
          <>
            {/* Readings Grid */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* Humidity */}
              <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-4 hover:bg-blue-500/10 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets size={18} className="text-blue-400" />
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">Humedad</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{r.humedad}<span className="text-lg text-muted-foreground">%</span></p>
              </div>
              
              {/* Temperature */}
              <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 hover:bg-amber-500/10 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Thermometer size={18} className="text-amber-400" />
                  <span className="text-xs font-medium text-amber-400 uppercase tracking-wide">Temp</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{r.temperatura}<span className="text-lg text-muted-foreground">°C</span></p>
              </div>
            </div>

            {/* Status Badge */}
            {aptitud && AptitudIcon && (
              <div className={`${aptitud.bg} ${aptitud.border} border rounded-xl px-4 py-3 mb-4`}>
                <div className="flex items-center gap-2">
                  <AptitudIcon size={18} className={aptitud.color} />
                  <p className={`text-sm font-medium ${aptitud.color}`}>
                    {aptitud.label}
                  </p>
                </div>
              </div>
            )}

            {/* Timestamp */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground/70 pt-4 border-t border-border">
              <Clock size={14} />
              <span>
                Ultima lectura: {new Date(r.created_at).toLocaleString('es-CO', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mb-3">
              <Clock size={24} className="text-muted-foreground/50" />
            </div>
            <p className="text-muted-foreground text-sm">Sin lecturas aun</p>
          </div>
        )}
      </div>
    </div>
  )
}
