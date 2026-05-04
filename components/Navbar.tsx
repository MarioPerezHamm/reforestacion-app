import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-green-950 border-b border-green-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2 text-green-300 font-bold text-lg">
        <Leaf size={20} />
        <span className="hidden sm:block">Reforestación UAC</span>
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="/" className="text-green-400 hover:text-green-200 transition-colors">
          Inicio
        </Link>
        <Link href="/dashboard" className="text-green-400 hover:text-green-200 transition-colors">
          Dashboard
        </Link>
        <Link href="/avances" className="text-green-400 hover:text-green-200 transition-colors">
          Avances
        </Link>
      </div>
    </nav>
  )
}