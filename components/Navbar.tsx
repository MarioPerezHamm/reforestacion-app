import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-green-950/95 backdrop-blur-md border-b border-green-800/50 px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-green-300 font-bold text-lg hover:text-green-200 transition-colors">
          <div className="p-2 bg-green-800/50 rounded-lg">
            <Leaf size={20} className="text-green-300" />
          </div>
          <span className="hidden sm:block">Reforestación UAC</span>
        </Link>
        <div className="flex gap-8 text-sm">
          <Link href="/" className="text-green-300 hover:text-green-100 transition-colors font-medium">
            Inicio
          </Link>
          <Link href="/dashboard" className="text-green-300 hover:text-green-100 transition-colors font-medium">
            Dashboard
          </Link>
          <Link href="/avances" className="text-green-300 hover:text-green-100 transition-colors font-medium">
            Avances
          </Link>
        </div>
      </div>
    </nav>
  )
}
