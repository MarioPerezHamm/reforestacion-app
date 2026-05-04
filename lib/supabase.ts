import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Tipos
export type Sensor = {
  id: string
  ubicacion: string
  descripcion: string
}

export type Reading = {
  id: string
  sensor_id: string
  humedad: number
  temperatura: number
  created_at: string
}

export type Update = {
  id: string
  titulo: string
  descripcion: string
  fecha: string
  imagen_url?: string
}