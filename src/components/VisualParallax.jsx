import { useEffect, useRef } from 'react'

// Lightweight parallax layer group responding to mouse for holographic depth
export default function VisualParallax() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window
      const x = (e.clientX / w - 0.5) * 2
      const y = (e.clientY / h - 0.5) * 2
      el.style.setProperty('--rx', `${y * 6}deg`)
      el.style.setProperty('--ry', `${-x * 6}deg`)
      el.style.setProperty('--tx', `${-x * 8}px`)
      el.style.setProperty('--ty', `${-y * 8}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 [perspective:1000px]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute left-10 top-28 h-24 w-24 rounded-xl border border-cyan-400/20 bg-cyan-400/5 [transform:translateZ(60px)_rotateX(var(--rx))_rotateY(var(--ry))_translate(var(--tx),var(--ty))]" />
      <div className="absolute right-16 top-1/3 h-16 w-40 rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/5 [transform:translateZ(40px)_rotateX(var(--rx))_rotateY(var(--ry))_translate(var(--tx),var(--ty))]" />
      <div className="absolute left-1/2 bottom-24 h-28 w-28 -translate-x-1/2 rounded-full border border-blue-400/20 bg-blue-400/5 [transform:translateZ(20px)_rotateX(var(--rx))_rotateY(var(--ry))_translate(var(--tx),var(--ty))]" />
    </div>
  )
}
