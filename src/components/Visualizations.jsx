import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Simple interactive visualization: synthetic data scatter with filters
function generateData(n = 200) {
  return Array.from({ length: n }, (_, i) => {
    const x = Math.random() * 100
    const y = 0.5 * x + 10 + (Math.random() - 0.5) * 20
    const cat = ['A', 'B', 'C'][Math.floor(Math.random() * 3)]
    return { id: i, x, y, cat }
  })
}

export default function Visualizations() {
  const [data] = useState(generateData())
  const [cat, setCat] = useState('ALL')

  const filtered = cat === 'ALL' ? data : data.filter((d) => d.cat === cat)
  const maxX = 100
  const maxY = Math.max(...data.map((d) => d.y))

  return (
    <section id="viz" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,.12),rgba(6,7,18,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-cyan-100">Interactive Visualizations</h2>
        <p className="mt-2 text-cyan-100/70">Explore synthetic scatter data with category filters and hover details.</p>

        <div className="mt-6 flex items-center gap-3">
          {['ALL', 'A', 'B', 'C'].map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-lg border ${cat === c ? 'border-cyan-400/60 text-cyan-200 bg-white/5' : 'border-white/10 text-cyan-100/70 hover:bg-white/5'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
          <svg viewBox="0 0 600 320" className="w-full">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a21caf" />
              </linearGradient>
            </defs>
            {/* Axes */}
            <g transform="translate(40,10)">
              <line x1="0" y1="280" x2="540" y2="280" stroke="url(#g1)" strokeOpacity="0.3" />
              <line x1="0" y1="0" x2="0" y2="280" stroke="url(#g1)" strokeOpacity="0.3" />
              {filtered.map((d) => {
                const cx = (d.x / maxX) * 520 + 10
                const cy = 280 - (d.y / maxY) * 260
                const color = d.cat === 'A' ? '#22d3ee' : d.cat === 'B' ? '#60a5fa' : '#e879f9'
                return (
                  <circle key={d.id} cx={cx} cy={cy} r={4.5} fill={color} fillOpacity="0.85">
                    <title>{`x: ${d.x.toFixed(1)}, y: ${d.y.toFixed(1)} | Cat: ${d.cat}`}</title>
                  </circle>
                )
              })}
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
