import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* subtle star field */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_45%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Auralabs — AI coding agents as a service
      </footer>
    </div>
  )
}

export default App
