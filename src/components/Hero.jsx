import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">
              <Zap className="h-3.5 w-3.5 text-amber-300" />
              New: Autonomous AI coding agents for teams
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Build software at the speed of conversation
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Launch your AI coding agent SaaS in minutes. Describe what you need, our agent plans, writes code, and ships — fully integrated with your stack.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-5 py-3 text-white font-medium shadow-lg shadow-violet-500/30 hover:shadow-violet-500/40 transition">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10 transition">
                View pricing
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-300/80">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-300"/> SOC2-ready</div>
              <div>1-click GitHub deploy</div>
              <div>24/7 agent uptime</div>
            </div>
          </div>

          {/* Spline hero animation */}
          <div className="relative h-[420px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-violet-500/20 via-indigo-400/10 to-amber-300/10 blur-2xl pointer-events-none" />
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
