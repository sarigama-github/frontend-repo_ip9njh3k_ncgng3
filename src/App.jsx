import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Visualizations from './components/Visualizations'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#060712] text-white selection:bg-cyan-500/40 selection:text-white">
      <div className="pointer-events-none fixed inset-0 opacity-20" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0_49%,rgba(255,255,255,.06)_50%,transparent_51%)] bg-[length:4px_100%]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Visualizations />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-8 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-cyan-100/70 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Virgiawan Malik Rizky — Data Intelligence</p>
          <div className="flex gap-4">
            <a href="#hero" className="hover:text-cyan-200">Top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
