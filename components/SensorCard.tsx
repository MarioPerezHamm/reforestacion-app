'use client'
import { Droplets, Thermometer, MapPin, Clock } from 'lucide-react'

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
      label: 'Apto para reforestación',
      color: 'text-green-300',
      bg: 'bg-green-900/60',
      bgLight: 'bg-green-900/40'
    }
  }
  if (humedad < 40) {
    return {
      label: 'Suelo muy seco',
      color: 'text-yellow-300',
      bg: 'bg-yellow-900/60',
      bgLight: 'bg-yellow-900/40'
    }
  }
  return {
    label: 'Condiciones irregulares',
    color: 'text-red-300',
    bg: 'bg-red-900/60',
    bgLight: 'bg-red-900/40'
  }
}

export default function SensorCard({ sensor }: Props) {
  const r = sensor.lastReading
  const aptitud = r ? getAptitud(r.humedad, r.temperatura) : null

  return (
    <div className="group bg-green-900/30 backdrop-blur-md border border-green-700/50 hover:border-green-600/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30">
      <div className="flex items-start gap-3 mb-5">
        <div className="p-2 bg-green-800/50 rounded-lg shrink-0">
          <MapPin size={18} className="text-green-400" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-green-100">{sensor.ubicacion}</p>
          <p className="text-green-400 text-sm">{sensor.descripcion}</p>
        </div>
      </div>

      {r ? (
        <>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-700/40 rounded-xl p-4 transition-all hover:bg-blue-900/50">
              <div className="flex items-center gap-2 mb-2">
                <Droplets size={18} className="text-blue-400" />
                <span className="text-xs text-blue-400 font-medium">Humedad</span>
              </div>
              <p className="text-2xl font-bold text-blue-200">{r.humedad}%</p>
            </div>
            <div className="bg-orange-900/40 backdrop-blur-sm border border-orange-700/40 rounded-xl p-4 transition-all hover:bg-orange-900/50">
              <div className="flex items-center gap-2 mb-2">
                <Thermometer size={18} className="text-orange-400" />
                <span className="text-xs text-orange-400 font-medium">Temperatura</span>
              </div>
              <p className="text-2xl font-bold text-orange-200">{r.temperatura}°C</p>
            </div>
          </div>

          {aptitud && (
            <div className={`${aptitud.bgLight} backdrop-blur-sm border ${aptitud.bg === 'bg-green-900/60' ? 'border-green-600/50' : aptitud.bg === 'bg-yellow-900/60' ? 'border-yellow-600/50' : 'border-red-600/50'} rounded-xl px-4 py-3 mb-3`}>
              <p className={`text-sm font-semibold ${aptitud.color}`}>
                ✓ {aptitud.label}
              </p>
            </div>
          )}

          <div className="flex items-center gap-2 text-xs text-green-500/70 pt-3 border-t border-green-800/30">
            <Clock size={14} />
            <span>
              {new Date(r.created_at).toLocaleString('es-CO', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        </>
      ) : (
        <p className="text-green-400 text-sm italic">Sin lecturas aún</p>
      )}
    </div>
  )
}
