import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if environment variables are configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey)

// Create a mock client if not configured to prevent crashes
export const supabase: SupabaseClient = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : createClient('https://placeholder.supabase.co', 'placeholder-key')

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
