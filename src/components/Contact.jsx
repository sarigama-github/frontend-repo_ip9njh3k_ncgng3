import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,.12),rgba(6,7,18,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-cyan-100">Contact</h2>
        <p className="mt-2 text-cyan-100/70">Let’s build something intelligent together.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-blue-500/0 hover:from-cyan-500/20 hover:via-fuchsia-500/10 hover:to-blue-500/20 blur-2xl transition pointer-events-none" />
            <form onSubmit={onSubmit} className="relative space-y-4">
              <div>
                <label className="text-sm text-cyan-100/80">Name</label>
                <input
                  required
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-cyan-100 placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-cyan-100/80">Email</label>
                <input
                  type="email"
                  required
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-cyan-100 placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-cyan-100/80">Message</label>
                <textarea
                  rows={5}
                  required
                  value={state.message}
                  onChange={(e) => setState({ ...state, message: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-cyan-100 placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="Tell me about your project"
                />
              </div>
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-fuchsia-500/30 transition">
                Send Message
              </button>
              {sent && (
                <p className="text-sm text-cyan-200/80">Thanks! Your message has been prepared. Email integration can be connected on request.</p>
              )}
            </form>
          </div>

          <div className="grid gap-6">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <h3 className="text-cyan-100 font-medium">Availability</h3>
              <p className="mt-2 text-sm text-cyan-100/70">Open for freelance, contract, and full-time roles.</p>
            </div>
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <h3 className="text-cyan-100 font-medium">Focus Areas</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-cyan-100/70">
                <li>• Predictive modeling and experimentation</li>
                <li>• Dashboarding and BI workflow automation</li>
                <li>• Data cleaning, validation, and entry QA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
