import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#060712]/60 via-[#060712]/70 to-[#060712]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-semibold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent"
            >
              Virgiawan Malik Rizky
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="mt-4 text-lg text-cyan-100/80 max-w-xl"
            >
              Data Scientist • Data Analyst • Data Entry Specialist
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="mt-6 text-cyan-100/70 max-w-2xl"
            >
              Building intelligent systems that convert raw data into precise, actionable insights. Passionate about machine learning, analytics automation, and scalable data workflows.
            </motion.p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-fuchsia-500/30 transition">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl border border-cyan-400/30 text-cyan-200 hover:bg-white/5 transition">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <dl className="grid grid-cols-2 gap-6 text-cyan-100/80">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-cyan-300/80">Core</dt>
                    <dd className="mt-2 text-sm">Python, SQL, R</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-cyan-300/80">ML</dt>
                    <dd className="mt-2 text-sm">Scikit-learn, TensorFlow, XGBoost</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-cyan-300/80">Analytics</dt>
                    <dd className="mt-2 text-sm">Pandas, NumPy, dbt, Airflow</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-cyan-300/80">Viz</dt>
                    <dd className="mt-2 text-sm">Tableau, Power BI, Plotly</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
