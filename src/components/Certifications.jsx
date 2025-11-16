import { motion } from 'framer-motion'

const certs = [
  { title: 'Google Data Analytics Professional Certificate', org: 'Coursera', year: '2022' },
  { title: 'TensorFlow Developer Certificate', org: 'Google', year: '2023' },
  { title: 'Tableau Desktop Specialist', org: 'Tableau', year: '2021' },
]

export default function Certifications() {
  return (
    <section id="certs" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,.12),rgba(6,7,18,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-cyan-100">Certifications</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/10 group-hover:to-blue-500/20 blur-2xl transition" />
              <div className="relative">
                <h3 className="text-cyan-100 text-lg font-medium">{c.title}</h3>
                <p className="text-cyan-200/80">{c.org}</p>
                <p className="text-xs text-cyan-100/60 mt-1">{c.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
