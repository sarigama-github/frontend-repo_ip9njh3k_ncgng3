import { motion } from 'framer-motion'

const timeline = [
  {
    role: 'Data Scientist',
    company: 'TechNova AI',
    period: '2023 — Present',
    points: [
      'Designed ML systems for churn and uplift modeling reducing attrition by 12%.',
      'Implemented feature stores and model monitoring for production stability.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'InsightWorks',
    period: '2021 — 2023',
    points: [
      'Built KPI dashboards and automated reporting saving 10+ hours/week.',
      'Delivered A/B test readouts influencing product growth roadmap.',
    ],
  },
  {
    role: 'Data Entry Specialist',
    company: 'AccuData Services',
    period: '2019 — 2021',
    points: [
      'Developed QA checks and scripts achieving 99.9% data quality at scale.',
      'Streamlined intake processes with lightweight automation.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,.08),rgba(168,85,247,.08))] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-cyan-100">Experience</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-fuchsia-500/30 to-blue-500/40" />
          <div className="grid sm:grid-cols-2 gap-10">
            {timeline.map((t, idx) => (
              <motion.div
                key={t.role}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-blue-500/0 hover:from-cyan-500/20 hover:via-fuchsia-500/10 hover:to-blue-500/20 blur-2xl transition" />
                <div className="relative">
                  <h3 className="text-cyan-100 text-lg font-medium">{t.role}</h3>
                  <p className="text-cyan-200/80">{t.company}</p>
                  <p className="text-xs text-cyan-100/60 mt-1">{t.period}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-cyan-100/70 list-disc pl-5">
                    {t.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
