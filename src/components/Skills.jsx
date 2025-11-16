import { motion } from 'framer-motion'
import { Brain, Database, BarChart3, Workflow, Settings, Code } from 'lucide-react'

const skills = [
  {
    title: 'Machine Learning',
    icon: Brain,
    items: ['Supervised/Unsupervised', 'Feature Engineering', 'Model Tuning', 'MLOps Basics'],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    items: ['SQL Optimization', 'ETL/ELT', 'Data Warehousing', 'Pipelines (Airflow, dbt)'],
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    items: ['A/B Testing', 'Cohort & Funnel', 'Forecasting', 'KPI Dashboards'],
  },
  {
    title: 'Automation',
    icon: Workflow,
    items: ['Python Scripting', 'APIs & Webhooks', 'RPA Basics', 'Data Entry QA'],
  },
  {
    title: 'Tooling',
    icon: Settings,
    items: ['Pandas/NumPy', 'Tableau/Power BI', 'Excel Advanced', 'Git & CI'],
  },
  {
    title: 'Programming',
    icon: Code,
    items: ['Python', 'SQL', 'R', 'Bash'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,64,175,.15),rgba(6,7,18,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-cyan-100">Skills Matrix</h2>
        <p className="mt-2 text-cyan-100/70">A cross-discipline stack spanning ML, analytics, and automation.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ title, icon: Icon, items }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/10 group-hover:to-blue-500/20 blur-2xl transition" />
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10">
                  <Icon className="text-cyan-300" size={20} />
                </div>
                <div>
                  <h3 className="text-cyan-100 font-medium">{title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-cyan-100/70">
                    {items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
