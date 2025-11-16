import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#viz', label: 'Visualizations' },
  { href: '#experience', label: 'Experience' },
  { href: '#certs', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-cyan-500/10">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#hero" className="text-cyan-200 font-semibold tracking-wide">
              <span className="text-cyan-400">Virgiawan</span> Malik Rizky
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-cyan-100/80 hover:text-cyan-200 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              className="md:hidden text-cyan-200"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <nav className="grid gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="py-2 text-cyan-100/80 hover:text-cyan-200"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
