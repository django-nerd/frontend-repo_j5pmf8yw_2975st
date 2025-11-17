import { Code2, Cpu, Github, Layers3, PlugZap, Workflow } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Autonomous planning',
    desc: 'Multi-step reasoning plans tasks, creates tickets, and delivers features end-to-end.'
  },
  {
    icon: Code2,
    title: 'Production-grade code',
    desc: 'Framework-aware agents that write tests, follow patterns, and keep your style consistent.'
  },
  {
    icon: PlugZap,
    title: 'Deep integrations',
    desc: 'Connect GitHub, Jira, Vercel, Slack, and your CI to ship safely with approvals.'
  },
  {
    icon: Workflow,
    title: 'Human-in-the-loop',
    desc: 'Review plans, tweak scope, and approve diffs. The agent adapts around your feedback.'
  },
  {
    icon: Layers3,
    title: 'Reusable skills',
    desc: 'Create skills for common patterns — auth, CRUD, analytics — and reuse across projects.'
  },
  {
    icon: Github,
    title: 'Git-native',
    desc: 'Branching, PRs, code reviews, and semantic commits — fully automated.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">What you get</h2>
        <p className="mt-3 text-slate-300/90 text-center max-w-2xl mx-auto">Everything you need to run AI coding agents as a service — orchestrated, observable, and safe.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="relative rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200 shadow-lg shadow-black/20">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500/30 to-sky-400/30 ring-1 ring-white/15">
                <f.icon className="h-5 w-5 text-sky-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-300/90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
