import { useEffect, useRef } from 'react'

// Futuristic reactive background: particle network + neon glows responding to mouse/scroll
export default function BackgroundFX() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const mouse = useRef({ x: 0, y: 0, active: false })
  const scrollFactor = useRef(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * DPR
    canvas.height = height * DPR
    ctx.scale(DPR, DPR)

    const PARTICLE_COUNT = Math.floor((width * height) / 9000)

    const particles = Array.from({ length: PARTICLE_COUNT }, () => spawn(width, height))

    function spawn(w, h) {
      const speed = 0.3 + Math.random() * 0.6
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: 1 + Math.random() * 1.6,
      }
    }

    function gradient(x, y) {
      // Cyan → Blue → Magenta
      const g = ctx.createLinearGradient(0, 0, width, height)
      g.addColorStop(0, 'rgba(34,211,238,0.9)') // cyan-400
      g.addColorStop(0.5, 'rgba(59,130,246,0.9)') // blue-500
      g.addColorStop(1, 'rgba(217,70,239,0.9)') // fuchsia-500
      return g
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      // Holographic grid backdrop
      ctx.save()
      ctx.globalAlpha = 0.06
      ctx.strokeStyle = '#ffffff'
      const gridSize = 36
      for (let x = (mouse.current.x % gridSize) - gridSize; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = (mouse.current.y % gridSize) - gridSize; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
      ctx.restore()

      // Particles
      const g = gradient()
      const maxDist = 120
      const mouseRadius = 140

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        // slight attraction to mouse
        if (mouse.current.active) {
          const dx = mouse.current.x - p.x
          const dy = mouse.current.y - p.y
          const d2 = dx * dx + dy * dy
          if (d2 < mouseRadius * mouseRadius) {
            p.vx += (dx / Math.sqrt(d2 + 0.0001)) * 0.002
            p.vy += (dy / Math.sqrt(d2 + 0.0001)) * 0.002
          }
        }

        p.x += p.vx * scrollFactor.current
        p.y += p.vy * scrollFactor.current

        // wrap around edges
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        // draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.6)'
        ctx.fill()
      }

      // Connections
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist
            ctx.strokeStyle = `rgba(99,102,241,${alpha * 0.45})` // indigo-ish
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    const onMove = (e) => {
      mouse.current.active = true
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }
    const onLeave = () => (mouse.current.active = false)
    const onResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * DPR
      canvas.height = height * DPR
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(DPR, DPR)
    }
    const onScroll = () => {
      // subtle acceleration during scroll
      scrollFactor.current = 1 + Math.min(1, Math.abs(window.scrollY - lastScroll) / 400)
      lastScroll = window.scrollY
      clearTimeout(scrollStop)
      scrollStop = setTimeout(() => (scrollFactor.current = 1), 120)
    }
    let lastScroll = window.scrollY
    let scrollStop = 0

    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Neon gradient glows */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-blue-500/20 blur-3xl" />
      {/* Particle network canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
