import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Churn Prediction Pipeline',
    tags: ['Python', 'Scikit-learn', 'Airflow', 'PostgreSQL'],
    desc: 'End-to-end pipeline: preprocessing, model training, and scheduled inference with monitoring.',
    link: '#',
  },
  {
    title: 'Demand Forecasting',
    tags: ['XGBoost', 'Time Series', 'Optuna'],
    desc: 'Gradient boosting forecasts with feature lags, holidays, and hyperparameter search.',
    link: '#',
  },
  {
    title: 'Fraud Detection Dashboard',
    tags: ['Tableau', 'Anomaly Detection', 'Python API'],
    desc: 'Interactive analytics dashboard highlighting suspicious patterns across transactions.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,.14),rgba(6,7,18,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-cyan-100">Machine Learning Projects</h2>
            <p className="mt-2 text-cyan-100/70">Selected work across prediction, forecasting, and anomaly detection.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-cyan-400/30 text-cyan-200 hover:bg-white/5 transition">Work with me</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-fuchsia-500/20 group-hover:via-cyan-500/10 group-hover:to-blue-500/20 blur-2xl transition" />
              <div className="relative">
                <h3 className="text-cyan-100 text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-cyan-100/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 text-cyan-200/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
