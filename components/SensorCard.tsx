'use client'
import { Droplets, Thermometer, MapPin } from 'lucide-react'

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
      color: 'text-green-400',
      bg: 'bg-green-900/60'
    }
  }
  if (humedad < 40) {
    return {
      label: 'Suelo muy seco',
      color: 'text-yellow-400',
      bg: 'bg-yellow-900/40'
    }
  }
  return {
    label: 'Condiciones irregulares',
    color: 'text-red-400',
    bg: 'bg-red-900/40'
  }
}

export default function SensorCard({ sensor }: Props) {
  const r = sensor.lastReading
  const aptitud = r ? getAptitud(r.humedad, r.temperatura) : null

  return (
    <div className="bg-green-900/40 border border-green-800 rounded-xl p-5">
      <div className="flex items-start gap-2 mb-4">
        <MapPin size={16} className="text-green-400 mt-1 shrink-0" />
        <div>
          <p className="font-semibold text-white">{sensor.ubicacion}</p>
          <p className="text-green-400 text-sm">{sensor.descripcion}</p>
        </div>
      </div>

      {r ? (
        <>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-blue-900/40 rounded-lg p-3 flex items-center gap-2">
              <Droplets size={20} className="text-blue-400" />
              <div>
                <p className="text-2xl font-bold text-blue-300">{r.humedad}%</p>
                <p className="text-xs text-blue-400">Humedad</p>
              </div>
            </div>
            <div className="bg-orange-900/40 rounded-lg p-3 flex items-center gap-2">
              <Thermometer size={20} className="text-orange-400" />
              <div>
                <p className="text-2xl font-bold text-orange-300">
                  {r.temperatura}°C
                </p>
                <p className="text-xs text-orange-400">Temperatura</p>
              </div>
            </div>
          </div>

          {aptitud && (
            <div className={`${aptitud.bg} rounded-lg px-3 py-2`}>
              <p className={`text-sm font-medium ${aptitud.color}`}>
                {aptitud.label}
              </p>
            </div>
          )}

          <p className="text-xs text-green-600 mt-2">
            Actualizado:{' '}
            {new Date(r.created_at).toLocaleString('es-CO')}
          </p>
        </>
      ) : (
        <p className="text-green-500 text-sm">Sin lecturas aún</p>
      )}
    </div>
  )
}